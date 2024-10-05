import { Component, OnInit } from '@angular/core';
import { InvoiceNavComponent } from '../invoice-nav/invoice-nav.component';
import { Observable } from 'rxjs';
import { InvoiceServices } from '../invoice.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-new-invoice',
  standalone: true,
  imports: [InvoiceNavComponent, AsyncPipe],
  templateUrl: './new-invoice.component.html',
  styleUrl: './new-invoice.component.css',
})
export class NewInvoiceComponent implements OnInit {
  isSelected$!: Observable<boolean>;
  newInvoiceStarted$!: Observable<boolean>;
  editInvoiceStarted$!: Observable<boolean>;

  constructor(private invoiceServices: InvoiceServices) {}

  ngOnInit() {
    this.isSelected$ = this.invoiceServices.isSelected$;
    this.newInvoiceStarted$ = this.invoiceServices.newInvoiceStarted$;
  }
}
