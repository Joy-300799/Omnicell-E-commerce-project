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
  constructor(private router: Router,
    private service: AuthenticationService,
    private logservice: SearchService) { }
  flag: boolean = true;
  username: any;
  firstPassword: any;
  secondPassword: any;
  
  loggedIn: boolean = false;

  ngOnInit(): void {
    this.flag = history.state.flag;
  }

  handleLogin(): void {
    this.service
      .login(new UsernamePassword(this.username, this.firstPassword))
      .subscribe({
        next: (response) => {
          console.log(response);
          this.logservice.changeLoginToLogout();
          this.router.navigateByUrl("");
        },
        error: (error) => console.log(error),
      });
  }

  handleSignUp(): void {
    if (this.firstPassword === this.secondPassword) {
      this.service
        .signUp(new UsernamePassword(this.username, this.firstPassword))
        .subscribe({
          next: (response) => {
            console.log(response);
            // this.logservice.changeLoginToLogout();
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
