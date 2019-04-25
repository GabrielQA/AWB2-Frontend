import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-create-videos',
  templateUrl: './create-videos.component.html',
  styleUrls: ['./create-videos.component.css']
})
export class CreateVideosComponent implements OnInit {

  public form={
    name:null,
    link:null,
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
   this.Jarwis.create_videos(this.form).subscribe(
      data => this.handleResponse,
      error => this.handleError(error)
    );

  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('videos');
  }
  handleError(error){
    this.error = error.error.errors;
  }
  ngOnInit() {
  }

}
