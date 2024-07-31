import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  images: string;
}

interface ProductsResponse {
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dummyjson.com/products'; // API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.apiUrl);
  }

  postData(data: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, data);
  }

  updateData(id: number, data: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, data);
  }

  deleteData(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
