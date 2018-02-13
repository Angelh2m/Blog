import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articleTitle = 'Updating Metatags';
  metaDescription: MetaDefinition = {
    name: 'description',
    content: 'The content of the article and the snnipet'
  };
  metaKeywords: MetaDefinition = {
    name: 'keywords',
    content: 'My keywords list'
  };


  images = {
    image1: '../../assets/local/image1.jpeg',
    image2: '../../assets/local/image2.jpeg',
    image3: '../../assets/local/image3.jpeg',
    hero: '../../assets/local/hero.jpeg',
    food: '../../assets/local/imagefood.jpg',
  };


  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta
  ) { }

  ngOnInit() {

    this.title.setTitle(this.articleTitle);
    this.meta.updateTag(this.metaDescription);
    this.meta.updateTag(this.metaKeywords);
    this.meta.addTags([
      { name: 'twitter:title', content: 'Content Title' },
      { property: 'og:title', content: 'Content Title' }
    ]);


    // This init will scroll the window to top when the
    // page is loaded
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


    console.log('Hello!', type);


  }

}
