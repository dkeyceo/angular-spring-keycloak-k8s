import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  name = '';
  price = null;

  constructor(private productService: ProductService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const product = new Product(this.name, this.price);
    this.productService.save(product)
    .subscribe(data => {
      this.toastr.success('Product created', 'OK', {
        timeOut: 3000, positionClass:'toast-top-right'
      });
      this.router.navigate(['/']);
    }, err => {
      this.toastr.error(err.error.message, 'Fail', {
        timeOut: 3000, positionClass:'toast-top-left'
      });
      this.router.navigate(['/']);
    });

  }

}
