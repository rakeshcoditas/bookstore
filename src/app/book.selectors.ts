import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './book.reducer'

const getBookFeatureState = createFeatureSelector<State>('booksState');

export const getBooks = createSelector(
    getBookFeatureState,
    state=> state.books
)

export const getError = createSelector(
    getBookFeatureState,
    state=> state.error
)