import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable, BehaviorSubject } from 'rxjs';

const headerOption={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  mockUrl="http://localhost:3000/books";

  constructor(private http:HttpClient) { 

  }

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.mockUrl,headerOption);
  }

  getBook(id:number):Observable<Book>{
    return this.http.get<Book>(this.mockUrl+"/"+id,headerOption);
  }

  addBook(book:Book):Observable<Book>{
      return this.http.post<Book>(this.mockUrl,book,headerOption)
  }

  updateBook(book:Book):Observable<Book>{
    return this.http.put<Book>(this.mockUrl+"/"+book.id,book,headerOption);
  }

  deleteBook(id:number):Observable<Book>{
    return this.http.delete<Book>(this.mockUrl+'/'+id,headerOption)
  }
}
