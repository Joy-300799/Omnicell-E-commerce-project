import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username: string = "";
  password: string = "";
  showErrorMessage = false;


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToAdminDashBoard(){
    if(this.username==="admin" && this.password==="admin123"){
      this.router.navigateByUrl("adminDashboard");
      localStorage.setItem("key","value");
      this.showErrorMessage = false;
    }else{
      this.showErrorMessage = true;
    }
  
    
  }



}
