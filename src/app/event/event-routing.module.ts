import { NgModule } from "@angular/core";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
import { RouterModule, Routes } from "@angular/router";

import { redirectUnauthorizedToLogin } from "../shared/utils/auth-guard-pipe";
import { EventDetailPageComponent } from "./event-detail-page/event-detail-page.component";

const routes: Routes = [
  {
    path: "event/:id",
    component: EventDetailPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
