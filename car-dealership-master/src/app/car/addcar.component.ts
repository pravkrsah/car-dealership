import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  SaveCar(caForm: NgForm): void {
    console.log(caForm.value);
  }
}
