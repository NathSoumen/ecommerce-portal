import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
interface LoginCreditial {
  password:string;
  email:string
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {

   url = environment.api_url

  constructor(private http:HttpClient) { }

  login(data:LoginCreditial){
    return this.http.post(this.url+"/users/login",data)
  }
  getListOfProduct(){
    
  }

}
