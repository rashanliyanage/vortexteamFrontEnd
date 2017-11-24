import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService}from '../../views/pages/login/login.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  
  constructor(
    private router: Router,
    private loginservice:loginService
  ) { }
  isUserType:string;
  ngOnInit() {
    if(!localStorage.getItem("user")) {
      
      this.router.navigate(['/pages/login']);
      
    }

    
  }
}
