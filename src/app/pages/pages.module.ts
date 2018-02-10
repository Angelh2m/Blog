// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.router';


import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';



// Router


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES
   ],
  providers: [],
  exports: [ ]
})
export class PagesModule { }
