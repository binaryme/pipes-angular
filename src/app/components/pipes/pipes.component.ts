import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  hoy: Date = new Date();
  ciudad: String = 'Monterrey';
  resultado: Number = 1.14899442323;
  pesos: Number = 1000000;
  // i18n
  nombre: String = 'Javier';
  sexo: String = 'hombre';
  encabezamiento: any = { hombre: 'estimado', mujer: 'estimada' };
  // i18n lenguaje
  lenguaje: String = 'inglés';
  mensaje: any = {
    inglés: 'Welcome aboard good sir',
    español: 'Bienvenido a bordo buen señor'
  };

  constructor() {}

  ngOnInit() {}
}
