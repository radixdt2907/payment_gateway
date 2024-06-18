import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private readonly paymentUrl: string = `${config.BASE_SERVER_URL}/payment`;

  constructor(private httpClient: HttpClient) {}

  // http://localhost:5000/api/payment/get-payment-history?customer_id=1848712000000074027
  public fetchAllPaymentInfoParticularCustomer = (
    customer_id: string
  ): Observable<any> => {
    return this.httpClient.get(`${this.paymentUrl}/get-payment-history`, {
      params: { customer_id },
    });
  };
}
