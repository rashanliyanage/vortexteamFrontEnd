import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/serviceProvider.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
class EditAbout{
    
    name:string;
    email:string;
    phoneNumber:string;
    address:string;
    qualification:string;
    expirience:string;
    userId:string;
    }

@Component({
    selector: 'app-vewer-dashbord',
    templateUrl: './viewAbout.html',
    styleUrls: ['./viewAbout.scss'],
    providers:[ProfileService]
    
  })

  export class ViewAbout implements OnInit {
      userId:string;
      UserId_1= {
        
          userId:''
        }
    constructor(private profileService:ProfileService, private http:Http,private router:Router) { }
ngOnInit(){

this.UserId_1.userId =JSON.parse(localStorage.getItem('viewsp'));
console.log('first is'+this.UserId_1.userId);
this.getEditAbout();
    
}


editAbout: EditAbout={
    
      name:'',
      email:'',
      phoneNumber:'',
      address:'',
      qualification:'',
      expirience:'',
      userId:''
    
    
    }

getEditAbout(){
    this.UserId_1.userId =JSON.parse(localStorage.getItem('viewsp'));
    console.log('this'+this.UserId_1.userId);

this.profileService.getEditget(this.UserId_1)
.then(response=>{

this.editAbout =response;
console.log(this.getEditAbout);

console.log(this.editAbout);
  }).catch(err=>{

    console.log('err in get about ');

  });

}

  }