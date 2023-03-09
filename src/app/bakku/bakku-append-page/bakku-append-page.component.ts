import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Ocean, OceanService } from "src/app/ocean/ocean.service";
import { ImageInput } from "src/app/shared/class/image-input";

import { BakkuService } from "../bakku.service";

@Component({
  selector: "app-bakku-append-page",
  templateUrl: "./bakku-append-page.component.html",
  styleUrls: ["./bakku-append-page.component.scss"],
})
export class BakkuAppendPageComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private bakkuService: BakkuService,
    private oceanService: OceanService,
  ) {}

  oceans: Ocean[] = [];

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

  clearImageInput = (imageFormName: keyof typeof this.bakkuForm.value, imageInput: ImageInput) => {
    imageInput.clear();
    const control = this.getFormControl(imageFormName)!;
    control.reset();
  };

  bakkuForm = new FormGroup({
    groupName: new FormControl("", [Validators.required]),
    oceanId: new FormControl("", [Validators.required]),
    date: new FormControl<Date>(new Date(), [Validators.required]),
    cleanWeight: new FormControl(0, [Validators.required]),
    comment: new FormControl(""),
  });

  onSubmit = () => {
    const formData = new FormData();
    Object.keys(this.bakkuForm.controls).forEach((controlName) => {
      formData.append(controlName, this.bakkuForm.get(controlName)?.value);
    });

    this.bakkuService.postBakku(formData);
  };

  getOceans() {
    this.oceanService
      .getCurrentPosition()
      .subscribe(({ lat, lon }) =>
        this.oceanService
          .getOceansByPosition({ lat, lon })
          .subscribe((res) => (this.oceans = res.content)),
      );
  }

  getFormControl = (valueName: keyof typeof this.bakkuForm.value) => {
    return this.bakkuForm.get(valueName);
  };

  getErrorMsg = (valueName: keyof typeof this.bakkuForm.value) => {
    const control = this.getFormControl(valueName)!;

    if (valueName === "cleanWeight") {
      return "입력 값을 확인해 주세요.";
    }

    if (control.hasError("required")) {
      return "입력해 주세요.";
    }

    return "입력 값을 확인해 주세요.";
  };

  ngOnInit() {
    this.getOceans();
  }
}
