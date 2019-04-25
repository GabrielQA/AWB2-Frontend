import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/pasword/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/pasword/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { EmailComponent } from './components/email/email.component';
import { VideosComponent } from './components/videos/videos.component';
import { UserskidsComponent } from './components/userskids/userskids.component';
import { VerifyComponent } from './components/verify/verify.component';
import { ValidationComponent } from './components/validation/validation.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { CreateVideosComponent } from './components/create-videos/create-videos.component';
import { ModvideosComponent } from './components/modvideos/modvideos.component';
import { ModusersComponent } from './components/modusers/modusers.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    EmailComponent,
    VideosComponent,
    UserskidsComponent,
    VerifyComponent,
    ValidationComponent,
    CreateUsersComponent,
    CreateVideosComponent,
    ModvideosComponent,
    ModusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
