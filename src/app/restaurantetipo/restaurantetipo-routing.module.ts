import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantetipoPage } from './restaurantetipo.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantetipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantetipoPageRoutingModule {}
