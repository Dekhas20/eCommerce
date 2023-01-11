import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  // private apiUrl = 'https://damp-spire-59848.herokuapp.com/api/categories';
  private apiUrl = 'http://127.0.0.1:5000/categories';

  constructor(private httpClient: HttpClient) { }

  getAll(limit?: number, offset?:number) {
    let params = new HttpParams();
    if (limit && offset != null) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.httpClient.get<Category[]>(this.apiUrl, {params})
  }
}
