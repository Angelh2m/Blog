import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import 'rxjs/add/operator/map';
import { Article } from '../../models/article.model';
import { UserService } from '../user/user.service';
@Injectable()
export class ArticleService {



  constructor(
    public http: HttpClient,
    private _userService: UserService
  ) { }

  createArticle( article: Article) {

    const url = `${URL_SERVICES}/articles/?token=${this._userService.token}` ;

    return this.http.post(url, article);

  }

  getArticles() {
    const url = `${URL_SERVICES}/articles`;

    return this.http.get(url)
      .map((res: any) => res.articles );
  }


  getRequestedArticle( query: string ) {

    const url = `${URL_SERVICES}/search/blog/${query}`;

    return this.http.get(url)
      .map( (resp: any) => resp.articles[0]);
  }


  getCategories( category: string ) {
    const url = `${URL_SERVICES}/search/${category}`;

    return this.http.get(url)
      .map((resp: any) => {

        console.log(resp.categories);
        return resp.categories;
      });
  }

}
