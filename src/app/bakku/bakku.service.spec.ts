import { TestBed } from "@angular/core/testing";

import { BakkuService } from "./bakku.service";

describe("BakkuService", () => {
  let service: BakkuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BakkuService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
