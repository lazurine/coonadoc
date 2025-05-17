import { Component } from '@angular/core';
import { Navbar } from './components/navbar';
import { Home } from './pages/home';
import { Footer } from './components/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './root.html',
  styleUrl: './root.scss'
})
export class AppComponent {
  title = 'coonadoc';
}
