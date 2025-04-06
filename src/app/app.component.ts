import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.initScrollAnimations();
  }

  initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });
  }

  openMap() {
    window.open('https://www.google.pl/maps/place/Parque+E%C3%B3lico+Fila+de+Mogote/@10.6967431,-85.252715,17z/data=!3m1!4b1!4m6!3m5!1s0x8f755d520a9c0a41:0x917f9cf9f09ba5a!8m2!3d10.6967431!4d-85.2501401!16s%2Fg%2F11rv1kmd5k?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D', '_blank');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Lógica adicional de scroll si es necesaria
  }

  showModal = false;
  selectedProject: any;

  proyectos = {
    venfort: {
      nombre: 'Proyecto Venfort',
      capacidad: '20.7 MW',
      ubicacion: 'Guanacaste, Costa Rica (adyacente a Fila de Mogote)',
      estado: 'Permiso ambiental obtenido',
      medicion: 'Más de 10 años de datos eólicos',
      progreso: 65,
      detalles: [
        'Concesión asegurada',
        '88 hectáreas controladas',
        'Elegible para contratos ICE'
      ],
      contratos: [{
        titulo: 'PPA Previsto',
        detalles: [
          'Contraparte: Grupo ICE',
          'Tarifa estimada: $0.084/kWh',
          'Término inicial: 20 años'
        ]
      }]
    },
    santaElena: {
      nombre: 'Proyecto Santa Elena',
      capacidad: '20.7 MW',
      ubicacion: 'Guanacaste, Costa Rica (2km de Fila de Mogote)',
      estado: 'En proceso de permisos',
      medicion: '5 años de datos eólicos',
      progreso: 40,
      detalles: [
        '50% de tierras aseguradas',
        'Permisos ambientales pendientes',
        'Elegibilidad ICE en trámite'
      ],
      contratos: [{
        titulo: 'Acuerdos Previstos',
        detalles: [
          'Potencial contrato O&M con Vestas',
          'Modelo de tarifa escalonada',
          'Posible extensión a 2036'
        ]
      }]
    },
    limonal: {
      nombre: 'Proyecto Limonal',
      capacidad: '20.7 MW',
      ubicacion: 'Guanacaste, Costa Rica (2km de Fila de Mogote)',
      estado: 'Fase inicial',
      medicion: '3 años de datos históricos',
      progreso: 30,
      detalles: [
        'Opciones de tierra aseguradas',
        'Datos de medición combinados',
        'En evaluación de viabilidad'
      ],
      contratos: [{
        titulo: 'Consideraciones Clave',
        detalles: [
          'Posible asociación con desarrolladores locales',
          'Integración con red nacional',
          'Estrategia de reforestación incluida'
        ]
      }]
    }
  };

  openModal(proyecto: string) {
    this.selectedProject = this.proyectos[proyecto as keyof typeof this.proyectos];
    this.showModal = true;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.showModal = false;
    document.body.classList.remove('modal-open');
  }


  texto_perfil = `Fila de Mogote DCR, SRL (“Fila de Mogote”) es un parque eólico y una línea de transmisión ubicados en la provincia noroccidental de Guanacaste, Costa Rica. El parque eólico cuenta con 21 megavatios (“MW”) de capacidad instalada y una generación anual prevista de 88 gigavatios (“GWh”). Fila de Mogote vende toda su energía a la empresa eléctrica nacional de Costa Rica mediante un Contrato de Compraventa de Energía (“PPA”) que vence en mayo de 2032.

Las operaciones comenzaron en julio de 2016 y el parque eólico ha operado satisfactoriamente desde entonces. El rendimiento de la generación y los costos operativos han estado dentro de las expectativas. El sitio cuenta con algunos de los vientos continuos más altos del hemisferio occidental.

Nuestros principales objetivos con respecto al parque eólico Fila de Mogote son: (i) alcanzar la excelencia operativa, cumpliendo o superando los objetivos de Seguridad y Salud Ambiental (EHS); (ii) cumplir o superar los objetivos de rendimiento económico; y (iii) aumentar nuestra experiencia en el sector de las energías renovables.`
}