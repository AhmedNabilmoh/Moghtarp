import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit {

  constructor() { }
  backgrounds="../../../../assets/img/hero/h2_hero1.png";

  ngOnInit(): void {
  }

}
