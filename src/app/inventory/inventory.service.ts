import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  uri = environment.APIEndpoint + '/inventory';  
  constructor(private http: HttpClient) { }  

  getProductInventory(productId){
    return this.http.get(`${this.uri}?productId=${productId}`)
  }
  addInventory(productId, stockQty){
    const requestBody = {
      productId: productId,
      stockQty: stockQty
    };

    this.http.post(`${this.uri}`, requestBody)
    .subscribe(res => console.log('Inventory creation done'));  
  }
}
