import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-body',
  templateUrl: './event-body.component.html',
  styleUrls: ['./event-body.component.scss']
})
export class EventBodyComponent implements OnInit {

  constructor() { }
  eventname:string;

  ngOnInit() {
    this.eventname = JSON.parse(localStorage.getItem('eventname'));
  }

}