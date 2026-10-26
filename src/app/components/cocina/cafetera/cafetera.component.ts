import { Component, input, output } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cafetera',
  imports: [],
  templateUrl: './cafetera.component.html',
  styleUrl: './cafetera.component.css'
})
export class CafeteraComponent {
  estadoConexionCocina = input<boolean>();
  estadoCafeteraOutput = output<boolean>();
  cafeSoloOutput = output<string>();
  cafeConLecheOutput = output<string>();
  estadoCafetera =  false;
  cafesServidos = 0;

  encenderCafetera() {
    if (this.estadoConexionCocina()) {
      this.estadoCafetera = !this.estadoCafetera
      this.estadoCafeteraOutput.emit(this.estadoCafetera);
    }
  }

  cafeSolo() {
    if (this.estadoCafetera && this.estadoConexionCocina()) {
      this.cafesServidos++;
      this.cafeSoloOutput.emit("Cafe Solo");
    }
  }

  cafeConLeche() {
    if (this.estadoCafetera && this.estadoConexionCocina()) {
      this.cafesServidos++;
      this.cafeConLecheOutput.emit("Cafe con Leche")
    }
  }
}
