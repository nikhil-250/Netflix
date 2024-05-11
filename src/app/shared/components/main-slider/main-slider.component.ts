import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ItrendingMovie } from '../model/movie.interface';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  movieArr : Array<ItrendingMovie> = []
  private _movieService = inject(MoviesService)
  constructor() { }

  ngOnInit(): void {
    this._movieService.fetchTrendingMovies()
    .subscribe(res =>{
        console.log(res);
        this.movieArr = res
    })
  }
 
}
