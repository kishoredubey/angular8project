import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';  
import { NavigationCancel,  
  Event,  
  NavigationEnd,  
  NavigationError,  
  NavigationStart,  
  Router } from '@angular/router';  
  import { LoginService } from './login/login.service'
  import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
  import { LoginComponent } from './login/login.component'
  import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  title = 'angular8project';
  firstName = ""
  lastName = ""
  constructor(
    private loadingBar: SlimLoadingBarService, 
    private router: Router, 
    private ls: LoginService,
    public dialog: MatDialog) {  

    this.router.events.subscribe((event: Event) => {  
      this.navigationInterceptor(event);  
    });  

    let data = localStorage.getItem('currentUser');
      if (data) {
        this.firstName = JSON.parse(data)['firstName'];
        this.lastName = JSON.parse(data)['lastName'];  
        this.isLoggedIn = true;
      }
  }  
  
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '700px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isLoggedIn = this.ls.isLoggedIn();
      console.log('login modal closed');
    });
  }

  private navigationInterceptor(event: Event): void {  
    if (event instanceof NavigationStart) {  
      this.loadingBar.start();  
    }  
    if (event instanceof NavigationEnd) {  
      this.loadingBar.complete();  
    }  
    if (event instanceof NavigationCancel) {  
      this.loadingBar.stop();  
    }  
    if (event instanceof NavigationError) {  
      this.loadingBar.stop();  
    }  
  }  

  logout(){
    this.ls.logOff()
    this.isLoggedIn = false;
  }
}
