import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FindComponent } from './find/find.component';
import { OffersComponent } from './offers/offers.component';
import { ProductComponent } from './product/product.component';
import { EventsComponent } from './events/events.component';
import { MissionComponent } from './mission/mission.component';
import { ServicesComponent } from './services/services.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SignupComponent } from './signup/signup.component';
import { UserSignupComponent } from './signup/user-signup/user-signup.component';
import { ServiceCenterSignupComponent } from './signup/service-center-signup/service-center-signup.component';


// Routing Modules
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindComponent,
    OffersComponent,
    ProductComponent,
    EventsComponent,
    MissionComponent,
    ServicesComponent,
    SocialMediaComponent,
    SignupComponent,
    UserSignupComponent,
    ServiceCenterSignupComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('appmodule loaded');
  }
}
