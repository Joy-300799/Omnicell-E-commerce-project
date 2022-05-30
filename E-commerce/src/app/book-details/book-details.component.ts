import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppServiceService } from '../services/app-service.service';
import { AuthenticationService } from '../services/authentication.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookName: any;
  book: any;
  username: string = "";
  allowed = true;
  cartBtnClicked = false;

  constructor(private bookService: AppServiceService, private route: ActivatedRoute,
    private userService: UserServiceService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.bookName = param.get("bookName") || "";
    })

    this.bookService.getBook(this.bookName).subscribe({
      next: (data) => {
        this.book = data;
        // if (this.book.quantity) {
        //   this.allowed = true;

        // } else {

        //   this.allowed = false;
        //   console.log(this.allowed);
        // }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  addToCart(bookName: string) {
    if (this.book.quantity) {
      this.userService.addBookToCart(localStorage.getItem("username") || "", bookName).subscribe({
        next: () => console.log("working"),
        error: (error) => {
          console.log(error);
          this.router.navigateByUrl("login");
        },
      });
      this.cartBtnClicked = true;
      setInterval(() => {
        this.cartBtnClicked = false;
      }, 1500);
    }
  }
}
