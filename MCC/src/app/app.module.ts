import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./http.service";
import { NavComponent } from './nav/nav.component';
import { HomeTopComponent } from './home-top/home-top.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FixturesComponent,
    NavComponent,
    HomeTopComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
