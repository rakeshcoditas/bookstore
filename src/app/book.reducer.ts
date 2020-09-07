import { Action } from '@ngrx/store';
import { Book } from './models/book';
import { BookActions, BookActionTypes } from './book.actions';



export const bookFeatureKey = 'booksState';

export interface State {
  books: Book[],
  error: string

}

export const initialState: State = {
  books: [],
  error: ''
};

export function reducer(state = initialState, action: BookActions): State {
  switch (action.type) {

    case BookActionTypes.LoadBooks:
      return {
        ...state
      }
    case BookActionTypes.LoadBooksSuccess:
      return {
        ...state,
        books: action.payload.data,
        error: ''
      }

    case BookActionTypes.LoadBooksFailure:
      return {
        ...state,
        books: [],
        error: action.payload.error
      }
      
    default:
      return state;
  }
}
