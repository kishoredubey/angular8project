import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';  
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductGetComponent } from './product/product-get/product-get.component';  
import { LoginComponent } from './login/login.component';
import { CategoryAddComponent } from './category/category-add/category-add.component'
import { CategoryGetComponent } from './category/category-get/category-get.component'
import { CategoryEditComponent } from './category/category-edit/category-edit.component'
import { SubcategoryAddComponent } from './subcategory/subcategory-add/subcategory-add.component'
import { SubcategoryEditComponent } from './subcategory/subcategory-edit/subcategory-edit.component'
import { SubcategoryGetComponent } from './subcategory/subcategory-get/subcategory-get.component'
import { InventoryAddComponent } from './inventory/inventory-add/inventory-add.component'
import { InventoryGetComponent } from './inventory/inventory-get/inventory-get.component'

const routes: Routes = [  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'categories/create',
    component: CategoryAddComponent
  },
  {
    path: 'categories/:id',
    component: CategoryEditComponent
  },
  {
    path: 'categories',
    component: CategoryGetComponent
  },
  {
    path: 'subcategories/create',
    component: SubcategoryAddComponent
  },
  {
    path: 'subcategories/:id',
    component: SubcategoryEditComponent
  },
  {
    path: 'subcategories',
    component: SubcategoryGetComponent
  },
  {  
    path: 'product/create',  
    component: ProductAddComponent  
  },  
  {  
    path: 'edit/:id',  
    component: ProductEditComponent  
  },  
  {  
    path: 'products',  
    component: ProductGetComponent  
  },
  {  
    path: 'inventory/create',  
    component: InventoryAddComponent  
  }
];  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
