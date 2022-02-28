import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { RegionService } from 'src/app/services/region.service';
import { Region } from 'src/app/interfaces/region';
import { Log } from 'src/app/interfaces/log';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.scss']
})

export class MoveComponent implements OnInit {

  @Input() carId: number = 0;
  @Input() currentRegion: number = 0;
  @Output() newRegion: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private carService: CarService,
    private regionService: RegionService
  ) { }

  regions: Region[] = [];

  ngOnInit(): void {
    this.filterRegions(this.currentRegion);
  }

  move(regionId: number): void {
    let date: Date = new Date();
    let currentTime: string = String(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

    let car = this.carId;

    let locationFrom = this.currentRegion || 0;
    let locationTo   = regionId || 0;

    let msg: Log = { time: currentTime, car: car, from: locationFrom, to: locationTo };

    this.filterRegions(regionId);

    this.carService.move(msg);
  }

  filterRegions(id: number): void {
    this.regions = this.regionService.getAvailableRegions(id);
  }

}
