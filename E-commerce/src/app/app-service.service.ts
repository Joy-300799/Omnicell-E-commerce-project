import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  // loginBtnClicked: boolean = true;
  // OnLogin() {
  //   this.loginBtnClicked = false;
  // }

  url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get(this.url + "/getAllBooks");
  }

  addBook(book: any) {
    return this.http.post(this.url + "/addBook", book);
  }
}
