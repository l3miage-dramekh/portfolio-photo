import { Routes } from '@angular/router';

import { GalleryComponent } from './components/gallery/gallery';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

export const routeConfig = {
  scrollPositionRestoration: 'top'
};

  




