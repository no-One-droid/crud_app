import { Component, OnInit } from '@angular/core';
import { EmpLoyeeService } from '../emp-loyee.service';
import { Employee } from '../Model/emp-loyee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allEmployees: Employee[] = [];
  constructor(private empService: EmpLoyeeService, private router: Router){}

  ngOnInit(): void {
    this.empService.getEmployes().subscribe(data=>{
      this.allEmployees = data as Employee[];
    })
  }
  onEdit(id: number){
    this.router.navigate(['/employee/edit' , id])
  }

  onDelete(id: number){
    this.empService.deleteEmployes(id).subscribe({
      next:resp=>{
        this.allEmployees = resp as Employee[]
      }
    })
  }
}
