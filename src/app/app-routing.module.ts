import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'todos',component:TodoComponent},
  {path:'updateProduct/:id',component:UpdateProductComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
