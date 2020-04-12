import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { HttpModule } from '@angular/http';
import {AuthService} from './auth.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'hello-world', component: HelloWorldComponent},
  { path: 'logout', component: LogoutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    HelloWorldComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent
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
