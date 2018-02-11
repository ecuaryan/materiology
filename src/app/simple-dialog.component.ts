import { Component, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'simple-dialog',
  template: `<h1 mat-dialog-title>{{data.title}}</h1>
              <div mat-dialog-content>
                {{data.content}}
              </div>
              <div mat-dialog-actions>
                <span class='spacer'></span>
                <button mat-dialog-close mat-button *ngIf='data.leftButtonText && !data.leftButtonCallback'>{{data.leftButtonText}}</button>
                <button mat-dialog-close mat-button *ngIf='data.rightButtonText && !data.rightButtonCallback' cdkFocusInitial>{{data.rightButtonText}}</button>
                <button mat-dialog-close mat-button *ngIf='data.leftButtonText && data.leftButtonCallback' (click)='data.leftButtonCallback()'>{{data.leftButtonText}}</button>
                <button mat-dialog-close mat-button *ngIf='data.rightButtonText && data.rightButtonCallback' cdkFocusInitial (click)='data.rightButtonCallback()'>{{data.rightButtonText}}</button>
              </div>`
})
export class SimpleDialog {
  constructor(public dialogRef: MatDialogRef<SimpleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }
}
