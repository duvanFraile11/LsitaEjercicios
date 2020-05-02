import { Component, OnInit } from '@angular/core';
import { Ejercicio} from '../ejercicio';
import { EjercicosService } from "../ejercicos.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  ejercicios:Ejercicio[];
  constructor(private ejercicioService:EjercicosService) {}
  ngOnInit(): void {
    console.log("--Componente de Panel creados---");
    this.getEjercicios();
  }

  getEjercicios():void{
    console.log("--Componente de Panel [ngOnInit]---");
    this.ejercicioService.getEjercicios().subscribe(ejercicios=>this.ejercicios=ejercicios)
  }

}
