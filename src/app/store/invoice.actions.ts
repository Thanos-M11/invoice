import { createAction, props } from '@ngrx/store';
import { FilterState, Invoice, InvoiceStatus } from '../invoices/invoice.model';

export const addInvoice = createAction(
  '[Invoice] GetInvoices',
  props<Invoice>()
);

export const removeInvoice = createAction(
  '[Invoice] RemoveInvoice',
  props<{ id: string }>()
);

export const editInvoice = createAction(
  '[Invoice] EditInvoice',
  props<{ id: string }>()
);

export const changeStatus = createAction(
  '[Invoice] ChangeStatus',
  props<{ id: string; newStatus: InvoiceStatus }>()
);
