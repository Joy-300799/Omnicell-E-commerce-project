import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  loginBtnClicked: boolean = true;
  constructor() {}

  OnLogin() {
    this.loginBtnClicked = false;
  }
}
