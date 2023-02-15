import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BakkuAppendPageComponent } from "./bakku-append-page.component";

describe("BakkuAppendPageComponent", () => {
  let component: BakkuAppendPageComponent;
  let fixture: ComponentFixture<BakkuAppendPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BakkuAppendPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BakkuAppendPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
