import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';
import { MetaTagsService } from '../../services/meta-tags/meta-tags.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  articles: Article;
  currentCategory: string;

  constructor(
    public _articles: ArticleService,
    public activatedRoute: ActivatedRoute,
    public seo: MetaTagsService,
  ) {

    this.currentCategory = this.activatedRoute.snapshot.params.category;


    this._articles.getCategories(this.currentCategory)
      .subscribe(resp => this.articles = resp );


  }

  ngOnInit() {
    this.loadMetas();
  }

  loadMetas() {

    this.seo.metas({
      title: this.currentCategory + ' AngelHam' || 'nothing' ,
      // description: this.articles.labels,
      // keywords: this.articles.labels,
      // image: this.articles.image,
    });

  }


}
