import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';




const pagesRoutes: Routes = [

      { path: '', component: HomePageComponent, data: { titulo: 'home' } },

];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
