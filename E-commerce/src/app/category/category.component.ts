import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Array<string> = [
    'Action and adventure',
    'Autobiographies',
    'Classics',
    'Fantasy',
    'Horror',
    'Romance',
    'Sci-Fi',
    'Science And Thrillers',
  ];

  imgArray: Array<string> = [
    '../../assets/action-camera.png',
    '../../assets/biography.png',
    '../../assets/conductor.png',
    '../../assets/fantasy.png',
    '../../assets/ghost (1).png',
    '../../assets/romance.png',
    '../../assets/science-fiction.png',
    '../../assets/detective.png',
  ];

  genreBookList: any;

  constructor(private service: AppServiceService, private router: Router) {}

  ngOnInit(): void {}

  getBook(genre: string) {
    this.service.getBookOfParticularGenre(genre).subscribe({
      next: (data) => (this.genreBookList = data),
      error: (error) => console.log(error),
    });
  }

  goToBookDetail(bookName: string) {
    this.router.navigate(['bookDescription', { bookName: bookName }]);
  }
}
