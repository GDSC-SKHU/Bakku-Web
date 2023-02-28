import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Event {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  comment: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
  createdDate: Date;
  modifiedDate: Date;
}

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<Paging<Event>>("/events");
  }

  getEventById(id: string | number) {
    return this.http.get<Event>(`/events/${id}`);
  }
}
