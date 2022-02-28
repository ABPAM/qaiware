import { Injectable, EventEmitter } from '@angular/core';
import { Car } from '../interfaces/car';
import { CARS_MOCKUP } from '../../mockups';
import { Log } from '../interfaces/log';


@Injectable({
  providedIn: 'root'
})

export class CarService {

  constructor() { }

  locationChange: EventEmitter<Log> = new EventEmitter<Log>();

  getCars(): Car[] {
    return CARS_MOCKUP;
  }

  getName(id: number): string | null {
    return this.getCars().find(car => car.id == id)?.name || null;
  }

  move(logMsg: Log): void {
    let car = CARS_MOCKUP.find(car => car.id == logMsg.car) || { name: '', location: 0 };
    car.location = logMsg.to;

    this.locationChange.emit(logMsg);
  }

  getLocationChangeEmitter(): EventEmitter<Log> {
    return this.locationChange;
  }
}
