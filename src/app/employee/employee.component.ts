import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
 
  userName:string;
  password:string;

  constructor(private router:Router,public bookService:BookService) { }

  ngOnInit(): void {
  }
  
  login(){
    if(this.userName=="admin" && this.password=="admin"){
      this.bookService.isLoggin.next(true);
      this.router.navigate(["/"]);
    }

  }


}
