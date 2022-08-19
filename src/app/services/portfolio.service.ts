import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CvService } from './cv.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    private http : HttpClient,

  ) { }

  obtenerDatos():Observable <any>{
    return this.http.get('./assets/data/cv.json') //acá va la url desde el servidor
  }
}
