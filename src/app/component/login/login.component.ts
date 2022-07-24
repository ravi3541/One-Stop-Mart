import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service'; 
import { SessionService } from './../../service/session.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthenticationService, private _route:Router, private _session:SessionService) { }

  loginform = new FormGroup({

    email:new FormControl("",[
      Validators.required,
      Validators.email
    ]),

    password:new FormControl("",[
      Validators.required, 
      // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[&.!@$]).{8,32}$')
    ])
    
  })

  loginResponse:any;

  ngOnInit(): void {
  }


  login(){

    if(this.loginform.valid){
      this._auth.login(this.loginform.value).subscribe(result=>{
        if(result){
          this.loginResponse = result

          this._session.set('id',this.loginResponse.data.id)
          this._session.set('email',this.loginResponse.data.email)
          this._session.set('access',this.loginResponse.data.access)
          this._session.set('refresh',this.loginResponse.data.refresh)

          this._session.setUserSession()

          this._route.navigate(['dashboard'])

        }
      })
    }

  }
}
