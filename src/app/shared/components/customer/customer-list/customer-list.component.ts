import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/shared/models/customer.model';
import { CurrSelectedDataService } from 'src/app/shared/services/currSelectedData/curr-selected-data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent {
  @Input('list') public customerList: CustomerModel[] = [];

  constructor(
    protected currSelectedData: CurrSelectedDataService,
    protected router: Router
  ) {}

  protected handleCustomerCardClick = (customer: CustomerModel): void =>
    this.currSelectedData.updateCustomer(customer);

  protected handleGetAllSubscriptionsClick = (customer_id: string) => 
    this.router.navigate(['customer-subscriptions'], {queryParams: {customer_id}})

  protected handlePaymentHistoryClick = () => {};
}
