import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form={
    email:null,
    name:null,
    lastname:null,
    country:null,
    birthdate:null,
    telephone:null,
    password:null,
    password_confirmation:null,
    verification:false,

  }
  public message: any;
  public error = [];
  public verificate: any;

  constructor(
    
    private Jarwis:JarwisService,
    private Token : TokenService,
    private Auth : AuthService,
    private router: Router,


    ) { }

  onSubmit() {
    
    this.signupForm(); /** 
   this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse,
      error => this.handleError(error)
   );*/
    
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('profile');
  }
  handleError(error){
    this.error = error.error.errors;
  }
  handleMessage(message){
    this.message = message.message.message;

  }
  handleVerificate(verificate){
    this.verificate = verificate.verificate.verificate;

  }
  ngOnInit() {
  }
  age(){
    const today: Date = new Date();
    const birthDate: Date = new Date(this.form.birthdate);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getFullYear() - birthDate.getMonth();
    if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
      age--;
    }
    console.log(age);
    return age;
  }
  signupForm() {
    if(this.age() < 18){
      console.log( this.message ='Your are a kid, sorry.');
    }else{
      this.Jarwis.signup(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
        
     );
     console.log( this.verificate ='Verificate your email');
    }
    
    
  }
}
