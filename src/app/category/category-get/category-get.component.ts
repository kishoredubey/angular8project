import { Component, OnInit } from '@angular/core';
import Category from '../Category'
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-category-get',
  templateUrl: './category-get.component.html',
  styleUrls: ['./category-get.component.css']
})
export class CategoryGetComponent implements OnInit {

  categories: Category[];
  constructor(private cs: CategoryService) { }

  ngOnInit(): void {
    this.cs  
    .getCategories()  
    .subscribe((data: Category[]) => {  
      console.log("data returned from category get API = ", data['data'])
      this.categories = data['data'];  
    });  
  }

  deleteCategory(categoryId){
    this.cs.deleteCategory(categoryId)
  }
}
