import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './Model/emp-loyee';

@Injectable({
  providedIn: 'root'
})
export class EmpLoyeeService {

  
  Url = 'https://localhost:7149/api/Employee';
  constructor( private https: HttpClient) { }

  getEmployes(){
    return this.https.get(this.Url)
  }

  postEmployes(data: Employee){
    return this.https.post(this.Url, data)
  }

  deleteEmployes(id: number){
    return this.https.delete(this.Url + '/' + id)
  }

  getbyId(id:number){
    return this.https.get(this.Url + '/' + id)
  }
  putEmploye( data: Employee){
    return this.https.put(this.Url + '/' + data.id , data);
  }
}
