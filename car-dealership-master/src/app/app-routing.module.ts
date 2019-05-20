import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCarsComponent } from './car/list-cars.component';
import { AddcarComponent } from './car/addcar.component'; 

const routes: Routes = [
  {path:'list', component: ListCarsComponent},
  {path:'addcar', component: AddcarComponent},
  {path:'', redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
