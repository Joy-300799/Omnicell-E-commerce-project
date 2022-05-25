import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  genres: Array<string> = ["Action and adventure", "Classics", "Autobiographies", "Sci-Fi", "Romance", "Fantasy", "Horror", "Science And Thrillers"];

  genreBookList: any;

  constructor(private service: AppServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  getBook(genre: string) {
    this.service.getBookOfParticularGenre(genre).subscribe({
      next: (data) => this.genreBookList = data,
      error: (error) => console.log(error),
    })
  }

  goToBookDetail(bookName:string){
    this.router.navigate(["bookDescription",{"bookName":bookName}]);
  }
}
