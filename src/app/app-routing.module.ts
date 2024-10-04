import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './components/employe/employe.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'employe', component: EmployeComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
