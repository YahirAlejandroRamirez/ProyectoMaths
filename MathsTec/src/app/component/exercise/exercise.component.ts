import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'; // Directivas de Angular comunes
import { FormsModule } from '@angular/forms'; // Para [(ngModel)]
import { ExerciseService } from './exercise.service';
import { Exercise } from './exercise.model';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule], // Importa FormsModule
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
  providers: [ExerciseService], // Define el servicio en el componente
})
export class ExerciseComponent implements OnInit {
  exercises: Exercise[] = [];
  currentExerciseIndex = 0;
  selectedOption: string | null = null;
  feedback: string | null = null;
  score = 0; // Contador de aciertos


  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exerciseService.getExercises().subscribe((data) => {
      this.exercises = data;
    });
  }

  submitAnswer() {
    const currentExercise = this.exercises[this.currentExerciseIndex];
    const correct = currentExercise.options.find((option) => option.correct)?.text;

    if (this.selectedOption === correct) {
      this.feedback = '¡Correcto! 🎉';
      this.score++; // Incrementa el contador de aciertos
    } else {
      this.feedback = `Incorrecto. ❌ La respuesta correcta es: ${correct}`;
    }
  }

  nextExercise() {
    this.feedback = null;
    this.selectedOption = null;
    this.currentExerciseIndex++;
  }
}
