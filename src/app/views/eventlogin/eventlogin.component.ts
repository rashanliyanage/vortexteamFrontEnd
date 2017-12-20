import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import { Router } from '@angular/router';

class Event{

eventname:string;
password:string;

}
@Component({
  selector: 'app-eventlogin',
  templateUrl: './eventlogin.component.html',
  styleUrls: ['./eventlogin.component.scss'],
  providers:[EventService]
})
export class EventloginComponent implements OnInit {

  constructor( private eventService:EventService,private router:Router) { }

  ngOnInit() {
    console.log('in log');
  }
  event:Event ={

  eventname:'',
password:''

  }
  eventname:string;
loginEvent(){

this.eventService.loginEvent(this.event)
.then(response=>{

console.log();
if(response.success){
this.eventname = response.eventname;
localStorage.setItem('eventname',JSON.stringify(this.eventname));
console.log(this.eventname);
console.log('loging succesfully');
this.router.navigate(['/eventbody']);

}else{

console.log('login fail');

}

})

}

  

}
