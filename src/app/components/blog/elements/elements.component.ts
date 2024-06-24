import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  constructor( private _router:Router,private _rout:ActivatedRoute) { }
  backgrounds="../../../../assets/img/hero/h2_hero1.png";

  // left aligned img
  LRAlignedImg="../../../../assets/img/elements/d.jpg";
  //table flag
  canada="../../../../assets/img/elements/f1.jpg";
  canada2="../../../../assets/img/elements/f2.jpg";
  canada3="../../../../assets/img/elements/f3.jpg";
  canada4="../../../../assets/img/elements/f4.jpg";
  canada5="../../../../assets/img/elements/f5.jpg";
  canada6="../../../../assets/img/elements/f6.jpg";
  canada7="../../../../assets/img/elements/f7.jpg";
  canada8="../../../../assets/img/elements/f8.jpg";

  //function to open gelley by router child
  gotogellery(){
    this._router.navigate(["gallery"],{relativeTo:this._rout})
  }

  ngOnInit(): void {
  }

}
