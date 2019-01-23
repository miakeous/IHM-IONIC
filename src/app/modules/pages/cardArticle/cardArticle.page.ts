import {Component, OnInit} from "@angular/core";
import {Page1Service} from "./page1.service";
import {Router} from "@angular/router";
import { Platform} from "@ionic/angular";

import {CardArticleService} from "./cardArticle.service";

@Component({
  selector: 'cardArticle',
  templateUrl: './cardArticle.page.html',
  //styleUrls: ['./login.page.scss'],
  host: {'class': 'cardArticle'},
  providers: [CardArticleService]
})
export class CardArticlePage implements OnInit {


  private article:any;
  private id:string;

  constructor(public plt:Platform, public cardArticleService: CardArticleService, public router: Router) {

  }

  ngOnInit() {
    this.id = this.plt.getQueryParam("n");
    this.cardArticleService.getArticles(this.id).subscribe(data =>
    {
      this.article = data;
    },
      error2 => {this.article ={id :0, body: "Erreur objet non trouvé", title: "Erreur 404"}; });
    console.log("L'id vaut : "+this.id);
    console.log("L'article vaut :" + this.article);
    console.log(this.article);
  }

  onClick(route:string){
    this.router.navigateByUrl(route);
  }


}

