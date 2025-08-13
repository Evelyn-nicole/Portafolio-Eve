// Esto permite que al visitar rutas como /proyectos o /sobre-mi, se muestre la sección correspondiente.
import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
];
