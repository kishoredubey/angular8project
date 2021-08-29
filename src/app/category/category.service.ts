import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { map } from  'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  uri = environment.APIEndpoint + '/categories';  
  constructor(private http: HttpClient) { }  

  addCategory(formData){
    this.http.post(`${this.uri}`, formData)  
        .subscribe(res => console.log('Category creation done'));  
  }

  getCategories(){
    return this.http.get(`${this.uri}`);  
  }

  deleteCategory(categoryId){
    this.http.delete(`${this.uri}/${categoryId}`);
  }
}
