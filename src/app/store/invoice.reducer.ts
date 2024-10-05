import { createReducer, on } from '@ngrx/store';
import { Invoice, InvoiceState } from '../invoices/invoice.model';
import { addInvoice, changeStatus, removeInvoice } from './invoice.actions';
import invoiceData from '../../data/data.json';

const initialState: InvoiceState = invoiceData as InvoiceState;

export const invoiceReducer = createReducer(
  initialState,

  on(addInvoice, (state, action) => {
    const newInvoice: Invoice = {
      id: action.id,
      createdAt: action.createdAt,
      paymentDue: action.paymentDue,
      description: action.description,
      paymentTerms: action.paymentTerms,
      clientName: action.clientName,
      clientEmail: action.clientEmail,
      status: action.status,
      senderAddress: action.senderAddress,
      clientAddress: action.clientAddress,
      items: action.items,
      total: action.total,
    };
    return { ...state, newInvoice };
  }),

  on(removeInvoice, (state, action) =>
    state.filter((invoice) => invoice.id !== action.id)
  ),

  on(changeStatus, (state, { id, newStatus }) =>
    state.map((invoice) =>
      invoice.id === id ? { ...invoice, status: newStatus } : invoice
    )
  )
);
