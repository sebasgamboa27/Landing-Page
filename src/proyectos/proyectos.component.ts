import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos = [
    {
      titulo: 'Parque Eólico Sierra Norte',
      descripcion: 'Instalación de 50 turbinas eólicas con capacidad de 150MW',
      imagen: 'assets/images/proyectos/dummy.jpg'
    },
    {
      titulo: 'Planta Solar Andalucía',
      descripcion: 'Granja solar fotovoltaica de 200 hectáreas',
      imagen: 'assets/images/proyectos/dummy.jpg'
    },
    {
      titulo: 'Central Hidroeléctrica Duero',
      descripcion: 'Energía hidráulica con sistema de generación inteligente',
      imagen: 'assets/images/proyectos/dummy.jpg'
    },
    {
      titulo: 'Biomasa Valencia',
      descripcion: 'Planta de generación a partir de residuos orgánicos',
      imagen: 'assets/images/proyectos/dummy.jpg'
    },
    {
      titulo: 'Energía Maremotriz Galicia',
      descripcion: 'Aprovechamiento de la energía de las olas',
      imagen: 'assets/images/proyectos/dummy.jpg'
    },
    {
      titulo: 'Geotérmica Canarias',
      descripcion: 'Sistema de generación mediante energía volcánica',
      imagen: 'assets/images/proyectos/dummy.jpg'
    }
  ];
}
