import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private cs: CategoryService) {  
    this.createForm();  
  }  

  selectedFile: File
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  createCategory(categoryName){
    var formData = new FormData();
    formData.append('categoryName', categoryName)
    formData.append('active', 'true')
    formData.append('file', this.selectedFile)
    
    this.cs.addCategory(formData);
  }

  createForm() {  
    this.angForm = this.fb.group({  
      categoryName: ['', Validators.required ],  
      categoryImage: ['', Validators.required ]  
    });  
  }  
  ngOnInit(): void {}
}
