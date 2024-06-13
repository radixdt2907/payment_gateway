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
import { PlanComponent } from './components/plan/plan.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerFormComponent,
    CustomerListComponent,
    CustomerCardComponent,
    PlanComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
