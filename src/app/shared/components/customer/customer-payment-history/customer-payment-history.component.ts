import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';

@Component({
  selector: 'app-customer-payment-history',
  templateUrl: './customer-payment-history.component.html',
  styleUrls: ['./customer-payment-history.component.css'],
})
export class CustomerPaymentHistoryComponent implements OnInit {
  
  protected paymentHistoryList: Array<any> = [];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.redirectBasedOnCustomerId();
  }

  private redirectBasedOnCustomerId = () => {
    const { customer_id } = this.route.snapshot.queryParams;

    // If customer is not available redirect to home page
    if (!customer_id) this.router.navigate(['']);
    else this.fetchAllPaymentInfoParticularCustomer(customer_id);
  };

  protected fetchAllPaymentInfoParticularCustomer = (customer_id: string) => {
    this.paymentService.fetchAllPaymentInfoParticularCustomer(customer_id).subscribe({
      next: (res) => {
        this.paymentHistoryList = res.payment;
      },
      error: (error: any) => {
        console.error('Failed to load subscriptions:', error);
      },
    });
  };
}
