import { Component, OnInit, ViewChild, ElementRef, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from '../pages/login/login.service';

import { ProfileService } from '../../services/serviceProvider.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import {EventService} from '../../services/event.service';

class Img {
  img: string;
  url: string;
  id: string;
  userId:string;


}
class AdminEvent{
  eventid:string;
  eventname:string;
  eventimg:string;
  eventdisctription:string;


}
class coverImg {
  img: string;
  id: string;
  

}


@Component({
  selector: 'app-my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ProfileService,EventService]

})
export class DashboardComponent implements OnInit {
  filesToUpload: Array<File> = [];
  AdminEventArray:AdminEvent[] =[];
  Subevent:AdminEvent[]  =[];
  constructor(private eventservice:EventService,private profileService: ProfileService, private http: Http, private router: Router) {

  }
  notificationIdObj ={
    userid:''


  }
  isClickedCoverButton = false;
  shownotificationview:boolean =false;

  count: string;
  userType: string;
  User: boolean;
  imagesArray = [];
  imageLinkArray = [];
  img = {
    img: '',
    url: '',
    id: ''

  }

  AdminId ={
    id:''


  }

  coverphoto: coverImg = {
    img: '',
    id: '',
   
  }
  imageDetailArray: Img[] = [];

  userId={
    userId:''

   }  
  ngOnInit() {
    if (!localStorage.getItem("user")) {
      this.router.navigate(['/pages/login']);


    }
    this.userType = JSON.parse(localStorage.getItem('usertype'));
    this.userId.userId =  JSON.parse(localStorage.getItem('user'));
    this.notificationIdObj.userid = JSON.parse(localStorage.getItem('user'));
    console.log('user' + this.userType);
    if (this.userType == 'service_provider' || this.userType == 'organizer') {
      this.User = true;
      console.log('user in  ' + this.userType);

    } else {
      this.User = false;

    }

    this.getAdverticement();
    this.getCoverPhoto();
   this. getAdminEvent()
   this.getSubEvent();
  }


  deleteImages(url: any, id: any) {

    var deleteImg = new Img();
    deleteImg.id = id;
    deleteImg.url = url;
    this.profileService.deleteAdverticement(deleteImg)
      .then(response => {

        location.reload();
      }).catch(err => {
        console.log(err);
      });


  }
  getSubEvent(){
    this.AdminId.id =JSON.parse(localStorage.getItem('user'));
    this.eventservice.getSubEvent(this.AdminId)
    .then(response=>{
      console.log("success get sub event");
      console.log(response);
      response.events.forEach(element => {
        console.log(element);

        var newobject =  new AdminEvent();
        newobject.eventid = element._id;
        newobject.eventname =element.BroadcastEvent.eventname;
        newobject.eventimg =element.BroadcastEvent.eventPictureUrl;
        newobject.eventdisctription =element.BroadcastEvent.eventDiscription;
        
        this.Subevent.push(newobject);
       
        
      });
      console.log(this.Subevent);


    })
    .catch(err=>{
      console.log('eror get sub event');

    });

  }


  getAdminEvent(){
    this.AdminId.id =JSON.parse(localStorage.getItem('user'));
      this.eventservice.getAdminEvent(this.AdminId)
      .then(response=>{
        console.log(response.events);
        console.log('succefully get admin event');
        response.events.forEach(element => {
          console.log(element);

          var newobject =  new AdminEvent();
          newobject.eventid = element._id;
          newobject.eventname =element.BroadcastEvent.eventname;
          newobject.eventimg =element.BroadcastEvent.eventPictureUrl;
          newobject.eventdisctription =element.BroadcastEvent.eventDiscription;
          
          this.AdminEventArray.push(newobject);
         
          
        });
        console.log(this.AdminEventArray);

      })
      .catch(err=>{
        console.log('error get admin');

      })



  }
  uploadCoverPhoto() {
    console.log('in the upload call');
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    this.isClickedCoverButton = false;
    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i]['name']);
    }
    formData.append("userId",this.userId.userId);
    console.log(formData);
    this.http.post('http://localhost:3000/api/Add_2/updateCoverPhoto', formData).toPromise()
      .then((response) => {
        this.coverphoto = response.json() as coverImg;

      }).catch((err) => {

        console.log('err');

      })


  }

  getAdverticement() {
    this.profileService.getAllAdd(this.userId)
      .then(response => {
        for (var i = 0; i < response.imgArray.length; i++) {
          var newImg = new Img();
          newImg.img = response.imgArray[(response.imgArray.length - 1) - i];
          newImg.id = response.id;
          newImg.url = response.imgLinkArray[(response.imgArray.length - 1) - i];

          this.imageDetailArray.push(newImg);
        }


      }).catch(err => {

        console.log('in dash err');
      })

  }
  viewCoverButton() {

    this.isClickedCoverButton = true;

  }
  getCoverPhoto() {

    this.profileService.getCovePoto(this.userId)
      .then(response => {
        this.coverphoto = response;



      }).catch(err => {

        console.log('cover get err');

      });


  }


  


  fileChangeEvent(fileInput: any) {

    this.filesToUpload = <Array<File>>fileInput.target.files;

    //this.product.photo = fileInput.target.files[0]['name'];
  }


}
