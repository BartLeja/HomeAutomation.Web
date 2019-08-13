import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.css']
})
export class LightCardComponent implements OnInit {

  constructor() { }
  @Input() product;

  ngOnInit() {
  }

}
