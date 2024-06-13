import { Component, Input } from '@angular/core';
import { CustomerModel } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent {
  @Input('list') public customerList: CustomerModel[] = [];
}
