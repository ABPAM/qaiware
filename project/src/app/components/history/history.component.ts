import { Component, HostListener, OnInit } from '@angular/core';
import { Log } from 'src/app/interfaces/log';
import { CarService } from 'src/app/services/car.service';
import { RegionService } from 'src/app/services/region.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(
    private carService: CarService,
    private regionService: RegionService
  ) { }

  log: Log[] = []

  ngOnInit(): void {
    this.carService.getLocationChangeEmitter().subscribe(item => this.updateInfo(item))
  }

  updateInfo(item: Log) {
    if (this.log.length >= environment.history_steps) {
      this.log.pop();
    }
    this.log = [item, ...this.log]
    // this.log.push(item);
  }

  getCarName(id: number): string | null {
    return this.carService.getName(id);
  }

  getRegionName(id: number): string | null {
    return this.regionService.getName(id);
  }

}
