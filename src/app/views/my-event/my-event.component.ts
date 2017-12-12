import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {ProfileService} from '../../services/serviceProvider.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
class Event {
  
    EventTheamArray:string[];
    eventNameArray:string[];
    eventDiscriptionArray:string[];
  
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

  constructor(private http:Http,private profileService:ProfileService) { }

  ngOnInit() {
  }
  filesToUpload: Array<File> = [];
  eventDetailArray:EventDetail[];
  event={


    eventname:'',
    eventdiscription:'',
    eventtheam:''

  }
  eventTheam:'';
  uploadEvent(){
    console.log('in the upload call');
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

  
    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }

    this.http.post('http://localhost:3000/api/Add_2/uploadEventPhoto',formData)
    .toPromise()
    .then(response=>{
      //console.log(response);
    
    }).catch(err=>{

      console.log(err);

    });

    this.profileService.uploadEventData(this.event)
   .then(response=>{
     console.log('in then');
     console.log(response.eventDiscriptionArray);
     console.log(response.EventTheamArray);
    for(var i =0;i<response.eventNameArray.length;i++){
             var eventdetail =new EventDetail();
              
            console.log( response.eventNameArray[(response.eventNameArray.length-1)-i]);
           eventdetail.eventname = response.eventNameArray[(response.eventNameArray.length-1)-i];
           eventdetail.eventdiscription = response.eventDiscriptionArray[(response.eventNameArray.length-1)-i];
          eventdetail.eventtheam =response.EventTheamArray[(response.eventNameArray.length-1)-i];
          this.eventDetailArray.push(eventdetail);
            console.log(this.eventDetailArray);
    }


   }).catch(err=>{


    console.log('event catch');
   });
    
 
  }
  


  fileChangeEvent(fileInput: any) {
    
    this.filesToUpload = <Array<File>>fileInput.target.files;
    
    //this.product.photo = fileInput.target.files[0]['name'];
  }

}
