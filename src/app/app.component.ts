import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from "@angular/router";
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})





export class AppComponent {
  title = 'angularSPA';
   ngOnInit() {
                
  }
  constructor(private router : Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  landingpage() {
    this.router.navigateByUrl("landing-page");
  }
  placeAppointment() {
    this.router.navigateByUrl("place-fitness-trainer-appointment");
  }
  viewAppointment() {
    this.router.navigateByUrl("view-appointment");
  }
  contactUspage() {
    this.router.navigateByUrl("contact-us");
  }

  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("navBar").style.marginLeft = "250px";
  document.getElementById("Banner").style.marginLeft = "250px";
  }

  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("navBar").style.marginLeft = "0";
  document.getElementById("Banner").style.marginLeft = "0";
  
  }

  mobileQuery: MediaQueryList;

  

  private _mobileQueryListener: () => void;

  

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}


