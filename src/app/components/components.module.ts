import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmployeesModule } from './add-edit-employees/add-edit-employees.module';
import { ListEmployeesModule } from './list-employees/list-employees.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddEditEmployeesModule,
    ListEmployeesModule,
    NavbarModule,
  ],
  exports: [AddEditEmployeesModule, ListEmployeesModule, NavbarModule],
})
export class ComponentsModule {}
