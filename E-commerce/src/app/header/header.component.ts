import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchWord: string = "";
  userLoggedIn = false;
  adminloggedIn = false;
  noOneLoggedIn = true;

  loginBtnClicked: boolean = true;
  constructor(private searchService: SearchService,
    private router: Router, private route: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit(): void {
    if (localStorage.getItem("role") === "Admin") {
      this.adminloggedIn = true;
      this.noOneLoggedIn = false;
      this.userLoggedIn = false;
    } else if (localStorage.getItem("role") === "User") {
      this.userLoggedIn = true;
      this.noOneLoggedIn = false;
      this.adminloggedIn = false;
    } else {
      this.noOneLoggedIn = true;
      this.userLoggedIn = false;
      this.adminloggedIn = false;
    }




    // this.searchService.logout.subscribe({
    //   next: () => {
    //     this.userLoggedIn = false;
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }
    // })
    // this.searchService.changeAfterAdminLogin.subscribe({
    //   next: (data) => {
    //     this.adminloggedIn = true;
    //     console.log("login ",this.adminloggedIn);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // })

    // this.searchService.changeAfterAdminLogOut.subscribe({
    //   next: (data) => {
    //     this.adminloggedIn = false;
    //     console.log("login",this.adminloggedIn);

    //   }
    // })
  }

  goToCategory() {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigateByUrl("home/user/category");
    } else {
      this.router.navigateByUrl("category");
    }

  }

  search() {
    this.searchService.search(this.searchWord);
  }

  logOut() {
    localStorage.clear();
    this.userLoggedIn = false;
    window.location.href = "login";
  }

  goToCart() {
    this.router.navigateByUrl("home/user/cart")
  }

}
