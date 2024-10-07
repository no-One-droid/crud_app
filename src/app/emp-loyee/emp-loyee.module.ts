import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpLoyeeRoutingModule } from './emp-loyee-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpLoyeeComponent } from './emp-loyee.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent,
    EmpLoyeeComponent,
   
  ],
  imports: [
    CommonModule,
    EmpLoyeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpLoyeeModule { }
