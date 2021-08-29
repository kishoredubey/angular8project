import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';  

import { AppComponent } from './app.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductGetComponent } from './product/product-get/product-get.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  
import { ProductsService } from './product/products.service';
import { LoginComponent } from './login/login.component';  
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryGetComponent } from './category/category-get/category-get.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { FileUploadModule } from 'ng2-file-upload';
import { SubcategoryAddComponent } from './subcategory/subcategory-add/subcategory-add.component';
import { SubcategoryGetComponent } from './subcategory/subcategory-get/subcategory-get.component';
import { SubcategoryEditComponent } from './subcategory/subcategory-edit/subcategory-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { InventoryAddComponent } from './inventory/inventory-add/inventory-add.component';
import { InventoryGetComponent } from './inventory/inventory-get/inventory-get.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent,
    LoginComponent,
    CategoryAddComponent,
    CategoryGetComponent,
    CategoryEditComponent,
    SubcategoryAddComponent,
    SubcategoryGetComponent,
    SubcategoryEditComponent,
    InventoryAddComponent,
    InventoryGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MaterialModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    ProductsService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
