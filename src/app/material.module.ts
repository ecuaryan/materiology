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
  MatSidenavModule
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
  MatSidenavModule
];

@NgModule({
  imports: importExports,
  exports: importExports,
})
export class MaterialModule { }
