import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageComponent } from 'src/app/shared/message/message.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.interface';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss'],
})
export class ListEmployeesComponent implements OnInit {
  public displayedColumns: string[] = [
    'Name',
    'Email',
    'CivilStatus',
    'DateOfAdmission',
    'Sex',
    'Phone',
    'Actions',
  ];
  public dataSource = new MatTableDataSource();
  public employeeList: Employee[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadEmployees(): void {
    this.employeeList = this.employeeService.getEmployees();
    this.dataSource = new MatTableDataSource(this.employeeList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteEmployee(index: number): void {
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete the employee?' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'ok') {
        this.employeeService.deleteEmployee(index);
        this.loadEmployees();
        this.snackBar.open('Deleted employee successfully', '', {
          duration: 2500,
        });
      }
    });
  }
}
