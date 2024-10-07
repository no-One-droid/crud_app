import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../Model/emp-loyee';
import { EmpLoyeeService } from '../emp-loyee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createEmpl!: FormGroup;
  empList: Employee[] = [];



  constructor(private fb: FormBuilder, private empSerivce: EmpLoyeeService, private route: Router){
    this.createEmpl = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', Validators.required],
      role: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.createEmpl;
  }

  get fc(){
    return this.createEmpl.controls; 
  }

  onSubmit(){
    console.log(this.createEmpl.value)
    this.empSerivce.postEmployes(this.createEmpl.value).subscribe( {
      next:resp =>{
      this.createEmpl.reset()
      this.route.navigate(['/employee/home'])
      }
    })
  }
}
