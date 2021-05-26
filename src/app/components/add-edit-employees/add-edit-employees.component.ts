import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-employees',
  templateUrl: './add-edit-employees.component.html',
  styleUrls: ['./add-edit-employees.component.scss'],
})
export class AddEditEmployeesComponent implements OnInit {
  public civilStatus: any[] = ['Single', 'Married', 'Divorced'];

  constructor() {}

  ngOnInit(): void {}
}
