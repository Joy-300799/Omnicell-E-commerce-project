import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { AppServiceService } from '../../services/app-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  addBookClicked: boolean = false;
  viewAllBooksClicked: boolean = false;
  signOutClicked: boolean = false;
  editBookClicked = false;

  initialPageNo = 0;

  bookList: any;
  updateBook: any;

  constructor(
    private service: AppServiceService,
    private router: Router,
    private logSevice: SearchService
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  toggleAddBook() {
    this.addBookClicked = true;
    this.viewAllBooksClicked = false;
    this.editBookClicked = false;

    this.newBookForm = new FormGroup({
      bookName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      authorName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      description: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      language: new FormControl('', [Validators.required]),
      pages: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      bookImgSrc: new FormControl('', [Validators.required]),
    });
  }

  addByOne() {
    if (this.initialPageNo < this.bookList.totalPages - 1) {
      this.initialPageNo++;
      this.getBook();
    }
  }

  reduceByOne() {
    if (this.initialPageNo > 0) {
      this.initialPageNo--;
      this.getBook();
    }
  }

  getBook() {
    this.service.getBookInCountOfN(this.initialPageNo, 6).subscribe({
      next: (data) => (this.bookList = data),
      error: (error) => console.log(error),
    });
  }

  toggleViewBooks() {
    this.viewAllBooksClicked = true;
    this.addBookClicked = false;
    this.editBookClicked = false;
  }

  newBookForm = new FormGroup({
    bookName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    authorName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    description: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    pages: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    bookImgSrc: new FormControl('', [Validators.required]),
  });

  get price() {
    return this.newBookForm.get('price');
  }

  get bookName() {
    return this.newBookForm.get('bookName');
  }

  get authorName() {
    return this.newBookForm.get('authorName');
  }

  get description() {
    return this.newBookForm.get('description');
  }

  get genre() {
    return this.newBookForm.get('genre');
  }

  get quantity() {
    return this.newBookForm.get('quantity');
  }

  get pages() {
    return this.newBookForm.get('pages');
  }

  get language() {
    return this.newBookForm.get('language');
  }

  get bookImgSrc() {
    return this.newBookForm.get('bookImgSrc');
  }

  editBook(bookName: string) {
    this.addBookClicked = false;
    this.viewAllBooksClicked = false;
    this.editBookClicked = !this.editBookClicked;

    this.service.getBook(bookName).subscribe({
      next: (data) => {
        this.updateBook = data;
        this.newBookForm = new FormGroup({
          bookName: new FormControl(this.updateBook.book.bookName, [
            Validators.required,
            Validators.minLength(5),
          ]),
          authorName: new FormControl(this.updateBook.book.authorName, [
            Validators.required,
            Validators.minLength(5),
          ]),
          description: new FormControl(this.updateBook.book.description, [
            Validators.required,
          ]),
          genre: new FormControl(this.updateBook.book.genre, [
            Validators.required,
          ]),
          language: new FormControl(this.updateBook.book.language, [
            Validators.required,
          ]),
          pages: new FormControl(this.updateBook.book.pages, [
            Validators.required,
          ]),
          quantity: new FormControl(this.updateBook.quantity, [
            Validators.required,
          ]),
          price: new FormControl(this.updateBook.book.price, [
            Validators.required,
          ]),
          bookImgSrc: new FormControl(this.updateBook.book.bookImgSrc, [
            Validators.required,
          ]),
        });
      },
      error: (error) => console.log(error),
    });
  }

  deleteBook(bookName: string, index: number) {
    this.service.deleteBook(bookName).subscribe({
      next: (data) => {},
      error: (error) => {
        console.log(error);
      },
    });
    this.bookList.splice(index, 1);
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('');
    history.go(0);
  }

  onSubmit() {
    if (this.addBookClicked) {
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
          next: () => {},
          error: (error) => {
            console.log(error);
          },
        });
      this.service.getAllBooks().subscribe({
        next: (data) => {
          console.log(data);
          this.bookList = data;
        },
        error: (error) => console.log(error),
      });
    } else if (this.editBookClicked) {
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

      this.service
        .updateBook(
          new BookStock(book, this.newBookForm.value.quantity),
          this.updateBook.book.bookName
        )
        .subscribe({
          next: () => {
            this.service.getAllBooks().subscribe({
              next: (data) => {
                this.bookList = data;
              },
              error: (error) => console.log(error),
            });
          },
          error: (error) => console.log(error),
        });
    }
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
