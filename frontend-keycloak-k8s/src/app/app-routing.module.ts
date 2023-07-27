import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './product/create-product.component';
import { DetailsProductComponent } from './product/details-product.component';
import { EditProductComponent } from './product/edit-product.component';
import { ListProductComponent } from './product/list-product.component';

const routes: Routes = [
  {path:'', component: ListProductComponent},
  {path:'details/:id', component: DetailsProductComponent},
  {path:'create', component: CreateProductComponent},
  {path:'edit/:id', component: EditProductComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
