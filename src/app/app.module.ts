import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { APP_ROUTES } from './app.routes';
import { PagesComponent } from './pages/pages.component';


// Router


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
