import { Action } from '@ngrx/store';
import { Book } from './models/book';


export const bookFeatureKey = 'booksState';

export interface State {
  books:Book[],
  error:string

}

export const initialState: State = {
       books:[],
       error:''
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
