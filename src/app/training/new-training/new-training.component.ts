import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSelectModule } from '@angular/material/select';
import { TrainingService } from '../training/training.service';

@Component({
  selector: 'app-new-training',
  imports: [MatButtonModule, MatCardModule, MatSelectModule],
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.scss'
})
export class NewTrainingComponent {
  smallDevice = false;
  availableExercises: any[] = [];
  @Output() startTraining = new EventEmitter<void>();

  constructor(private responsive: BreakpointObserver, private trainingService: TrainingService) {
    this.availableExercises = this.trainingService.availableExercises;
  }

  ngOnInit() {
    console.log(this.trainingService.availableExercises);
    console.log(this.availableExercises);
    
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
