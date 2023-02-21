import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of, switchMap } from "rxjs";

import { ReportDialogComponent } from "../report-dialog/report-dialog.component";

interface Bakku {
  id: string;
}

@Component({
  selector: "app-bakku-detail-page",
  templateUrl: "./bakku-detail-page.component.html",
  styleUrls: ["./bakku-detail-page.component.scss"],
})
export class BakkuDetailPageComponent implements OnInit {
  declare bakku$: Observable<Bakku>;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit() {
    this.bakku$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of({ id: params.get("id")! })),
    );
  }

  openDialog = () => {
    const dialogRef = this.dialog.open(ReportDialogComponent, { data: { id: 1 } });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  };
}
