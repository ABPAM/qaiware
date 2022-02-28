import { Component, OnInit } from '@angular/core';
import { Car } from '../../interfaces/car';
import { Log } from '../../interfaces/log';
import { CarService } from '../../services/car.service';
import { RegionService } from '../../services/region.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  constructor(
    private carService: CarService,
    private regionService: RegionService
  ) { }

  cars: Car[] = [];
  carId: number = 0;

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  getLocationName(id: number): string {
    let region = this.regionService.getRegion(id)?.name;
    return region ?? '';
  }
}
