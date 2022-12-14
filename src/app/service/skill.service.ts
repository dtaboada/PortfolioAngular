import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  URL='http://localhost:8080/skill/';  

  constructor(private http: HttpClient) { }

public getSkill(): Observable<skill[]>{
  return  this.http.get<skill[]> (this.URL+'traer')
  } 
}