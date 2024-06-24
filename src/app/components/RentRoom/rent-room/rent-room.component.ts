import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rent-room',
  templateUrl: './rent-room.component.html',
  styleUrls: ['./rent-room.component.scss']
})
export class RentRoomComponent implements OnInit {
  // _url="assets/Data/room.json";
  r_room=new FormGroup({
    num_rooms:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    price_service :new FormControl('',Validators.required),
    beds:new FormControl('',Validators.required),
    select:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    describe :new FormControl('',Validators.required),
    file :new FormControl('',Validators.required),
    });
       constructor(private http : HttpClient) { }
       message(){
         console.log(this.r_room);
      }

  // constructor( private _http:HttpClient) { }
  onSubmit(data)
  {

    // this._http.post(this._url,data).subscribe((result)=>
    // {
    //   console.warn("result",result)

    // })
    console.warn(data);


  }

  ngOnInit(): void {
  }

}
