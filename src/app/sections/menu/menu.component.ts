import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(private authService: AuthService) { }
  logedIn:boolean = false;
  ngOnInit(): void {
    this.logedIn = this.authService.isUserAuthenticated();
  }

  public logOutUser() {
    this.authService.logOut();
  }

}
