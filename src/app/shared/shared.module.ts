// Import deafults
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router/';

// Import all the pages Modules
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
   ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})

export class SharedModule { }
