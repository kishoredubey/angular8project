import { Component, OnInit } from '@angular/core';
import Product from '../Product';  
import { ProductsService } from '../products.service';  

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: Product[];  
  constructor(private ps: ProductsService) {}

  ngOnInit(): void {
    this.ps  
    .getProducts()  
    .subscribe((data: Product[]) => {  
      console.log("data returned from prodyudct get API = ", data['data'])
      this.products = data['data'];  
    });  
  }

  getQtyOrDefault(obj){
    if(obj === undefined || obj === null || Object.keys(obj).length === 0){
      return 0;
    }else{
      return obj.qty;
    }
  }

  deleteProduct(id) {  
    this.ps.deleteProduct(id).subscribe(res => {  
      this.products.splice(id, 1);  
    });  
}  

}
