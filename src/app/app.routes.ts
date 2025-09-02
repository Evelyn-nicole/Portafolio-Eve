// Esto permite que al visitar rutas como /proyectos o /sobre-mi, se muestre la sección correspondiente.
import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';


export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'proyectos', component: ProyectosComponent },
];
