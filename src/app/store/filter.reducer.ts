import { createReducer, on } from '@ngrx/store';
import { getFilters, setFilters } from './filter.actions';
import { FilterArray, FilterState } from '../invoices/invoice.model';

const initialState: FilterState = [
  {
    id: 0,
    value: 'paid',
    filterStatus: 'paid',
    text: 'Paid',
    active: true,
  },
  {
    id: 1,
    value: 'pending',
    filterStatus: 'pending',
    text: 'Pending',
    active: true,
  },
  {
    id: 2,
    value: 'draft',
    filterStatus: 'draft',
    text: 'Draft',
    active: true,
  },
];

export const filterReducer = createReducer(
  initialState,
  on(getFilters, (state) => state),
  on(setFilters, (state, action) => {
    return state.map((filter, index) => ({
      ...filter,
      active: action.filterArray[index],
    }));
  })
);
