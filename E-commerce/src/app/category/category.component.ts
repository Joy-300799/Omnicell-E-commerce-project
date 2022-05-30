import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppServiceService } from '../services/app-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  startRange = 0;
  endRange = Infinity;

  categories: Array<string> = [
    'Action And Adventure',
    'Autobiographies',
    'Classics',
    'Fantasy',
    'Horror',
    'Romance',
    'Sci-Fi',
    'Science And Thrillers',
    'Regional',
  ];

  authors: Array<string> = [
    'J.K. Rowling',
    'Chetan Bhagat',
    'William Shakespeare',
    'Ruskin Bond',
    'Arundhati Roy',
    'Munsi Premchand',
    'demo',
  ];

  imgArray: Array<string> = [
    '../../assets/action-camera.png',
    '../../assets/biography.png',
    '../../assets/conductor.png',
    '../../assets/fantasy.png',
    '../../assets/ghost (1).png',
    '../../assets/romance.png',
    '../../assets/science-fiction.png',
    '../../assets/detective.png',
    '../../assets/hindi.png',
  ];

  bookList: any;
  bookList2: any;
  authorName: any;
  cartClicked: boolean = false;
  constructor(
    private service: AppServiceService,
    private router: Router,
    private userService: UserServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.authorName = param.get('authorName') || '';
    });

    if (this.authorName) {
      this.fetchBookByAuthor(this.authorName);
    }
  }

  getBook(genre: string) {
    this.service.getBookOfParticularGenre(genre).subscribe({
      next: (data) => {
        this.bookList = data;
        this.bookList2 = data;
        // console.log(this.bookList);
      },
      error: (error) => console.log(error),
    });
  }

  filterOnRange() {
    this.bookList = this.bookList2;
    this.bookList = this.bookList.filter((bookStock: any) => {
      return (
        bookStock.book.price >= this.startRange &&
        bookStock.book.price <= this.endRange
      );
    });
  }

  sortAscending() {
    this.bookList.sort((a: any, b: any) => {
      return a.book.price - b.book.price;
    });
  }

  sortDescending() {
    this.bookList.sort((a: any, b: any) => {
      return b.book.price - a.book.price;
    });
  }

  fetchBookByAuthor(author: string) {
    this.service.getBooksOfAuthor(author).subscribe({
      next: (data) => {
        this.bookList = data;
        this.bookList2 = data;
        console.log(this.bookList);
      },
      error: (error) => console.log(error),
    });
  }

  goToBookDetail(bookName: string) {
    this.router.navigate(['bookDescription', { bookName: bookName }]);
  }

  addToCartIfLogin(bookName: string) {
    this.userService
      .addBookToCart(localStorage.getItem('username') || '', bookName)
      .subscribe({
        next: (data) => {
          this.cartClicked = true;
          setInterval(() => {
            this.cartClicked = false;
          }, 1500);
        },
        error: (error) => {
          console.log(error);
          this.router.navigateByUrl('login');
        },
      });
  }

  availablityFilter() {
    this.bookList = this.bookList.filter((el: any) => el.quantity > 0);
    console.log(this.bookList);
  }
}
