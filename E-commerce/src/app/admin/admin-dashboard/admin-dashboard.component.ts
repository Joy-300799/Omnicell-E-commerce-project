import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  addBookClicked: boolean = false;
  viewAllBooksClicked: boolean = false;
  favClicked: boolean = false;
  signOutClicked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleAddBook() {
    this.addBookClicked = true;
    this.viewAllBooksClicked = false;
    this.favClicked = false;
  }

  toggleViewBooks() {
    this.viewAllBooksClicked = true;
    this.addBookClicked = false;
    this.favClicked = false;
  }

  toggleFav() {
    this.favClicked = true;
    this.addBookClicked = false;
    this.viewAllBooksClicked = false;
  }
}
