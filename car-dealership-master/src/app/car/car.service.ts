import { Injectable } from '@angular/core';
import { Car} from '../model/car.model';

@Injectable()
export class CarService {
    private listCars: Car[] = [{
        _id: '59d2698c2eaefb1268b69ee5',
        name: 'Chevy',
        year: 2016,
        color: 'Gray',
        price: 16106,
        hasSunroof: false,
        isFourWheelDrive: true,
        hasLowMiles: true,
        hasPowerWindows: false,
        hasNavigation: true,
        hasHeatedSeats: false
    },
    {
        _id: '59d2698c05889e0b23959106',
        name: 'Toyota',
        year: 2012,
        color: 'Silver',
        price: 18696,
        hasSunroof: true,
        isFourWheelDrive: true,
        hasLowMiles: false,
        hasPowerWindows: true,
        hasNavigation: false,
        hasHeatedSeats: true
    },
    {
        _id: '59d2698c6f1dc2cbec89c413',
        name: 'Mercedes',
        year: 2016,
        color: 'Black',
        price: 18390,
        hasSunroof: true,
        isFourWheelDrive: false,
        hasLowMiles: false,
        hasPowerWindows: true,
        hasNavigation: true,
        hasHeatedSeats: false
    },
    {
        _id: '59d2698c340f2728382c0a73',
        name: 'Toyota',
        year: 2015,
        color: 'White',
        price: 15895,
        hasSunroof: true,
        isFourWheelDrive: false,
        hasLowMiles: true,
        hasPowerWindows: true,
        hasNavigation: false,
        hasHeatedSeats: true
    },
    {
        _id: '59d2698cba9b82c2347cd13a',
        name: 'Ford',
        year: 2014,
        color: 'Gray',
        price: 19710,
        hasSunroof: false,
        isFourWheelDrive: true,
        hasLowMiles: false,
        hasPowerWindows: false,
        hasNavigation: true,
        hasHeatedSeats: true
    },
    {
        _id: '59d2698ce2e7eeeb4f109001',
        name: 'Toyota',
        year: 2014,
        color: 'Red',
        price: 19248,
        hasSunroof: true,
        isFourWheelDrive: false,
        hasLowMiles: true,
        hasPowerWindows: true,
        hasNavigation: true,
        hasHeatedSeats: true
    },
    {
        _id: '59d2698cd6a3b8f0dd994c9d',
        name: 'Toyota',
        year: 2015,
        color: 'Black',
        price: 13170,
        hasSunroof: true,
        isFourWheelDrive: false,
        hasLowMiles: true,
        hasPowerWindows: true,
        hasNavigation: false,
        hasHeatedSeats: false
    },
    {
        _id: '59d2698c86ab54cee8acdc7b',
        name: 'Mercedes',
        year: 2013,
        color: 'Gray',
        price: 15669,
        hasSunroof: false,
        isFourWheelDrive: false,
        hasLowMiles: true,
        hasPowerWindows: false,
        hasNavigation: false,
        hasHeatedSeats: false
    },
    {
        _id: '59d2698cda9e8d39476c678a',
        name: 'Toyota',
        year: 2015,
        color: 'White',
        price: 16629,
        hasSunroof: false,
        isFourWheelDrive: false,
        hasLowMiles: true,
        hasPowerWindows: false,
        hasNavigation: false,
        hasHeatedSeats: true
    }];
    getCars(): Car[]{
        return this.listCars;
    }
}