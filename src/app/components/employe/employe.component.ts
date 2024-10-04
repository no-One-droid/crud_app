import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/Model/employee';
import { EmployeService } from 'src/app/Services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  createEmpl: FormGroup;
  isEditMode: boolean = false;
  empList: Employee[] = [];
  EmployeId!: number;


  constructor(private fb: FormBuilder, private empSerivce: EmployeService){
    this.createEmpl = this.fb.group({
      // id: [null],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', Validators.required],
      role: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.createEmpl;
    this.fetchEmp()
  }

  openCreateModal(){
    this.isEditMode = false;
    const empMod =  document.getElementById('myModal');
    if(empMod != null){
      empMod.style.display = 'block'
    } 
  }

  openUpdateModal(){
    this.isEditMode = true;
    const empMod =  document.getElementById('myModal');
    if(empMod != null){
      empMod.style.display = 'block'
    } 
  }

  closeModal(){
    const empMod =  document.getElementById('myModal');
    if(empMod != null){
      empMod.style.display = 'none'
    }
  }


  //get form controls
  get fc(){
    return this.createEmpl.controls; 
  }

  //to add a new employee in 

  onSubmit(){
    this.empSerivce.postEmployes(this.createEmpl.value)
    .subscribe({
      next: resp =>{
        this.empList = resp as Employee[]
        this.createEmpl.reset();
        this.closeModal();
      },
      error: err=>{
        console.log(err)
      }
    })
  }

  //Fetching Employees

  fetchEmp(){
    this.empSerivce.getEmployes()
    .subscribe({
      next: resp =>{
        this.empList = resp as Employee[]
      },
      error: err =>{
        console.log(err)
      }
    })
  }

//deleting Employees

  onDelete(id: number){
    this.empSerivce.deleteEmployes(id)
    .subscribe({
      next: resp =>{
        this.empList = resp as Employee[]
      },
      error: err =>{
        console.log(err)
      }
    })
  }

  //get Employees by Id

  updateEmp(data: Employee){
    this.openUpdateModal();
    this.EmployeId = data.id;
    // console.log(this.EmpId)
   this.createEmpl.patchValue(data);
   
  }

  // update the form

  onUpdate(){  
    const UpdatedData = {
      ...this.createEmpl.value,
      id: this.EmployeId
    }
    this.empSerivce.putEmploye(this.EmployeId, UpdatedData)
    .subscribe({
      next: resp =>{
        this.empList = resp as Employee[]
        this.createEmpl.reset();
        this.closeModal();
      },
      error: err =>{
        console.log(err)
      }
    })
  }
}
