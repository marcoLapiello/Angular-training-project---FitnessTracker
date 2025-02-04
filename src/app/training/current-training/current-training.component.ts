import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-current-training',
  imports: [MatProgressSpinnerModule, MatCardModule, MatButtonModule],
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.scss'
})
export class CurrentTrainingComponent {

  progress = 0;

  ngOnInit() {
    setInterval(() => {
      this.progress = this.progress + 5;
    }, 1000);
  }

  stopTraining() {}
}
