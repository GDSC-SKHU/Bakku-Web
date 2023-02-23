import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { BakkuCardComponent } from "./bakku-card/bakku-card.component";

@NgModule({
  declarations: [BakkuCardComponent],
  imports: [CommonModule],
  exports: [BakkuCardComponent],
})
export class ComponentsModule {}
