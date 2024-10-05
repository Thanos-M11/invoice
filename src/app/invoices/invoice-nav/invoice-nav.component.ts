import { Component } from '@angular/core';
import { InvoiceServices } from '../invoice.service';

@Component({
  selector: 'app-invoice-nav',
  standalone: true,
  imports: [],
  templateUrl: './invoice-nav.component.html',
  styleUrl: './invoice-nav.component.css',
  host: {
    '(click)': 'onGoBack()',
  },
})
export class InvoiceNavComponent {
  constructor(private invoiceServices: InvoiceServices) {}

  onGoBack() {
    this.invoiceServices.setIsSelected(false);
  }
}
