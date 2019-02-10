import {Page1Service} from "./page1.service";
import {HttpClient} from "@angular/common/http";
import createMockInstance from "jest-create-mock-instance";
import {Storage} from "@ionic/storage";
import {of} from "rxjs";
import {TestUtil} from "../../../test/util.test";
import {ParticlesService} from "./particles.service";


describe('Service: Page Service', () => {
  let service: ParticlesService;
  let httpClient: HttpClient = createMockInstance(HttpClient);
  let storage: Storage = createMockInstance(Storage);

  let mock = {
    title: "titre",
    body: "body"
  };

  beforeEach(()=> {
      httpClient = createMockInstance(HttpClient);
      storage = createMockInstance(Storage);
      service = new ParticlesService(httpClient, storage);

      spyOn(service, "getArticles").and.returnValue(of(mock));



    }
  );

  it('should getArticles', (done) => {
    service.getArticles().subscribe(
      data => {
        expect(data).toEqual(mock);
        done();
      },
      error =>{
        fail(error);
      }
    );
  });

});
