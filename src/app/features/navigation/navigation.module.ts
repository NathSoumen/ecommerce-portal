import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, NgbDropdownModule, FormsModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
