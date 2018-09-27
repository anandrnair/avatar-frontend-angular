import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule,
    MatIconModule, MatSidenavModule, MatListModule, MatTabsModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule
  ],
  exports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule,
    MatIconModule, MatSidenavModule, MatListModule, MatTabsModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule
  ],
})
export class CustomMaterialModule {
}
