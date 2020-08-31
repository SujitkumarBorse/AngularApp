import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCenterRoutingModule } from './service-center-routing.module';


import { ServiceCenterComponent } from './service-center.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { ConfirmedOrdersComponent } from './confirmed-orders/confirmed-orders.component';
import { WalletStatusComponent } from './wallet-status/wallet-status.component';
import { TotalPendingAmountComponent } from './total-pending-amount/total-pending-amount.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceCenterService } from './serviceCenter.service';


@NgModule({
  declarations:[ServiceCenterComponent,
    ServiceCenterComponent,
    ViewBookingComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    CustomerHistoryComponent,
    ConfirmedOrdersComponent,
    WalletStatusComponent,
    TotalPendingAmountComponent
  ],
  imports: [
    CommonModule,
    ServiceCenterRoutingModule,
    HttpClientModule
  ],
  providers:[
    ServiceCenterService
  ]
})
export class ServiceCenterModule {
  constructor(){
    console.log('service center module loaded');
  }
 }
