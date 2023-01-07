import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../../../services/products.service';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit{
  productId: string | null = null;
  product: Product = {
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
  };;
  amount = 1

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private storeService: StoreService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.loadDetails()
  }

  loadDetails() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.productId = params.get('id');
          if (this.productId) {
            return this.productsService.getProduct(
              this.productId
            );
          }
          return [this.product];
        })
      )
      .subscribe((data) => {
        this.product = data
      });
  }

  goToBack() {
    this.location.back()
  }

  addProduct() {
    this.storeService.addProduct(this.product, this.amount)
  }

  oneMore() {
    this.amount +=1
  }

  oneLess() {
    if(this.amount > 1){
      this.amount -=1
    }
  }
}
