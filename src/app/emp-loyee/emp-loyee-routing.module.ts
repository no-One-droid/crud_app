import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { EmpLoyeeComponent } from './emp-loyee.component';

const routes: Routes = [
  {path: '', component:EmpLoyeeComponent,
    children:[
      // {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component:HomeComponent},
      {path: "create", component: CreateComponent},
      {path: "edit/:id", component: EditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpLoyeeRoutingModule { }
