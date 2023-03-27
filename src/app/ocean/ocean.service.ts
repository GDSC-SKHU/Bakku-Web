import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Ocean {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
  createdDate: Date;
  modifiedDate: Date;
  comment: string;
}

interface Position {
  lat: number;
  lon: number;
}

const DEFAULT_POSITION: Position = { lat: 37.49999, lon: 126.65099 };
const MAX_OCEAN_SIZE = 100;
@Injectable({
  providedIn: "root",
})
export class OceanService {
  constructor(private http: HttpClient) {}

  getCurrentPosition(): Observable<Position> {
    return new Observable((ob) => {
      if (!navigator || !navigator.geolocation) {
        ob.next(DEFAULT_POSITION);
      }

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          ob.next({ lat: coords.latitude, lon: coords.longitude });
          ob.complete();
        },
        () => {
          ob.next(DEFAULT_POSITION);
        },
      );
    });
  }

  getOceansByPosition({
    lat,
    lon,
    size = MAX_OCEAN_SIZE,
    page = 0,
  }: Position & { size?: number; page?: number }) {
    return this.http.get<Paging<Ocean>>(`/oceans?lat=${lat}&lon=${lon}&size=${size}&page=${page}`);
  }

  getOceanById(id: number) {
    return this.http.get<Ocean>(`/oceans/${id}`);
  }
}
