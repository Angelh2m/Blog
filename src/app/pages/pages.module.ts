// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Router for all pages as child
import { PAGES_ROUTES } from './pages.router';

// Import all the pages Modules
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleComponent } from './article/article.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ArticleComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,

   ],
  providers: [],
  exports: [ ]
})

export class PagesModule { }
