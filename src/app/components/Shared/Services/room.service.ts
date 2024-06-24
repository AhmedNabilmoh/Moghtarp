import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IRooms } from '../interfaces/IRooms';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  //2-declar url that will get data from it
  _url="/assets/Data/room.json";
  //1-inject httpClient in constractor to deal with oprations  get post ..
  constructor(private _http:HttpClient) { }
  //3- make interface to return observable cast of it transfer of any type

  getAllRooms():Observable<IRooms[]>
  {
    //1 cast get iRooms
    //2-return Arr IRooms in method
    return this._http.get<IRooms[]>(this._url).pipe
    (
      catchError
      (
        (err)=>
        {
          return throwError(err.message || "please contact site Adminstrator")
        }
      ))
    //4-if errors will return msg error or customise error msg from me
    //5- method pipe take fun and return fun
  }

  
}
