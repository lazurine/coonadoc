import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { About } from './pages/about';

interface RouteMap {
  [key: string]: string
}
export const routeNames: RouteMap = {
  home: "inicio",
  about: "sobre-nosotros",
  news: "noticias",
  support: "soporte",
  services: "servicios",
};
export const routes: Routes = [
  { path: routeNames["home"], component: Home, pathMatch: 'full'},
  { path: routeNames["about"], component: About },
];
