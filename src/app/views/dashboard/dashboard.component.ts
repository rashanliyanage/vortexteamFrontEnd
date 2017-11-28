import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService} from '../pages/login/login.service';
import { FileUploader } from 'ng2-file-upload';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
class Url{

  status:string;
  message:string;
  photodata:string;

}
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls:['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {
constructor(private http:Http,private router:Router){

}

ngOnInit() {
  if(!localStorage.getItem("user")) {
    this.router.navigate(['/pages/login']);

}

}

}