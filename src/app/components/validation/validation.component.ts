import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  public form = {
    code: null,
  };

  public error: any;

  constructor(
    private Jarwis: JarwisService,
    private Auth: AuthService,
    private router: Router,
    private Token : TokenService
    ) { }

  onSubmit() {
    this.validateCode();
  }
  //Entrada a la vista perfil
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.error;
  }
  ngOnInit() {
  }

  validateCode() {
    const code = this.form.code.length;
    console.log(code);
    if (code != 4 ) {
      this.error = 'The code no found';
    }else if(code === 0){
      this.error = 'Insert code';
    }else if(code === 4){
      this.router.navigate(['profile']);
    }
    
  }

}
