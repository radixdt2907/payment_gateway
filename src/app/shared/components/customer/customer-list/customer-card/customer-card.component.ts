import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerModel } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent {

  @Input() customer!: CustomerModel;
  @Input() currSelectedCustomer!: CustomerModel;

  @Output() getAllSubscriptionsClick: Subject<void> = new Subject<void>();
  @Output() paymentHistoryClick: Subject<void> = new Subject<void>();
  @Output() cardClick: Subject<void> = new Subject<void>();
}
