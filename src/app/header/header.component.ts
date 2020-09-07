import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggin:boolean;
  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit() {
    this.bookService.isLoggin.subscribe(
      (isLoggin)=>{
        this.isLoggin=isLoggin
      }
    )
  }

  logout(){
    this.bookService.isLoggin.next(false);
    this.router.navigate(["/"])
  }
}
