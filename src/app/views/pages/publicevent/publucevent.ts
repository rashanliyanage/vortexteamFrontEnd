import { Component,OnInit } from '@angular/core';
import {PublishEvent} from './publishevent.service';
import { Router } from '@angular/router';
class Event{
    eventname:string;
    eventImg:string;
    discription:string;
    lat:number;
    lng:number;
    date:string;
    time:string;
    eventid:string;

}

@Component({
  templateUrl: './publicevnt.html',
  styleUrls: ['./publicevent.component.scss'],
  providers:[PublishEvent]
})
export class Publicevent implements OnInit {

    constructor(private publishservice: PublishEvent,private router:Router) { }

eventArray=[];
  coordinats ={
    lat:6.9271,
    lng:79.8612,
    eventId:''
    
     }

ngOnInit(){

    this.gerPublishEvent();
}

goParticipent(eventid){
    console.log(eventid);

    this.router.navigate(['/pages/participent',eventid]);
}


gerPublishEvent(){
console.log('in call');
this.publishservice.getPublishEvent()
.then(response=>{
    console.log(response.event);

    response.event.forEach(element => {
        console.log(element.BroadcastEvent);
        var newObject = new Event();
        newObject.date =element.BroadcastEvent.date;
        newObject.time =element.BroadcastEvent.time;
        newObject.eventname =element.BroadcastEvent.eventname;
        newObject.eventImg =element.BroadcastEvent.eventPictureUrl;
        newObject.lat =element.eventlocation.lat;
        newObject.lng =element.eventlocation.lng;
        newObject.eventid =element._id;
        newObject.discription =element.BroadcastEvent.eventDiscription;
        console.log(element._id);
        this.eventArray.push(newObject);
        console.log(this.eventArray);
        
    });



})
.catch(err=>{

    console.log(err);
});

}

}
