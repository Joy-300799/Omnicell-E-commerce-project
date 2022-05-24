import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-login/user-sign-up/user-sign-up.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
<<<<<<< HEAD
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component'
=======

import { AddNewBookComponent } from './add-new-book/add-new-book.component'

import { BookDetailsComponent } from './book-details/book-details.component'

>>>>>>> 8a21252d8a7c83bcf5044abb042027ce9ea8074a
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    UserSignUpComponent,
    HomeComponent,
    AdminComponent,
<<<<<<< HEAD
    BookDetailsComponent,
    CartComponent,
    AdminDashboardComponent
=======

    AddNewBookComponent,

    BookDetailsComponent

>>>>>>> 8a21252d8a7c83bcf5044abb042027ce9ea8074a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
