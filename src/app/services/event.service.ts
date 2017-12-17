import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';


@Injectable()

export class EventService{


    constructor(private http: Http,private router: Router) { }
    private headers = new Headers({'Content-Type' : 'application/json'});
    private web_Api_register = 'http://localhost:3000/api/event/registerEvent';
    private web_Api_login = 'http://localhost:3000/api/event/login';

    registerEvent(registerevent){

        return this.http.post(this.web_Api_register,registerevent,{headers: this.headers})
        .toPromise()
        .then(response=>{
                return response.json();



        }).catch(err=>{
            console.log('err regsirer event');
            return err;

        });



    }

    loginEvent(event){
   
     return this.http.post(this.web_Api_login,event,{headers: this.headers})
.toPromise()
.then(response=>{

return response.json() ;

}).catch(err=>{

console.log(err);
return err;

});



    }


}