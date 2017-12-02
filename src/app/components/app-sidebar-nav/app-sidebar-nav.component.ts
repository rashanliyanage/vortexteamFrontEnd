import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {ProfileService} from '../../services/serviceProvider.service';
import {SidebarService} from '../../services/sheredServicesidebar.service';
// Import navigation elements
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


  }

@Component({
  selector: 'app-sidebar-nav',
  templateUrl:'./app-sidebar-nav.componet.html',
  styleUrls: ['./app-sidebar-nav.componet.scss'],
  providers:[ProfileService,SidebarService] 

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
    success:false,
    status: "",
    message:"",
    photodata:""
    }
   add:Add;
   constructor(private sidebarService:SidebarService,private http:Http,private router:Router,private profileService:ProfileService){}
   private headers = new Headers({'Content-Type' : 'application/json'});
   ngOnInit(){
   this.userType = JSON.parse(localStorage.getItem('usertype'));
    console.log('user'+this.userType);
    if(this.userType == 'service_provider'){
     this.getUserProfilePicture();

    }
  
   }
   getUserProfilePicture(){
    this.profileService.getUserProfilepicture()
    .then(response=>{
      this.url =response as Url;

    }).catch(err=>{

      console.log(err);

    });


   }

   viewButton(){
     this.isClickedButton =true;
   }
   viewButtonAdd(){
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
 this.http.post('http://localhost:3000/api/profile/updateProfilePicture',formData).toPromise()
    .then((response)=>{
      console.log('here is'+response);
      this.url =response.json() as Url ;
      console.log(this.url);
  
    }).catch((err)=>{
  
        console.log('err');
  
    })
  //   this.profileService.uploadProfilePicture(formData)
  //   .then(response=>{
  //     this.url =response as Url;
  //   console.log(this.url);
  //   }).catch(err=>{
  //     console.log(err);

  //   });
  
   }

   uploadAdd(){
    console.log('in the upload call');
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);
    this.isClickButtonAd=false;
    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    console.log(formData);
   
    this.http.post('http://localhost:3000/api/add/uploadAdd', formData).toPromise()
          .then((response)=>{
            this.add =response.json() as Add ;
          console.log(this.add);
        window.location.reload();
        
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
