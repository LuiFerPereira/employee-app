import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.searchEmployee('');
  }

  searchEmployee( identifier?: string ) {
    this.employeeService.searchEmployee(identifier).subscribe((res: any) => {
      if (Array.isArray(res)) {
        this.employees = res;
      } else {
        this.employees = [];
        this.employees.push(res);
      }
    }, (err) => {
      this.employees = [];
    } );
  }
}
