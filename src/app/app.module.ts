import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule, PERSISTENCE, USE_DEVICE_LANGUAGE } from "@angular/fire/compat/auth";
import { AngularFireAuthGuardModule } from "@angular/fire/compat/auth-guard";
import {
  AngularFirePerformanceModule,
  PerformanceMonitoringService,
} from "@angular/fire/compat/performance";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { environment } from "src/environments/environment";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BakkuModule } from "./bakku/bakku.module";
import { EventModule } from "./event/event.module";
import { OceanModule } from "./ocean/ocean.module";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { RankingModule } from "./ranking/ranking.module";
import { ComponentsModule } from "./shared/components/components.module";
import { httpInterceptorProviders } from "./shared/http-interceptors";

@NgModule({
  declarations: [AppComponent, HomePageComponent, LoginPageComponent, NotFoundPageComponent],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFirePerformanceModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RankingModule,
    EventModule,
    BakkuModule,
    OceanModule,
    ComponentsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    httpInterceptorProviders,
    { provide: USE_DEVICE_LANGUAGE, useValue: true },
    { provide: PERSISTENCE, useValue: "local" },
    PerformanceMonitoringService,
  ],
})
export class AppModule {}
