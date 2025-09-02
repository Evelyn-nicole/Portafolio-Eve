import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements AfterViewInit {
  showScrollHint = true;
  private readonly NAV_HEIGHT_PX = 40; // altura navbar fijo

  timeline = [
    { year: 'Año 2021', text: 'Bootcamp de desarrollo (320h), base en tecnologías front y back.' },
    { year: 'Año 2022', text: 'Decisión estratégica: transitar 100% hacia el área TI.' },
    { year: 'Año 2023', text: 'Ingreso a Ing. en Informática para profundizar conocimientos.' },
    { year: 'Año 2024', text: 'Salida Intermedia. Egresada de Analista en Programación.' },
    { year: 'Año 2025', text: 'Lista para práctica profesional o primer desafío como trainee' }
  ];

  fortalezas = [
    { icono: '📚', texto: 'Aprendizaje constante' },
    { icono: '💪', texto: 'Resiliencia' },
    { icono: '⚡', texto: 'Proactividad' },
    { icono: '🤝', texto: 'Trabajo colaborativo' },
    { icono: '🗣️', texto: 'Comunicación efectiva' },
    { icono: '🧠', texto: 'Capacidad analítica' },
    { icono: '🎯', texto: 'Enfoque en objetivos' },
    { icono: '🧩', texto: 'Adaptabilidad' }
  ];

  ngAfterViewInit(): void {
    // AOS
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, mirror: false });
    setTimeout(() => AOS.refresh(), 500);



    // -------------------------
    // Canvas Matrix estático
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < Math.floor(canvas.height / fontSize); j++) {
        ctx.fillStyle = `rgba(0, 153, 255, ${Math.random() * 0.5 + 0.2})`; // azul transparente
        ctx.font = `${fontSize}px monospace`;
        const char = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(char, i * fontSize, j * fontSize);
      }
    }

    window.addEventListener('resize', () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    });
  }

    @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    this.showScrollHint = y < 60; // desaparece al scrollear
  }

  scrollTo(targetId: string) {
    const el = document.getElementById(targetId);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const top = rect.top + window.scrollY - this.NAV_HEIGHT_PX;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
