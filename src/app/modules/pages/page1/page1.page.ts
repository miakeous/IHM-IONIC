import {Component, OnInit, ViewChild} from "@angular/core";
import {Page1Service} from "./page1.service";
import {Router} from "@angular/router";
import {CardArticlePage} from "../cardArticle/cardArticle.page";
import {NavController} from "@ionic/angular";

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
  
  constructor(public page1Service: Page1Service,public router:Router,public navCtrl:NavController) {
    this.toShow = true;
    this.messageDsiplay=false;

  }

  ngOnInit() {
    console.log("INIT PAGE1");


    this.page1Service.getArticles().subscribe(
      (data: Array<any>) => {
        this.articles = data;
       // this.articles.splice(0,9);
        let resu =[];
        let taille = 0;
        for(let e of this.articles){
          resu.push(e);
          taille++;
          if(taille>9){
            break;
          }
        }
        this.articles=resu;
        this.page1Service.persistArticles(this.articles).then(
          ok => {
            console.log("Les articles ont bien été stockés");
          }
        );
      },
      error2 => {
       this.page1Service.storage.get('articles').then((data)=>{this.articles=data});
        this.messageDsiplay = true;

      }
    );
  }

  onClick(){
    this.router.navigateByUrl("main");
  }

  onArticleClick(article: any) {
    this.pushPage = CardArticlePage;
    this.params = { article: article };


  }
}
