import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/config';
import { CurrSelectedDataService } from '../currSelectedData/curr-selected-data.service';

@Injectable({
  providedIn: 'root',
})
export class HostedPageService {
  private readonly _serverHostedPageUrl: string = `${config.BASE_SERVER_URL}/hosted-pages`;

  constructor(
    private httpClient: HttpClient,
    private currSelectedUser: CurrSelectedDataService
  ) {}

  public payNow() {
    if (this.currSelectedUser.form.valid) {
      const data = {
        customer_id:
          this.currSelectedUser.form.get('customer')?.value.customer_id,
        plan: {
          plan_code: this.currSelectedUser.form.get('plan')?.value.plan_code,
        },
        addons: (this.currSelectedUser.form.get('addon')?.value ?? []).map(
          (currAddon: string) => {
            return {
              addon_code: currAddon,
            };
          }
        ),
      };

      this.httpClient.post(this._serverHostedPageUrl, data).subscribe((res) => {
        console.log('Line 30 >> ', res);
      });
    } // TODO Handle Invalid things
  }
}
