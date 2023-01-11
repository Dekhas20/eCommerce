import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from 'src/app/models/product.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryId: string | null = null;
  oldCategoryId: string | null = null;
  limit = 15;
  offset = 0;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {
    router.events.subscribe(()=> {
      this.limit = 20;
      this.offset = 0;
    })
  }

  ngOnInit(): void {
    console.log("first")
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.categoryId = params.get('id');
          if (this.categoryId) {
            return this.productsService.getProductsByCategory(
              this.categoryId,
              this.limit,
              this.offset
            );
          }
          return [];
        })
      )
      .subscribe((data) => {
        this.products= data;
        this.oldCategoryId = this.categoryId
      });
  }

  loadProducts() {
    if(this.categoryId){
      this.offset += this.limit;
      this.productsService.getProductsByCategory(
        this.categoryId,
        this.limit,
        this.offset
      ).subscribe((data) => {
        this.products = this.products.concat(data);
      });
    }
  }
}
