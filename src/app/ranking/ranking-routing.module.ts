import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { authGuard } from "../auth/auth.guard";
import { RankingPageComponent } from "./ranking-page/ranking-page.component";

const routes: Routes = [
  { path: "ranking", component: RankingPageComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankingRoutingModule {}
