import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent {
  selectedCategory: string = 'all';
  selectedSub: string = 'all';
  selectedImage: string | null = null;

  projects = [
    { title: 'Portrait Urbain', url: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=800', category: 'portrait' },
    { title: 'Lumière d\'été', url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=800', category: 'nature' },
    { title: 'Noir et Blanc', url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800', category: 'urbain' },

    { title: 'Mariage – Annecy', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800', category: 'evenement', sub: 'mariage' },
    { title: 'Baptême – Grenoble', url: 'https://images.unsplash.com/photo-1521310192545-4ac7951413f0?q=80&w=800', category: 'evenement', sub: 'bapteme' },
    { title: 'Anniversaire – Lyon', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800', category: 'evenement', sub: 'anniversaire' }
  ];

  setCategory(cat: string) {
    this.selectedCategory = cat;
    this.selectedSub = 'all';
  }

  setSub(sub: string) {
    this.selectedSub = sub;
  }

  get filteredProjects() {
    let list = this.selectedCategory === 'all'
      ? this.projects
      : this.projects.filter(p => p.category === this.selectedCategory);

    if (this.selectedCategory === 'evenement' && this.selectedSub !== 'all') {
      list = list.filter(p => p.sub === this.selectedSub);
    }

    return list;
  }

  openImage(url: string) {
    this.selectedImage = url;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
