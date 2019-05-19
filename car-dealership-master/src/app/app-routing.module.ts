import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { ListCarsComponent } from './car/list-cars.component';

const routes: Routes = [
  {path:'list', component: ListCarsComponent},
  {path:'car', component: CarComponent},
  {path:'', redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
