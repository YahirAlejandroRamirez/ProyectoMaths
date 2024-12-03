import { Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { Home1Component } from './component/home1/home1.component';
import bootstrap from '../main.server';
import { Home2Component } from './component/home2/home2.component';
import { Home3Component } from './component/home3/home3.component';
import { Home4Component } from './component/home4/home4.component';
import { ExerciseComponent } from './component/exercise/exercise.component';
import { DocentesComponent } from './component/docentes/docentes.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'home1', component: Home1Component },
    { path: 'home2', component: Home2Component },
    { path: 'home3', component: Home3Component },
    { path: 'home4', component: Home4Component },

    { path: 'docentes', component: DocentesComponent  },

    { path: 'ejercicios', component: ExerciseComponent},
    { path: '**', redirectTo: '/home' },
];