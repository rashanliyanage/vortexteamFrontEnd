import { Component, OnInit } from '@angular/core';
import { AuthService } from '../chatservice/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-logim-form',
  templateUrl: './chat-login-form.component.html',
  styleUrls: ['./chat-login-form.component.scss'],
  providers:[AuthService]
})
export class ChatLoginFormComponent { 


  email: string;
  password: string;
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    console.log('login() called from login-form component');
    this.authService.login(this.email, this.password)
    .catch(error => this.errorMsg = error.message);
  }

}