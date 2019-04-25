import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  public form={
    name:null,
    username:null,
    birthdate:null,
    password:null,
  }
  public error = [];
  constructor(
    
    private Jarwis:JarwisService,
    private Token : TokenService,
    private Auth : AuthService,
    private router: Router,


    ) { }

  onSubmit() {
   console.log(this.form);
   this.Jarwis.create_users(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('userskids');
  }
  handleError(error){
    this.error = error.error.errors;
  }
  ngOnInit() {
  }

}
