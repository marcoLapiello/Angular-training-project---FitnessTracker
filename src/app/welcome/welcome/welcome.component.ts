import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  isLargeScreen = false;

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit() {
    this.responsive.observe(
      Breakpoints.Large,
      )
      .subscribe(result => {
        this.isLargeScreen = false;
        if (result.matches) {
          this.isLargeScreen = true;
        }
      });
  }
}
