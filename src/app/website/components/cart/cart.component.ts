import { Component, OnInit } from '@angular/core';
import { Product, productInCart } from 'src/app/models/product.model';

import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: productInCart[]=[]

  constructor(private storeService: StoreService){

  }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.products = products;
    });

  }

  deleteProduct(id:string){
    this.storeService.deleteProduct(id)
  }

}
