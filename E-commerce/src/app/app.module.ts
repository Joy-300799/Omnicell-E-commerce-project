import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CategoryComponent } from './category/category.component';
import { AuthguardGuard } from './guard/authguard.guard';
import { AuthorizeInterceptor } from './authorize.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    HomeComponent,
    AdminComponent,
    CartComponent,
    AdminDashboardComponent,
    BookDetailsComponent,
    CategoryComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthguardGuard,
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthorizeInterceptor,
        multi: true,
      },
    ],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
