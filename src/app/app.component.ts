import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InvoicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
