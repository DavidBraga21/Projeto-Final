import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantetipoPageRoutingModule } from './restaurantetipo-routing.module';

import { RestaurantetipoPage } from './restaurantetipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantetipoPageRoutingModule
  ],
  declarations: [RestaurantetipoPage]
})
export class RestaurantetipoPageModule {}
