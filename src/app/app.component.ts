import { Component } from '@angular/core';
import { CurrSelectedDataService } from './shared/services/currSelectedData/curr-selected-data.service';
import { HostedPageService } from './shared/services/hostedPage/hosted-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'payment_gateway';

  constructor(protected currSelectedUser: CurrSelectedDataService, private hostedPageService: HostedPageService) {}

  protected handlePayNow() {
    this.hostedPageService.payNow()
  }
}