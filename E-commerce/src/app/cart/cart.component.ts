import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

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

  cart: any;
  totalBill = 0;
  username = localStorage.getItem('username');
  isEmptyCart: boolean = true;

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.getUserCart();
  }

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
    this.userService
      .getUserCart(localStorage.getItem('username') || '')
      .subscribe({
        next: (data) => {
          console.log(data);
          this.cart = data;
          this.billAmount();
          if (this.cart.length) {
            this.isEmptyCart = false;
          }
        },
        error: (error) => console.log(error),
      });
  }

  deleteBookFromCart(bookName: string, index: number) {
    this.userService
      .removeBookFromCart(localStorage.getItem('username') || '', bookName)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.cart.splice(index, 1);
          console.log(this.cart);
          this.totalBill = 0;
          this.billAmount();
          if (this.cart.length) {
            this.isEmptyCart = false;
          } else {
            this.isEmptyCart = true;
          }
        },
        error: (error) => console.log(error),
      });
  }

  billAmount() {
    for (let book of this.cart) {
      this.totalBill += book.price;
    }
  }

  toggleCheckout() {
    this.userService
      .buyAllBookOfCart(localStorage.getItem('username') || '')
      .subscribe({
        next: () => {
          this.checkout = true;
          this.cart = [];
        },
        error: (error) => console.log(error),
      });
  }
}
