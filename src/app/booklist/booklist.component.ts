import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../models/book';
import { Store, select } from '@ngrx/store';
import * as BookActions from '../book.actions';
import * as fromBook from '../book.selectors';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  books: Book[];
  isLoggin: boolean;
  constructor(private bookService: BookService, private store: Store) {

  }

  ngOnInit() {
    this.store.dispatch(new BookActions.LoadBooks());
    this.store.pipe(select(fromBook.getBooks)).subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    )
    //this.getAllBooks();
    this.bookService.isLoggin.subscribe(
      (isLoggin) => {
        this.isLoggin = isLoggin
      }
    )
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    )
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(
      (data: Book) => {
        //this.getAllBooks();
      }
    )
  }


}
