import { NgModule } from "@angular/core";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
import { RouterModule, Routes } from "@angular/router";

import { OceanDetailPageComponent } from "./ocean-detail-page/ocean-detail-page.component";

const routes: Routes = [
  {
    path: "ocean/:id",
    component: OceanDetailPageComponent,
    canActivate: [AngularFireAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OceanRoutingModule {}
