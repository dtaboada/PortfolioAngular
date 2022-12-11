import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL='http://localhost:8080/experiencia/';

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<experiencia[]>{
    return  this.http.get<experiencia[]> (this.URL+'traer')
  }

}


