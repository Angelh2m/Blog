import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  side = {
    side1: '../../../assets/local/side1.jpg',
    side2: '../../../assets/local/side2.jpg',
    side3: '../../../assets/local/side3.jpg',
    side4: '../../../assets/local/side4.jpg',
  };

  constructor() { }

  ngOnInit() {
  }

}
