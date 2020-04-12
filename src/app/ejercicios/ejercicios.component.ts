import { Component, OnInit } from '@angular/core';
import { Ejercicio} from '../ejercicio';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {
  ejercico: Ejercicio ={
    id:1,
    name:"Felxiones",
    surname:"Fraile",
    Edad:20
  }

  constructor() { }

  ngOnInit(): void {
  }

}
