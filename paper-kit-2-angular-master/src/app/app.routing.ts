import { TrainRideComponent } from './components/trainRide/trainRide.component';
import { OperatingCompagnyComponent } from './components/operatingCompagny/operatingCompagny.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { LocationComponent } from './components/location/location.component';
import { CustomerComponent } from './components/customer/customer.component';
import { JourneyComponent } from './components/journey/journey.component';
import { FlightComponent } from './components/flight/flight.component';
import { RiverCruiseComponent } from './components/riverCruise/riverCruise.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',                     component: ComponentsComponent       },
    { path: 'user-profile',             component: ProfileComponent          },
    { path: 'signup',                   component: SignupComponent           },
    { path: 'landing',                  component: LandingComponent          },
    { path: 'nucleoicons',              component: NucleoiconsComponent      },
    { path: 'locations',                component: LocationComponent         },
    { path: 'customers',                component: CustomerComponent         },
    { path: 'operatingCompagny',        component: OperatingCompagnyComponent},
    { path: 'journey',                  component: JourneyComponent          },
    { path: 'flight',                   component: FlightComponent           },
    { path: 'riverCruise',              component: RiverCruiseComponent      },
    { path: 'trainRide',                component: TrainRideComponent        },


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
