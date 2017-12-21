import { Component, OnInit } from '@angular/core';
import { FilterPipe} from '../filter.pipe';
import {EventService} from '../../services/event.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http/src/static_response';
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
  eventname:string;
  showmembers:boolean =false;
  organizername:''
  isadd:boolean = false;
  sendAddId ={
    eventId:'',
    selectedorganizerId:'',
    addeduser:'' 
  }
  constructor(private eventservice: EventService,private router:Router) { 
  
  
    }
  
  ngOnInit() {
    this.  getAllOrganizer();
   this.eventname = JSON.parse(localStorage.getItem('eventname'));
    this.sendAddId.eventId = JSON.parse(localStorage.getItem('eventid'));
    this.sendAddId.addeduser =JSON.parse(localStorage.getItem('user'));
   
    console.log('hear'+this.sendAddId.addeduser);
  
  
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
