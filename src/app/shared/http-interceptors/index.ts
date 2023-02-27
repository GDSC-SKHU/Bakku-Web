import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { AuthInterceptor } from "./auth-interceptor";
import { BaseUrlInterceptor } from "./base-interceptor";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
  { provide: "BASE_API_URL", useValue: environment.apiUrl },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
