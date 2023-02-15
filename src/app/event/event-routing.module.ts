import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { authGuard } from "../auth/auth.guard";
import { EventDetailPageComponent } from "./event-detail-page/event-detail-page.component";

const routes: Routes = [
  { path: "event/:id", component: EventDetailPageComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
