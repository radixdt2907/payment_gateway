import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router, RouterLink } from '@angular/router';
import { SubscriptionsService } from 'src/app/shared/services/subscriptions/subscriptions.service';

@Component({
  selector: 'app-customer-subscription-card',
  templateUrl: './customer-subscription-card.component.html',
  styleUrls: ['./customer-subscription-card.component.css'],
})
export class CustomerSubscriptionCardComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private subscriptionsService: SubscriptionsService) {}

  ngOnInit(): void {
    this.redirectToHomeBasedOnCustomerId();
  }

  private redirectToHomeBasedOnCustomerId = () => {
    const {customer_id} = this.route.snapshot.queryParams;

    if(!customer_id) this.router.navigate(['']);
    else this.fetchAllSubscriptions(customer_id)
  }


  public fetchAllSubscriptions = (customer_id: string) => {

    this.subscriptionsService.fetchAllSubscriptions(customer_id).subscribe(res => {
      console.log(res);
    })
  }
}
