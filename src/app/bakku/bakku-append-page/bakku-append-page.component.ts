import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Ocean, OceanService } from "src/app/ocean/ocean.service";
import { ImageInput } from "src/app/shared/class/image-input";

import { BakkuService } from "../bakku.service";

type ImageType = "titleImage" | "beforeImage" | "afterImage";

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
      if (controlName === "date") {
        const date = this.bakkuForm.get(controlName)!.value!;
        const timezoneOffset = date.getTimezoneOffset();
        const timezoneDate = new Date(date.getTime() - timezoneOffset * 60 * 1000);
        const timezoneYYYYMMDD = timezoneDate.toISOString().split("T")[0];
        formData.append("decorateDate", timezoneYYYYMMDD);
      } else {
        formData.append(controlName, this.bakkuForm.get(controlName)?.value);
      }
    });

    this.appendImageFileWhenVaild(formData, "titleImage", this.titleImage);
    this.appendImageFileWhenVaild(formData, "beforeImage", this.beforeImage);
    this.appendImageFileWhenVaild(formData, "afterImage", this.afterImage);

    this.bakkuService.postBakku(formData).subscribe((res) => {
      console.log(res);
    });
  };

  appendImageFileWhenVaild(formData: FormData, imageType: ImageType, image: ImageInput) {
    if (image.status !== "ok" || image.file === null) return;

    formData.append(imageType, image.file, image.file.name);
  }

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
