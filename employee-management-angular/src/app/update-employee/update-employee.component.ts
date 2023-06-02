import { Component } from '@angular/core';
import { Employee } from '../Classes/employee';
import { EmployeeService } from '../Service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent {

  employee: Employee = new Employee();
  id: number = 0;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute
    , private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.findById(this.id).subscribe(data => {
      this.employee = data;
    },
      error => console.log(error)
    )

  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      console.log(data);
      this.router.navigate(['/employees']);
    },
      error => console.log(error)
    )
  }

}
