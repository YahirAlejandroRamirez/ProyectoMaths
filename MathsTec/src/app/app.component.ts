import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/navbar/navbar.component";

import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { Header1Component } from "./component/header1/header1.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HeaderComponent, Header1Component,  ],
  templateUrl: './app.component.html',
  template: `<app-ejercicios></app-ejercicios>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MathsTec';
}
