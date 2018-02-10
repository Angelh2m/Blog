import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  files = {
    header: '../../assets/aboutAngel/Untitled-1.jpg',
    picture: '../../assets/aboutAngel/img.jpg',
    slider: '../../assets/aboutAngel/slider.jpg',
    game: '../../assets/aboutAngel/Game.jpg',
    jut: '../../assets/aboutAngel/Jut.jpg',
    typed: '../../assets/aboutAngel/Typed.jpg',
    pacific: '../../assets/aboutAngel/pacific.jpg',
    spotiapp: '../../assets/aboutAngel/spotiapp.jpg',
    traumatologo: '../../assets/aboutAngel/traumatologo.jpg',
    JutClothing: '../../assets/aboutAngel/Jut-clothing.jpg',

  };
  constructor() { }

  ngOnInit() {
  }

}
