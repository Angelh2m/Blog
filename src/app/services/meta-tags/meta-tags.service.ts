import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
// import { Router } from '@angular/router';

@Injectable()
export class MetaTagsService  {

  // articleTitle: string;
  // metaDescription: MetaDefinition = {
  //   name: 'description',
  //   content: ''
  // };
  // metaKeywords: MetaDefinition = {
  //   name: 'keywords',
  //   content: ''
  // };


  constructor(
    public title: Title,
    public meta: Meta
  ) { }


  metas(config) {

    config = {
      title: 'Check mane',
      description: 'My SEO friendy description',
      keywords: 'Keywords',
      image: 'UrlImage',
      slug: '',
      ...config
    };


    this.title.setTitle(config.title);
    this.meta.updateTag({name: 'description', content: config.description});
    this.meta.updateTag({name: 'keywords', content: config.keywords});
    this.meta.addTags([
      { name: 'twitter:title', content: 'Content Title' },
      { property: 'og:title', content: 'Content Title' }
    ]);
  }


}

