import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {ProfileService} from '../../services/serviceProvider.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
class Event {
  
  adzname:string;
  priceforservice:string;
  adzdescription:string;
  contactnumbers:string;
  adzpicurl: string;
  picurl: string;
  
  }
  class EventDetail{
    eventname:string;
    eventdiscription:string;
    eventtheam:string;


  }
  
@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.scss'],
  providers:[ProfileService]
})
export class MyEventComponent implements OnInit {
myeventArray:Event[]=[];
  constructor(private http:Http,private profileService:ProfileService) { }

  ngOnInit() {
    this.event.userId =JSON.parse(localStorage.getItem('user'));
    this.getmyevent();
  
  }

  User= {

    UserId:''
  }
  filesToUpload: Array<File> = [];
  eventDetailArray:EventDetail[]=[];
 
  formdata:boolean =false;
  event={


    eventname:'',
    eventdiscription:'',
    phonenumber:'',
    price:'',
    userId:''

  }
  eventTheam:'';
  uploadEvent(){
    console.log('in the upload call');
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
console.log(formData);
if(files.length == 0 ){
  this.formdata =true;

}else {
  this.formdata =false;

}
    for(let i =0; i < files.length; i++){
      console.log(files.length);
      
      
      
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    formData.append("eventname",this.event.eventname);
    formData.append("eventdiscription",this.event.eventdiscription);
    formData.append("phonenumber",this.event.phonenumber);
    formData.append("price",this.event.price);
    formData.append("userId",this.event.userId);
    

    if(this.formdata == true || formData ==''|| this.event.eventdiscription =='' || this.event.eventname =='' ||this.event.phonenumber==''||this.event.price==''){
      console.log('some feeld are not fill')
} else{

    this.http.post('http://localhost:3000/api/Add_2/myeventupload',formData)
    .toPromise()
    .then(response=>{
      //console.log(response);
      
    
    }).catch(err=>{

      console.log(err);

    });
    
  }
  }

  getmyevent(){
    this.User.UserId =JSON.parse(localStorage.getItem('user'));
  

this.profileService.getMyevent(this.User)
.then(response=>{
console.log(response);
console.log(response.adz);
response.adz.adz.forEach(element => {
  var myevent = new Event();
  myevent.adzname =element.adzname;
  myevent.adzdescription =element.adzdescription;
  myevent.picurl=element.picurl;
  myevent.contactnumbers =element.contactnumbers;
  myevent.priceforservice =element.priceforservice;
  this.myeventArray.push(myevent);
  
});
console.log(this.myeventArray);

  console.log('success get myevent');
})
.catch(err=>{

  console.log('error get my event');
})



  }


  fileChangeEvent(fileInput: any) {
    
    this.filesToUpload = <Array<File>>fileInput.target.files;
    
    //this.product.photo = fileInput.target.files[0]['name'];
  }

}
