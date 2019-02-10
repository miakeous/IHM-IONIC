import {Injectable} from "@angular/core";

import {Storage} from "@ionic/storage";
import {forEach} from "@angular/router/src/utils/collection";
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";



@Injectable()
export class ParticlesService  {

  public resultat:any=[];
  constructor( public storage: Storage) {

  }

  getArticles(){
  this.storage.keys().then((k)=>{
    this.storage.get(k).then((val)=>{
     //console.log(val);
     let id = val.id;
     let userId = val.userid;
     let title = val.title;
     let body = val.body;
     let value = {id:id,userId : userId, title: title, body:body};
    // console.log(value);
     this.resultat.push(value);
    });
  });
  //console.log(this.resultat);
    return this.resultat;
  }



}
