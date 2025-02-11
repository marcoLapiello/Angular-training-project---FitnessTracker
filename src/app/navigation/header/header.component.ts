import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [LayoutModule, MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  isAuthenticated = false;
  private authSubscription!: Subscription;
  showToolbarLinks = true;
  showBurgerMenu = false;
  

  constructor(private responsive: BreakpointObserver, private authService: AuthService) { }

  ngOnInit() {
    this.observeBreakpoints();
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuthenticated = authStatus;
    });
  }

  observeBreakpoints() {
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

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
