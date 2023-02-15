import { NgModule } from "@angular/core";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { redirectUnauthorizedToLogin } from "./shared/utils/auth-guard-pipe";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomePageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path: "login", component: LoginPageComponent },
  { path: "**", component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
