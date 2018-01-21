import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent implements OnInit, AfterViewChecked { 

  @ViewChild('scroller') private feedContainer: ElementRef;
  
    constructor( private router: Router) { }
  
    ngOnInit() {

      if(!localStorage.getItem("firebase:authUser:AIzaSyD0a4zC9sfXTQnBMkJegJ1wMJ_LL822QOw:[DEFAULT]")) {
        
        this.router.navigate(['/chat/chatlogin']);
        
      }

    }
  
    scrollToBottom(): void {
      this.feedContainer.nativeElement.scrollTop
      = this.feedContainer.nativeElement.scrollHeight;
    }
  
    ngAfterViewChecked() {
      this.scrollToBottom();
    }



}
