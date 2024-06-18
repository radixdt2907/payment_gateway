import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-customer-payment-history-card',
  templateUrl: './customer-payment-history-card.component.html',
  styleUrls: ['./customer-payment-history-card.component.css'],
})
export class CustomerPaymentHistoryCardComponent {
  
  @Input() paymentHistoryObj: any;

  readonly panelOpenState = signal(false);
}
