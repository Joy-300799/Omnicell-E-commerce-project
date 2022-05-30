import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  login(credential: any) {
    return this.http.post(this.baseUrl + "/login", credential, { responseType: "text" });
  }

  signUp(userDetail: any) {
    return this.http.post(this.baseUrl + "/signup", userDetail);
  }

  isUserExist(username:string){
    return this.http.get(this.baseUrl+"/userExistOrNot?username="+username);
  }

  isUserLoggedIn() {
    if (localStorage.getItem("role") == "User") {
      return true;
    }
    return false;
  }

  isAdminLoggedIn() {
    if (localStorage.getItem("role") == "Admin") {
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return Boolean(localStorage.getItem("token"));
  }



}
