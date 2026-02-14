import { Routes } from '@angular/router';

import { GalleryComponent } from './components/gallery/gallery';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

