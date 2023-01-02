import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Product } from '../models/product.model';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://damp-spire-59848.herokuapp.com/api';

  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(`${this.apiUrl}/products/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          return throwError(() => new Error('Algo salio mal en el servidor'));
        }
        return throwError(() => new Error('Ups algo salio mal'));
      })
    );
  }

  getProductsByPage(limit: number, offset: number) {
    return this.httpClient
      .get<Product[]>(`${this.apiUrl}/products`, {
        params: { limit, offset },
      })
      .pipe(retry(3));
  }

  getProductsByCategory(categoryId: string, limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset != null) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.httpClient.get<Product[]>(`${this.apiUrl}/categories/${categoryId}/products`, {params}).pipe(retry(3));
  }
}
