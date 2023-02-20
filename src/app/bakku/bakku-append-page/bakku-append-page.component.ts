import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-bakku-append-page",
  templateUrl: "./bakku-append-page.component.html",
  styleUrls: ["./bakku-append-page.component.scss"],
})
export class BakkuAppendPageComponent {
  constructor(public auth: AngularFireAuth) {}

  bakkuForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    ocean: new FormControl("", [Validators.required]),
    date: new FormControl<Date>(new Date(), [Validators.required]),
    cleanWeight: new FormControl(0, [Validators.required]),
    comment: new FormControl(""),
  });

  public getFormControl = (valueName: keyof typeof this.bakkuForm.value) => {
    return this.bakkuForm.get(valueName);
  };

  public getErrorMsg = (valueName: keyof typeof this.bakkuForm.value) => {
    const control = this.getFormControl(valueName)!;

    if (valueName === "cleanWeight") {
      return "올바른 값을 입력해 주세요.";
    }

    if (control.hasError("required")) {
      return "입력해 주세요.";
    }

    return "입력 값을 확인해 주세요.";
  };
}
