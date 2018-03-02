import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SimpleDialogComponent } from './simple-dialog.component';

@Component({
  selector: 'app-util',
  template: ''
})
export class UtilComponent {
  constructor(public snackBar: MatSnackBar, public matDialog: MatDialog ) {}

  public openSimpleDialog(settings) {
    return this.matDialog.open(SimpleDialogComponent, {
      width: settings.width,
      data: {
        title: settings.title,
        htmlTitle: settings.htmlTitle,
        content: settings.content,
        htmlContent: settings.htmlContent,
        leftButtonText: settings.leftButtonText,
        rightButtonText: settings.rightButtonText,
        leftButtonCallback: settings.leftButtonCallback,
        rightButtonCallback: settings.rightButtonCallback,
        rightButtonResetDelay: settings.rightButtonResetDelay,
        leftButtonResetDelay: settings.leftButtonResetDelay
      }
    });
  }

  public isEmpty (obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
  }

  public copyTextToClipboard(text) {
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
}
