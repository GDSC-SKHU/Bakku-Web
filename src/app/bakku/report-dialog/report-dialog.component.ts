import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
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
    private snackBar: MatSnackBar,
  ) {}

  onReportClick = () => {
    this.reportService.postReport(this.data.id).subscribe(() => {
      this.snackBar.open("신고가 접수되었습니다.", "닫기", { duration: 3000 });
      this.dialogRef.close();
    });
  };
}
