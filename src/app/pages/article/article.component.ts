import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  title = 'Hello';
  images = {
    image1: '../../assets/local/image1.jpeg',
    image2: '../../assets/local/image2.jpeg',
    image3: '../../assets/local/image3.jpeg',
    hero: '../../assets/local/hero.jpeg',
    food: '../../assets/local/imagefood.jpg',
  };


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // This init will scroll the window to top when the
    // page is loaded
    this.router.events.subscribe(start => {
      window.scrollTo(0, 0);
    });
  }

  socialWindow(type: string, url: string, text: string) {

    if (type === 'facebook') {
      window.open(
        'https://www.facebook.com/sharer/sharer.php?u=www.angelham.com',
        'Facebook',
        'width=500, height=300, left=300, top=200, scrollbars, resizable'
      );
      return;
    }

    if (type === 'twitter') {
      window.open(
        `https://twitter.com/home?status=${text}`,
        'Twitter',
        'width=550, height=500, left=300, top=200, scrollbars, resizable'
      );
    }


    console.log('Hello!', type);


  }

}
