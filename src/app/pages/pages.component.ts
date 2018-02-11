import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PagesComponent implements OnInit {



  constructor() {
    console.log('Pages loaded');

  }

  ngOnInit() {
  }

}
