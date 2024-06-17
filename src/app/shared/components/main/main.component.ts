import { Component } from '@angular/core';
import { HostedPageService } from '../../services/hostedPage/hosted-page.service';
import { CurrSelectedDataService } from '../../services/currSelectedData/curr-selected-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(protected currSelectedUser: CurrSelectedDataService, private hostedPageService: HostedPageService) {}

  protected handlePayNow() {
    this.hostedPageService.payNow()
  }
}
