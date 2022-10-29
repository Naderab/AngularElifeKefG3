import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../core/Product';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product=new Product();
  
  constructor(private productService: ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.product.like = 0;
    this.productService.post(this.product).subscribe(
      (data)=>this.router.navigateByUrl('/products'),
      (err)=>console.log(err)
    )
  }

}
