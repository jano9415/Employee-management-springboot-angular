import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl + "employees"}`)
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl + "addnewemployee"}`, employee)
  }

  findById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl + "findbyid"}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseUrl + "updateemployee"}/${id}`, employee);
  }

  deleteEmployee(id: number):Observable<string>{
    return this.httpClient.delete<string>(`${this.baseUrl + "deleteemployee"}/${id}`);
  }

}
