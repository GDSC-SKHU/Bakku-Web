type ImageStatus = "init" | "ok" | "error";

export class ImageInput {
  public status: ImageStatus = "init";
  declare src: string;
  declare file: File;

  constructor() {}

  public onError() {
    this.status = "error";
    this.src = "";
  }

  public onSuccess() {
    this.status = "ok";
  }
}
