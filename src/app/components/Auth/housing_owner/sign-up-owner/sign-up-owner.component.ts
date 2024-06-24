import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmpasswordValidator } from 'src/app/components/Shared/confirmPassword.Validator';
import { AuthService } from 'src/app/components/Shared/Services/auth.service';
import { forbiddenNameValidator } from 'src/app/components/Shared/userName.validator';



@Component({
  selector: 'app-sign-up-owner',
  templateUrl: './sign-up-owner.component.html',
  styleUrls: ['./sign-up-owner.component.scss']
})
export class SignUpOwnerComponent implements OnInit {
  registrationForm1 =this.fb.group
  ({
    name:['',[Validators.required,Validators.minLength(6),forbiddenNameValidator(/admin/)]],
    number:['',[Validators.required]],
    address:['',[Validators.required,Validators.required]],
    email:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confPassword:['',Validators.required]


  },{validators:[confirmpasswordValidator]});
  get fullName()
  {
    return this.registrationForm1.get('name');
  }
  get emailAddress()
  {
    return this.registrationForm1.get('email')
  }
  get number()
  {
    return this.registrationForm1.get('number');
  }

  errvar;

  constructor(private fb:FormBuilder,private router:Router,private authserv:AuthService, private http:HttpClient, private header:HttpHandler) { }

  ngOnInit(): void {
  }
  onSubmit(){

    this.http.post("http://localhost:56153/Api/Housing_Owner/housinginsert",{
    "User":{"name":this.registrationForm1.get('name').value,
    "phone":this.registrationForm1.get('number').value,
    "adress":this.registrationForm1.get('address').value,
    "email":this.registrationForm1.get('email').value,
    "pasword":this.registrationForm1.get('password').value
    }}).subscribe(res =>{
      if(res==false){console.log("not found");
      this.errvar="This email is Already teaken ";
  }else{console.log("found");
this.router.navigate(['/login']);}
  })
  }
}
