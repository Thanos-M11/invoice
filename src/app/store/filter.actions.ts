import { createAction, props } from '@ngrx/store';
import { FilterArray } from '../invoices/invoice.model';

export const getFilters = createAction('[Filter] GetFilters');

export const setFilters = createAction(
  '[Filter] SetFilters',
  props<{ filterArray: FilterArray }>()
);
