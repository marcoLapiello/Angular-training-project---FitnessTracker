import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NewTrainingComponent } from '../new-training/new-training.component';
import { PastTrainingComponent } from '../past-training/past-training.component';
import { CurrentTrainingComponent } from "../current-training/current-training.component";

@Component({
  selector: 'app-training',
  imports: [MatTabsModule, NewTrainingComponent, PastTrainingComponent, CurrentTrainingComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {
  isOngoingTraining = false;
}
