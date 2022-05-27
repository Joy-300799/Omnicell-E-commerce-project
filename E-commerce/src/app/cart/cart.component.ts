import { Component, OnInit } from '@angular/core';
import { throttleTime } from 'rxjs';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cardPay: boolean = false;
  upiPay: boolean = false;
  codPay: boolean = false;
  overlay: boolean = false;
  checkout: boolean = false;

  username: string = '';
  cart: any;
  totalBill = 0;

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {}

  cardPayment() {
    this.cardPay = !this.cardPay;
    this.upiPay = false;
    this.codPay = false;
  }

  upiPayment() {
    this.cardPay = false;
    this.upiPay = !this.upiPay;
    this.codPay = false;
  }

  codPayment() {
    this.cardPay = false;
    this.upiPay = false;
    this.codPay = !this.codPay;
  }

  getUserCart() {
    this.userService.getUserCart(this.username).subscribe({
      next: (data) => {
        console.log(data);
        this.cart = data;
        this.billAmount();
      },
      error: (error) => console.log(error),
    })
  }
  deleteBookFromCart(username: string, bookName: string, index: number) {
    this.userService.removeBookFromCart(username, bookName).subscribe({
      next: (data) => {
        console.log(data);
        this.cart.splice(index, 1);
        console.log(this.cart);
      },
      error: (error) => console.log(error),
    })
  }
  billAmount() {
    for (let book of this.cart) {
      this.totalBill += book.price;
    }
  }

  toggleCheckout() {
    this.userService.buyAllBookOfCart(this.username).subscribe({
      next: () => {
        this.checkout = true;
        this.cart = [];
      },
      error: (error) => console.log(error),
    });
  }
}
