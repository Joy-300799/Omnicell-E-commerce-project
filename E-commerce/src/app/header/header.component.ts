import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchWord: string = "";
  key:any;

  loginBtnClicked: boolean = true;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.key = this.searchService.logout
  }

  search() {
    this.searchService.search(this.searchWord);
  }

}
