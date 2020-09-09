import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggin:boolean;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.userService.isLoggin.subscribe(
      (isLoggin)=>{
        this.isLoggin=isLoggin
      }
    )
  }

  logout(){
    this.userService.isLoggin.next(false);
    this.router.navigate(["/"])
  }
}
