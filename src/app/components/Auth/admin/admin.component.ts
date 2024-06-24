import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  registrationForm =this.fb.group
  ({
    
    emailAddress:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
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


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
