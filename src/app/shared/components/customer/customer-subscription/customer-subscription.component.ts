import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionsService } from 'src/app/shared/services/subscriptions/subscriptions.service';

@Component({
  selector: 'app-customer-subscription',
  templateUrl: './customer-subscription.component.html',
  styleUrls: ['./customer-subscription.component.css'],
})
export class CustomerSubscriptionComponent implements OnInit {
  protected subscriptionList: Array<any> = []; // TODO CREATE SUBSCRIPTION MODEL

  constructor(
    private subscriptionsService: SubscriptionsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.redirectBasedOnCustomerId();
  }

  private redirectBasedOnCustomerId = () => {
    const { customer_id } = this.route.snapshot.queryParams;

    // If customer is not available redirect to home page
    if (!customer_id) this.router.navigate(['']);
    else this.fetchAllSubscriptions(customer_id);
  };

  protected fetchAllSubscriptions = (customer_id: string) => {
    this.subscriptionsService.fetchAllSubscriptions(customer_id).subscribe({
      next: (res) => {
        this.subscriptionList = res.subscriptions;
      },
      error: (error: any) => {
        console.error('Failed to load subscriptions:', error);
      },
    });
  };
}
