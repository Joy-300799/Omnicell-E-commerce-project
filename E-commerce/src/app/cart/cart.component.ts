import { Component, OnInit } from '@angular/core';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cardPay: boolean = false;
  upiPay: boolean = false;
  codPay: boolean = false;

  checkout: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  cardPayment(){
    this.cardPay = !this.cardPay;
    this.upiPay = false;
    this.codPay = false;
  }

  upiPayment(){
    this.cardPay = false;
    this.upiPay = !this.upiPay;
    this.codPay = false;
  }

  codPayment(){
    this.cardPay = false;
    this.upiPay = false;
    this.codPay = !this.codPay;
  }

  toggleCheckout(){
    this.checkout = !this.checkout;
  }
}
