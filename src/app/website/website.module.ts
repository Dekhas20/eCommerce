import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from './../shared/shared.module';

import { ReactiveFormsModule } from "@angular/forms";

import { NavComponent } from './components/nav/nav.component';
import { ReversePipe } from '../shared/pipes/reverse.pipe';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavComponent,
    ReversePipe,
    HomeComponent,
    CategoryComponent,
    MyCartComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent,
    LoginComponent,
    CartComponent,
    FooterComponent,
  ],
  imports: [CommonModule, WebsiteRoutingModule, SwiperModule, SharedModule, ReactiveFormsModule],
})
export class WebsiteModule {}
