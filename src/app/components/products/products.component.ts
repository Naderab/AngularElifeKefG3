import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/Product';
import { CalculService } from 'src/app/services/calcul.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:string = "Hello to products page";
  products:Product[] = [];
  searchText:string = "";
  message:string="";
  constructor(private todo:TodoService,private calcul:CalculService) { }

  ngOnInit(): void {
    this.products = this.todo.products;
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
  verifier(){
    this.message = this.calcul.getNumberOf(this.products,'quantity',0)+'';
  }
}
