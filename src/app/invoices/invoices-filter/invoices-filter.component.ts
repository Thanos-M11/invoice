import { AsyncPipe, NgIf } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { CapitalizePipe } from '../invoice-item/invoice-item.pipe';
import { Observable } from 'rxjs';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { getFilters, setFilters } from '../../store/filter.actions';
import { AppState, Filter, FilterArray, FilterState } from '../invoice.model';
import { selectInvoicesNotEmpty } from '../../store/invoice.selectors';

@Component({
  selector: 'app-invoices-filter',
  standalone: true,
  imports: [NgIf, CapitalizePipe, AsyncPipe, ReactiveFormsModule],
  templateUrl: './invoices-filter.component.html',
  styleUrl: './invoices-filter.component.css',
})
export class InvoicesFilterComponent implements OnInit {
  invoicesNotEmpty$!: Observable<boolean>;
  filterState$!: Observable<FilterState>;

  form = new FormGroup({
    filter: new FormArray<FormControl<boolean>>([]),
  });

  constructor(private store: Store<AppState>, private destroyRef: DestroyRef) {}

  ngOnInit() {
    this.invoicesNotEmpty$ = this.store.select<boolean>(selectInvoicesNotEmpty);

    this.filterState$ = this.store.select('filters');
    const subscription = this.filterState$.subscribe({
      next: (state) => {
        const formArray = this.form.get('filter') as FormArray;
        state.forEach((filt) => formArray.push(new FormControl(filt.active)));
      },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onChange() {
    this.store.dispatch(
      setFilters({ filterArray: this.form.value.filter as FilterArray })
    );
  }
}
