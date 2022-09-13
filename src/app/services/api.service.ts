import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://blooming-meadow-31254.herokuapp.com/';

  constructor(
    private http : HttpClient
  ) { }
   //accesos para usuario
   postUser(data : any){
    return this.http.post<any>(this.url + "users/create/", data) 
  }

  getUser(){
    return this.http.get<any>(this.url + 'users/list');
  }

  public putUser( id : number, data : any): Observable<any>{
    return this.http.put<any>(this.url + `users/update/${id}`, data)
  }

  deleteUser(id :number){
    return this.http.delete<any>(this.url + `users/delete/${id}`)
  }

   //accesos para servicios


  postService(data :any){
    return this.http.post<any>(this.url + "service/create/", data) 
  }

  getService(){
    return this.http.get<any>(this.url + 'service/list');
  }

  putService(data : any, id : number){
    return this.http.put<any>(this.url + `service/update/${id}`, data)
  }

  deleteService(id :number){
    return this.http.delete<any>(this.url + `service/delete/${id}`)
  }

   //accesos para portfolio - proyectos


  postPortfolio(data :any){
    return this.http.post(this.url + "proyects/create/", data) 
  }

  getPortfolio(){
    return this.http.get<any>(this.url + 'proyects/list');
  }

  putPortfolio(data : any, id : number){
    return this.http.put<any>(this.url + `proyects/update/${id}`, data)
  }

  deletePortfolio(id :number){
    return this.http.delete<any>(this.url + `proyects/delete/${id}`)
  }

   //accesos para experiencia


  postExperience(data :any):Observable<any>{
    return this.http.post(this.url + "experience/create/", data)
  }

  getExperience():Observable<any>{
    return this.http.get<any>(this.url + "experience/list");
  }

  putExperience(data : any, id : number):Observable<any>{
    return this.http.put<any>(this.url + `experience/update/${id}`, data)
  }

  deleteExperience(id :number):Observable<any>{
    return this.http.delete<any>(this.url + `experience/delete/${id}`)
  }

   //accesos para habilidades

  public postSkills(data : any): Observable<any>{
    return this.http.post(this.url + "skills/create/", data); //acá tengo que poner la url que me da el backend de la tabla usuario

  }

  public getSkills(): Observable<any>{
    return this.http.get<any>(this.url + 'skills/list');
  }

  public putSkills (id : number, data : any): Observable<any>{
    return this.http.put<any>(this.url + `skills/update/${id}`, data);

  }


  public deleteSkills(id :number) : Observable<any>{
    return this.http.delete<any>(this.url + `skills/delete/${id}`);
  }

}
