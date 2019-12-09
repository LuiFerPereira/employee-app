
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private employees: Employee[] = [];
  private baseUrl = 'http://localhost:8080/api/employee/';

  constructor(public httpClient: HttpClient) {}


  getAllEmployees(): Employee[] {
    return this.employees;
  }

  getEmployee( idx: string ) {
    return this.employees[idx];
  }

  searchEmployee( identifier: string ) {
    if (identifier === '') {
      return this.httpClient.get(this.baseUrl);
    } else {
      return this.httpClient.get(`${this.baseUrl}${identifier}`);
    }
  }
}


export interface Role {
  id: number;
  name: string;
  description?: string;
}

export interface Employee {
  id: number;
  name: string;
  role: Role;
  hourlySalary: number;
  monthlySalary: number;
  annualSalary: number;
  contractType: string;
}
