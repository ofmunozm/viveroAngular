import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantasService } from '../plantas.service';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent implements OnInit {

  plantas: Array<Planta> = [];
  totalInterior: number = 0;
  totalExterior: number = 0;

  constructor(private plantasService: PlantasService) { }

  getPlantas() {
    this.plantasService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
      this.calcularTotales();
    });
  }

  calcularTotales() {
    this.totalInterior = this.plantas.filter(planta => planta.tipo === 'Interior').length;
    this.totalExterior = this.plantas.filter(planta => planta.tipo === 'Exterior').length;
  }

  ngOnInit() {
    this.getPlantas();
  }

}
