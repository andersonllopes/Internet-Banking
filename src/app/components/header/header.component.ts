import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  formLogin: any;

  constructor(private form: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.form.group({
      cpf: ['']
    });
  }
}
