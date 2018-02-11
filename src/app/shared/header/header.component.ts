import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuActive = false;

  constructor() { }

  ngOnInit() {
  }

  activate_menu() {
    // console.log('active');
    if (this.menuActive === false) {
      this.menuActive = true;
      return;
    }
    this.menuActive = false;

  }

}
