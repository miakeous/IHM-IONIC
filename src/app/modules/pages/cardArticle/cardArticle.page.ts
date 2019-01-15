import {Component, OnInit} from "@angular/core";
import {Page1Service} from "./page1.service";
import {Router} from "@angular/router";
import {NavController, NavParams} from "@ionic/angular";

@Component({
  selector: 'cardArticle',
  templateUrl: './cardArticle.page.html',
  //styleUrls: ['./login.page.scss'],
  host: {'class': 'cardArticle'},
  providers: []
})
export class CardArticlePage implements OnInit {


  private article:any;

  constructor(public router:Router,public navParam:NavParams) {

  }

  ngOnInit() {
    this.article= this.navParam.get("article");
  }


}

