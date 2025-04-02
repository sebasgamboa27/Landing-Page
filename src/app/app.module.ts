import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from 'src/hero/hero.component';
import { CaracteristicasComponent } from 'src/caracteristicas/caracteristicas.component';
import { ContactoComponent } from 'src/contacto/contacto.component';
import { AnimateDirective } from 'src/animate.directive';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProyectosComponent } from 'src/proyectos/proyectos.component';
import { NavigationComponent } from 'src/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    CaracteristicasComponent,
    ContactoComponent,
    AnimateDirective,
    ProyectosComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
