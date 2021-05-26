import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditEmployeesComponent } from './components/add-edit-employees/add-edit-employees.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

const routes: Routes = [
  { path: '', component: ListEmployeesComponent },
  { path: 'add', component: AddEditEmployeesComponent },
  { path: 'edit/:id', component: AddEditEmployeesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
