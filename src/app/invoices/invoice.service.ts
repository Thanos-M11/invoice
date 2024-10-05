import { Injectable } from '@angular/core';
import { Invoice } from './invoice.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InvoiceServices {
  private isSelectedSubject = new BehaviorSubject<boolean>(false);
  private selectedInvoiceSubject = new BehaviorSubject<Invoice | null>(null);
  private newInvoiceStartedSubject = new BehaviorSubject<boolean>(false);
  private editInvoiceStartedSubject = new BehaviorSubject<boolean>(false);

  isSelected$ = this.isSelectedSubject.asObservable();
  selectedInvoice$ = this.selectedInvoiceSubject.asObservable();
  newInvoiceStarted$ = this.newInvoiceStartedSubject.asObservable();
  editInvoiceStarted$ = this.editInvoiceStartedSubject.asObservable();

  setSelectedInvoice(selectedInvoice: Invoice): void {
    if (selectedInvoice) {
      this.selectedInvoiceSubject.next(selectedInvoice);
      this.setIsSelected(true);
    }
  }

  setIsSelected(value: boolean) {
    this.isSelectedSubject.next(value);
  }

  setNewInvoiceStarted(value: boolean) {
    this.newInvoiceStartedSubject.next(value);
  }

  setEditInvoiceStarted(value: boolean) {
    this.editInvoiceStartedSubject.next(value);
  }
}
