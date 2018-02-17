import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';

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

  articles: Article;

  constructor(
    public _articles: ArticleService,
    public activatedRoute: ActivatedRoute
  ) {

    const catName: string = this.activatedRoute.snapshot.params.category;


    this._articles.getCategories(catName)
      .subscribe(resp => this.articles = resp );


  }

  ngOnInit() {


  }

}
