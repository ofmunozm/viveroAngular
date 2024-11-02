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
  constructor(private plantasService: PlantasService) { }

  getPlantas() {
    this.plantasService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
    });
  }
  ngOnInit() {
    this.getPlantas();
  }

}
