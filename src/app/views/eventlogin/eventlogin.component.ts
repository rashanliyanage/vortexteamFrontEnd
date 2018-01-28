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
userType:string;
  constructor( private eventService:EventService,private router:Router) { }
 eventid:string;
 UserId:string;
 isPsswordMatch:boolean =false;
 isAddedSpProvider:boolean =false;
 islogged:boolean =false;
 isMember:boolean = false;
  ngOnInit() {
    if(this.userType == "organizer"){
    if((localStorage.getItem('eventid'))){
      this.router.navigate(['/eventbody']);

    }
  }
 
  
    this.UserId =JSON.parse(localStorage.getItem('user'));
    this.userType = JSON.parse(localStorage.getItem('usertype'));
    
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
  this.router.navigate(['/eventbody']);
  console.log('in ther organzer if');
  console.log(this.userType);



}else if(response.success == 400){
  console.log('you are not member');
  this.isMember =true;
}


}).catch(err=>{

console.log(err);

})

}

  loginChat(){
    this.event.userId = JSON.parse(localStorage.getItem('user'));

this.eventService.loginChat(this.event)
 .then(response=>{

  if(response.success == true){
    localStorage.setItem('eventname',JSON.stringify(this.eventname));
    localStorage.setItem('eventid',JSON.stringify(response.eventid));
    this.islogged =true;
    this.router.navigate(['/chat/chatroom']);

    console.log('succes lofin chat');
  }
  if(response.success ==400){
    this.isAddedSpProvider =true;
    console.log('you cannot login this chat');

  }
  if(response.success == false){
    this.isPsswordMatch =true;

console.log('password wrong');

  }

}).catch(err=>{

  console.log('err');

});


  }

  

}
