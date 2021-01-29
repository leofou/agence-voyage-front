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



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
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

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
