import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = environment.APIEndpoint + '/products';  
  headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8')

  constructor(private http: HttpClient) { }  
  
  addProduct(name, description, price) {  
    var formData = new FormData();
    formData.append('name', name);
    formData.append('subCategoryId', '1');
    formData.append('price', price);
    console.log(formData);  
    
    this.http.post(`${this.uri}`, formData)  
        .subscribe(res => console.log('Product creation done'));  
  }  

  //TODO hardcoded subcategory ID for now.
  getProducts() {  
    console.log('get product headers = ', this.headers);
    return this.http.get(`${this.uri}?subcategoryId=1`);  
  }  

  editProduct(id) {  
    return this  
            .http  
            .get(`${this.uri}/${id}`, {headers: this.headers});  
    }  
  
    updateProduct(name, description, price, id) {  
      const obj = {  
        name: name,  
        description: description,  
        price: price  
      };  
      this  
        .http  
        .post(`${this.uri}/${id}`, obj, {headers: this.headers})  
        .subscribe(res => console.log('Product update completed'));  
  }  

  deleteProduct(id) {  
    return this  
              .http  
              .get(`${this.uri}/delete/${id}`);  
  }  
}
