import { Component, Input } from '@angular/core';
import { Invoice } from '../invoice.model';
import { DatePipe, DecimalPipe } from '@angular/common';
import {
  BulletPipe,
  CapitalizePipe,
  PoundCurrenyPipe,
} from './invoice-item.pipe';
import { InvoiceServices } from '../invoice.service';

@Component({
  selector: 'app-invoice-item',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    PoundCurrenyPipe,
    CapitalizePipe,
    BulletPipe,
  ],
  templateUrl: './invoice-item.component.html',
  styleUrl: './invoice-item.component.css',
})
export class InvoiceItemComponent {
  @Input({ required: true }) invoice!: Invoice;

  constructor(private invoiceServices: InvoiceServices) {}

  onInvoiceClick(invoiceSelected: Invoice) {
    this.invoiceServices.setSelectedInvoice(invoiceSelected);
  }
}
