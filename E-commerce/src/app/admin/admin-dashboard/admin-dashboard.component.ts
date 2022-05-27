import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  addBookClicked: boolean = false;
  viewAllBooksClicked: boolean = false;
  favClicked: boolean = false;
  signOutClicked: boolean = false;

  bookList: any;

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe({
      next: (data) => this.bookList = data,
      error: (error) => console.log(error)
    })
  }

  toggleAddBook() {
    this.addBookClicked = true;
    this.viewAllBooksClicked = false;
    this.favClicked = false;
  }

  toggleViewBooks() {
    this.viewAllBooksClicked = true;
    this.addBookClicked = false;
    this.favClicked = false;
  }

  toggleFav() {
    this.favClicked = true;
    this.addBookClicked = false;
    this.viewAllBooksClicked = false;
  }

  newBookForm = new FormGroup({
    bookName: new FormControl("", [Validators.required]),
    authorName: new FormControl("", [Validators.required]),
    description: new FormControl(),
    genre: new FormControl("", [Validators.required]),
    language: new FormControl(),
    pages: new FormControl(),
    quantity: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    bookImgSrc: new FormControl(),
  });

  editBook() {

  }

  deleteBook(bookName: string, index: number) {
    this.service.deleteBook(bookName).subscribe({
      next: (data) => {
        // this.bookList=this.bookList.splice(index, 1),
        // console.log(data)
        // this.service.getAllBooks().subscribe({
        //   next:(data)=>{this.bookList=data}
        // })
      },
      error: (error) => {
        console.log("error");
        console.log(error)
      }
    });
    this.bookList.splice(index, 1);

  }

  onSubmit() {
    console.log(this.newBookForm.value);
    let book = new Book(
      this.newBookForm.value.bookName,
      this.newBookForm.value.authorName,
      this.newBookForm.value.description,
      this.newBookForm.value.genre,
      this.newBookForm.value.price,
      this.newBookForm.value.bookImgSrc,
      this.newBookForm.value.language,
      this.newBookForm.value.pages
    );
    console.log(book);
    this.service
      .addBook(new BookStock(book, this.newBookForm.value.quantity))
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}

export class Book {
  bookName: string;
  authorName: string;
  description: string;
  genre: string;
  price: number;
  bookImgSrc: string;
  language: string;
  pages: number;

  constructor(
    bookName: string,
    authorName: string,
    description: string,
    genre: string,
    price: number,
    bookImgSrc: string,
    language: string,
    pages: number
  ) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.description = description;
    this.genre = genre;
    this.price = price;
    this.bookImgSrc = bookImgSrc;
    this.language = language;
    this.pages = pages;
  }
}

export class BookStock {
  book: Book;
  quantity: number;

  constructor(book: Book, quantity: number) {
    this.book = book;
    this.quantity = quantity;
  }
}

