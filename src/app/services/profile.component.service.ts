import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import 'rxjs/add/operator/map';
@Injectable()

export class ProfileService{

    private webApi_upload_profile_pic = 'http://localhost:3000/api/profile/updateProfilePicture';
    private webApi_authenticate = 'http://localhost:3000/api/authenticate';
    private headers = new Headers({'Content-Type' : 'application/json'});

    constructor(private http: Http,private router: Router) { }


    uploadProfilePicture(formdata:any){
        console.log('in the uploda service');
        console.log(formdata);
       return this.http.post(this.webApi_upload_profile_pic,formdata,{headers: this.headers})
        .map((res)=>{

            return res.json();
        });
    }

}

