import { Component } from '@angular/core';
import { Employee } from '../Classes/employee';
import { EmployeeService } from '../Service/employee.service';
import { MatTableModule } from '@angular/material/table'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent {

  employees: Employee[] = [];


  constructor(private employeeService: EmployeeService, private router: Router) {


  }

  ngOnInit(): void {
    
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    })

  }

  updateEmployee(id: number) {
    this.router.navigate(['updateemployee', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.router.navigate(['/employees']);
    },
      (error) => {
        console.log(error)
      }

    )
  }


}
