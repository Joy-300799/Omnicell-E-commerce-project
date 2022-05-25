import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  login(credential: any) {
    // console.log(credential);
    return this.http.post(this.baseUrl + "/login", credential);
  }

  signUp(userDetail: any) {
    return this.http.post(this.baseUrl + "/signup", userDetail);
  }

}
