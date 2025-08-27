// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule, NgForm } from '@angular/forms';
// import { NgIf } from '@angular/common';
// import { NavbarComponent } from './shared/navbar/navbar.component';
// import emailjs from '@emailjs/browser';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, NavbarComponent, FormsModule, NgIf],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'portafolio-evelyn';

//   contactoAbierto = false;
//   toastVisible = false;
//   isEnviando = false;

//   contact = { nombre: '', email: '', mensaje: '' };

//   @ViewChild('contactFormEl') contactFormEl!: ElementRef<HTMLFormElement>;
//   @ViewChild('contactForm') contactForm!: NgForm;

//   abrirContacto() {
//     this.contactoAbierto = true;
//   }

//   cerrarContacto() {
//     this.cerrarPanel();
//   }


//   enviarContacto() {
//     if (this.contactForm.valid && !this.isEnviando) {
//       this.isEnviando = true;

//       this.enviarCorreoPrincipal()
//         .then(() => this.enviarRespuestaAutomatica())
//         .then(() => {
//           this.mostrarToast();
//           this.cerrarPanel();
//         })
//         .catch((error) => {
//           console.error('❌ Error al enviar:', error);
//           alert('Hubo un problema al enviar el mensaje');
//         })
//         .finally(() => this.isEnviando = false);
//     }
//   }

//   // ---------------------
//   // Métodos privados
//   // ---------------------

//   // Enviar correo a tu correo principal
//   private enviarCorreoPrincipal() {
//     return emailjs.sendForm(
//       'service_l9uj9a4',       // Service ID
//       'template_5ezamca',      // Template ID de tu correo
//       this.contactFormEl.nativeElement,
//       'd4wB4M2ORrYpYByVx'      // Public Key
//     );
//   }

//   // Enviar respuesta automática al usuario
//   private enviarRespuestaAutomatica() {
//     return emailjs.send(
//       'service_l9uj9a4',       // Service ID
//       'template_jwx95wu',      // Template ID de respuesta automática
//       {
//         name: this.contact.nombre,     // coincide con {{name}} en plantilla
//         title: this.contact.mensaje,   // coincide con {{title}} en plantilla
//         user_email: this.contact.email // destinatario
//       },
//       'd4wB4M2ORrYpYByVx'       // Public Key
//     );
//   }

//   // Resetea formulario y datos
//   private resetFormulario() {
//     if (this.contactForm) this.contactForm.resetForm();
//     this.contact = { nombre: '', email: '', mensaje: '' };
//   }

//   // Cerrar panel de contacto
//   private cerrarPanel() {
//     this.contactoAbierto = false;
//     this.resetFormulario();
//   }

//   // Mostrar toast de éxito
//   private mostrarToast() {
//     this.toastVisible = true;
//     setTimeout(() => this.toastVisible = false, 5000);
//   }

//   cerrarToast() {
//     this.toastVisible = false;
//   }
// }

//   // ---------------------
//   // PARA NO GASTAR CONSULTAS EMAILJS. CODIGO LISTO. 
//   // ---------------------








// Prueba de alerta sin usar consultas EMAILJS
import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
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
  isEnviando = false; // evita doble click
  contact = { nombre: '', email: '', mensaje: '' };

  @ViewChild('contactFormEl') contactFormEl!: ElementRef<HTMLFormElement>;
  @ViewChild('contactForm') contactForm!: NgForm;

  abrirContacto() {
    this.contactoAbierto = true;
  }

  cerrarContacto() {
    this.cerrarPanel();
  }

  // Solo simulacro: muestra el toast sin enviar emails
  enviarContacto() {
    if (this.contactForm.valid && !this.isEnviando) {
      this.isEnviando = true;

      // Simulación: espera 500ms para dar sensación de envío
      setTimeout(() => {
        this.mostrarToast();
        this.cerrarPanel();
        this.isEnviando = false;
      }, 500);
    }
  }

  // Resetea formulario y datos
  private resetFormulario() {
    if (this.contactForm) this.contactForm.resetForm();
    this.contact = { nombre: '', email: '', mensaje: '' };
  }

  // Cerrar panel de contacto
  private cerrarPanel() {
    this.contactoAbierto = false;
    this.resetFormulario();
  }

  // Mostrar toast centrado y animado
  private mostrarToast() {
    this.toastVisible = true;
    setTimeout(() => this.toastVisible = false, 5000);
  }

  cerrarToast() {
    this.toastVisible = false;
  }
}
