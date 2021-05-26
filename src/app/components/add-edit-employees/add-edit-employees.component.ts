import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit-employees',
  templateUrl: './add-edit-employees.component.html',
  styleUrls: ['./add-edit-employees.component.scss'],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
})
export class AddEditEmployeesComponent implements OnInit {
  public civilStatus: any[] = ['Single', 'Married', 'Divorced'];
  public addEmployeeForm: FormGroup;
  public idEmployee: number;
  public action: string = 'Add';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute
  ) {
    this.addEmployeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dateOfAdmission: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      civilStatus: ['', [Validators.required]],
      sex: ['', [Validators.required]],
    });
    this.idEmployee = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.idEmployee !== undefined) {
      this.action = 'Edit';
      this.addEmployeeForm.patchValue(
        this.employeeService.employeesList[this.idEmployee]
      );
    }
  }

  addEmployee(): void {
    if (this.idEmployee !== undefined) {
      this.employeeService.editEmployee(
        this.addEmployeeForm.value,
        this.idEmployee
      );
      this.addEmployeeForm.reset();
      this.router.navigate(['/']);
      this.snackBar.open('Employee edited successfully', '', {
        duration: 3000,
      });
    } else if (this.addEmployeeForm.valid) {
      this.employeeService.addEmployee(this.addEmployeeForm.value);
      this.addEmployeeForm.reset();
      this.router.navigate(['/']);
      this.snackBar.open('Employee added successfully', '', {
        duration: 3000,
      });
    } else {
      this.addEmployeeForm.markAllAsTouched();
    }
  }
}
