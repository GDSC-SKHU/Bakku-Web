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

  getRecentBakkus(page: number = 0) {
    return this.http.get<Paging<Bakku>>(`/bakkus?sort=decorateTime,desc&page=${page}`);
  }

  getBakkusByUid(uid: string, page: number = 0) {
    return this.http.get<Paging<Bakku>>(`/bakkus?uid=${uid}&page=${page}`);
  }

  getBakkusByOceanId(oceanId: number) {
    return this.http.get<Paging<Bakku>>(`/bakkus?oid=${oceanId}`);
  }
}
