import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsService {
  private readonly subscriptionsUrl: string = `${config.BASE_SERVER_URL}/subscriptions`;

  constructor(private httpClient: HttpClient) {}

  public fetchAllSubscriptions = (customer_id: string): Observable<any> => {
    return this.httpClient.get(this.subscriptionsUrl, {
      params: { customer_id },
    });
  };
}