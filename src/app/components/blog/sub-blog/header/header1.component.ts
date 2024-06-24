import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component implements OnInit {

  constructor() { }

  backgrounds="../../../../assets/img/hero/h1_hero.png";

  ngOnInit(): void {
  }

}
