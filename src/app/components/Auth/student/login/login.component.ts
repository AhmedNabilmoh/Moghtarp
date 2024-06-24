import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLinkActive } from '@angular/router';
import { forbiddenNameValidator } from 'src/app/components/Shared/userName.validator';
import { HeaderNavComponent } from 'src/app/components/header-nav/header-nav.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registrationForm =this.fb.group
  ({

    emailAddress:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),forbiddenNameValidator (/admin@gmail.com/)]],
    password:['',Validators.required]



  });
  get emailAddress()
  {
    return this.registrationForm.get('emailAddress')
  }
  get password()
  {
    return this.registrationForm.get('password')
  }

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  varr;
  errvar;

  msg;


  ngOnInit(): void {
    // this.msg=this.varr;


  }
  onSubmit()
  {

      var x=this.registrationForm.get('emailAddress').value;
      var y=this.registrationForm.get('password').value;

         this.http.post("http://localhost:56153/Api/Students/StudentLogin",{"Email":x,
         "Password":y},{
            headers : new HttpHeaders().set("Content-Type","application/json")
         }).subscribe(res =>{
            if(res==false){
              this.errvar="please enter valid details";
        }else{
         this.varr=res;
         this.msg=this.varr;
        //  this.msg=this.varr;
        localStorage.setItem("UserName",this.msg);
        localStorage.setItem("logOut","false");
          console.log(" name is "+res);
          this.router.navigate(['/home']);


        }
      })




  }
}
