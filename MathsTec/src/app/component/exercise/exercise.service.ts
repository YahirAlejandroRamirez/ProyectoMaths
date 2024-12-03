import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Exercise } from './exercise.model';

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  private exercises: Exercise[] = [
    {
      id: '1',
      question: '¿Cuál es la derivada de f(x) = x²?',
      options: [
        { text: '2x', correct: true },
        { text: 'x²', correct: false },
        { text: '2x + 1', correct: false },
        { text: 'x + 2', correct: false },
      ],
    },
    {
      id: '2',
      question: '¿Cuál es la derivada de f(x) = sin(x)?',
      options: [
        { text: 'sin(x)', correct: false },
        { text: '-cos(x)', correct: false },
        { text: '-sin(x)', correct: false },
        { text: 'cos(x)', correct: true },

      ],
    },
    {
      id: '3',
      question: '¿Cuál es la derivada de f(x) = eᵡ?',
      options: [
        { text: 'eᵡ', correct: true },
        { text: 'xᵉ', correct: false },
        { text: 'eᵡ⁺¹', correct: false },
        { text: 'ln(x)', correct: false },
      ],
    },
    {
      id: '4',
      question: '¿Cuál es la derivada de f(x) = ln(x)?',
      options: [
        { text: '1/x', correct: true },
        { text: 'ln(x)', correct: false },
        { text: 'x * ln(x)', correct: false },
        { text: 'x²', correct: false },
      ],
    },
    {
      id: '5',
      question: '¿Cuál es la derivada de f(x) = x³ + 3x?',
      options: [
        { text: 'x² + 3', correct: false },
        { text: '3x² + 3', correct: true },
        { text: '3x²', correct: false },
        { text: '6x', correct: false },
      ],
    },
    {
      id: '6',
      question: '¿Cuál es la derivada de f(x) = cos(x)?',
      options: [
        { text: 'cos(x)', correct: false },
        { text: 'sin(x)', correct: false },
        { text: '-cos(x)', correct: false },
        { text: '-sin(x)', correct: true },
      ],
    },
    {
      id: '7',
      question: '¿Cuál es la derivada de f(x) = tan(x)?',
      options: [
        { text: 'cot(x)', correct: false },
        { text: 'sec²(x)', correct: true },
        { text: 'csc²(x)', correct: false },
        { text: 'tan(x) + 1', correct: false },
      ],
    },
    {
      id: '8',
      question: '¿Cuál es la derivada de f(x) = x⁴ - 2x² + 5?',
      options: [
        { text: 'x³ - x', correct: false },
        { text: '4x³ - 2x', correct: false },
        { text: '4x³ - 4x', correct: true },
        { text: '4x³ + 2x', correct: false },
      ],
    },
    {
      id: '9',
      question: '¿Cuál es la derivada de f(x) = 1/x?',
      options: [
        { text: '-1/x²', correct: true },
        { text: '1/x²', correct: false },
        { text: '-x', correct: false },
        { text: 'ln(x)', correct: false },
      ],
    },
    {
      id: '10',
      question: '¿Cuál es la derivada de f(x) = 3x² + 7x + 4?',
      options: [
        { text: '3x + 7', correct: false },
        { text: '6x', correct: false },
        { text: '6x + 7', correct: true },
        { text: '7x', correct: false },
      ],
    },
  ];
  

  getExercises(): Observable<Exercise[]> {
    return of(this.exercises);
  }
}

