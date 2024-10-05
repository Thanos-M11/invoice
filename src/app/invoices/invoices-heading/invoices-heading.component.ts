import { Component, DestroyRef, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { InvoicesFilterComponent } from '../invoices-filter/invoices-filter.component';
import { select, Store } from '@ngrx/store';
import { AppState } from '../invoice.model';
import {
  selectFilteredInvoicesCount,
  selectInvoicesCount,
  selectInvoicesNotEmpty,
} from '../../store/invoice.selectors';
import { InvoiceServices } from '../invoice.service';

@Component({
  selector: 'app-invoices-heading',
  standalone: true,
  imports: [AsyncPipe, NgIf, InvoicesFilterComponent],
  templateUrl: './invoices-heading.component.html',
  styleUrl: './invoices-heading.component.css',
})
export class InvoicesHeadingComponent implements OnInit {
  invoicesCount$!: Observable<number>;
  invoicesNotEmpty$!: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private invoiceServices: InvoiceServices
  ) {}

  ngOnInit() {
    this.invoicesCount$ = this.store.select(selectFilteredInvoicesCount);
    this.invoicesNotEmpty$ = this.store.select(selectInvoicesNotEmpty);
  }

  onNewInvoice() {
    this.invoiceServices.setNewInvoiceStarted(true);
  }
}
