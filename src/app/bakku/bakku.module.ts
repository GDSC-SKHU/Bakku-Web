import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GoogleMapsModule } from "@angular/google-maps";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { BakkuAppendPageComponent } from "./bakku-append-page/bakku-append-page.component";
import { BakkuDetailPageComponent } from "./bakku-detail-page/bakku-detail-page.component";
import { BakkuRoutingModule } from "./bakku-routing.module";
import { ImageInputWithPreviewComponent } from "./image-input-with-preview/image-input-with-preview.component";
import { ReportDialogComponent } from "./report-dialog/report-dialog.component";

@NgModule({
  declarations: [
    BakkuAppendPageComponent,
    BakkuDetailPageComponent,
    ReportDialogComponent,
    ImageInputWithPreviewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BakkuRoutingModule,
    GoogleMapsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
})
export class BakkuModule {}
