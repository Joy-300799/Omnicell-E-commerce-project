import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchword = new BehaviorSubject<string>('');
  currentword = this.searchword.asObservable();

  private login = new BehaviorSubject<boolean>(true);
  logout = this.login.asObservable();

  private adminLogin = new BehaviorSubject<boolean>(true);
  changeAfterAdminLogin = this.adminLogin.asObservable();

  private adminLogOut = new BehaviorSubject<Boolean>(true);
  changeAfterAdminLogOut = this.adminLogOut.asObservable();

  constructor() {}

  search(keyword: string) {
    this.searchword.next(keyword);
  }

  changeLoginToLogout() {
    this.login.next(false);
    return this.login.value;
  }

  hideIconAfterAdminLogin() {
    this.adminLogin.next(false);
    return this.adminLogin.value;
  }

  showIconAfterAdminLogOut() {
    this.adminLogOut.next(false);
    return this.adminLogOut.value;
  }
}
