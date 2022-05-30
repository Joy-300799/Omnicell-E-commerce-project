import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from '../app/user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CategoryComponent } from './category/category.component';
import { AuthguardGuard } from './guard/authguard.guard';
import { AdminGuardGuard } from './guard/admin-guard.guard';
import { PublicPageGuardGuard } from './guard/public-page-guard.guard';
import { NotFoundGuard } from './guard/not-found.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [PublicPageGuardGuard] },
  {
    path: 'login',
    component: UserLoginComponent,
    canActivate: [PublicPageGuardGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [PublicPageGuardGuard],
  },
  {
    path: 'signup',
    component: UserLoginComponent,
    canActivate: [PublicPageGuardGuard],
  },
  {
    path: 'bookDescription',
    component: BookDetailsComponent,
    canActivate: [PublicPageGuardGuard],
  },
  {
    path: 'home/user/detail',
    component: BookDetailsComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'signup',
    component: UserLoginComponent,
    canActivate: [PublicPageGuardGuard],
  },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGuardGuard],
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [PublicPageGuardGuard],
  },
  {
    path: 'home/user',
    component: HomeComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'home/user/category',
    component: CategoryComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'home/user/cart',
    component: CartComponent,
    canActivate: [AuthguardGuard],
  },
  { path: '**', component: HomeComponent, canActivate: [NotFoundGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
