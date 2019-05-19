import { Component, OnInit, Injectable } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from './car.service';
import { CarsService } from '../shared/services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  cars: Car[];
  filteredCars: Car[];
  private _searchTerm: string;


  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredCars = this.filtereCars(value);
  }
  filtereCars(searchString: string) {
    return this.cars.filter(car =>
      car.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  constructor(private _carService: CarService, private _router: Router) { }

  ngOnInit() {
    this.cars = this._carService.getCars();
    this.filteredCars = this.cars;
  }

}
