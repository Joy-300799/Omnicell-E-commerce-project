import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { SearchService } from '../services/search.service';
import { LoginDetails } from '../user-login/user-login.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username: string = "";
  password: string = "";
  showErrorMessage = false;


  constructor(private router : Router,
              private authService :AuthenticationService,
              private logService: SearchService) { }

  ngOnInit(): void {
  }

  goToAdminDashBoard(){

    this.authService
      .login(new LoginDetails(this.username, this.password))
      .subscribe({
        next: (res) => {
          let obj = JSON.parse(res);
          console.log(obj.response);
          localStorage.setItem("token", obj.response);
          localStorage.setItem("username",this.username);
          localStorage.setItem("role", obj.role);
          if(obj.role=="User"){
            this.logService.changeLoginToLogout();
            // this.router.navigateByUrl("/home/user" + this.username);
            window.location.href = "/home/user";
            // history.go(0);            
          }else if(obj.role=="Admin"){
            this.logService.hideIconAfterAdminLogin();
            // this.router.navigateByUrl("adminDashboard");
            window.location.href = "adminDashboard";         
          }else{
            this.router.navigateByUrl("");
          }
        },
        error: (error) => {console.log(error);this.showErrorMessage = true},
      });
  
    
  }



}
