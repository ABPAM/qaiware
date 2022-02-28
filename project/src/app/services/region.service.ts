import { Injectable } from '@angular/core';
import { Region } from '../interfaces/region';
import { REGIONS_MOCKUP } from 'src/mockups';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor() { }

  getAllRegions(): Region[] {
    return REGIONS_MOCKUP;
  }

  getAvailableRegions(currentRegion: number): Region[] {
    return this.getAllRegions().filter(region => region.id != currentRegion);
  }

  getRegion(id: number): Region | null {
    return this.getAllRegions().find(region => region.id == id) || null;
  }

  getName(id: number): string | null {
    return this.getAllRegions().find(region => region.id == id)?.name || null;
  }
}
