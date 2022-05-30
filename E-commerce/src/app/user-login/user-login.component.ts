import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(private router: Router,
    private service: AuthenticationService,
    private logservice: SearchService) { }
  flag: boolean = true;
  username: any;
  firstPassword: any;
  secondPassword: any;
  phoneNumber: any;
  emailId: any;

  loggedIn: boolean = false;
  userAlreadyExistWarning = false;
  incorrectIdPasswordWarning = false;

  ngOnInit(): void {
    this.flag = history.state.flag;
  }

  checkForUser() {
    if (!this.flag) {
      this.service.isUserExist(this.username).subscribe({
        next: (data) => {
          this.userAlreadyExistWarning = Boolean(data);
          console.log(this.userAlreadyExistWarning);
        },
        error: (error) => console.log(error),
      })
    }
  }

  handleLogin(): void {
    this.service
      .login(new LoginDetails(this.username, this.firstPassword))
      .subscribe({
        next: (res) => {
          let obj = JSON.parse(res);
          console.log(obj.response);
          if (obj.role == "User") {
            localStorage.setItem("token", obj.response);
            localStorage.setItem("username", this.username);
            localStorage.setItem("role", obj.role);
            this.logservice.changeLoginToLogout();
            window.location.href = "/home/user";
          }else{
            this.incorrectIdPasswordWarning = true;
          }
        },
        error: (error) => {console.log(error);this.incorrectIdPasswordWarning = true},
      });
  }

  handleSignUp(): void {
    if (this.firstPassword === this.secondPassword) {
      this.service
        .signUp(new SignUpDetails(this.username, this.firstPassword, this.phoneNumber, this.emailId))
        .subscribe({
          next: (response) => {
            console.log(response);
            this.resetFormFields();

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
    this.username = "";
    this.firstPassword = "";
    this.secondPassword = "";
    this.phoneNumber = "";
    this.emailId = "";
  }
}

class SignUpDetails {
  username: string;
  password: string;
  phoneNumber: number;
  email: string;

  constructor(username: string, password: string, phoneNumber: number, email: string) {
    this.username = username;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}

export class LoginDetails {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
