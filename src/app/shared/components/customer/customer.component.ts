import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomerService } from '../../services/customer/customer.service';
import { CustomerModel } from '../../models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  @Input() firstFormGroup!: FormGroup;

  protected customerList: CustomerModel[] = [];

  constructor(private _customerService: CustomerService) {}
  
  ngOnInit(): void {
    this.loadCustomers();
  }

  private loadCustomers(): void {
    this._customerService.fetchAllCustomers().subscribe({
      next: (res) => {
        this.customerList = res.customers;
      },
      error: (error: any) => {
        console.error('Failed to load customers:', error);
      },
    });
  }
}
