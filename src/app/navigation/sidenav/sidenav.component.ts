import { Component, EventEmitter, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  imports: [MatListModule, MatSidenavModule, MatIconModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Output() closeSidenav = new EventEmitter<void>();

  onCloseSidenav() {
    this.closeSidenav.emit();
  }
}
