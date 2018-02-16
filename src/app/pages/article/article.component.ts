import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
// Meta tags Service
import { MetaTagsService } from '../../services/meta-tags/meta-tags.service';
import { ArticleService } from '../../services/article/article.service';
import { Article } from '../../models/article.model';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {

  requestedArticleUrl = '';
  categoryPath = '';
  article: Article;

  constructor(
    private router: Router,
    public seo: MetaTagsService,
    public _articleService: ArticleService,
    private artivatedRoute: ActivatedRoute
  ) {

    this.snapShotRequestedURL();
  }

  ngOnInit() {

    // Get the requested article
    this.deliverArticle();
    this.scrollTop();
  }


  snapShotRequestedURL() {
    this.artivatedRoute.params
    .subscribe((res: any) => {
      // console.log(res);
      /**
      * Set the values of the requested url
      */
      this.requestedArticleUrl = res.articleURL;
      this.categoryPath = res.categoryURL;
    });
  }



  deliverArticle() {
    this._articleService.getRequestedArticle(this.requestedArticleUrl)
      .subscribe(resp => {
        this.article = resp;

        /**
        *  Validation and Redirect for Articles
        */
        if (typeof resp === 'undefined') {
          this.router.navigate(['/blog']);
        }

        /**
        *  Validation and Redirect for Categories
        */
        if (this.categoryPath !== resp.category ) {
          // console.log('Redirect!!');
          this.router.navigate(['/blog']);
        }


        this.loadMetas();
    });
  }


  loadMetas() {
    // Load all the variables
    // console.log(this.article.name);
    this.seo.articleTitle = this.article.name || 'nothing' ;
    this.seo.metaDescription.content = 'Description';
    this.seo.metaKeywords.content = 'Keywords';
    // Set all Meta tags
    this.seo.metas();
  }

  scrollTop() {
    // This init will scroll the window to top when the page is loaded
    this.router.events.subscribe(start => {
      window.scrollTo(0, 0);
    });
  }



  socialWindow(type: string, url?: string, text?: string) {

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


  }
}
