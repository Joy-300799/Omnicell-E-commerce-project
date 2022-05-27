import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private router: Router,
    private service: AuthenticationService,
    private logservice: SearchService
  ) {}
  flag: boolean = true;
  username: any;
  firstPassword: any;
  secondPassword: any;
  phoneNumber: any;
  emailId: any;

  loggedIn: boolean = false;

  ngOnInit(): void {
    this.flag = history.state.flag;
  }

  handleLogin(): void {
    this.service
      .login(new LoginDetails(this.username, this.firstPassword))
      .subscribe({
        next: (response) => {
          console.log(response);
          localStorage.setItem('token', response);
          this.logservice.changeLoginToLogout();
          this.router.navigateByUrl('/home/' + this.username);
        },
        error: (error) => console.log(error),
      });
  }

  handleSignUp(): void {
    if (this.firstPassword === this.secondPassword) {
      this.service
        .signUp(
          new SignUpDetails(
            this.username,
            this.firstPassword,
            this.phoneNumber,
            this.emailId
          )
        )
        .subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (error) => console.log(error),
        });
    }
  }

  routerLogin(): void {
    this.flag = true;
    this.resetFormFields();
    this.router.navigateByUrl('login');
  }

  routerSignUp(): void {
    this.flag = false;
    this.resetFormFields();
    this.router.navigateByUrl('signup');
  }

  resetFormFields() {
    this.username = '';
    this.firstPassword = '';
    this.secondPassword = '';
  }
}

class SignUpDetails {
  username: string;
  password: string;
  phoneNumber: number;
  email: string;

  constructor(
    username: string,
    password: string,
    phoneNumber: number,
    email: string
  ) {
    this.username = username;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}

class LoginDetails {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
