import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable()
export class MetaTagsService  {

  articleTitle: string;
  metaDescription: MetaDefinition = {
    name: 'description',
    content: ''
  };
  metaKeywords: MetaDefinition = {
    name: 'keywords',
    content: ''
  };


  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta
  ) { }


  metas() {
    this.title.setTitle(this.articleTitle);
    this.meta.updateTag(this.metaDescription);
    this.meta.updateTag(this.metaKeywords);
    this.meta.addTags([
      { name: 'twitter:title', content: 'Content Title' },
      { property: 'og:title', content: 'Content Title' }
    ]);
  }


}

