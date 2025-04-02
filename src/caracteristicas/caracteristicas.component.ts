import { Component } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent {

  cards = [
    {
      icon: '🌬️',
      title: 'Energía Eólica',
      text: 'Aprovechamos la fuerza del viento para generar energía limpia y renovable.'
    },
    {
      icon: '☀️',
      title: 'Energía Solar',
      text: 'Sistemas fotovoltaicos de última generación para máximo rendimiento.'
    },
    {
      icon: '⚡',
      title: 'Gestión Inteligente',
      text: 'Tecnología avanzada para optimizar la producción y distribución energética.'
    }
  ];

}
