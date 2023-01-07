import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from '../../../services/store.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  total = 0;
  @Input() products: Product[] = [];
  @Output() loadMore = new EventEmitter()
  showProductDetails = false;
  productChosen: Product = {
    id: "",
    title: '',
    images: [],
    description: '',
    category: {
      id: 0,
      name: '',
      image: '',
    },
    price: 0,
  };
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init'
  statusAllProducts: 'loading' | 'success' | 'error' | 'init' = 'init'

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  addToShoppingCart(product: Product) {
    this.storeService.addProduct(product, 1);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetails() {
    this.showProductDetails = !this.showProductDetails;
  }

  showDetails(id: string) {
    this.statusDetail = 'loading'
    this.productsService.getProduct(id).subscribe((data) => {
      this.productChosen = data;
      this.toggleProductDetails();
      this.statusDetail = 'success'
    }, error => {
      console.log(error.message)
      this.statusDetail = 'error'
    });
  }

  onLoadMore() {
    this.loadMore.emit()
  }

}
