import { Injectable } from '@angular/core';
import { Product, productInCart } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: productInCart[] = [];
  private myCart = new BehaviorSubject<productInCart[]>([]);

  myCart$ = this.myCart.asObservable();

  addProduct(product: Product, amount: number) {
    let index = this.myShoppingCart.findIndex((item) => item.id === product.id);
    if(index < 0){
      const producInCart: productInCart = {
        ...product,
        amount: amount
      }
      this.myShoppingCart.push(producInCart);
    }else {
      this.myShoppingCart[index].amount += amount
    }
    this.myCart.next(this.myShoppingCart);
    this.saveCartLocalStorage();
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + (item.amount * item.price), 0);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  saveCartLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.myShoppingCart));
  }

  getCartLocalStorage() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.myShoppingCart = JSON.parse(cart);
      this.myCart.next(this.myShoppingCart);
    }
  }

  deleteProduct(id: string) {
    this.myShoppingCart.map((item, index) => {
      if (item.id == id) {
        this.myShoppingCart.splice(index, 1);
        this.myCart.next(this.myShoppingCart);
        this.saveCartLocalStorage();
      }
    });
  }
}
