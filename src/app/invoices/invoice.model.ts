export enum PaymentTerms {
  'Net 1 Day' = 1,
  'Net 7 Days' = 7,
  'Net 14 Days' = 14,
  'Net 30 Days' = 30,
}

export type InvoiceStatus = 'paid' | 'pending' | 'draft';

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: PaymentTerms;
  clientName: string;
  clientEmail: string;
  status: InvoiceStatus;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}

export interface Filter {
  id: number;
  value: InvoiceStatus;
  filterStatus: InvoiceStatus;
  text: 'Paid' | 'Pending' | 'Draft';
  active: boolean;
}

export type InvoiceState = Invoice[];
export type FilterState = Filter[];

export interface AppState {
  invoices: InvoiceState;
  filters: FilterState;
}

export type FilterArray = [boolean, boolean, boolean];
