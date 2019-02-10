import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Storage} from "@ionic/storage";
import {forEach} from "@angular/router/src/utils/collection";
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";



@Injectable()
export class Page1Service {


  constructor(public httpclient: HttpClient, public storage: Storage) {

  }

  getArticles(){
    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts") ;
  }

  persistArticles(identifiant : string){

    return new Observable(
      observer =>{
        this.storage.get("article"+identifiant).then(article => {
          let resultat = false;
          if(article)
            resultat=true;

          observer.next(resultat);

        });
      }
    );







  }

  delete(identifiant: string){
    this.storage.remove("article"+identifiant);
  }

  add(identifiant: string, article: string){
    return this.storage.set("article"+identifiant,article);
  }








}
