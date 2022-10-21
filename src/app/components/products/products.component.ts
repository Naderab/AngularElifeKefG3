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
      {id: '1', title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: '2', title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: '3', title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
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
