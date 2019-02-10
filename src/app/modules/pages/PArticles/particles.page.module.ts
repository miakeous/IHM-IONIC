import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {CommonModule} from "@angular/common";
import {IonicModule,NavController} from "@ionic/angular";
import {Request, RequestMethod, RequestOptions} from '@angular/http';
import {ParticlesPage} from "./particles.page";
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ParticlesPage
      }
    ])
  ],
  bootstrap: [ParticlesPage],
  declarations: [ParticlesPage]
})
export class ParticlesPageModule {
}
