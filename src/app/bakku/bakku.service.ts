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

type PostBakkuBody = Omit<Bakku, "id" | "oceanName">;

@Injectable({
  providedIn: "root",
})
export class BakkuService {
  constructor(private http: HttpClient) {}

  postBakku(body: PostBakkuBody) {
    return this.http.post<PostBakkuBody>("/bakkus", { body });
  }

  getBakkusByUid(uid: string) {
    return this.http.get<Paging<Bakku>>(`/bakkus?uid=${uid}`);
  }
}
