import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import { Ejercicio} from './ejercicio';
import {EJERCICIOS } from './collection-ejercicios';

@Injectable({
  providedIn: 'root'
})
export class EjercicosService {

  constructor() { }
  //preparamos el servicio:.
  getEjercicios():Observable<Ejercicio[]>{
    return of(EJERCICIOS);
  }
}
