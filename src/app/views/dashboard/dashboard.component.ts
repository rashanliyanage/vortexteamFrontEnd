import { Component, OnInit,ViewChild, ElementRef, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { loginService} from '../pages/login/login.service';
import { FileUploader } from 'ng2-file-upload';
import {ProfileService} from '../../services/serviceProvider.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

class Img{
  img:string;
  url:string;
  id:string;


}


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls:['./dashboard.component.scss'],
  providers:[ProfileService]

})
export class DashboardComponent implements OnInit {
  filesToUpload: Array<File> = [];
constructor(private profileService:ProfileService, private http:Http,private router:Router){

}
count:string;
userType:string;
imagesArray=[];
imageLinkArray =[];
img ={
  img:'',
  url:'',
  id:''

}
imageDetailArray:Img[]=[];

ngOnInit() {
  if(!localStorage.getItem("user")) {
    this.router.navigate(['/pages/login']);
   
    
}
this.userType = JSON.parse(localStorage.getItem('usertype'));
console.log('user'+this.userType);
console.log('in dash');
this.getAdverticement();
}
deleteImages(url:any,id:any){
  console.log(id);
  var deleteImg = new Img();
    deleteImg.id =id;
    deleteImg.url =url;
    this.profileService.deleteAdverticement(deleteImg)
    .then(response=>{
      console.log('delete succesfully');
      location.reload();
    }).catch(err=>{
      console.log(err);
    });
    

}
uploadCoverPhoto(){
  console.log('in the upload call');
  const formData: any = new FormData();
  const files: Array<File> = this.filesToUpload;
  console.log(files);
  
  for(let i =0; i < files.length; i++){
      formData.append("uploads[]", files[i], files[i]['name']);
  }
  console.log(formData);
this.http.post('http://localhost:3000/api/Add_2/updateCoverPhoto',formData).toPromise()
  .then((response)=>{
  this.img =response.json() as Img;
  console.log(this.img);

  }).catch((err)=>{

      console.log('err');

  })


}

 getAdverticement(){
    this.profileService.getAllAdd()
    .then(response=>{
      for(var i=0;i<response.imgArray.length;i++){
         var newImg =new Img();
         newImg.img =response.imgArray[(response.imgArray.length-1)-i];
         newImg.id=response.id;
         newImg.url =response.imgLinkArray[(response.imgArray.length-1)-i];
       
         this.imageDetailArray.push(newImg);
      }
      console.log(this.imageDetailArray);
      
    }).catch(err=>{

      console.log('in dash err');
    })

 }

 fileChangeEvent(fileInput: any) {
  
  this.filesToUpload = <Array<File>>fileInput.target.files;
  
  //this.product.photo = fileInput.target.files[0]['name'];
}


}
