import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-customer-subscription-card',
  templateUrl: './customer-subscription-card.component.html',
  styleUrls: ['./customer-subscription-card.component.css']
})
export class CustomerSubscriptionCardComponent implements OnInit {
  ngOnInit(): void {
    axios.get('test')
  }


}
