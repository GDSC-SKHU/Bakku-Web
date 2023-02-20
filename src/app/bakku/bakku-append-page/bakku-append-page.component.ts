import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ImageInput } from "src/app/shared/class/image-input";

@Component({
  selector: "app-bakku-append-page",
  templateUrl: "./bakku-append-page.component.html",
  styleUrls: ["./bakku-append-page.component.scss"],
})
export class BakkuAppendPageComponent {
  constructor(public auth: AngularFireAuth) {}

  titleImage = new ImageInput();
  beforeImage = new ImageInput();
  afterImage = new ImageInput();

  processFile = (input: HTMLInputElement, imageInput: ImageInput) => {
    const file: File = input.files![0];
    const reader = new FileReader();

    reader.onloadend = () => {
      imageInput.src = reader.result as string;
      imageInput.file = file;
      imageInput.onSuccess();
    };

    reader.onerror = () => {
      imageInput.onError();
    };

    reader.readAsDataURL(file);
  };

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
      return "입력 값을 확인해 주세요.";
    }

    if (control.hasError("required")) {
      return "입력해 주세요.";
    }

    return "입력 값을 확인해 주세요.";
  };
}
