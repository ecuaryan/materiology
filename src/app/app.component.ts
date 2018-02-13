import { Component, ViewChild } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SimpleDialog } from './simple-dialog.component';
import { tiRad } from '../data/ti-rad';
import { tiRadLevelOutcome } from '../data/ti-rad-level-outcome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pointsTotal = 0;
  selectedCharacteristicPointMap = {};
  outcome: any = {};
  tiRad = tiRad;
  tiRadLevelOutcome = tiRadLevelOutcome;
  @ViewChild('matTabGroup') tabGroup;

  constructor(public snackBar: MatSnackBar, public matDialog: MatDialog) {}

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

  openDialog(settings) { // move this to a utilities class too
    return this.matDialog.open(SimpleDialog, {
      width: settings.width,
      data: {
        title: settings.title,
        content: settings.content,
        leftButtonText: settings.leftButtonText,
        rightButtonText: settings.rightButtonText,
        leftButtonCallback: settings.leftButtonCallback,
        rightButtonCallback: settings.rightButtonCallback,
        rightButtonResetDelay: settings.rightButtonResetDelay,
        leftButtonResetDelay: settings.leftButtonResetDelay
      }
    });


  }

  showReferencesDialog() {
    const settings = {
      width: '650px',
      title: 'References',
      content: 'References!',
      rightButtonText: 'close'
    };

    this.openDialog(settings);
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

  isEmpty (obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
  }

  copyOutcomeToClipboard() {
    const text = this.outcome.description + ': ' + this.outcome.recommendation;

    // if(this.outcome.notes){
    //   for(let i = 0; i < this.outcome.notes.length; i++){
    //     text += '\r\n' + this.outcome.notes[i];
    //   }
    // }

    this.copyTextToClipboard(text);
  }

  copyTextToClipboard(text) { // TODO move to utilities class
    const textArea = document.createElement('textarea');

    //
    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if element was to flash render it has minimal visual impact.
    // 3. less flakyness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a flash,
    // so some of these are just precautions. However in IE the element
    // is visible whilst the popup box asking the user for permission for
    // the web page to copy to the clipboard.
    //

    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';

    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = '0';

    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';

    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      // TODO remove this from here and instead have it return if it was successful or not and then do this
      const snackBarRef = this.snackBar.open('Copied: ' + text, 'ok', {duration: 10000}); // take this out
    } catch (err) {
      console.error(err.toString());
      const snackBarRef = this.snackBar.open('Unable to copy, sorry bro!', 'ok', {duration: 2000}); // take this out
    }

    document.body.removeChild(textArea);
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
      const matDialogRef = this.openDialog(settings);
      matDialogRef.afterClosed().subscribe(delay => {
        delay = delay ? delay : 0;
        setTimeout(() => {
          this.reset();
        }, delay);
      });
    }
  }

}
