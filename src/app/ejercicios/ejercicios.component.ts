import { Component, OnInit } from '@angular/core';
import { Ejercicio} from '../ejercicio';
import { EjercicosService } from "../ejercicos.service";


@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicios:Ejercicio[];
  ejercicioSeleccionado:Ejercicio;

  constructor(private ejercicioService:EjercicosService) {
    console.log("--Componente de ejercicos creados---");
  }

  getEjercicios():void{
    console.log("--Componente de ejercicos [ngOnInit]---");
    this.ejercicioService.getEjercicios().subscribe(ejercicios=>this.ejercicios=ejercicios)
  }
  ngOnInit(): void {
    this.getEjercicios();
  }
onSelectEjercicio(ejercicios:Ejercicio): void{
  console.log("Ejercicio Selecionado="+ ejercicios.id);
  this.ejercicioSeleccionado=ejercicios;

}
}
