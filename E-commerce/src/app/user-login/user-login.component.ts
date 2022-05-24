import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(private router: Router, private service: AuthenticationService) { }
  flag: boolean = true;
  username: any;
  firstPassword: any;
  secondPassword: any;

  ngOnInit(): void {
    this.flag = history.state.flag;
  }
  handleLogin(): void {
    this.service.login(new UsernamePassword(this.username, this.firstPassword)).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
  handleRegister(): void {
    if (this.firstPassword === this.secondPassword) {
      this.service.signUp(new UsernamePassword(this.username, this.firstPassword)).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      })
    }
  }

  routerLogin(): void {
    this.router.navigateByUrl("login");
    this.flag = true;
  }
  routerRegister(): void {
    this.router.navigateByUrl("signup");
    this.flag = false;
  }


}

class UsernamePassword {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
