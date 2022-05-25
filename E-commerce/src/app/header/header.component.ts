import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchWord: string = "";

  loginBtnClicked: boolean = true;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.searchWord);
    this.searchService.search(this.searchWord);
  }

}
