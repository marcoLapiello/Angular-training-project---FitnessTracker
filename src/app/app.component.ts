import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavComponent } from "./navigation/sidenav/sidenav.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatSidenavModule, MatListModule, RouterModule, HeaderComponent, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fitness-tracker';
  
}
