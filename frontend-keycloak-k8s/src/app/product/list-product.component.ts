import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.list().subscribe(data => {
      this.products = data;
    }, err =>{
      console.log(err);
    });
  }

  delete(id: number){
    this.productService.delete(id)
    .subscribe(data => {
      this.toastr.success('Product deleted', 'OK', {
        timeOut: 3000, positionClass:'toast-top-right'
      });
      this.getProducts();
    }, err => {
      this.toastr.error(err.error.message, 'Fail', {
        timeOut: 3000, positionClass:'toast-top-right'
      });
    });
  }
}
