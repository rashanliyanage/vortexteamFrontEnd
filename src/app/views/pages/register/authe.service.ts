import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import{ RegisterUser } from './registerOrganizerUser';
import 'rxjs/add/operator/map';

@Injectable()

export class AutheService{
  authToken:any;
  user:any;
  private webApi_register = 'http://localhost:3000/api/register';
  private webApi_authenticate = 'http://localhost:3000/api/authenticate';
  private headers = new Headers({'Content-Type' : 'application/json'});
  constructor(private http: Http) { }

  registerUser(user){
return this.http.post(this.webApi_register,user,{headers: this.headers})
.map(res=>res.json());

  }

  authenticateUser(user){
return this.http.post(this.webApi_authenticate,user,{headers: this.headers})
.map(res=>{
return res.json();

});
  }


}