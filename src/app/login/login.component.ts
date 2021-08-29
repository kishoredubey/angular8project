import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  
import { LoginService } from './login.service'
import { ActivatedRoute, Router } from '@angular/router';  
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private ls: LoginService, 
    private route: ActivatedRoute, 
    private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>) {  
    this.createForm();  
  }  

  createForm() {  
    this.angForm = this.fb.group({  
      usernameControl: ['', Validators.required ],  
      passwordControl: ['', Validators.required ]
    });  
  }  

  onNoClick(): void {
    this.dialogRef.close();
  }

  login(username, password){
    var res = this.ls.login(username, password);
    this.onNoClick();
    // this.router.navigate(['products']) 
  }

  logOff(){
    this.ls.logOff()
  }

  ngOnInit(): void {
  }

}
