import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';
class Url{
    success:boolean;
    status:string;
    message:string;
    photodata:string;
    
  }
@Injectable()


export class ProfileService{
    private webApi_get_profile_pic='http://localhost:3000/api/profile/getProfilePicture'
    private webApi_upload_profile_pic = 'http://localhost:3000/api/profile/updateProfilePicture';
    private webApi_authenticate = 'http://localhost:3000/api/authenticate';
    private headers = new Headers({'Content-Type' : 'application/json'});

    constructor(private http: Http,private router: Router) { }

uploadProfilePicture(formdata:any):Promise<Url>{
    console.log(formdata);
   return this.http.post(this.webApi_upload_profile_pic,formdata, {headers: this.headers})
   .toPromise()
   .then(response=>{
    return response.json() as Url;

    }).catch(err=>{
        console.log('service '+err);
        return err;
    });
}

getUserProfilepicture():Promise<Url>{
    console.log();
   return this.http.get(this.webApi_get_profile_pic, {headers: this.headers})
   .toPromise()
   .then(response=>{
    return response.json() as Url;

    }).catch(err=>{
        console.log('service '+err);
        return err;
    });
}


}