import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { authGuard } from "../auth/auth.guard";
import { OceanDetailPageComponent } from "./ocean-detail-page/ocean-detail-page.component";

const routes: Routes = [
  {
    path: "ocean/:id",
    component: OceanDetailPageComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OceanRoutingModule {}
