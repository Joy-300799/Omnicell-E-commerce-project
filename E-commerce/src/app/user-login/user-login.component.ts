import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(private router: Router) {}
  flag: boolean = true;
  
  ngOnInit(): void {
    this.flag = history.state.flag;
  }
  handleLogin():void {}
  handleRegister():void {}
  
  routerLogin():void {
    this.router.navigateByUrl("login");
    this.flag = true;
  }
  routerRegister():void {
    this.router.navigateByUrl("signup");
    this.flag = false;
  }
}
