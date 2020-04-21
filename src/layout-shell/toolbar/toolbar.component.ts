import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { AuthService } from 'src/core/Authorization/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private sidenavService: SidenavService, 
    private authService: AuthService,
    private router: Router,) { }

  ngOnInit() {
  }

  public sidenavToggle(){
    this.sidenavService.sidenavToggle();
  }

  public logOut(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
