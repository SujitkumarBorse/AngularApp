import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './user.component';
import { BookingOfServicingComponent } from './booking-of-servicing/booking-of-servicing.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HistoryComponent } from './history/history.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations:[
    UserComponent,
    BookingOfServicingComponent,
    EditProfileComponent,
    HistoryComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { 
  constructor(){
    console.log('user module loaded');
  }
 }
