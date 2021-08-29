import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'; 
import { CategoryService } from '../../category/category.service' 
import Category from '../../category/Category'
import { SubcategoryService } from '../subcategory.service';

@Component({
  selector: 'app-subcategory-add',
  templateUrl: './subcategory-add.component.html',
  styleUrls: ['./subcategory-add.component.css']
})
export class SubcategoryAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private cs: CategoryService, private ss: SubcategoryService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({  
      subcategoryName: ['', Validators.required ],  
      subcategoryImage: ['', Validators.required ]  
    });  
  } 
  
  selectedFile: File
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  createSubCategory(subcategoryName){
    var formData = new FormData();
    formData.append('categoryId', this.selectedCategory)
    formData.append('subCategoryName', subcategoryName);
    formData.append('active', 'true')
    formData.append('file', this.selectedFile)
    
    this.ss.addSubCategory(formData);
  }

  categories: Category[]
  selectedCategory =""

  onCategoryChange(id){
    this.selectedCategory = id;
  }

  ngOnInit(): void {
    this.cs  
    .getCategories()  
    .subscribe((data: Category[]) => {  
      console.log("data returned from subcategory get API = ", data['data'])
      this.categories = data['data'];  
    });  
  }

}
