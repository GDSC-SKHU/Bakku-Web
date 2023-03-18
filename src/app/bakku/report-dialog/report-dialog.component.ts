import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ReportService } from "src/app/report/report.service";

interface DialogData {
  id: number;
}

@Component({
  selector: "app-report-dialog",
  templateUrl: "./report-dialog.component.html",
  styleUrls: ["./report-dialog.component.scss"],
})
export class ReportDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ReportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private reportService: ReportService,
  ) {}

  onReportClick = () => {
    this.reportService.postReport(this.data.id).subscribe(() => {
      this.dialogRef.close();
    });
  };
}
