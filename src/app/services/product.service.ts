import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../core/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl:string = "http://localhost:3000/products"
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
    
  constructor(private http:HttpClient) { }

  get():Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl);
  }
  post(product:Product):Observable<Product>{
    return this.http.post<Product>(this.productsUrl, product,this.httpOptions)
  }
  put(product:Product,id:any):Observable<Product>{
    return this.http.put<Product>(this.productsUrl+"/"+id,product,this.httpOptions)
  }
  delete(id:any):Observable<any>{
    return this.http.delete(this.productsUrl+"/"+id)
  }
  getById(id:any):Observable<Product>{
    return this.http.get<Product>(this.productsUrl+"/"+id)
  }
}
