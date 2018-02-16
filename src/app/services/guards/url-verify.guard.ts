import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ArticleService } from '../article/article.service';


@Injectable()
export class UrlVerifyGuard implements CanActivate {

  constructor(

    private article: ArticleService,
  ) {
  }

  canActivate( route: ActivatedRouteSnapshot, ) {

    // console.log('loaded Verify!');
    // const url = this.article.getRequestedArticle(route.params.article)
    //   .subscribe(resp => resp);

    // console.log(url);

    // console.log(route.params);


    return true;
  }
}
