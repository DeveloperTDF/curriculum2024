import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.page.html',
  styleUrls: ['./titulos.page.scss'],
})
export class TitulosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Lista de imágenes (puedes agregar más imágenes aquí)
  images = [
    '../../assets/tituloUtn.jpg',
    '../../assets/tituloterciario.jpg',
    '../../assets/titulosecundario.jpg',
    '../../assets/djangoAngularUdemy.jpg',
    '../../assets/pythonUniversidad.jpg',
    '../../assets/auditorCalidad.jpg',
    '../../assets/componentesElectronicos.jpg',
    '../../assets/deteccionFallasUtn.jpg',
    '../../assets/controlProductivos.jpg',
    '../../assets/dins.jpg',
    '../../assets/esdResoldering.jpg',
    '../../assets/iso14001.jpg',
    '../../assets/marketing.jpg',
    '../../assets/totalkaisen.jpg',
  ];

  // Variable para saber qué imagen está seleccionada (inicialmente la primera)
  selectedImageIndex: number = -1;

  // Función para alternar la imagen seleccionada
  toggleImageSize(index: number) {
    // Si la imagen seleccionada es la misma, la deseleccionamos, de lo contrario la seleccionamos
    if (this.selectedImageIndex === index) {
      this.selectedImageIndex = -1;  // Deselecciona la imagen
    } else {
      this.selectedImageIndex = index;  // Selecciona la nueva imagen
    }
  }

  // Función para cerrar la imagen agrandada cuando se haga clic en el fondo
  closeImage() {
    this.selectedImageIndex = -1; // Cierra la imagen agrandada
  }
}
