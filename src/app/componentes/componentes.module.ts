import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    CardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CabeceraComponent,
    CardComponent,
    MenuComponent
  ]
})
export class ComponentesModule { }
