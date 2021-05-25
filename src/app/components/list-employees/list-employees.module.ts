import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from './list-employees.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ListEmployeesComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ListEmployeesComponent],
})
export class ListEmployeesModule {}
