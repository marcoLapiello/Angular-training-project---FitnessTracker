import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-new-training',
  imports: [MatButtonModule, MatCardModule, MatSelectModule],
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.scss'
})
export class NewTrainingComponent {
  smallDevice = false;
  @Output() startTraining = new EventEmitter<void>();

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit() {
    this.responsive.observe(Breakpoints.XSmall)
      .subscribe(result => {
        this.smallDevice = false;
        if (result.matches) {
          this.smallDevice = true;
        }

      });
  }

  onStartTraining() {
    this.startTraining.emit();
  }

}
