import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './article/article.service';
import { HttpClientModule } from '@angular/common/http';
import { MetaTagsService } from './meta-tags/meta-tags.service';
import { UserService } from './user/user.service';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { UrlVerifyGuard } from './guards/url-verify.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ArticleService,
    MetaTagsService,
    UserService,
    LoginGuardGuard,
    UrlVerifyGuard,
  ],
  declarations: []
})
export class ServiceModule { }
