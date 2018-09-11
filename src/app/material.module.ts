import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule,
    MatIconModule, MatSidenavModule, MatListModule, MatTabsModule,
    MatCardModule, MatFormFieldModule, MatInputModule
  ],
  exports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule,
    MatIconModule, MatSidenavModule, MatListModule, MatTabsModule,
    MatCardModule, MatFormFieldModule, MatInputModule
  ],
})
export class CustomMaterialModule {
}