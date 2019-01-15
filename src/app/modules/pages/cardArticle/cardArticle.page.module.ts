import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CardArticlePage} from "./cardArticle.page";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CardArticlePage
      }
    ])
  ],
  bootstrap: [CardArticlePage],
  declarations: [CardArticlePage]
})
export class CardArticlePageModule {
}
