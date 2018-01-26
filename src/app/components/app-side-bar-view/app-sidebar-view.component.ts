import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {ProfileService} from '../../services/serviceProvider.service'
class Url{
  success:boolean;
  status:string;
  message:string;
  photodata:string;
  
}
@Component({
    selector: 'app-sidebar-view',
    templateUrl:'./app-sidebar-view.html',
    styleUrls: ['./app-sidebar-view.scss'],
    providers:[ProfileService]
  
  })
  export class SidebarView implements OnInit{
    userId={
      userId:''
  
     }
     
    constructor(private http:Http,private router:Router,private profileService:ProfileService){}

ngOnInit(){
  
  this.userId.userId =JSON.parse(localStorage.getItem('viewsp'));
  console.log( this.userId.userId);
  
//  this.userId.userId="5a6692ed7317311dac40eec1";
  this.getUserProfilePicture();
}
url:Url = {
  success:false,
  status: "",
  message:"",
  photodata:""
  }

 

getUserProfilePicture(){
  this.profileService.getUserProfilepicture(this.userId)
  .then(response=>{
    console.log(response);
    this.url =response as Url;

  }).catch(err=>{

    console.log(err);

  });


 }


  }
  