import {Injectable} from "@angular/core";

import {Storage} from "@ionic/storage";
import {forEach} from "@angular/router/src/utils/collection";
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";



@Injectable()
export class ParticlesService  {

  public resultat2:any=[];
  constructor( public storage: Storage) {

  }

  getArticles(){
    this.storage.forEach(value => {
      let id = value.id;
      let userId = value.userid;
      let title = value.title;
      let body = value.body;
      let value2 = {id:id,userId : userId, title: title, body:body};
      // console.log(value);
      this.resultat2.push(value2);
      }
    );
    return this.resultat2;
  }



}
