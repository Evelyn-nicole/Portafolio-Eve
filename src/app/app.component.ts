import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio-evelyn';

  contactoAbierto = false;
  toastVisible = false;

  contact = { nombre: '', email: '', mensaje: '' };

  abrirContacto() {
    this.contactoAbierto = true;
  }

  cerrarContacto(contactForm?: any) {
    this.contactoAbierto = false;

    if (contactForm) {
      contactForm.resetForm(); // limpia el formulario y errores
    }

    this.contact = { nombre: '', email: '', mensaje: '' };
  }

  enviarContacto(contactForm: any) {
    if (contactForm.valid) {
      console.log('Mensaje enviado:', this.contact);

      // mostrar toast
      this.toastVisible = true;
      setTimeout(() => this.toastVisible = false, 5000);

      // cerrar panel y resetear formulario
      this.cerrarContacto(contactForm);
    }
  }

  cerrarToast() {
    this.toastVisible = false;
  }
}
