import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../core/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product=new Product();

  constructor(private productService:ProductService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.productService.getById(this.ac.snapshot.params['id']).subscribe(data => {this.product=data})
  }
  onSubmit(){
    this.productService.put(this.product,this.ac.snapshot.params['id']).subscribe(data=>this.router.navigateByUrl('/products'))
  }

}
