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
  MatSnackBarModule,
  MatIconModule,
  MatDialogModule,
  MatSidenavModule,
  MatChipsModule
} from '@angular/material';

const importExports = [
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
  MatSnackBarModule,
  MatIconModule,
  MatDialogModule,
  MatSidenavModule,
  MatChipsModule
];

@NgModule({
  imports: importExports,
  exports: importExports,
})
export class MaterialModule { }
