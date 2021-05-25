import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public employeesList: Employee[] = [
    {
      name: 'Astor Martinez',
      email: 'AstorMartinez@gmail.com',
      phone: 2231122333,
      sex: 'M',
      dateOfAdmission: new Date(),
      civilStatus: 'Married',
    },
    {
      name: 'Lucia Fernandez',
      email: 'LuciaFernandez@gmail.com',
      phone: 2232233444,
      sex: 'F',
      dateOfAdmission: new Date(),
      civilStatus: 'Married',
    },
    {
      name: 'Mauro Rodriguez',
      email: 'MauroRodriguez@gmail.com',
      phone: 223445566,
      sex: 'M',
      dateOfAdmission: new Date(),
      civilStatus: 'Married',
    },
    {
      name: 'Laura Herrera',
      email: 'LauraHerrera@gmail.com',
      phone: 223556677,
      sex: 'F',
      dateOfAdmission: new Date(),
      civilStatus: 'Single',
    },
  ];

  constructor() {}

  getEmployees() {
    return this.employeesList.slice();
  }
}
