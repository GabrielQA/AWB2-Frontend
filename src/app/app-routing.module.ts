import { NgModule } from '@angular/core';
import { RouterModule,Routes  } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/pasword/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/pasword/response-reset/response-reset.component';
import { EmailComponent } from './components/email/email.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

const appRoutes: Routes = [
{
  path:"login",
  component:LoginComponent,
  canActivate: [BeforeLoginService]
  
},
{
  path: 'signup',
  component: SignupComponent,
  canActivate: [BeforeLoginService]
},
{
  path: 'profile',
  component: ProfileComponent,
  canActivate: [AfterLoginService]
},
{
  path: 'request-password-reset',
  component: RequestResetComponent,
  canActivate: [BeforeLoginService]
},
{
  path: 'response-password-reset',
  component: ResponseResetComponent,
  canActivate: [BeforeLoginService]
},
{
  path: 'email',
  component: EmailComponent
},
{
  path: 'email_verification',
  component: EmailComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
