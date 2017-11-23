import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent { 

  constructor(
    private router: Router
  ) { }

  logout():void{
    
       
          localStorage.clear();
          this.router.navigate(['/pages/login']);
          window.location.reload();
        
      }


}
