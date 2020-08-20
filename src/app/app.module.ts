import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { PlaceFitnessTrainerAppointmentComponent } from './place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatGridListModule } from  '@angular/material';
import { AutoFocusDirective } from './auto-focus.directive';
@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    LandingPageComponent,
    PlaceFitnessTrainerAppointmentComponent,
    ViewAppointmentComponent,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  exports: [ViewAppointmentComponent,
    PlaceFitnessTrainerAppointmentComponent,
    ContactUsComponent,
    LandingPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
