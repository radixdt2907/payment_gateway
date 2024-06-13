import { Component, Input } from '@angular/core';
import { CustomerModel } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent {

  @Input() customer!: CustomerModel;
}
