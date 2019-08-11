import {Injectable} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Injectable({
    providedIn: 'root',
  })
export class SidenavService {

    private sidenav: MatSidenav;
    public isExpanded = false;

    public sidenavInit(sidenav: MatSidenav){
        this.sidenav = sidenav;
    }

    public sidenavToggle(){
        this.sidenav.toggle();
    }
}