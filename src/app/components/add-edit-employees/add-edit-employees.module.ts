import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmployeesComponent } from './add-edit-employees.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddEditEmployeesComponent],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
  exports: [AddEditEmployeesComponent],
})
export class AddEditEmployeesModule {}
