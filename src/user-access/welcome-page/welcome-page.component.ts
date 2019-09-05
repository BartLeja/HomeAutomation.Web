import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  public mobileQuery: MediaQueryList;
  
  private _mobileQueryListener: () => void;
  constructor(
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher, 
  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

}
