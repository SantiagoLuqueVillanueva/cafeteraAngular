import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocinaComponent } from "./components/cocina/cocina.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CocinaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cafeteraAngular';
  estadoConexion = false;
  estadoCafetera = false;
  cafes: string[] = [];

  cambiarConexion() {
    this.estadoConexion = !this.estadoConexion;
    if (!this.estadoConexion) {
      this.estadoCafetera = false;
    }
  }

  mostrarEstadoCafetera(estado: boolean) {
    this.estadoCafetera = estado;
  }

  anadirCafeSolo(estado: string) {
    this.cafes.push(estado);
  }

  anadirCafeConLeche(estado: string) {
    this.cafes.push(estado);
  }
}
