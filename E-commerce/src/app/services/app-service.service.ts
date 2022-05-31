import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookStock } from '../admin/admin-dashboard/admin-dashboard.component';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http.get(this.url + '/getAllBookStock', {
      responseType: 'json',
    });
  }

  getBookInCountOfN(pageNumber: number, element: number) {
    return this.http.get(
      this.url +
        '/books/pagination?page=' +
        pageNumber +
        '&noOfElements=' +
        element
    );
  }

  addBook(bookStock: BookStock) {
    return this.http.post(this.url + '/addBookStock', bookStock);
  }

  getBook(bookName: string) {
    return this.http.get(this.url + '/getBookStock?bookName=' + bookName);
  }

  deleteBook(bookName: string) {
    return this.http.get(this.url + '/deleteBook?name=' + bookName);
  }

  getBookOfParticularGenre(genre: string) {
    return this.http.get(
      this.url + '/getAllBookStockOfParticularGenre?genre=' + genre
    );
  }

  getBooksOfAuthor(author: string) {
    return this.http.get(
      this.url + '/getBooksByAuthorName?authorName=' + author
    );
  }

  updateBook(bookStock: BookStock, bookName: string) {
    return this.http.post(
      this.url + '/updateBookStock?name=' + bookName,
      bookStock,
      { responseType: 'text' }
    );
  }
}
