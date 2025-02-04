import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [LayoutModule, MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  showToolbarLinks = true;
  showBurgerMenu = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.responsive.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait])
      .subscribe(result => {
        this.showToolbarLinks = true;
        this.showBurgerMenu = false;
        if (result.matches) {
          this.showBurgerMenu = true;
          this.showToolbarLinks = false;
        }

      });
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
