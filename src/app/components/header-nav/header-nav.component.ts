import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  bol2=false;


  constructor( private _rout:Router,private _router:ActivatedRoute) { }


  bol=true;


  userName;

logout()
{

  // if(localStorage.getItem('logOut')=="false"){

  localStorage.removeItem('UserName');
  console.log("donn");
  document.getElementById("acount").style.opacity="1";
  console.log("donn11111");
  document.getElementById("signout").style.opacity="0";
  console.log("donn22222222");

  // localStorage.setItem("logOut","false");
  // }

  localStorage.setItem("showrentroom","false");
  this._rout.navigate(['/Loginowner']);

}


  toggleIcon(){

  }
  ngOnInit(): void {

    if(localStorage.getItem('UserName')!=null){

      //localStorage.removeItem('UserName');
      console.log("donn");
      document.getElementById("acount").style.opacity="0";
      console.log("donn11111");
      document.getElementById("signout").style.opacity="1";
      console.log("donn22222222");}

    console.log(localStorage.getItem("UserName"));


    // if(localStorage.getItem('logOut')=="false"){
    this.userName=localStorage.getItem('UserName');
    // console.log(this.userName);
  // }
    var icon=document.getElementById('icon');
    var links=document.getElementById('links');
    var navbar=document.querySelector('nav');
    icon.onclick=function(){
      links.classList.toggle('toggle')
    }
    // fixed navbar
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 763) {
      navbar.classList.add("fixed");
  } else {
      navbar.classList.remove("fixed");
  }
});

if(localStorage.getItem("UserName")){this.bol=false;}

if(this.bol2==false){document.getElementById("rentRoom").style.display="none";}

console.log(typeof localStorage.getItem("showrentroom"))
if(localStorage.getItem("showrentroom")=="true"){
  console.log("printtt");
  document.getElementById("rentRoom").style.display="inline";
}
else
{
  document.getElementById("rentRoom").style.display="none";

}




  }



}






