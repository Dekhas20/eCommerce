import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[] = [];
  limit = 10;
  offset = 0;

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.loadMore()
  }


  loadMore() {
    // this.statusAllProducts = 'loading'
    this.productsService
      .getProductsByPage(this.limit, this.offset)
      .subscribe((data) => {
        this.products.push(...data);
        this.offset += this.limit;
        // this.statusAllProducts = 'success'
      }, error => {
        console.log(error)
        // this.statusAllProducts = 'error'
      });
  }
}
