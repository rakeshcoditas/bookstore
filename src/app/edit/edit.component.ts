import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../shared/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  book:Book= new Book();
  constructor(private activatedRoute:ActivatedRoute,private bookService:BookService,private router:Router)
   { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        let id = params["id"];
        this.bookService.getBook(id).subscribe(
          (book)=>{
           this.book=book;
          }
        )
      }
    )
  }

  bookUpdate(){
    console.log(this.book)
    this.bookService.updateBook(this.book).subscribe(
      ()=>{
         this.router.navigate(["/"]);
      }
    )
  }

}
