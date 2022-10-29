import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../core/Product';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product=new Product();
  
  constructor(private todo:TodoService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.product.like = 0;
    this.todo.add(this.product);
    console.log(this.product);
    this.router.navigateByUrl('/products')
  }

}
