
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import {ReplaySubject} from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

class respones {
    BroadcastEvent:string;
    eventlocation:string;
    id:string;


}
@Injectable()

export class PublishEvent{

    private headers = new Headers({'Content-Type' : 'application/json'});
    constructor(private http:Http){}



    getPublishEvent(){
        console.log('in service');
        return this.http.get('http://localhost:3000/api/event/getpublicevent',{headers: this.headers})
        .toPromise()
        .then(response=>{
            console.log(response.json());
            return response.json() ;
            


        })
        .catch(err=>{

            console.log(err);
        });

    }

}
