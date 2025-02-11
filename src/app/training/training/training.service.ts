import { Injectable } from "@angular/core";
import { Exercise } from "./exercise.model";


@Injectable({
    providedIn: 'root'
})
export class TrainingService {
    availableExercises: Exercise[] = [
        {
            "id": "running",
            "name": "Running",
            "duration": 30,
            "calories": 300
        },
        {
            "id": "cycling",
            "name": "Cycling",
            "duration": 45,
            "calories": 400
        },
        {
            "id": "swimming",
            "name": "Swimming",
            "duration": 60,
            "calories": 500
        },
        {
            "id": "jumping jacks",
            "name": "Jumping Jacks",
            "duration": 20,
            "calories": 200
        },
        {
            "id": "rowing",
            "name": "Rowing",
            "duration": 30,
            "calories": 350
        }
    ];
}