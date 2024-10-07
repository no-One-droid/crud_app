import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './components/employe/employe.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'employe', component: EmployeComponent},
  {path: '', component: HomeComponent},
  {path: 'employee', loadChildren:()=>import('./emp-loyee/emp-loyee.module').then(m => m.EmpLoyeeModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
