import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceCenterComponent } from './service-center.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { ConfirmedOrdersComponent } from './confirmed-orders/confirmed-orders.component';
import { WalletStatusComponent } from './wallet-status/wallet-status.component';
import { TotalPendingAmountComponent } from './total-pending-amount/total-pending-amount.component';


const routes: Routes = [
  {
    path: '', component: ServiceCenterComponent,
     children: [
       {
         path: 'view-booking',
         component: ViewBookingComponent
       },
       {
         path: 'edit-profile',
         component: EditProfileComponent
       },
       {
         path: 'change-password',
         component: ChangePasswordComponent
       },
       {
         path: 'customer-history',
         component: CustomerHistoryComponent
       },
       {
         path: 'confirm-orders',
         component: ConfirmedOrdersComponent
       },
       {
         path: 'wallet-status',
         component: WalletStatusComponent
       },
       {
         path: 'total-pending',
         component: TotalPendingAmountComponent
       }
     ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ServiceCenterRoutingModule { }
