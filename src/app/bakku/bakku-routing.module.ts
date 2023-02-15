import { NgModule } from "@angular/core";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
import { RouterModule, Routes } from "@angular/router";

import { BakkuAppendPageComponent } from "./bakku-append-page/bakku-append-page.component";
import { BakkuDetailPageComponent } from "./bakku-detail-page/bakku-detail-page.component";

const routes: Routes = [
  { path: "bakku/:id", component: BakkuDetailPageComponent, canActivate: [AngularFireAuthGuard] },
  {
    path: "bakku/append",
    component: BakkuAppendPageComponent,
    canActivate: [AngularFireAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BakkuRoutingModule {}
