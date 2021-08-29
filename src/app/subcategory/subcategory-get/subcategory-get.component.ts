import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../subcategory.service'
import SubCategory from '../SubCategory';
import { CategoryService } from '../../category/category.service'
import Category from '../../category/Category'

@Component({
  selector: 'app-subcategory-get',
  templateUrl: './subcategory-get.component.html',
  styleUrls: ['./subcategory-get.component.css']
})
export class SubcategoryGetComponent implements OnInit {

  subcategories: SubCategory[]
  constructor(private ss: SubcategoryService, private cs: CategoryService) { }

  categories: Category[]
  ngOnInit(): void {
    this.cs  
    .getCategories()  
    .subscribe((data: Category[]) => {  
      console.log("data returned from subcategory get API = ", data['data'])
      this.categories = data['data'];  
    });  
  }

  selectedCategory = ""
  onCategoryChange(id){
    this.selectedCategory = id;
    this.getSubCategoriesNow()
  }

  getSubCategoriesNow(){
    this.ss  
    .getSubCategories(this.selectedCategory)  
    .subscribe((data: SubCategory[]) => {  
      console.log("data returned from sub categories get API = ", data['data'])
      this.subcategories = data['data'];  
    }); 
  }
  deleteSubCategory(id){

  }
}
