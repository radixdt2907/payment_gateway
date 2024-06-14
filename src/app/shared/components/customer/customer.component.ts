import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../models/customer.model';
import { CustomerService } from '../../services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {

  protected customerList: CustomerModel[] = [];

  constructor(private customerService: CustomerService) {}
  
  ngOnInit(): void {
    this.loadCustomers();
  }

  private loadCustomers(): void {
    this.customerService.fetchAllCustomers().subscribe({
      next: (res) => {
        this.customerList = res.customers;
      },
      error: (error: any) => {
        console.error('Failed to load customers:', error);
      },
    });
  }
}
