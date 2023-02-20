type ImageStatus = "init" | "ok" | "error";

export class ImageInput {
  public status: ImageStatus = "init";
  public src: string | null = null;
  public file: File | null = null;

  constructor() {}

  public onError() {
    this.status = "error";
    this.src = null;
    this.file = null;
  }

  public onSuccess() {
    this.status = "ok";
  }

  public clear() {
    this.status = "init";
    this.src = null;
    this.file = null;
  }
}
