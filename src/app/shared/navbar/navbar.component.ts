import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuAbierto = false;

  // Alterna menú y overlay
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  // Cierra menú (para links y overlay)
  cerrarMenu() {
    this.menuAbierto = false;
  }
}
