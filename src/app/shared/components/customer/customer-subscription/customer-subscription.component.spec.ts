import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSubscriptionComponent } from './customer-subscription.component';

describe('CustomerSubscriptionComponent', () => {
  let component: CustomerSubscriptionComponent;
  let fixture: ComponentFixture<CustomerSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
