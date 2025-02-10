import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-stop-training-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './stop-training-dialog.component.html',
  styleUrl: './stop-training-dialog.component.scss'
})
export class StopTrainingDialogComponent {
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
