import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterModule, CommonModule],   // Muy importante
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})


export class ProyectosComponent {

  // 🔹 Lista dinámica de proyectos (puedes agregar más fácilmente)
  proyectos = [
    {
      titulo: 'Gestión de Productos',
      descripcion: 'Aplicación CRUD hecha con Angular + NestJS + PostgreSQL.',
      imagen: 'assets/proyectos/22.jfif',
      link: 'https://github.com/tu-repo/productos'
    },
    {
      titulo: 'Portafolio Web',
      descripcion: 'Mi portafolio personal hecho en Angular, con animaciones tipo GTA VI.',
      imagen: 'assets/proyectos/dimension.jpg',
      link: 'https://tusitio.com'
    },
    {
      titulo: 'Dashboard Analítico',
      descripcion: 'Dashboard en Angular con gráficas interactivas y conexión a APIs.',
      imagen: 'assets/proyectos/gravity.jfif',
      link: 'https://github.com/tu-repo/dashboard'
    },
    {
      titulo: 'Dashboard Analítico',
      descripcion: 'Dashboard en Angular con gráficas interactivas y conexión a APIs.',
      imagen: 'assets/proyectos/Feuerfalter.jpg',
      link: 'https://github.com/tu-repo/dashboard'
    },
    {
      titulo: 'Dashboard Analítico',
      descripcion: 'Dashboard en Angular con gráficas interactivas y conexión a APIs.',
      imagen: 'assets/proyectos/Feuerfalter.jpg',
      link: 'https://github.com/tu-repo/dashboard'
    },
    {
      titulo: 'Dashboard Analítico',
      descripcion: 'Dashboard en Angular con gráficas interactivas y conexión a APIs.',
      imagen: 'assets/proyectos/Feuerfalter.jpg',
      link: 'https://github.com/tu-repo/dashboard'
    } 
  ];
}
