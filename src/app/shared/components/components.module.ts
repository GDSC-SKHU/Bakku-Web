import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

import { BakkuCardComponent } from "./bakku-card/bakku-card.component";

@NgModule({
  declarations: [BakkuCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [BakkuCardComponent],
})
export class ComponentsModule {}
