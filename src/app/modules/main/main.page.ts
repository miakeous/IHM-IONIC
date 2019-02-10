import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  host: {'class': 'main'},
  providers: []
})
export class MainPage implements OnInit {

  public identifiant: string;
   route: string;

  constructor(public router: Router) {
    this.route = "main";
  }

  ngOnInit() {
    console.log("INIT MAIN PAGE");
    this.identifiant = localStorage.getItem("identifiant");
  }

  onClick(route: string){
    this.router.navigateByUrl(route);
  }
}

