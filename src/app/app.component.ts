import { Component } from '@angular/core';
import { Navbar } from './navbar';
import { Home } from '.';
import { Footer } from './footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Footer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'coonadoc';
}
