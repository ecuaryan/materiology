import { Component, ViewChild } from '@angular/core';
import { Util } from './util.component';
import { tiRad } from '../data/ti-rad';
import { tiRadLevelOutcome } from '../data/ti-rad-level-outcome';

@Component({
  selector: 'ti-rad',
  templateUrl: './ti-rad.component.html',
  styleUrls: ['./ti-rad.component.scss']
})
export class TiRadComponent {
  pointsTotal = 0;
  selectedCharacteristicPointMap = {};
  outcome: any = {};
  tiRad = tiRad;
  tiRadLevelOutcome = tiRadLevelOutcome;
  @ViewChild('matTabGroup') tabGroup;

  constructor(public util: Util) {}

  onInputButtonChange(event, characteristic, option) {
      if (characteristic.type === 'checkbox') {
        if (event.source.checked) {
          if (!this.selectedCharacteristicPointMap[characteristic.description]) {
            this.selectedCharacteristicPointMap[characteristic.description] = 0;
          }
          this.selectedCharacteristicPointMap[characteristic.description] += option.points;
        } else {
          this.selectedCharacteristicPointMap[characteristic.description] -= option.points;
        }
      } else {
        this.selectedCharacteristicPointMap[characteristic.description] = option.points;
        this.tabGroup.selectedIndex ++;
      }

      this.addUpPoints();
      this.calculateOutcome();
      this.checkForBreak(option);
  }

  addUpPoints() {
    this.pointsTotal = 0;
    for (const key in this.selectedCharacteristicPointMap ) {
      if (this.selectedCharacteristicPointMap.hasOwnProperty(key)) {
        this.pointsTotal += this.selectedCharacteristicPointMap[key];
      }
    }
  }

  reset() {
    location.reload();
  }

  calculateOutcome (points = null) {
    if (points != null) {
      this.pointsTotal = points;
    }
    if (this.pointsTotal < 2) {
      this.outcome = this.tiRadLevelOutcome.TR1;
    } else if (this.pointsTotal < 3) {
      this.outcome = this.tiRadLevelOutcome.TR2;
    } else if (this.pointsTotal < 4) {
      this.outcome = this.tiRadLevelOutcome.TR3;
    } else if (this.pointsTotal < 7) {
      this.outcome = this.tiRadLevelOutcome.TR4;
    } else {
      this.outcome = this.tiRadLevelOutcome.TR5;
    }
  }

  copyOutcomeToClipboard() {
    const text = this.outcome.description + ': ' + this.outcome.recommendation;
    this.util.copyTextToClipboard(text);
  }

  checkForBreak(option) {
    if (option.break) {
      const settings = {
        width: '650px',
        title: option.breakReasonTitle ? option.breakReasonTitle : option.description,
        content: option.breakReasonContent ? option.breakReasonContent : option.note,
        rightButtonResetDelay: 2000,
        leftButtonText: 'close',
        rightButtonText: 'copy & reset',
        rightButtonCallback: () => {
          this.copyOutcomeToClipboard();
        }
      };
      this.calculateOutcome(option.points);
      const matDialogRef = this.util.openSimpleDialog(settings);
      matDialogRef.afterClosed().subscribe(delay => {
        delay = delay ? delay : 0;
        setTimeout(() => {
          this.reset();
        }, delay);
      });
    }
  }

}
