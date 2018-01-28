import { Component,OnInit } from '@angular/core';
import {ParticipentService} from './paricipent.service';
import { Router,ActivatedRoute, Params } from '@angular/router';


@Component({
  templateUrl: './participent.html',
  styleUrls: ['./participent.scss'],
  providers:[ParticipentService]
})
export class ParticipentCompoent implements OnInit {
    id:string;
    constructor(private ParticipentService: ParticipentService, private route: ActivatedRoute,private router:Router) { }

    ngOnInit(){
      this.id =  this.route.snapshot.paramMap.get('eventid');
        console.log('other page id is '+this.id);
    
    }

    participent ={
        email:'',
        phonenumber:'',
        name:'',
        eventid:''


    }

    submitParticipent(){
        console.log('in submit method');
        this.participent.eventid =this.route.snapshot.paramMap.get('eventid');

this.ParticipentService.submitParticipent(this.participent)
.then(response=>{

    console.log('success in submit ');
})
.catch(err=>{

    console.log('erro submit');
})


    }

}