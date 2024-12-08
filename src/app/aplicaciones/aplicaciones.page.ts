import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.page.html',
  styleUrls: ['./aplicaciones.page.scss'],
})
export class AplicacionesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  card=[
    {
      titulo:'aplicacion para escuchar radio streaming',
      subtitulo:'link de descarga del codigo ',
      repositorio:'https://github.com/DeveloperTDF/imperioRadioFrontEnd.git',
      url:'https://github.com/DeveloperTDF/imperioRadioFrontEnd.git',

    } , 
    {
      titulo:'aplicacion para gestion de tareas de un afiliado',
      subtitulo:'link de descarga del codigo  ',
      repositorio:'https://github.com/DeveloperTDF/afiliadoFront.git',

    } ,
    {
      titulo:'aplicacion basica para hacer anotaciones',
      subtitulo:'link de descarga del codigo  ',
      repositorio:'https://github.com/DeveloperTDF/anotadorFrontend.git',

    } 
    ,
    {
      titulo:'aplicacion para la gestion de polivalencias de una fabrica',
      subtitulo:'link de descarga del codigo ',
      repositorio:'https://github.com/DeveloperTDF/polivalencias.git',

    } 
    
  ]

}
