import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpService } from 'src/app/utilities/services/httpService/http.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  password: string = '';
  email: string = '';
  constructor(private httpService: HttpService,private route:Router) {}
  ngOnInit(): void {}
  login() {
    this.httpService
      .login({
        password: this.password,
        email: this.email,
      })
      .subscribe((response: any) => {
        console.log('login', response);
      });
  }
  registerNewUser(){
    this.route.navigate(['/credential/signin'])
  }
}
