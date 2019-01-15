import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.scss'],
  providers: [],
})
export class AppComponent implements OnInit {

  constructor(public router:Router) {

  }

  ngOnInit() {
    //localStorage.setItem("identifiant", "Mickael");
    if(localStorage.getItem("identifiant") == null || localStorage.getItem("password") == null){
      this.router.navigateByUrl("login");
    }else{
      this.router.navigateByUrl("main");
    }

  }
}
