import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getUserCart(username: string) {
    return this.http.get(this.baseUrl + "/getUserCart?username=" + username);
  }

  removeBookFromCart(username: string, bookName: string) {
    return this.http.delete(this.baseUrl + "/removeBookFromCart?username="
      + username + "&bookName=" + bookName, { responseType: "text" });
  }

  buyAllBookOfCart(username: string) {
    return this.http.delete(this.baseUrl + "/buyAllBookInCart?username=" + username, { responseType: "text" });
  }

  addBookToCart(username: string, bookName: string) {
    return this.http.post(this.baseUrl + "/addBookInCart?username=" + username + "&bookName=" + bookName, null);
  }

}
