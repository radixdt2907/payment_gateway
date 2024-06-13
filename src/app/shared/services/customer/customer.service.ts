import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/app/config';
import { CustomerModel } from '../../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly _serverCustomerUrl: string = `${config.BASE_SERVER_URL}/customer`;

  constructor(private _httpClient: HttpClient) {}

  /**
   * Fetches all customers from the server.
   * @returns An observable of the response.
   */
  public fetchAllCustomers = (): Observable<any> => {
    return this._httpClient.get(this._serverCustomerUrl);
  };

  public createCustomer = (customer: CustomerModel): Observable<any> => {
    return this._httpClient.post(this._serverCustomerUrl, customer);
  }
}
