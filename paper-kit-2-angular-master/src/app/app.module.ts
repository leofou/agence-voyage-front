import { TrainRideComponent } from './components/trainRide/trainRide.component';
import { OperatingCompagnyComponent } from './components/operatingCompagny/operatingCompagny.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ExamplesModule } from './examples/examples.module';
import { LocationService } from './service/location.service';
import { CustomerService } from './service/customer.service';
import { JourneyComponent } from './components/journey/journey.component';
import { RiverCruiseComponent } from './components/riverCruise/riverCruise.component';
import { FlightComponent } from './components/flight/flight.component';
import { OperatingcompanyService } from './service/Operatingcompany.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { LocationComponent } from './components/location/location.component';
import { CustomerComponent } from './components/customer/customer.component';
import { JourneyService } from './service/journey.service';
import { RiverCruiseService } from './service/riverCruise.service';
import { TrainRideService } from './service/trainRide.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LocationComponent,
    CustomerComponent,
    OperatingCompagnyComponent,
    JourneyComponent,
    RiverCruiseComponent,
    TrainRideComponent,
    FlightComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LocationService,
    CustomerService,
    OperatingcompanyService,
    JourneyService,
    RiverCruiseService,
    TrainRideService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
