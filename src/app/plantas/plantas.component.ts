import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantasService } from './plantas.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

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
