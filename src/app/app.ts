import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Ajoute RouterLink ici pour le menu !
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'portfolio-photo';
}
