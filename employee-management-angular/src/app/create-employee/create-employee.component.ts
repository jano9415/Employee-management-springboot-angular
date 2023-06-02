import { Component } from '@angular/core';
import { Employee } from '../Classes/employee';
import { EmployeeService } from '../Service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router){

  }

  ngOnInit(){

  }

  onSubmit(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.router.navigate(['/employees']);
    },
    error => console.log(error)
    )


  }

}
