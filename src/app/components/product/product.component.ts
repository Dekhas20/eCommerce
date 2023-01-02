import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = {
    id: "",
    title: '',
    images: [],
    description:'',
    category: {
      id:0,
      name:'',
      image:''
    },
    price: 0,
  };

  @Output() addProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();

  addToCart() {
    this.addProduct.emit(this.product)
  }

  showDetails() {
    this.showProduct.emit(this.product.id)
  }
}
