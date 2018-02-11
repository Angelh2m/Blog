import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the pages component
import { PagesComponent } from './pages/pages.component';
// Import portfolio section
import { PortfolioComponent } from './portfolio/portfolio.component';
import { APP_ROUTES } from './app.routes';
// Import all shared Modules
import { SharedModule } from './shared/shared.module';



// Router


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PortfolioComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
