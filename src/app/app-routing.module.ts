import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/components/main/main.component';
import { CustomerSubscriptionComponent } from './shared/components/customer/customer-subscription/customer-subscription.component';
import { CustomerPaymentHistoryComponent } from './shared/components/customer/customer-payment-history/customer-payment-history.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'customer-subscriptions', component: CustomerSubscriptionComponent },
  { path: 'payment-history', component: CustomerPaymentHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
