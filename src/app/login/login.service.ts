import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';  
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri = environment.APIEndpoint + '/authenticate';  
  headers = new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8'
  });
  constructor(private http: HttpClient) { }  

  loggedIn = false;
  isLoggedIn(){
    return this.loggedIn;
  }
  login(username, password){
    var outMessage = "failure";
    var request = {
      'email': username,
      'password': password  
    }
    this.http.post(`${this.uri}`, request, {headers: this.headers})
    .subscribe(res => {
      console.log(res);
        var data = res['data'];
        this.loggedIn = true;
        if (data) {
          localStorage.setItem('currentUser', JSON.stringify(data)); 
          outMessage = "success";
        }
    }); 

    return outMessage;
  }
  logOff(){
    localStorage.removeItem('currentUser')
  }
}
