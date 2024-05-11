import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { MovieDetailsComponent } from './shared/components/movie-details/movie-details.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch : 'full'
  }, 
  {
    path:'home',
    component:HomeComponent
  }, 
   {
    path:'moviedetails/:movieId',
    component:MovieDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
