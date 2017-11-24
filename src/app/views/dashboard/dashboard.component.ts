import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService} from '../pages/login/login.service'
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
constructor(private loginservice:loginService,private router:Router){

}


ngOnInit() {
  if(!localStorage.getItem("user")) {
    this.router.navigate(['/pages/login']);

}

}
}