import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PagesComponent } from './pages/pages.component';


const appRoutes: Routes = [
  // { path: '', component: PortfolioComponent },
  { path: '', component: PortfolioComponent },
  {
    path: 'blog',
    component: PagesComponent,
    // This will load the pages module with all the child routes
    // This is what is called Lazy loading
    loadChildren: './pages/pages.module#PagesModule'
  },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: false });


