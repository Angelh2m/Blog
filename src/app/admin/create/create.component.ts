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
  style: string;
  content: string;


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

    console.log(this.form.value);
    // console.log(article);

    this._articleService.createArticle(article)
      .subscribe(resp => console.log(resp));

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

    // // [ 1 ] Select the texarea
    // const text = document.getElementById('content');
    // // [ 2 ] Create a range where the accion will happen
    // let range = document.createRange();
    // // [ 3 ] Specify what you need to work on
    // range.selectNode(text);
    // // [ 4 ] Get the window object to work on your selection
    // window.getSelection().addRange(range);
    // // [ 5 ] Execute anything you want from this point

    // // document.execCommand('copy');
    // document.execCommand(style, false, null);


  editor() {

     // [ 1 ] Select the texarea
     const text = document.getElementById('content');
     // [ 2 ] Create a range where the accion will happen
    let range = document.createRange();
     // [ 3 ] Specify what you need to work on
     range.selectNode(text);
     // [ 4 ] Get the window object to work on your selection
     window.getSelection().addRange(range);
     // [ 5 ] Execute anything you want from this point

     // document.execCommand('copy');
     document.execCommand('bold', false, null);
  }


  control(style) {


    const allowedFormats = ['h1', 'h2', 'h4', 'p'];

    this.applyStyles(style);

    /**
    *  Set the value of the text area
    */
    const content = document.getElementById('content').innerHTML;

    const cleanHTML = content.replace(/<[^\/>][^>]*><br><\/[^>]+>/, '');

    this.form.value.content = cleanHTML;
    this.content = cleanHTML;


    if (this.style === 'img') {

      const link = prompt('Link')

      var html = `<img class="img-fluid" src="${link}"alt="test"/>`;

      document.execCommand('insertHTML', false, html);

    }


    /**
    *  If its a H1 H2 H3 H4 p
    */
    if (allowedFormats.indexOf(this.style) >= 0 ) {
      console.log(this.style);
      return document.execCommand('formatBlock', false, `<${this.style}>`);
    }


  }


  applyStyles(style: string) {
    document.execCommand(this.style, false, null);
  }





}
