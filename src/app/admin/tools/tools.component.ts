import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  isActive: boolean;
  active = false;
  id: number;

  data = [
    { name: 'john'},
    { name: 'Jane'},
    { name: 'KArl'},
    { name: 'Arlbert'}
  ];

  constructor() { }


  onKeyUp( email ) {
    // console.log($event.target.value);
    console.log(email.value);

  }

  addClass(id: any) {
    // this.active = !this.active;
    console.log(id);

    this.id = id

  }


  ngOnInit() {
  }

}

