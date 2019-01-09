import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo App';

  cookieValue: string = "Demo";
  getCookieValue: string;

  constructor(private cookieService: CookieService){

  }

  setCookie(){
    this.cookieService.set('Name',this.cookieValue); 
  }
  getCookie(){
    this.getCookieValue = this.cookieService.get('Name');
  }
}
