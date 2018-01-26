import { Component, OnInit } from '@angular/core';
import { FilterPipe} from '../filter.pipe';
import {FilterPipeSp} from './filtersp'
import {EventService} from '../../services/event.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http/src/static_response';
import { routes } from 'app/app.routing';

class Organizers{

name:string;
id:string;
pic:string;

}

@Component({
  selector: 'app-event-body',
  templateUrl: './event-body.component.html',
  styleUrls: ['./event-body.component.scss'],
  providers:[EventService]

})
export class EventBodyComponent implements OnInit {
  OrganizerDtail:Organizers[] =[];
  SpProviderArray:Organizers[] =[];
  // serviecProvider:Organizers[]=[];
  eventname:string;
  showSp:boolean =false;
  showmembers:boolean =false;
  organizername:''
  isadd:boolean = false;
  isvaliedemail:boolean =false;
  issuccess:boolean = false;
  sendAddId ={
    eventId:'',
    selectedorganizerId:'',
    addeduser:'' 
  }
  isFillAll:boolean =false;
 coordinats ={
lat:6.9271,
lng:79.8612,
eventId:''

 }
 getEventLocation_for_id ={
  eventId:''

 }

emailObject ={
recieveremail:'',
youremail:'',
yourPassword:'',
subjectOfthEmai:'',
contentoftheEmail:''


}

  constructor(private eventservice: EventService,private router:Router) { 
  
  
    }
  
  ngOnInit() {
    if(!localStorage.getItem('eventid')){

      this.router.navigate(['/eventlogin']);
    }
   
   this.eventname = JSON.parse(localStorage.getItem('eventname'));
    this.sendAddId.eventId = JSON.parse(localStorage.getItem('eventid'));
    this.coordinats.eventId =  JSON.parse(localStorage.getItem('eventid'));
    this.getEventLocation_for_id.eventId=  JSON.parse(localStorage.getItem('eventid'));
    this.sendAddId.addeduser =JSON.parse(localStorage.getItem('user'));
    this.getEventLocation();
    this.getAllOrganizer();
    this.getAllSpProvider();

   
    console.log('hear'+this.sendAddId.addeduser);
  
  
  }
spprovidername:string ='';

selectsp(id,sp){
console.log(id+''+name);
localStorage.setItem('viewsp',JSON.stringify(id));
this.router.navigate(["/view/viwerprofile"]);
}

validateEmail(email){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);

}
sendemail(){

  if(!this.emailObject.recieveremail|| !this.emailObject.youremail ||!this.emailObject.yourPassword||!this.emailObject.subjectOfthEmai||!this.emailObject.contentoftheEmail){
    this.isFillAll =true;
  


  }

  if(!this.validateEmail(this.emailObject.recieveremail)||!this.validateEmail(this.emailObject.youremail)){
    console.log(this.emailObject.recieveremail);
    console.log(this.emailObject.youremail);
    this.isvaliedemail =true;


  } else {

        this.eventservice.sendEmail(this.emailObject)
        .then(response=>{
          console.log('success fully send emai');
          console.log(response);
          if(response.succes ==200){
        

            this.issuccess =true;

          }


        }).catch(err=>{

          console.log('error send email');

        });

  }




}
logoutFromEvent(){

  localStorage.removeItem('eventid');
  localStorage.removeItem('eventname');
  this.router.navigate(['/eventlogin']);
}

  getEventLocation(){
console.log('get event location');
// console.log(this.eventId);
this.eventservice.getCoordinate( this.getEventLocation_for_id)
.then(response=>{
  this.coordinats.lat =response.lat;
  this.coordinats.lng = response.lng;
console.log(response);


}).catch(err=>{

console.log(err);

});
  }
  
  saveEventlocation(){
    console.log('save location');

    this.eventservice.saveEventLocation(this.coordinats)
    .then(response=>{
      this.coordinats.lat =response.lat;
      this.coordinats.lng = response.lng;


    }).catch(err=>{
console.log('err');

    });



  }

  getAllSpProvider(){
    console.log('in body com');

    this.eventservice.getAllSpProvider()
    .then(response=>
      {
      console.log(response);
      // this.OrganizerDtail.push(response.allOrganizerArray);
      
      for(var i =0;i<response.allOrganizerArray.length;i++){
    
       this.SpProviderArray.push(response.allOrganizerArray[i]); 
        console.log(response.allOrganizerArray[i]);

      }
      console.log('here is sp');
      console.log(this.SpProviderArray);
      
          }).catch(err=>{
            console.log(err);
      
          });
        }


  mapClick(event){
this.coordinats.lat =event.coords.lat;
this.coordinats.lng =event.coords.lng;
this.saveEventlocation();
    console.log(event);
  }

  DeleteOrganizer(){
    console.log(this.sendAddId);
    this.sendAddId.eventId =JSON.parse(localStorage.getItem('eventid'));
this.eventservice.deleteOrganizer(this.sendAddId)
.then(response=>{
console.log('success filly delete');

})
.catch(err=>{
  console.log(err);

});


  }
  closeAleart(){

    this.isadd =false;
  }
  addOrganizer(){
console.log('in add');
this.eventservice.addSelectedOrganizer(this.sendAddId)
.then(response=>{
console.log(response);
if(response.success==true){
  this.isadd =true;
}else{
this.isadd =false;

}


}).catch(err=>{

console.log(err);

});

  }
  selectorgaizer(id,name){
this.organizername = name;

this.sendAddId.selectedorganizerId =id;

this.showmembers =false;

  }
  valuechange($event){
var legth = this.organizername.length;
if(legth >=1){

this.showmembers =true;
}else{
this.showmembers =false;

}


  }
  valuechangeforsp($event){
    var legth = this.spprovidername.length;
    if(legth >=1){
    
    this.showSp =true;
    }else{
    this.showSp =false;
    
    }
    
    
      }

  getAllOrganizer(){
    console.log('in body com');

    this.eventservice.getAllorganizer()
    .then(response=>{
      console.log(response);
      // this.OrganizerDtail.push(response.allOrganizerArray);
      
      for(var i =0;i<response.allOrganizerArray.length;i++){
        var organizer = new Organizers();
       this. OrganizerDtail.push(response.allOrganizerArray[i]); 
        //console.log(response.allOrganizerArray[i]);

      } 

console.log(this.OrganizerDtail);

    }).catch(err=>{
      console.log(err);

    });
  }




}

interface marker {

name:string;
lat:number;
lng:number;
draggable:boolean;


}
