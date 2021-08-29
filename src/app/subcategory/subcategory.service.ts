import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  uri = environment.APIEndpoint + '/categories';  
  constructor(private http: HttpClient) { }  

  getSubCategories(selectedCategory){
    return this.http.get(`${this.uri}/${selectedCategory}/subcategories`);  
  }

  addSubCategory(formdata){
    this.http.post(`${this.uri}/subcategory`, formdata)  
        .subscribe(res => console.log('Category creation done'));  
  }
}
