import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/components/Shared/userName.validator';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginowner',
  templateUrl: './loginowner.component.html',
  styleUrls: ['./loginowner.component.scss']
})
export class LoginownerComponent implements OnInit {
  varr;
  errvar;

  msg;

  registrationForm =this.fb.group
  ({

    emailAddress:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),forbiddenNameValidator(/admin@gmail.com/)]],
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

  ngOnInit(): void {
  }


  onSubmit()
  {


      var x=this.registrationForm.get('emailAddress').value;
      var y=this.registrationForm.get('password').value;

         this.http.post("http://localhost:56153/Api/Housing_Owner/housinglog",{"Email":x,
         "Password":y},{
            headers : new HttpHeaders().set("Content-Type","application/json")
         }).subscribe(res =>{
            if(res==false){
              console.log("not found");
              this.errvar="please enter valid details";
        }else{
         this.varr=res;
         console.log(" found");
         this.msg=this.varr;
        //  this.msg=this.varr;
        localStorage.setItem("UserName",this.msg);

        localStorage.setItem("showrentroom","true");

          console.log(" name is "+res);
          this.router.navigate(['/home']);


        }
      })





  }
}
