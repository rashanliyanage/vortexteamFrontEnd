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
  class Add{
    success:boolean;
    status:string;
    id:string;
    imgArray:string[];
    imgLinkArray:string[];

  }
@Injectable()


export class ProfileService{
    private webApi_get_profile_pic='http://localhost:3000/api/profile/getProfilePicture'
    private webApi_upload_profile_pic = 'http://localhost:3000/api/profile/updateProfilePicture';
    private webApi_authenticate = 'http://localhost:3000/api/authenticate';
    private webApi_getAllAdd = 'http://localhost:3000/api/add/getAdd';

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

getAllAdd():Promise<Add>{

return this.http.get( this.webApi_getAllAdd, {headers: this.headers})
.toPromise().then(response=>{
return response.json() as Add;


}).catch(err=>{
    console.log('err get add in service');
    return err;
})

}

deleteAdverticement(deleteImg):Promise<any>{

console.log('in delet service');
const webApi_deletAdverticement ="http://localhost:3000/api/add/deleteAddverticement";
return this.http.post(webApi_deletAdverticement,deleteImg, {headers: this.headers})
.toPromise()
.then(response=>{
 return response.json();

}).catch(err=>{
console.log('err delete in service');

});

}


}