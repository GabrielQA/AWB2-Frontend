import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modusers',
  templateUrl: './modusers.component.html',
  styleUrls: ['./modusers.component.css']
})
export class ModusersComponent implements OnInit {

  constructor(   
  private Jarwis:JarwisService,
  private Token : TokenService,
  private Auth : AuthService,
  private router: Router,
  )
  { }

  ngOnInit() {
    
  }
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('userskids');
  }
}
