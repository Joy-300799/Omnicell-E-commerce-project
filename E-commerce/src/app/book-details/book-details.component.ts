import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookName: any;
  book: any;

  constructor(private bookService: AppServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.bookName = param.get("bookName") || "";
    })

    this.bookService.getBook(this.bookName).subscribe({
      next: (data) => {
        this.book = data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  addToCart() {
    console.log("add to cart");
  }



}
