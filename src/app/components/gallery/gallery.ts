type Project = {
  title: string;
  url: string;
  category: string;
  sub?: string;
};

type HeroImage = {
  url: string;
  title: string;
};

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent implements OnInit {

  selectedCategory: string = 'all';
  selectedSub: string = 'all';
  selectedImage: string | null = null;

  projects: Project[] = [
    { title: 'Portrait Urbain', url: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=800', category: 'portrait' },
    { title: 'Lumière d\'été', url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=800', category: 'nature' },
    { title: 'Noir et Blanc', url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800', category: 'urbain' },

    { title: 'Mariage – Annecy', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800', category: 'evenement', sub: 'mariage' },
    { title: 'Baptême – Grenoble', url: 'https://images.unsplash.com/photo-1521310192545-4ac7951413f0?q=80&w=800', category: 'evenement', sub: 'bapteme' },
    { title: 'Anniversaire – Lyon', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800', category: 'evenement', sub: 'anniversaire' },

    { title: 'Portrait Studio', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800', category: 'portrait' },
    { title: 'Portrait Naturel', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800', category: 'portrait' },
    { title: 'Portrait Mode', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800', category: 'portrait' },

    { title: 'Forêt Brumeuse', url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800', category: 'nature' },
    { title: 'Montagnes Dorées', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800', category: 'nature' },
    { title: 'Lac au Lever du Soleil', url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800', category: 'nature' },

    { title: 'Rue de Nuit', url: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800', category: 'urbain' },
    { title: 'Architecture Moderne', url: 'https://images.unsplash.com/photo-1505842465776-3d90f616310d?q=80&w=800', category: 'urbain' },
    { title: 'Ville en Mouvement', url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=800', category: 'urbain' },
  ];

  heroImages: HeroImage[] = [];

  ngOnInit() {
    const portraits = this.projects.filter(p => p.category === 'portrait');
    const natures = this.projects.filter(p => p.category === 'nature');
    const urbains = this.projects.filter(p => p.category === 'urbain');
    const evenements = this.projects.filter(p => p.category === 'evenement');

    this.heroImages = [
      { url: portraits[0]?.url, title: 'Portraits' },
      { url: natures[0]?.url, title: 'Nature & paysages' },
      { url: urbains[0]?.url, title: 'Photographie urbaine' },
      { url: evenements[0]?.url, title: 'Événements & reportages' }
    ];
  }

  /* ========================= */
  /* GETTERS POUR PORTFOLIO   */
  /* ========================= */

  get portraits() {
    return this.projects.filter(p => p.category === 'portrait');
  }

  get natures() {
    return this.projects.filter(p => p.category === 'nature');
  }

  get urbains() {
    return this.projects.filter(p => p.category === 'urbain');
  }

  get evenements() {
    return this.projects.filter(p => p.category === 'evenement');
  }

  /* ========================= */
  /* FILTRAGE CLASSIQUE        */
  /* ========================= */

  get filteredProjects() {
    let list = this.selectedCategory === 'all'
      ? this.projects
      : this.projects.filter(p => p.category === this.selectedCategory);

    if (this.selectedCategory === 'evenement' && this.selectedSub !== 'all') {
      list = list.filter(p => p.sub === this.selectedSub);
    }

    return list;
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
    this.selectedSub = 'all';
  }

  setSub(sub: string) {
    this.selectedSub = sub;
  }

  openImage(url: string) {
    this.selectedImage = url;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
