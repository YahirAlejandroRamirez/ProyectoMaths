import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngFor
import { SafeUrlPipe } from './safe-url.pipe'; // Ajusta la ruta según la ubicación real del pipe

@Component({
  selector: 'app-home1',
  standalone: true, // Define el componente como standalone
  imports: [
    CommonModule,    // Importa CommonModule para usar directivas como *ngFor
    SafeUrlPipe      // Importa el pipe SafeUrlPipe
  ],
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})

export class Home1Component {
  videos = [
    {
      title: 'Cálculo Diferencial',
      description: 'Introducción al cálculo diferencial, conceptos básicos y aplicaciones.',
      url: 'https://www.youtube.com/embed/ZSYQ13iMbYA',
    },
    {
      title: 'Cálculo Integral',
      description: 'Exploración de las integrales, métodos de resolución y ejemplos prácticos.',
      url: 'https://www.youtube.com/embed/E3ECQskKyrU',
    },
    {
      title: 'Cálculo Vectorial',
      description: 'Conceptos de cálculo vectorial y su aplicación en física e ingeniería.',
      url: 'https://www.youtube.com/embed/aYlICOhaO1g',
    },
    {
      title: 'Aplicaciones del Cálculo',
      description: 'Casos reales donde el cálculo diferencial e integral son esenciales.',
      url: 'https://www.youtube.com/embed/igCXJ6dUjMM',
    },
  ];
}

