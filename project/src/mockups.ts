import { Region } from './app/interfaces/region';
import { Car } from './app/interfaces/car';

export const CARS_MOCKUP: Car[] = [
    { id: 1, name: 'Toyota', location: 1 },
    { id: 2, name: 'VW', location: 2 },
    { id: 3, name: 'Skoda', location: 3 },
    { id: 4, name: 'BMW', location: 4 },
    { id: 5, name: 'Mercedes-Benz', location: 5 },
    { id: 6, name: 'Audi', location: 2 },
    { id: 7, name: 'Dacia', location: 5 },
];

export const REGIONS_MOCKUP: Region[] = [
    { id: 1, name: 'Sofia' },
    { id: 2, name: 'Plovdiv' },
    { id: 3, name: 'Varna' },
    { id: 4, name: 'Burgas' },
    { id: 5, name: 'Ruse' },
];
