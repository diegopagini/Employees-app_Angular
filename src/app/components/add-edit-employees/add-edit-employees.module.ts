import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmployeesComponent } from './add-edit-employees.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [AddEditEmployeesComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AddEditEmployeesComponent],
})
export class AddEditEmployeesModule {}
