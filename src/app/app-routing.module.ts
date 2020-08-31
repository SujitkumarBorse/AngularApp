import { NgModule } from '@angular/core';

// Component
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { FindComponent } from './find/find.component';
import { ServicesComponent } from './services/services.component';
import { OffersComponent } from './offers/offers.component';
import { ProductComponent } from './product/product.component';
import { EventsComponent } from './events/events.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SignupComponent } from './signup/signup.component';
import { UserSignupComponent } from './signup/user-signup/user-signup.component';
import { ServiceCenterSignupComponent } from './signup/service-center-signup/service-center-signup.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Routing
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //main page routing
  { path: 'home', component: HomeComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'find', component: FindComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'product', component: ProductComponent },
  { path: 'events', component: EventsComponent },
  { path: 'socialMedia', component: SocialMediaComponent },
  {
    path: 'signup', component: SignupComponent,
    children: [
      {
        path: 'user-signup',
        component: UserSignupComponent
      },
      {
        path: 'service-center-signup',
        component: ServiceCenterSignupComponent
      }
    ]
  },

  // lazy loading
  {
    path:"user",
    loadChildren:'./modules/user/user.module#UserModule',
    canActivate :[AuthGuard]
  },
  {
    path:"service-center",
    loadChildren:'./modules/service-center/service-center.module#ServiceCenterModule',
    canActivate :[AuthGuard]
  },
  
   // for redirect to home page
   { path: '', redirectTo: '/home', pathMatch: 'full' },

   //page not found
   { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
