import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from '../app/user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserSignUpComponent } from './user-login/user-sign-up/user-sign-up.component';
import { AdminComponent } from './admin/admin.component';

import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'admin', component: AdminComponent },

  { path: 'signup', component: UserLoginComponent },
  { path: 'bookDescription', component: BookDetailsComponent },
  { path: 'cart', component: CartComponent },


  { path: 'bookForm', component: AddNewBookComponent },

  { path: 'signup', component: UserLoginComponent },
  { path: 'bookDescription', component: BookDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }