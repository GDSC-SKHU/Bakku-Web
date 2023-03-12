import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, switchMap } from "rxjs";

import { Bakku, BakkuService } from "../bakku.service";
import { ReportDialogComponent } from "../report-dialog/report-dialog.component";

@Component({
  selector: "app-bakku-detail-page",
  templateUrl: "./bakku-detail-page.component.html",
  styleUrls: ["./bakku-detail-page.component.scss"],
})
export class BakkuDetailPageComponent implements OnInit {
  declare bakku$: Observable<Bakku>;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private bakkuService: BakkuService,
  ) {}

  ngOnInit() {
    this.bakku$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = Number(params.get("id")!);
        return this.bakkuService.getBakkuById(id);
      }),
    );
  }

  openDialog = async () => {
    this.bakku$.subscribe((value) => {
      this.dialog.open(ReportDialogComponent, {
        data: { id: value.id },
      });
    });
  };
}
