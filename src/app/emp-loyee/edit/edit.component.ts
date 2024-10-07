import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpLoyeeService } from '../emp-loyee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Model/emp-loyee';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  createEmpl!: FormGroup;
  empList: Employee[] = [];
  empId!: number;



  constructor(private fb: FormBuilder, private empSerivce: EmpLoyeeService, private route: Router, private actRout: ActivatedRoute){
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
    this.actRout.paramMap.subscribe((param)=>{
      let id = Number(param.get('id'))
      this.getId(id)
    })
  }
  getId(id: number){
    this.empId = id;
    this.empSerivce.getbyId(id).subscribe({
      next: data =>{
        this.createEmpl.patchValue(data)
      }
    })
  }

  get fc(){
    return this.createEmpl.controls; 
  }

  onSubmit(){
    const upData ={
      ...this.createEmpl.value,
      id: this.empId
    }
    this.empSerivce.putEmploye(upData).subscribe({
      next: resp=>{
        this.route.navigate(['/employee/home'])
      }
    })
  }
}
