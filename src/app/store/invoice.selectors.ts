import { createSelector } from '@ngrx/store';
import { AppState, FilterState, InvoiceState } from '../invoices/invoice.model';

export const selectInvoices = (state: AppState) => state.invoices;
export const selectFilters = (state: AppState) => state.filters;

export const selectInvoicesCount = createSelector(
  selectInvoices,
  (state) => state.length
);

export const selectInvoicesNotEmpty = createSelector(
  selectInvoices,
  (state) => state.length > 0
);

export const selectFilteredInvoices = createSelector(
  selectInvoices,
  selectFilters,
  (invoices: InvoiceState, filters: FilterState) => {
    const activeFilters = new Set(
      filters
        .filter((filter) => filter.active)
        .map((filter) => filter.filterStatus)
    );

    return invoices.filter((invoice) => activeFilters.has(invoice.status));
  }
);

export const selectFilteredInvoicesCount = createSelector(
  selectFilteredInvoices,
  (invoices) => invoices.length
);

export const selectInvoiceById = (invoiceId: string) =>
  createSelector(selectFilteredInvoices, (invoices) =>
    invoices.find((invoice) => invoice.id === invoiceId)
  );
