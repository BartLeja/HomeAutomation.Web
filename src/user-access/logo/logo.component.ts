import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  // elementRef: any;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    //this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'linear-gradient(-20deg, #bdc3c7 0%, #2c3e50 100%)';
  }

  ngOnInit() {
  }

}
