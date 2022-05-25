import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchword = new BehaviorSubject<string>("");
  currentword = this.searchword.asObservable();

  constructor() { }

  search(keyword: string) {
    this.searchword.next(keyword);
  }
}
