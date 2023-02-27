import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { mergeMap, Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AngularFireAuth) {
    console.log("auth interceptor");
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.idToken.pipe(
      mergeMap((token) => {
        console.log(token);
        if (token) {
          req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        }

        return next.handle(req);
      }),
    );
  }
}
