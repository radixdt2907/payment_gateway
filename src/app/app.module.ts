import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CustomerComponent } from './shared/components/customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerFormComponent } from './shared/components/customer/customer-form/customer-form.component';
import { CustomerListComponent } from './shared/components/customer/customer-list/customer-list.component';
import { CustomerCardComponent } from './shared/components/customer/customer-list/customer-card/customer-card.component';
import { PlanComponent } from './shared/components/plan/plan.component';
import { PlanListComponent } from './shared/components/plan/plan-list/plan-list.component';
import { PlanCardComponent } from './shared/components/plan/plan-list/plan-card/plan-card.component';
import { AddonsComponent } from './shared/components/addons/addons.component';
import { AddonsListComponent } from './shared/components/addons/addons-list/addons-list.component';
import { AddonsCardComponent } from './shared/components/addons/addons-list/addons-card/addons-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerSubscriptionComponent } from './shared/components/customer/customer-subscription/customer-subscription.component';
import { CustomerPaymentHistoryComponent } from './shared/components/customer/customer-payment-history/customer-payment-history.component';
import { MainComponent } from './shared/components/main/main.component';
import { CustomerSubscriptionCardComponent } from './shared/components/customer/customer-subscription/customer-subscription-card/customer-subscription-card.component';
import { CustomerPaymentHistoryCardComponent } from './shared/components/customer/customer-payment-history/customer-payment-history-card/customer-payment-history-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerFormComponent,
    CustomerListComponent,
    CustomerCardComponent,
    PlanComponent,
    PlanListComponent,
    PlanCardComponent,
    AddonsComponent,
    AddonsListComponent,
    AddonsCardComponent,
    CustomerSubscriptionComponent,
    CustomerPaymentHistoryComponent,
    MainComponent,
    CustomerSubscriptionCardComponent,
    CustomerPaymentHistoryCardComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
