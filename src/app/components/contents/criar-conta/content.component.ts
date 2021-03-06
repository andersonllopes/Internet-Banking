import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    const options = {
      stringsElement: '#typed-strings',
      strings: ['Simples, transparente e inovador'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
    };

    const typed = new Typed('.typing-element', options);
  }

  cadastroClientes() {
    console.log("AQUIIIIIIIIII");
    this.router.navigateByUrl('cadastro');
  }
}
