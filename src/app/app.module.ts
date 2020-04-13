import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HelloWorldComponent } from './component/hello-world/hello-world.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MenuComponent } from './component/menu/menu.component';
import { HttpInterceptorService } from './service/httpInterceptor/http-interceptor.service';
import { HttpModule } from '@angular/http';
import {AuthService} from './service/authentification/auth.service';
import { RegistrationComponent } from './component/registration/registration.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'hello-world', component: HelloWorldComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'registration', component: RegistrationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    RegistrationComponent
  ],
  imports: [
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
