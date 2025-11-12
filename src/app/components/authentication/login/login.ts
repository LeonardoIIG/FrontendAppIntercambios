import { Component,OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login implements OnInit {
  _emailUser :string = '';
  _userPassword :string = '';


  constructor(
    private _authService : AuthService,
    private _router : Router
  ){}

  ngOnInit(): void {
    
  }

}
