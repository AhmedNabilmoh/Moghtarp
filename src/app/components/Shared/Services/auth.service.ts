import{environment} from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http:HttpClient,) { }

  register(user)
  {
    return this.http.post('${environment.apiUrl}/auth/this.register',user);
  }
}
