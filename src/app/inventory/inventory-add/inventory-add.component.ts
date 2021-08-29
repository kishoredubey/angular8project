import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'; 
import { InventoryService  } from '../inventory.service'

@Component({
  selector: 'app-inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.css']
})
export class InventoryAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private is: InventoryService) { 
    this.createForm(); 
  }
  createForm() {  
    this.angForm = this.fb.group({  
      productId: ['', Validators.required ],  
      stockQty: ['', Validators.required ]  
    });  
  } 

  addInventory(productId, stockQty){
    this.is.addInventory(productId, stockQty);
  }

  ngOnInit(): void {
  }

}
