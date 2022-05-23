import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookList: any;

  constructor(private service: AppServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe({
      next: (data) => {
        this.bookList = data;
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("completed");
      }
    })
  }

  goToBookForm() {
    this.router.navigateByUrl("bookForm");
  }

}
