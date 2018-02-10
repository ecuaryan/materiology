import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatRadioModule,
  MatTabsModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';

let importExports = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatRadioModule,
  MatTabsModule,
  MatTooltipModule,
  MatSnackBarModule
];

@NgModule({
  imports: importExports,
  exports: importExports,
})
export class MaterialModule { }
