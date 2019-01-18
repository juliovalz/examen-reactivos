//import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { filter, switchMap } from 'rxjs/operators';
import { Reactivo } from '../_models/reactivos';

import { map } from 'rxjs/operators';
import 'rxjs';
import { catchError } from 'rxjs/operators';

//import 'rxjs/add/operator/map';
import { Observable } from "rxjs";


 @Injectable({
  providedIn: 'root'
})
export class ReactivoService {

  constructor(
    private _http: HttpClient
 ) { }

  create(reactivo:Reactivo){
   return this._http.post(`${config.apiUrl}/reactivos`, reactivo);
  }
  borrar(id: number){
    return this._http.delete(`${config.apiUrl}/reactivos/${id}`);
 // return this._http.delete('/users/' + user.id).pipe(map((data: Response) => data.json())).toPromise()
  }

  update(id: number, reactivo: Reactivo) {
        return this._http.put(`${config.apiUrl}/reactivos/${id}`, reactivo);
    }

  getAll(){
   //return this._http.get('/users').pipe(map((data: Response) => data.json())).toPromise()
    return this._http.get<Reactivo[]>(`${config.apiUrl}/reactivos`);
  }


  getById(id: number) {
        return this._http.get<Reactivo>(`${config.apiUrl}/reactivos/${id}`);
    }

/*  getUser(user:Reactivo){
    this._http.get('/users'+user.id) 
  .pipe(map((data: Response) => data.json())).toPromise()
  }  */ 
} 