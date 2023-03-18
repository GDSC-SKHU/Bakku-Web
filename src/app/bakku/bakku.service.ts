import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Bakku {
  id: number;
  comment: string;
  cleanWeight: number;
  decorateTime: string;
  titleImageUrl: string;
  beforeImageUrl?: string;
  afterImageUrl: string;
  groupName: string;
  oceanId: number;
  oceanName: string;
}

@Injectable({
  providedIn: "root",
})
export class BakkuService {
  constructor(private http: HttpClient) {}

  postBakku(data: FormData) {
    return this.http.post("/bakkus", data);
  }

  getBakkuById(id: number) {
    return this.http.get<Bakku>(`/bakkus/${id}`);
  }

  getRecentBakkus() {
    return this.http.get<Paging<Bakku>>("/bakkus?sort=decorateTime,desc");
  }

  getBakkusByUid(uid: string) {
    return this.http.get<Paging<Bakku>>(`/bakkus?uid=${uid}`);
  }

  getBakkusByOceanId(oceanId: number) {
    return this.http.get<Paging<Bakku>>(`/bakkus?oid=${oceanId}`);
  }
}
