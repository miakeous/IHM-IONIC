import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Storage} from "@ionic/storage";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class CardArticleService {


  constructor(public httpclient: HttpClient, public storage: Storage) {

  }

  getArticles(id){
    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/"+id) ;
  }

  persistArticles(articles){
    return this.storage.set("articles", articles);
  }

}
