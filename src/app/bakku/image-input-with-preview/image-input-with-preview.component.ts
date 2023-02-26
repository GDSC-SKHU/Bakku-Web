import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ImageInput } from "src/app/shared/class/image-input";

@Component({
  selector: "app-image-input-with-preview",
  templateUrl: "./image-input-with-preview.component.html",
  styleUrls: ["./image-input-with-preview.component.scss"],
})
export class ImageInputWithPreviewComponent implements OnInit {
  @Input() formName!: string;
  @Input() formGroup!: FormGroup;
  @Input() required: boolean = false;
  @Input() text!: string;

  declare imageFormGroup: FormGroup;
  imageInput = new ImageInput();

  ngOnInit() {
    const { formName } = this;
    this.imageFormGroup = new FormGroup({});
    this.imageFormGroup.addControl(formName, new FormControl<File | null>(null));
    this.formGroup.addControl(formName, this.imageFormGroup.controls[formName]);
  }

  processFile = (input: HTMLInputElement) => {
    const file: File = input.files![0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.imageInput.src = reader.result as string;
      this.imageInput.file = file;
      this.imageInput.onSuccess();
    };

    reader.onerror = () => {
      this.imageInput.onError();
    };

    reader.readAsDataURL(file);
  };

  clearImageInput = () => {
    this.imageInput.clear();
    this.imageFormGroup.controls[this.formName].reset();
  };
}
