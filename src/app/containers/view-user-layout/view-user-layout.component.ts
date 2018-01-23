import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './view-user-layout.component.html'
  })

  export class ViewLayoutComponent {

    constructor(
        private router: Router,
       ) { }

       ngOnInit() {}

  }