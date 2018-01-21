import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import { Router } from '@angular/router';

class Event{

eventname:string;
password:string;
userId:string;

}
@Component({
  selector: 'app-eventlogin',
  templateUrl: './eventlogin.component.html',
  styleUrls: ['./eventlogin.component.scss'],
  providers:[EventService]
})
export class EventloginComponent implements OnInit {

  constructor( private eventService:EventService,private router:Router) { }
 eventid:string;
 UserId:string;
 isMember:boolean = false;
  ngOnInit() {
    console.log('in log');
    if((localStorage.getItem('eventid'))){
      this.router.navigate(['/eventbody']);

    }
    this.UserId =JSON.parse(localStorage.getItem('user'));
    
  }
  event:Event ={

  eventname:'',
password:'',
userId:''

  }
  eventname:string;
loginEvent(){
  this.event.userId = this.UserId;

this.eventService.loginEvent(this.event)
.then(response=>{
  console.log(response);

console.log();
if(response.success==true){
this.eventname = response.eventname;
localStorage.setItem('eventname',JSON.stringify(this.eventname));
localStorage.setItem('eventid',JSON.stringify(response.eventid));
console.log(this.eventname);
console.log('loging succesfully');
this.router.navigate(['/eventbody']);

}else if(response.success == 400){
  console.log('you are not member');

}

this.isMember =true;



}).catch(err=>{

console.log(err);

})

}

  

}
