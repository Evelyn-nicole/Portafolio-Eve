import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, AfterViewInit {
  nombrePrincipal = 'DEVELOPER JUNIOR';
  nombreChars: string[] = [];


  habilidades = [
    { nombre: 'Python', icono: 'assets/icons/python.svg' },
    { nombre: 'JavaScript', icono: 'assets/icons/javascript.svg' },
    { nombre: 'TypeScript', icono: 'assets/icons/typescript.svg' },
    { nombre: 'HTML5', icono: 'assets/icons/html5.svg' },
    { nombre: 'CSS', icono: 'assets/icons/css.svg' },
    { nombre: 'Angular', icono: 'assets/icons/angular.svg' },
    { nombre: 'React', icono: 'assets/icons/react.svg' },
    { nombre: 'Bootstrap', icono: 'assets/icons/bootstrap.svg' },
    { nombre: 'NestJS', icono: 'assets/icons/nestjs.svg' },
    { nombre: 'Django', icono: 'assets/icons/django.svg' },
    { nombre: 'Firebase', icono: 'assets/icons/firebase.svg' },
    { nombre: 'Google Pub/Sub', icono: 'assets/icons/googlepubsub.svg' },
    { nombre: 'Postman', icono: 'assets/icons/postman.svg' },
    { nombre: 'GitHub', icono: 'assets/icons/github.svg' },
    { nombre: 'Docker', icono: 'assets/icons/docker.svg' },
    { nombre: 'DBeaver', icono: 'assets/icons/dbeaver.svg' },
    { nombre: 'PostgreSQL', icono: 'assets/icons/postgresql.svg' },
    { nombre: 'SQL', icono: 'assets/icons/mysql.svg' },
  ];

  ngOnInit(): void {
    // Separar las letras, dejando los espacios como string normal
    this.nombreChars = this.nombrePrincipal.split('').map(ch => ch === ' ' ? ' ' : ch);
    // this.startTypingLoop(); // Subtitulo maquina de escribir
  }

  ngAfterViewInit(): void {
    this.initMatrix();
  }


  // ---------------- MATRIX AZUL ----------------
  private initMatrix() {
    const canvas = document.getElementById('matrix') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';

    const draw = () => {
      // Fondo semitransparente para el efecto de rastro
      ctx.fillStyle = 'rgba(17, 16, 16, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00f'; // azul
      ctx.font = '20px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    setInterval(draw, 50);

    // Ajustar canvas si se redimensiona la ventana
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
}

