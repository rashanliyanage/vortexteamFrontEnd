import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../../services/serviceProvider.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
class EditAbout{
  
  name:string;
  email:string;
  phoneNumber:string;
  address:string;
  qualification:string;
  expirience:string;
  
  }



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers:[ProfileService]
})
export class AboutComponent implements OnInit {

  constructor(private profileService:ProfileService, private http:Http,private router:Router) { }
userType:string;
  ngOnInit() {
    this.userType = JSON.parse(localStorage.getItem('usertype'));
   this.getEditAbout();
  }

  editAbout: EditAbout={
    
      name:'',
      email:'',
      phoneNumber:'',
      address:'',
      qualification:'',
      expirience:''
    
    
    }
    aboutDetail:EditAbout ={
      name:'',
      email:'',
      phoneNumber:'',
      address:'',
      qualification:'',
      expirience:''


    };

    submitEdit(){

        this.profileService.submitEditAbout(this.editAbout)
        .then(response=>{
          this.editAbout =response;
         console.log(this.editAbout);

        }).catch(err=>{
          console.log('err submit ');
          console.log(err);

        });


    }

    getEditAbout(){

this.profileService.getEditget()
.then(response=>{

  this.editAbout =response;

console.log(this.editAbout);
    }).catch(err=>{

      console.log('err in get about ');

    });

}
}
