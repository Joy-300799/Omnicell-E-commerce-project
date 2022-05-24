import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {
  // genreList: FormArray = [];

  newBookForm = new FormGroup({
    bookName: new FormControl(),
    autherName: new FormControl(),
    description: new FormControl(),
    genres: new FormArray([
      new FormControl(),
    ]),
    quantity: new FormControl(),
    price: new FormControl(),
    bookImgSrc: new FormControl(),


  })

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.newBookForm.value);

    this.service.addBook(new Book(this.newBookForm.value.bookName,
      this.newBookForm.value.autherName, this.newBookForm.value.description,
      this.newBookForm.value.quantity, this.newBookForm.value.price, this.newBookForm.value.bookImgSrc)).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  // addGenres() {
  //   let genreList = this.newBookForm.get('genres') as FormArray;
  //   genreList.push(new FormControl());
  // }

}

class Book {
  bookName: string;
  autherName: string;
  description: string;
  genres: Array<string>;
  quantity: string;
  price: string;
  bookImgSrc: string;

  constructor(bookName: string, autherName: string, description: string, quantity: string, price: string, bookImgSrc: string) {
    this.bookName = bookName;
    this.autherName = autherName;
    this.description = description;
    this.genres = new Array();
    this.quantity = quantity;
    this.price = price;
    this.bookImgSrc = bookImgSrc;
  }

}
