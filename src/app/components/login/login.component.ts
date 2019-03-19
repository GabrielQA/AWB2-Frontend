import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(private http: HttpClient) { }

  onSubmit() {
    return this.http.post('http://localhost:8000/api/login', this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  /*handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }*/

  handleError(error) {
    this.error = error.error.error;
  }
  ngOnInit() {
  }

}
