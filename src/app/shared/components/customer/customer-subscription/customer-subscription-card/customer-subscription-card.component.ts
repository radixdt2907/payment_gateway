import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-subscription-card',
  templateUrl: './customer-subscription-card.component.html',
  styleUrls: ['./customer-subscription-card.component.css'],
})
export class CustomerSubscriptionCardComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.subscription)
  }

  @Input() subscription!: any;
}
