import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchword = new BehaviorSubject<string>("");
  currentword = this.searchword.asObservable();

  private login = new BehaviorSubject<boolean>(true);
  logout = this.login.asObservable();


  constructor() { }

  search(keyword: string) {
    this.searchword.next(keyword);
  }

  changeLoginToLogout() {
    this.login.next(!this.login.value);
    return this.login.value;
  }
}
