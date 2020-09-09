import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../shared/book.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  userName:string;
  password:string;

  constructor(private router:Router,public userService:UserService) { }

  ngOnInit(): void {
  }
  
  login(){
    this.userService.login({userName:this.userName,password:this.password}).subscribe(
      (user)=>{
        this.userService.isLoggin.next(true);
        this.router.navigate(["/"]);
        alert("login Successful")
      }
    )

  }


}
