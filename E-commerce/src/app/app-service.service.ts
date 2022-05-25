import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BookStock} from "../app/admin/admin-dashboard/admin-dashboard.component";

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  // loginBtnClicked: boolean = true;
  // OnLogin() {
  //   this.loginBtnClicked = false;
  // }

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllBooks() {
    // return this.http.get(this.url + "/getAllBooks");
    return this.http.get(this.url + '/getAllBookStock');
  }

  addBook(bookStock: BookStock) {
    return this.http.post(this.url + "/addBookStock", bookStock);
  }

  getBook(bookName: string) {
    return this.http.get(this.url + '/getBookStock?bookName=' + bookName);
  }
}
