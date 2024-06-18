import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaymentHistoryCardComponent } from './customer-payment-history-card.component';

describe('CustomerPaymentHistoryCardComponent', () => {
  let component: CustomerPaymentHistoryCardComponent;
  let fixture: ComponentFixture<CustomerPaymentHistoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPaymentHistoryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPaymentHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
