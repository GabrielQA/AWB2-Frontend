import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userskids',
  templateUrl: './userskids.component.html',
  styleUrls: ['./userskids.component.css']
})
export class UserskidsComponent implements OnInit {
  public form={
    name:null,
    username:null,
    birthdate:null,
    id:null,
   
  }
  public mostrar: any;
  constructor(
    private Jarwis:JarwisService,
    private Token : TokenService,
    private Auth : AuthService,
    private router: Router,
  ) { }
  onSubmit() {
   
    
  }
  
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('userskids');
  }
  ngOnInit() {
    this.handleMostrar(); 
  }
  handleMostrar(){
    
    this.mostrar = this.Jarwis.userskids().subscribe(
      data => this.handleResponse(data),  
      );
   console.log(this.mostrar);
  }

}
