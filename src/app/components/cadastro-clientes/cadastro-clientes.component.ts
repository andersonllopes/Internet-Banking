import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  formCadastro: any;

  constructor(private form: FormBuilder ) { }

  ngOnInit(): void {

    this.form.group({

      nome: [''],
      sobrenome: [''],
      cpf: [''],
      date: [''],
      endereco: [''],
      email: ['']
    });
  }
}
