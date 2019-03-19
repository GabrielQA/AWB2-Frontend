import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/pasword/request-reset/request-reset.component';
import { ResponsetResetComponent } from './components/pasword/responset-reset/responset-reset.component';
import { ResponseResetComponent } from './components/pasword/response-reset/response-reset.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponsetResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
