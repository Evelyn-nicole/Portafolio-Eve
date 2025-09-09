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
      descripcion: 'Sistema de gestión de productos que permite agregar, editar, eliminar y filtrar productos. Incluye un resumen visual del stock, alertas para productos con bajo inventario y un panel interactivo para visualizar información en tiempo real. Ideal para pequeñas tiendas o inventarios internos.',
      tecnologias: 'Angular, TypeScript, Bootstrap, RxJS./// NestJS, TypeORM, PostgreSQL./// Validaciones con class-validator, consumo de API REST, manejo de CORS.',
      imagen: 'assets/proyectos/22.jfif',
      link: 'https://github.com/Evelyn-nicole/Panel-Gestion-de-Productos.git'
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
