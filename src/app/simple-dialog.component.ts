import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'simple-dialog',
  template: `<h1 mat-dialog-title>
              <div *ngIf="data.title">{{data.title}}</div>
              <div *ngIf="data.htmlTitle" [innerHTML]="data.htmlTitle"></div>
            </h1>
            <div mat-dialog-content>
              <div *ngIf="data.content">{{data.content}}</div>
              <div *ngIf="data.htmlContent" [innerHTML]="data.htmlContent"></div>
            </div>
            <div mat-dialog-actions>
              <span class='spacer'></span>
              <button [mat-dialog-close]="data.leftButtonResetDelay" mat-button *ngIf='data.leftButtonText && !data.leftButtonCallback'>{{data.leftButtonText}}</button>
              <button [mat-dialog-close]="data.rightButtonResetDelay" mat-button *ngIf='data.rightButtonText && !data.rightButtonCallback' cdkFocusInitial>{{data.rightButtonText}}</button>
              <button [mat-dialog-close]="data.leftButtonResetDelay" mat-button *ngIf='data.leftButtonText && data.leftButtonCallback' (click)='data.leftButtonCallback()'>{{data.leftButtonText}}</button>
              <button [mat-dialog-close]="data.rightButtonResetDelay" mat-button *ngIf='data.rightButtonText && data.rightButtonCallback' cdkFocusInitial (click)='data.rightButtonCallback()'>{{data.rightButtonText}}</button>
            </div>`
})
export class SimpleDialog {
  constructor(public dialogRef: MatDialogRef<SimpleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }
}
