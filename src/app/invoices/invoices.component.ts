import { Component, DestroyRef, OnInit } from '@angular/core';
import { InvoicesHeadingComponent } from './invoices-heading/invoices-heading.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoiceItemDetailsComponent } from './invoice-item-details/invoice-item-details.component';
import { InvoiceServices } from './invoice.service';
import { Observable, Subscription } from 'rxjs';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [
    InvoicesHeadingComponent,
    InvoicesListComponent,
    InvoiceItemDetailsComponent,
    NewInvoiceComponent,
  ],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css',
})
export class InvoicesComponent implements OnInit {
  anyInvoiceSelected = false;
  newInvoiceStarted = true;

  constructor(
    private invoiceServices: InvoiceServices,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit() {
    const subscription: { selected: Subscription; started: Subscription } = {
      selected: this.invoiceServices.isSelected$.subscribe({
        next: (isSelected) => (this.anyInvoiceSelected = isSelected),
      }),

      started: this.invoiceServices.newInvoiceStarted$.subscribe({
        next: (started) => (this.newInvoiceStarted = started),
      }),
    };

    this.destroyRef.onDestroy(() =>
      Object.values(subscription).forEach((sub) => sub.unsubscribe())
    );
  }
}
