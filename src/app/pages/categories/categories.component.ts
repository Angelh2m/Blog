import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  images = {
    image1: '../../assets/local/image1.jpeg',
    image2: '../../assets/local/image2.jpeg',
    image3: '../../assets/local/image3.jpeg',
    hero: '../../assets/local/hero.jpeg',
    food: '../../assets/local/imagefood.jpg',
  };



  constructor() { }

  ngOnInit() {
  }

}
