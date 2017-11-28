import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ProfileService} from '../../services/profile.component.service';
// Import navigation elements
class Url{
  
    status:string;
    message:string;
    photodata:string;
  
  }

@Component({
  selector: 'app-sidebar-nav',
  templateUrl:'./app-sidebar-nav.componet.html',
  styleUrls: ['./app-sidebar-nav.componet.scss'],
  providers:[ProfileService] 

})

export class AppSidebarNavComponent implements OnInit{
   userType:string;
   isClickButtonAd:boolean =false;
   isClickedButton:boolean=false;
   filesToUpload: Array<File> = [];
   status:string;
   message:string;
   photodata:string;
   url:Url = {
    status: "",
    message:"",
    photodata:""
    }
   constructor(private http:Http,private router:Router,private profileService:ProfileService){}
   ngOnInit(){
   this.userType = JSON.parse(localStorage.getItem('usertype'));
    console.log('user'+this.userType);
  
   }
   

   viewButton(){
     this.isClickedButton =true;
   }
   viewButtn_ad(){
     this.isClickButtonAd=true;
   }
   uploadProfilePicture(){
    console.log('in the upload call');
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);
    this.isClickedButton=false;
    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    console.log(formData);
   
    this.http.post('http://localhost:3000/api/profile/updateProfilePicture', formData).toPromise()
    .then((response)=>{
      console.log('here is'+response.json());
      this.url =response.json() as Url ;
  
  
    }).catch((err)=>{
  
        console.log('err');
  
    })
  
  }
  fileChangeEvent(fileInput: any) {
    
    this.filesToUpload = <Array<File>>fileInput.target.files;
    
    //this.product.photo = fileInput.target.files[0]['name'];
  }



}



 export const APP_SIDEBAR_NAV = [
   AppSidebarNavComponent,
 
 ];
