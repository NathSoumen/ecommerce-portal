import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/utilities/services/httpService/http.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit{
  confirmPassword:string = ''
  password:string = ''
  email:string = ''
  username:string = ''
  mobile:string = ''
  isAgreedCondition:boolean = false
  constructor(private httpService :HttpService){

  }
  ngOnInit(): void {
  }
  onSubmit(){
    const data = {
      email:this.email,
      password:this.password,
      mobile:this.mobile,
      username:this.username,
    }
    this.httpService.registerNewUser(data).subscribe((resposne:any) =>{
      console.log("registerNewUser",data);
      
    })
  }

}
