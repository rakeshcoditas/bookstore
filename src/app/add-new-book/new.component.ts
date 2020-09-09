import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../shared/book.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

book:Book=new Book();
  constructor(private bookService:BookService,private router:Router) { 
    this.book.title="";
    this.book.url="";
    this.book.description="";
  }

  ngOnInit() {
  }

  addBook(){
    this.bookService.addBook(this.book).subscribe();
    this.router.navigate(["/"]);
  }

}
