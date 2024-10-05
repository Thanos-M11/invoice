import { Component, OnInit, DestroyRef } from '@angular/core';
import {
  AppState,
  FilterArray,
  FilterState,
  Invoice,
  InvoiceState,
} from '../invoice.model';
import { combineLatest, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NoInvoiceComponent } from '../no-invoice/no-invoice.component';
import { InvoiceItemComponent } from '../invoice-item/invoice-item.component';
import { Store } from '@ngrx/store';
import {
  selectFilteredInvoices,
  selectFilters,
  selectInvoices,
} from '../../store/invoice.selectors';

@Component({
  selector: 'app-invoices-list',
  standalone: true,
  imports: [AsyncPipe, NoInvoiceComponent, InvoiceItemComponent],
  templateUrl: './invoices-list.component.html',
  styleUrl: './invoices-list.component.css',
})
export class InvoicesListComponent implements OnInit {
  filteredInvoices$!: Observable<InvoiceState>;

  constructor(private store: Store<AppState>, private destroyRef: DestroyRef) {}

  ngOnInit() {
    this.filteredInvoices$ = this.store.select(selectFilteredInvoices);
  }
}
