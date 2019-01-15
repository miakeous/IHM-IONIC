import {Component, OnInit} from "@angular/core";
import {Page1Service} from "./page1.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  //styleUrls: ['./login.page.scss'],
  host: {'class': 'login'},
  providers: []
})
export class LoginPage implements OnInit {

  private identifiant: string;
  private password: string;



  constructor(public router:Router) {

  }

  ngOnInit() {
    console.log("Login Page");
  }

  onClick(identifiant, password){
    this.identifiant = identifiant;
    this.password = password;
    console.log(this.identifiant);
    console.log(this.password);
    localStorage.setItem("identifiant", this.identifiant);
    localStorage.setItem("password", this.password);
    this.router.navigateByUrl("main");
  }
}

