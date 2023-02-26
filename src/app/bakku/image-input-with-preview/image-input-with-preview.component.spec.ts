import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ImageInputWithPreviewComponent } from "./image-input-with-preview.component";

describe("ImageInputWithPreviewComponent", () => {
  let component: ImageInputWithPreviewComponent;
  let fixture: ComponentFixture<ImageInputWithPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageInputWithPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageInputWithPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
