import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSubscriptionCardComponent } from './customer-subscription-card.component';

describe('CustomerSubscriptionCardComponent', () => {
  let component: CustomerSubscriptionCardComponent;
  let fixture: ComponentFixture<CustomerSubscriptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSubscriptionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSubscriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
