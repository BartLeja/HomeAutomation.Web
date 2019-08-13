import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-switcher',
  templateUrl: './light-switcher.component.html',
  styleUrls: ['./light-switcher.component.css']
})
export class LightSwitcherComponent implements OnInit {
  public product:Array<string>= ['','','','','','','']
  constructor() { }

  ngOnInit() {
  }

}
