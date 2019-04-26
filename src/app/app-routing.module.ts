import { NgModule } from '@angular/core';
import { RouterModule,Routes  } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { CreateVideosComponent } from './components/create-videos/create-videos.component';
import { SignupComponent } from './components/signup/signup.component';
import { VideosComponent } from './components/videos/videos.component';
import { ModusersComponent } from './components/modusers/modusers.component';
import { ModvideosComponent } from './components/modvideos/modvideos.component';
import { VerifyComponent } from './components/verify/verify.component';
import { UserskidsComponent } from './components/userskids/userskids.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/pasword/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/pasword/response-reset/response-reset.component';
import { EmailComponent } from './components/email/email.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { ValidationComponent } from './components/validation/validation.component';


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
{
  path: 'videos',
  component:  VideosComponent,
  canActivate: [AfterLoginService]

},
{
  path: 'userskids',
  component: UserskidsComponent,
  canActivate: [AfterLoginService]

},
{
  path: 'verify',
  component: VerifyComponent,
  canActivate: [AfterLoginService]
},
{
  path: 'validation',
  component: ValidationComponent,
  
},
{
  path: 'create-users',
  component: CreateUsersComponent,
  canActivate: [AfterLoginService]

  
},
{
  path: 'create-videos',
  component: CreateVideosComponent,
  canActivate: [AfterLoginService]
},

{
  path: 'modusers/:id',
  component: ModusersComponent,
  canActivate: [AfterLoginService]
},
{
  path: 'modvideos/:id',
  component: ModvideosComponent,
  canActivate: [AfterLoginService]
},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
