import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';
import { Response } from '@angular/http/src/static_response';
@Injectable()

export class ParticipentService{
    constructor(private http: Http,private router: Router) { }
    private headers = new Headers({'Content-Type' : 'application/json'});


    submitParticipent(participent){
return this.http.post('http://localhost:3000/api/event/submitparticipent',participent)
.toPromise()
.then(response=>{
    console.log( 'success participent ');

})
.catch(err=>{

    console.log('error submit participent');
})
    }

}