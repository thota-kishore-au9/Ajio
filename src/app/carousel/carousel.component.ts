import { Component, NgModule, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel/carousel.module';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carouselItems = [
    {
      image: '../../assets/01062023-UHP-Mainbanner-D-5090.jpg',
      alt: 'Slide 1',
      caption: 'Slide 1',
      content: 'Some representative placeholder content for the first slide.'
    },
    {
      image: '../../assets/02062023-UHP-D-Main-P3-TrendsJohnPlayersLeeCooper-Under499.jpg',
      alt: 'Slide 2',
      caption: 'Slide 2',
      content: 'Some representative placeholder content for the second slide.'
    },
    {
      image:'../../assets/02062023-UHP-D-Main-P5-Puma-Min50.jpg',
      alt: 'Slide 3',
      caption: 'Slide 3',
      content: 'Some representative placeholder content for the third slide.'
    },
    {
     image:'../../assets/03062023-UHP-D-Main-P2-SpykarJJ-4060.jpg',
     alt: 'Slide 4',
     caption: 'Slide 4',
     content: 'Some representative placeholder content for the fourth slide.'
    },
    {
      image:'../../assets/03062023-UHP-D-Main-P3-ZinkKotty-Starting400extraupto35.jpg',
      alt: 'Slide 5',
      caption: 'Slide 5',
      content: 'Some representative placeholder content for the fifth slide.'
    },
    {
     image:'../../assets/03062023-UHP-D-Main-P5-AllenSollyVanHeusen-Min40.jpg',
     alt: 'Slide 6',
     caption: 'Slide 6',
     content: 'Some representative placeholder content for the sixth slide.'
    }
  ];
  static slides: { image: string; alt: string; caption: string; content: string; }[];
  constructor() {}
  ngOnInit() {

  }

}
