
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  error!: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}

