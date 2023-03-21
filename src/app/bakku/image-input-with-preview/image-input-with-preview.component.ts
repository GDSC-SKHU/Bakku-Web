import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ImageInput } from "src/app/shared/class/image-input";

@Component({
  selector: "app-image-input-with-preview",
  templateUrl: "./image-input-with-preview.component.html",
  styleUrls: ["./image-input-with-preview.component.scss"],
})
export class ImageInputWithPreviewComponent {
  @Input() required: boolean = false;
  @Input() text!: string;
  @Input() imageInput!: ImageInput;

  declare imageFormGroup: FormGroup;

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
  };
}
