import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ImgComponent } from '../shared/components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { HighlightDirective } from './directives/highlight.directive';

import { ReactiveFormsModule } from "@angular/forms";

import { FormLoginComponent } from './components/form-login/form-login.component';

@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    HighlightDirective,
    FormLoginComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    HighlightDirective,
    FormLoginComponent,
  ],
})
export class SharedModule {}
