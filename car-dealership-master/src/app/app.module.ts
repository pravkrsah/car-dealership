import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { AppRoutingModule } from './app-routing.module';
import { ListCarsComponent } from './car/list-cars.component';
import { CarService } from './car/car.service';

// TODO: import any modules that will be used in the app

@NgModule({
  declarations: [AppComponent, CarComponent, ListCarsComponent],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule, FormsModule],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
