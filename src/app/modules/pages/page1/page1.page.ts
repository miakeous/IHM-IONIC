import {Component, OnInit, ViewChild} from "@angular/core";
import {Page1Service} from "./page1.service";
import {Router} from "@angular/router";
import {CardArticlePage} from "../cardArticle/cardArticle.page";
import {NavController} from "@ionic/angular";
import {max} from "rxjs/internal/operators";

@Component({
  selector: 'page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  host: {'class': 'page1'},
  providers: [Page1Service]
})
export class Page1Page implements OnInit {


  public articles: Array<any>;
  public messageDsiplay:Boolean ;
  public toShow: boolean;
  private route: string;

  constructor(public page1Service: Page1Service, public router: Router) {
    this.toShow = true;
    this.messageDsiplay=false;
    this.route = "page1";

  }

  ngOnInit() {
    console.log("INIT PAGE1");


    this.page1Service.getArticles().subscribe(
      (data: Array<any>) => {
        this.articles = data;
        let resu =[];
        let random = Math.floor(Math.random() * Math.floor(90));
        resu = this.articles.splice(random,9);
        console.log(resu.length);
        console.log(random);
        console.log(random + 9);
        this.articles=resu;
        console.log(this.articles.length);
        for(let article of this.articles){
          this.persitence(article);
          article.isPersistant =false;
         // console.log(article);
        }

      },
      error2 => {
       this.page1Service.storage.get('articles').then((data)=>{this.articles=data});
        this.messageDsiplay = true;

      }
    );
  }

  onClick(route:string){
    this.router.navigateByUrl(route);
  }

  onArticleClick(article: any) {
    this.router.navigateByUrl("article?n="+article.id);
  }
  delete(article: any) {
    article.isPersistant = false;
    this.page1Service.delete(article.id);

  }

  persitence(article: any) {

    this.page1Service.persistArticles(article.id).subscribe(
      resultat => {
        //this.articles[article.id].push({'isPersistant' : resultat});
        article.isPersistant = resultat;
      }
    );
  }
  add(article: any){

    this.page1Service.add(article.id,article).then(ok=> article.isPersistant=true);



  }
}

