import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http : HttpClient
  ) { }
   //accesos para usuario
   postUser(data : any){
    
    const url = "http://localhost:3000/usuarios/"
    return this.http.post<any>(url, data) 
  }

  getUser(){
    return this.http.get<any>("http://localhost:3000/usuarios/");
  }

  putUser(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/usuarios/"+id, data)
  }

  deleteUser(id :number){
    return this.http.delete<any>("http://localhost:3000/usuarios/"+id)
  }

   //accesos para servicios


  postService(data :any){
    return this.http.post<any>("http://localhost:3000/servicios/", data) 
  }

  getService(){
    return this.http.get<any>("http://localhost:3000/servicios/");
  }

  putService(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/servicios/"+id, data)
  }

  deleteService(id :number){
    return this.http.delete<any>("http://localhost:3000/servicios/"+id)
  }

   //accesos para portfolio


  postPortfolio(data :any){
    const url = "http://localhost:3000/portfolios/"
    return this.http.post(url, data) 
  }

  getPortfolio(){
    return this.http.get<any>("http://localhost:3000/portfolios/");
  }

  putPortfolio(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/portfolios/"+id, data)
  }

  deletePortfolio(id :number){
    return this.http.delete<any>("http://localhost:3000/portfolios/"+id)
  }

   //accesos para experiencia


  postExperience(data :any){
    const url = "http://localhost:3000/experiencia/"
    return this.http.post(url, data)
  }

  getExperience(){
    return this.http.get<any>("http://localhost:3000/experiencia/");
  }

  putExperience(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/experiencia/"+id, data)
  }

  deleteExperience(id :number){
    return this.http.delete<any>("http://localhost:3000/experiencia/"+id)
  }

   //accesos para habilidades

   postSkills(data :any){
    const url = "http://localhost:3000/habilidades/"
    return this.http.post(url, data) //acá tengo que poner la url que me da el backend de la tabla usuario
  }

  getSkills(){
    return this.http.get<any>("http://localhost:3000/habilidades/");
  }

  putSkills(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/habilidades/"+id, data)
  }

  deleteSkills(id :number){
    return this.http.delete<any>("http://localhost:3000/habilidades/"+id)
  }

}
