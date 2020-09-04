import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromBook from '../book.reducer';


export interface State {

  [fromBook.bookFeatureKey]: fromBook.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromBook.bookFeatureKey]: fromBook.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
