import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article/article.service';
import { Article } from '../../models/article.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public _articleService: ArticleService
  ) { }

  saveArticle() {

    const article = new Article(

      this.form.value.name,
      this.form.value.category,
      this.form.value.content,
      this.form.value.labels,
      this.form.value.image,

    );

    this._articleService.createArticle(article)
      .subscribe(resp => console.log(resp));

    console.log(this.form.value);
  }


  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required ),
      category: new FormControl(null, Validators.required ),
      author: new FormControl(null, Validators.required ),
      content: new FormControl(null, Validators.required ),
      date: new FormControl(null, Validators.required ),
      labels: new FormControl(null),
      comments: new FormControl(null),
      image: new FormControl(null, Validators.required )
    });

  }



  // const article = new Article(
  //   this.form.value.name,
  //   this.form.value.name,
  // )

}
