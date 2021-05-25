import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from './list-employees.component';

@NgModule({
  declarations: [ListEmployeesComponent],
  imports: [CommonModule],
  exports: [ListEmployeesComponent],
})
export class ListEmployeesModule {}
