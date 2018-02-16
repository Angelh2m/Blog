import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  articles: Article;

  images = {
    image1: '../../assets/local/image1.jpeg',
    image2: '../../assets/local/image2.jpeg',
    image3: '../../assets/local/image3.jpeg',
    hero: '../../assets/local/hero.jpeg',
    food: '../../assets/local/imagefood.jpg',
  };


  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(resp => {
        this.articles = resp;
        console.log(resp);


      });
  }

}
