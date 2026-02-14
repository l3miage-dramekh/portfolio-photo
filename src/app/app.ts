import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',

  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        style({
          opacity: 0,
          transform: 'scale(0.95)'
        }),
        animate(
          '300ms ease-out',
          style({
            opacity: 1,
            transform: 'scale(1)'
          })
        )
      ])
    ])
  ]
})
export class AppComponent {

  ngOnInit() {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 20) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData;
  }

  menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

}
