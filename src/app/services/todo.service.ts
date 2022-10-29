import { Injectable } from '@angular/core';
import { Product } from '../core/Product';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  products:Product[] = [
    {id: '1', title: "T-shirt 1", price: 18, quantity: 0, like: 0,picture:'https://cdn.shopify.com/s/files/1/0568/9527/5101/products/unisex-basic-softstyle-t-shirt-dark-heather-front-62490fcde0833_740x.jpg?v=1649166490'},
    {id: '2', title: "T-shirt 2", price: 21, quantity: 10, like: 0,picture:'https://cdn.shopify.com/s/files/1/1002/7150/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077'},
    {id: '3', title: "T-shirt 3", price: 16, quantity: 8, like: 0,picture:'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/1672/1.jpg?9047'},
    {id: '4', title: "T-shirt 4", price: 100, quantity: 12, like: 0,picture:'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/1672/1.jpg?9047'},
    {id: '5', title: "T-shirt 5", price: 9, quantity: 10, like: 0,picture:'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/1672/1.jpg?9047'},
    {id: '6', title: "T-shirt 6", price: 29, quantity: 50, like: 0,picture:'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/1672/1.jpg?9047'}, ]

  constructor() { }
  add(product:Product){
    this.products.push(product);
  }

}
