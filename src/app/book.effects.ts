import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, from } from 'rxjs';
import { Action } from '@ngrx/store';
import * as bookActions from './book.actions';
import { BookService } from './shared/book.service';
import { mergeMap, map, catchError, } from 'rxjs/operators';


@Injectable()
export class BookEffects {

  constructor(private actions$: Actions, private bookService: BookService) { }

  @Effect()
  loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType(bookActions.BookActionTypes.LoadBooks),
    mergeMap(
      action => this.bookService.getAllBooks().pipe(
        map(books => (new bookActions.LoadBooksSuccess({ data: books }))),
        catchError(err => of(new bookActions.LoadBooksFailure({ error: err })))
      )
    )
  )
}
