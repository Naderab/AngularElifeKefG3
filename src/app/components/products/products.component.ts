import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:string = "Hello to products page";
  products:Product[] = [];
  searchText:string = "";
  constructor() { }

  ngOnInit(): void {
    this.products = [
      {id: '1', title: "T-shirt 1", price: 18, quantity: 0, like: 0,picture:'https://cdn.shopify.com/s/files/1/0568/9527/5101/products/unisex-basic-softstyle-t-shirt-dark-heather-front-62490fcde0833_740x.jpg?v=1649166490'},
      {id: '2', title: "T-shirt 2", price: 21, quantity: 10, like: 0,picture:'https://cdn.shopify.com/s/files/1/1002/7150/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077'},
      {id: '3', title: "T-shirt 3", price: 16, quantity: 8, like: 0,picture:'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/1672/1.jpg?9047'}, ]
  }

  Buy(id:string) {
    this.products.map((p)=>{return p.id === id && p.quantity--;})
  }

  Like(id:string) {
    this.products.map((p)=>{return p.id === id && p.like++;})

  }

  Search() {
    
   this.products =  this.products.filter((p)=> p.title.includes(this.searchText));

  }
}
