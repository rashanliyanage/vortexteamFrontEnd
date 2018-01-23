import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from '../pages/login/login.service';
import { ProfileService } from '../../services/serviceProvider.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

class Img {
    img: string;
    url: string;
    id: string;
    userId:string;
  
  
  }
  class coverImg {
    img: string;
    id: string;
    
  
  }
@Component({
    selector: 'app-vewer-dashbord',
    templateUrl: './viewer-dashbord.html',
    styleUrls: ['./viewer-dashbord.scss'],
    providers:[ProfileService]
    
  })

  export class ViewerDashbord implements OnInit{
    userId={
        userId:''
    
       }
       imageDetailArray: Img[] = [];
    constructor(private profileService: ProfileService, private http: Http, private router: Router) {}

    ngOnInit() {


        this.userId.userId ="5a6692ed7317311dac40eec1";
        this.getCoverPhoto();
        this.getAdverticement();
    }

    coverphoto: coverImg = {
        img: '',
        id: '',
       
      }
     

      getCoverPhoto() {
        
            this.profileService.getCovePoto(this.userId)
              .then(response => {
                  console.log('here'+response);
                this.coverphoto = response;
        
        
        
              }).catch(err => {
        
                console.log('cover get err');
        
              });
        
        
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

  }

