import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginPage} from "./login.page";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ])
  ],
  bootstrap: [LoginPage],
  declarations: [LoginPage]
})
export class LoginPageModule {
}
