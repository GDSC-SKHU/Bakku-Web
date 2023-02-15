import { NgModule } from "@angular/core";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
import { RouterModule, Routes } from "@angular/router";

import { redirectUnauthorizedToLogin } from "../shared/utils/auth-guard-pipe";
import { OceanDetailPageComponent } from "./ocean-detail-page/ocean-detail-page.component";

const routes: Routes = [
  {
    path: "ocean/:id",
    component: OceanDetailPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OceanRoutingModule {}
