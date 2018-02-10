import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pointsTotal = 0;
  selectedCharacteristicPointMap = {};
  outcome: any = {};
  @ViewChild('matTabGroup') tabGroup;

  constructor(public snackBar: MatSnackBar) {}

  onInputButtonChange = function(event, characteristic, option) {
      if (characteristic.type === 'checkbox') {
        if (event.source.checked) {
          if(!this.selectedCharacteristicPointMap[characteristic.description]){
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
  };

  copyOutcomeToClipboard(){
    let text = this.outcome.recommendation;

    if(this.outcome.notes){
      for(let i = 0; i < this.outcome.notes.length; i++){
        text += '\r\n' + this.outcome.notes[i];
      }
    }

    this.copyTextToClipboard(text);
  }

  copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");

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
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      let snackBarRef = this.snackBar.open('Copied: ' + text, 'ok', {duration: 10000});
    } catch (err) {
      console.error(err.toString());
      let snackBarRef = this.snackBar.open('Unable to copy, sorry bro!', 'ok', {duration: 2000});
    }

    document.body.removeChild(textArea);
  }

  checkForBreak(option){
    if(option.break){
      let message = option.breakReason ? option.breakReason: option.note;
      let snackBarRef = this.snackBar.open(message, 'reset');
      snackBarRef.onAction().subscribe(() => {
        this.reset();
      });

      this.calculateOutcome(option.points);
    }
  }

  addUpPoints(){
    this.pointsTotal = 0;
    for (const key in this.selectedCharacteristicPointMap ) {
      if (this.selectedCharacteristicPointMap.hasOwnProperty(key)) {
        this.pointsTotal += this.selectedCharacteristicPointMap[key];
      }
    }
  }

  reset(){
    location.reload();
  }

  calculateOutcome (points = null){
    if(points !=null){
      this.pointsTotal = points;
    }
    if(this.pointsTotal < 2){
      this.outcome = this.tiRadLevelOutcome.TR1;
    } else if (this.pointsTotal < 3){
      this.outcome = this.tiRadLevelOutcome.TR2;
    } else if (this.pointsTotal < 4){
      this.outcome = this.tiRadLevelOutcome.TR3;
    } else if (this.pointsTotal < 7){
      this.outcome = this.tiRadLevelOutcome.TR4;
    } else {
      this.outcome = this.tiRadLevelOutcome.TR5;
    }
  }

  isEmpty (obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  // tslint:disable-next-line:member-ordering
  tiRad = {
    'id': 1,
    'description': 'ACR TI-RADS',
    'characteristics': [
      {
        'description': 'Composition',
        'type': 'radio',
        'options': [
          {
            'description': 'Cystic or almost completely cystic',
            'points': 0
          },
          {
            'description': 'Spongiform',
            'note': 'Spongiform: Composed predominantly (>50%) of small cystic spaces. Do not add further points for other categories.',
            'points': 0,
            'break': true
          },
          {
            'description': 'Mixed cystic and solid',
            'note': 'Mixed cystic and solid: Assign points for predominant solid component.',
            'points': 1
          },
          {
            'description': 'Solid or almost completely solid',
            'points': 2
          },
          {
            'description': 'Cannot be determined because of calcification.',
            'points': 2
          }
        ]
      },
      {
        'description': 'Echogenicity',
        'type': 'radio',
        'options': [
          {
            'description': 'Anechoic',
            'note': 'Anechoic: Applies to cystic or almost completely cystic nodules.',
            'points': 0
          },
          {
            'description': 'Hyperechoic or isoechoic',
            'note': 'Hyperechoic / isoechoic / hypoechoic: Compared to adjacent parenchyma.',
            'points': 1
          },
          {
            'description': 'Hypoechoic',
            'points': 2
          },
          {
            'description': 'Very hypoechoic',
            'note': 'Very hypoechoic: More hypoechoic than strap muscles.',
            'points': 3
          },
          {
            'description': 'Cannot be determined',
            'points': 1
          }
        ]
      },
      {
        'description': 'Shape',
        'type': 'radio',
        'options': [
          {
            'description': 'Wider-than-tall',
            'points': 0
          },
          {
            'description': 'Taller-than-wide',
            'note': 'Taller-than-wide: Should be assessed on a transverse image with measurements parallel to sound beam for height and perpendicular to sound beam for width.',
            'points': 3
          }
        ]
      },
      {
        'description': 'Margin',
        'type': 'radio',
        'options': [
          {
            'description': 'Smooth',
            'points': 0
          },
          {
            'description': 'Ill-defined',
            'points': 0
          },
          {
            'description': 'Lobulated or irregular',
            'note': 'Lobulated: Protrusions into adjacent tissue. Irregular: Jagged, spiculated, or sharp angles.',
            'points': 2
          },
          {
            'description': 'Extra-thyroidal extension',
            'note': 'Extrathyroidal extension: Obvious invasion = malignancy.',
            'points': 3
          },
          {
            'description': 'Cannot be determined',
            'points': 0
          }
        ]
      },
      {
        'description': 'Echogenic Foci',
        'type': 'checkbox',
        'options': [
          {
            'description': 'None or large comet-tail artifacts',
            'note': 'Large comet-tail artifacts: V-shaped, >1 mm, in cystic components.',
            'points': 0
          },
          {
            'description': 'Macrocalcifications',
            'note': 'Macrocalcifications: Cause acoustic shadowing.',
            'points': 1
          },
          {
            'description': 'Peripheral (rim) calcifications',
            'note': 'Peripheral: Complete or incomplete along margin.',
            'points': 2
          },
          {
            'description': 'Punctate echogenic foci',
            'note': 'Punctate echogenic foci: May have small comet-tail artifacts.',
            'points': 3
          }
        ]
      }
    ]
  };

  tiRadLevelOutcome = {
    'TR1' : {
      'description': 'TR1',
      'recommendation': 'Benign',
      'notes': ['No FNA']
    },
    'TR2' : {
      'description': 'TR2',
      'recommendation': 'Not Suspicious',
      'notes': ['No FNA']
    },
    'TR3' : {
      'description': 'TR3',
      'recommendation': 'Mildly Suspicious',
      'notes': ['FNA if ≥ 2.5 cm', 'Follow if ≥ 1.5 cm']
    },
    'TR4' : {
      'description': 'TR4',
      'recommendation': 'Moderately Suspicious',
      'notes': ['FNA if ≥ 1.5 cm', 'Follow if ≥ 1 cm']
    },
    'TR5' : {
      'description': 'TR5',
      'recommendation': 'Highly Suspicious',
      'notes': ['FNA if ≥ 1 cm', 'Follow if ≥ 0.5 cm*', '*Refer to discussion of papillary microcarcinomas for 5-9 mm TR5 nodules.']
    }
  }
}
