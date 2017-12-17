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
  constructor(private eventservice: EventService,private router:Router) { 
  
  
    }
  
  ngOnInit() {
    this.  getAllOrganizer();
    this.eventname = JSON.parse(localStorage.getItem('eventname'));
  
  
  }
  organizerArray = [
    {name:'rashan',id:'1'},
    {name:'nipun',id:'2'},
    {name:'kasun',id:'3'},
    {name:'akila',id:'4'}

  ]
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
