import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { authGuard } from "../auth/auth.guard";
import { BakkuAppendPageComponent } from "./bakku-append-page/bakku-append-page.component";
import { BakkuDetailPageComponent } from "./bakku-detail-page/bakku-detail-page.component";

const routes: Routes = [
  { path: "bakku/:id", component: BakkuDetailPageComponent, canActivate: [authGuard] },
  { path: "bakku/append", component: BakkuAppendPageComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BakkuRoutingModule {}
