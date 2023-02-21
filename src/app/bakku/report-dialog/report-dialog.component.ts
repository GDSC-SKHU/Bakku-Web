import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

interface DialogData {
  id: string;
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
  ) {}

  onReportClick = () => {
    // TODO: 신고 접수 API 호출
    console.log(`신고 접수 ${this.data.id}`);
    this.dialogRef.close();
  };
}
