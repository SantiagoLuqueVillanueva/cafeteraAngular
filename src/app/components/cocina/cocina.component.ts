import { Component, input, output } from '@angular/core';
import { CafeteraComponent } from './cafetera/cafetera.component';

@Component({
  selector: 'app-cocina',
  imports: [CafeteraComponent],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css'
})
export class CocinaComponent {
  estadoConexionComponent = input<boolean>();
  estadoCafeteraOutput = output<boolean>();
  cafeSoloOutput = output<string>();
  cafeConLecheOutput = output<string>();

  mandarEstadoCafetera(estado: boolean) {
    this.estadoCafeteraOutput.emit(estado);
  }

  mandarCafeSolo(estado: string) {
    this.cafeSoloOutput.emit(estado);
  }

  mandarCafeConLeche(estado: string) {
    this.cafeConLecheOutput.emit(estado);
  }
}
