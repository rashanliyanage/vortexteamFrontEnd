import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/serviceProvider.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Component({
    selector: 'app-vewer-dashbord',
    templateUrl: './viewmyactivity.html',
    styleUrls: ['./viewmyactivity.scss'],
    providers:[ProfileService]
    
  })

  export class ViewMyActivity implements OnInit{

ngOnInit(){}

  }