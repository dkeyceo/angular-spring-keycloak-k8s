import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL = environment.productionURL;

  constructor(private http: HttpClient) { }

  public list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productURL+'list');
  }

  public details(id: number): Observable<Product> {
    return this.http.get<Product>(this.productURL+`detail/${id}`);
  }

  public detailName (name: string): Observable<Product> {
    return this.http.get<Product>(this.productURL+`detailname/${name}`);
  }

  public save (product: Product): Observable<any> {
    return this.http.post<any>(this.productURL+`create`, product);
  }

  public update (id: number,product: Product): Observable<any> {
    return this.http.put<any>(this.productURL+`update/${id}`, product);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.productURL+`delete/${id}`);
  }



}
