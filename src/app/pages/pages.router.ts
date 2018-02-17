import { RouterModule, Routes, CanActivate } from '@angular/router';
// Import all the pages components
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleComponent } from './article/article.component';
import { CategoriesComponent } from './categories/categories.component';


const pagesRoutes: Routes = [

  {
    path: '',
    component: HomePageComponent,
    data: { titulo: 'home' }
  },
  {
    path: ':category',
    component: CategoriesComponent,
    data: { titulo: 'home' }
  },
  {
    path: ':categoryURL/:articleURL',
    pathMatch: 'full',
    component: ArticleComponent,
    data: { titulo: 'home' }
  },

];

// Export the child routes
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
