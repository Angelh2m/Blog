import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article/article.service';
import { Article } from '../../models/article.model';
import { MetaTagsService } from '../../services/meta-tags/meta-tags.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  articles: Article;

  constructor(
    private articleService: ArticleService,
    public seo: MetaTagsService,

  ) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(resp => {
        this.articles = resp;
        console.log(resp);

      });

      this.loadMetas();

  }

  loadMetas() {

    this.seo.metas({
      title: ' AngelHam | Angel Hernandez' || 'nothing' ,
      description: 'Tech blog',
      // keywords: this.articles.labels,
      // image: this.articles.image,
    });

  }


}
