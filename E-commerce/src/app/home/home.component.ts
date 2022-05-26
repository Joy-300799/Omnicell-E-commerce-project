import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bookList: any = [];
  searchList: any = [];
  latestReleases: Array<any> = [];
  mostRecommended: Array<any> = [];

  searchedWord: string = '';

  constructor(
    private service: AppServiceService,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.service.getAllBooks().subscribe({
      next: (data: any) => {
        this.bookList = data;
        this.searchList = data;
        // console.log(data);
        for (let i = 0; i < 6; i++) {
          this.latestReleases.push(this.bookList[i]);
        }
        for (let i = 6; i < 12; i++) {
          this.mostRecommended.push(this.bookList[i]);
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        // console.log("completed");
      },
    });

    this.searchService.currentword.subscribe({
      next: (data: string) => {
        this.searchedWord = data;
        this.searchList = this.bookList.filter((book: any) => {
          return book.book.bookName
            .toLocaleLowerCase()
            .includes(data.toLowerCase());
        });
      },
      error: (error) => console.log(error),
    });
  }

  goToBookForm() {
    this.router.navigateByUrl('bookForm');
  }

  goToBookDetailPage(bookName: string) {
    this.router.navigate(['bookDescription', { bookName: bookName }]);
  }
}
