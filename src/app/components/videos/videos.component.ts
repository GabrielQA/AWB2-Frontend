import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';
import { url } from 'inspector';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  
  public form={
    name:null,
    link:null,
   
  }
  public Buscar = [];
  public mostrar: any[] = [];
  public test =[];
  canti: any[] = [];
  safeSrc: SafeResourceUrl;
  
  constructor(
    private Jarwis:JarwisService,
    private Token : TokenService,
    private Auth : AuthService,
    private router: Router,
    private sanitizer: DomSanitizer,
    
  ) { 
    
    this.test =null;
    //this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");

  }


  search() {
    //console.log(this.form);
    this.Jarwis.seachvideo(this.form).subscribe(
       rest => {

        this.test =  rest;
     
        //console.log(this.mostrar);

     });

    
   }
   //metodo URL
   url(url){
     this.safeSrc= this.sanitizer.bypassSecurityTrustResourceUrl(url);
     return this.safeSrc;
   }
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('videos');
  }
  ngOnInit() {
    //this.mostrartest();
    this.handleMostrar(); 
  }
 mostrartest(){
  this.Jarwis.videos().subscribe(
    data => {
      this.test=data
      console.log(this.test);    

    });  
 }
  handleMostrar(){
    
    this.Jarwis.videos().subscribe(
      data => {

         this.test =  data;

         console.log(this.test);

      });  
     
  }
  delete(id){
    this.Jarwis.deletevideos(id).subscribe(
      data => this.handleMostrar(),
      error => console.log(error)
    );
  }
  handleBuscar(){
    this.Jarwis.seachvideo(this.mostrar).subscribe(
      data => {

        this.mostrar =  data;
     
        console.log(this.mostrar);
      });
    
  }


  
  
}
