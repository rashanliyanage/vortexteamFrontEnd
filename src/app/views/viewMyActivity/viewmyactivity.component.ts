import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/serviceProvider.service';
import { Http } from '@angular/http';
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

@Component({
    selector: 'app-vewer-dashbord',
    templateUrl: './viewmyactivity.html',
    styleUrls: ['./viewmyactivity.scss'],
    providers:[ProfileService]
    
  })

  export class ViewMyActivity implements OnInit{
    myeventArray:Event[]=[];

    constructor(private http:Http,private profileService:ProfileService) { }
ngOnInit(){
  this.getmyevent()
}

User= {
  
      UserId:''
    }



  getmyevent(){
    this.User.UserId =JSON.parse(localStorage.getItem('viewsp'));
  

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

  }