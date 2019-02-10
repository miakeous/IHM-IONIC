import {Component, OnInit, ViewChild} from "@angular/core";
import {Page1Service} from "./page1.service";
import {Router} from "@angular/router";
import {CardArticlePage} from "../cardArticle/cardArticle.page";
import {NavController} from "@ionic/angular";
import {max} from "rxjs/internal/operators";
import {ParticlesService} from "./particles.service";

@Component({
  selector: 'particles',
  templateUrl: './particles.page.html',
  styleUrls: ['./particles.page.scss'],
  host: {'class': 'particles'},
  providers: [ParticlesService]
})
export class ParticlesPage implements OnInit {


  public articles: any = [];

  private route: string;

  constructor(public particleService: ParticlesService, public router: Router) {
    this.route = "particles";

  }

  ngOnInit() {


    this.articles =
      this.particleService.getArticles();
  }

  onClick(route:string){
    this.router.navigateByUrl(route);
  }

  onArticleClick(article: any) {
    this.router.navigateByUrl("article?n="+article.id);
  }
}

