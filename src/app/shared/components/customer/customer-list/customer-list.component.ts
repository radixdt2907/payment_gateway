import { Component, Input } from '@angular/core';
import { CustomerModel } from 'src/app/shared/models/customer.model';
import { CurrSelectedDataService } from 'src/app/shared/services/currSelectedData/curr-selected-data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent {
  @Input('list') public customerList: CustomerModel[] = [];

  constructor(private currSelectedData: CurrSelectedDataService) {}

  protected handleCustomerCardClick = (customer: CustomerModel): void =>
    this.currSelectedData.updateCustomer(customer);
}
