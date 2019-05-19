import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carForm: FormGroup;
  @Input()
  car: Car = {
    _id: null,
    name: null,
    year: null,
    color: null,
    price: null,
    hasSunroof: null,
    isFourWheelDrive: null,
    hasLowMiles: null,
    hasPowerWindows: null,
    hasNavigation: null,
    hasHeatedSeats: null
  }
  constructor() { }

  ngOnInit() {
    this.carForm = new FormGroup({
      carName: new FormControl(),
      model: new FormControl()
    });
  }
}
