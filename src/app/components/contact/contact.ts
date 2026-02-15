import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {

  contactForm;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      };

      emailjs.send(
        'service_o7ylemo',          // ✅ Ton Service ID
        'template_q3j7grf',         // ✅ Ton Template ID
        templateParams,
        'FUuLAJHie-Zyj47pf'         // ✅ Ta Public Key
      )
      .then(() => {
        alert('Message envoyé avec succès !');
        this.contactForm.reset();
      })
      .catch((error: any) => {
    console.error('Erreur EmailJS :', error);
    alert('Une erreur est survenue. Réessayez plus tard.');
    });
    }
  }
}
