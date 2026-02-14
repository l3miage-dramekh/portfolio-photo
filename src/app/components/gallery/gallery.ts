import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent {
  projects = [
    { title: 'Portrait Urbain', url: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=800' },
    { title: 'Lumière d\'été', url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=800' },
    { title: 'Noir et Blanc', url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800' }
  ];
}