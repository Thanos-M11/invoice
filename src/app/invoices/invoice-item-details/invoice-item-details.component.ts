import { Component, OnInit } from '@angular/core';
import {
  BulletPipe,
  CapitalizePipe,
  PoundCurrenyPipe,
} from '../invoice-item/invoice-item.pipe';
import { InvoiceServices } from '../invoice.service';
import { Invoice, InvoiceState } from '../invoice.model';
import { DecimalPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { changeStatus, removeInvoice } from '../../store/invoice.actions';
import { InvoiceItemComponent } from '../invoice-item/invoice-item.component';
import { InvoiceNavComponent } from '../invoice-nav/invoice-nav.component';

@Component({
  selector: 'app-invoice-item-details',
  standalone: true,
  imports: [
    CapitalizePipe,
    BulletPipe,
    PoundCurrenyPipe,
    DecimalPipe,
    InvoiceItemComponent,
    InvoiceNavComponent,
  ],
  templateUrl: './invoice-item-details.component.html',
  styleUrl: './invoice-item-details.component.css',
})
export class InvoiceItemDetailsComponent implements OnInit {
  invoice!: Invoice;
  constructor(
    private invoiceServices: InvoiceServices,
    private store: Store<InvoiceState>
  ) {}

  ngOnInit() {
    this.invoiceServices.selectedInvoice$.subscribe({
      next: (invoiceSelected) => (this.invoice = invoiceSelected as Invoice),
    });
  }

  onEdit(invoiceId: string) {
    console.log('edit:', invoiceId);
    this.invoiceServices.setEditInvoiceStarted(true);
    // TODO
  }

  onDelete(invoiceId: string) {
    this.store.dispatch(removeInvoice({ id: invoiceId }));
    this.invoiceServices.setIsSelected(false);
  }

  onMarkPaid(invoiceId: string) {
    console.log('mark paid:', invoiceId);
    this.store.dispatch(
      changeStatus({
        id: invoiceId,
        newStatus: 'paid',
      })
    );
    this.invoiceServices.setIsSelected(false);
  }

  onMarkPending(invoiceId: string) {
    console.log('mark paid:', invoiceId);
    this.store.dispatch(
      changeStatus({
        id: invoiceId,
        newStatus: 'pending',
      })
    );
    this.invoiceServices.setIsSelected(false);
  }
}
