import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PagesComponent } from './pages/pages.component';


const appRoutes: Routes = [
  // { path: '', component: PortfolioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  {
    path: '',
    component: PagesComponent,
    // loadChildren: './pages/pages.module#PagesModule'
  },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: false });


