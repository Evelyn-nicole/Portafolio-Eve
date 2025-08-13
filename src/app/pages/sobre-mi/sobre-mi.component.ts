import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // 
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule, RouterModule],  // 
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements AfterViewInit {

  // Array de linea de tiempo con año y texto informativo.
  timeline = [
    { year: 'Año 2021', text: 'Bootcamp de desarrollo (320h), base en tecnologías front y back.' },
    { year: 'Año 2022', text: 'Decisión estratégica: transitar 100% hacia el área TI.' },
    { year: 'Año 2023', text: 'Ingreso a Ing. en Informática para profundizar conocimientos.' },
    { year: 'Año 2024', text: 'Salida Intermedia. Egresada de Analista en Programación.' },
    { year: 'Año 2025', text: 'Lista para práctica profesional o primer desafío como trainee' }
  ];

  // Array de habilidades con categoria, lenguaje e imagen icono.
  habilidades = [
    { categoria: 'Lenguaje', nombre: 'Python', icono: 'assets/icons/python.svg' },
    { categoria: 'Lenguaje', nombre: 'JavaScript', icono: 'assets/icons/javascript.svg' },
    { categoria: 'Lenguaje', nombre: 'TypeScript', icono: 'assets/icons/typescript.svg' },

    { categoria: 'Estilo', nombre: 'HTML5', icono: 'assets/icons/html5.svg' },
    { categoria: 'Estilo', nombre: 'CSS', icono: 'assets/icons/css.svg' },

    { categoria: 'Framework', nombre: 'Angular', icono: 'assets/icons/angular.svg' },
    { categoria: 'Framework', nombre: 'React', icono: 'assets/icons/react.svg' },
    { categoria: 'Framework', nombre: 'Bootstrap', icono: 'assets/icons/bootstrap.svg' },
    { categoria: 'Framework', nombre: 'NestJS', icono: 'assets/icons/nestjs.svg' },
    { categoria: 'Framework', nombre: 'Django', icono: 'assets/icons/django.svg' },
    { categoria: 'Framework', nombre: 'Firebase', icono: 'assets/icons/firebase.svg' },

    { categoria: 'Tecnología', nombre: 'Google Pub/Sub', icono: 'assets/icons/googlepubsub.svg' },
    { categoria: 'Herramienta', nombre: 'Postman', icono: 'assets/icons/postman.svg' },
    { categoria: 'Herramienta', nombre: 'GitHub', icono: 'assets/icons/github.svg' },
    { categoria: 'Herramienta', nombre: 'Docker', icono: 'assets/icons/docker.svg' },
    { categoria: 'Herramienta', nombre: 'DBeaver', icono: 'assets/icons/dbeaver.svg' },

    { categoria: 'Base de Datos', nombre: 'PostgreSQL', icono: 'assets/icons/postgresql.svg' },
    { categoria: 'Base de Datos', nombre: 'SQL', icono: 'assets/icons/mysql.svg' },
  ];

  // Array con objetos que representan cada fortaleza.
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



  calcularDelay(indice: number) {
    return `${indice * 100}`; // 100ms entre cada tarjeta
  }




  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    setTimeout(() => AOS.refresh(), 500);
  }
}
