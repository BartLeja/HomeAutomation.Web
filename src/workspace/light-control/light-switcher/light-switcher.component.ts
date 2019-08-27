import { Component, OnInit } from '@angular/core';
import { LightService } from '../services/light-control.service';

@Component({
  selector: 'app-light-switcher',
  templateUrl: './light-switcher.component.html',
  styleUrls: ['./light-switcher.component.css']
})
export class LightSwitcherComponent implements OnInit {
  public product:Array<string>= [''
  // ,'','','','','',''
]
  constructor(private lightService: LightService ) { }

  ngOnInit() {
    let user = { email: "bleja"};

    this.lightService.getLightingSystemConfiguration('bleja').subscribe( (res) =>
      {
        console.log(res);
      }
    )
  }

}
