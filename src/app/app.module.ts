import { CartaoComponent } from './components/contents/cartao/cartao.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/contents/criar-conta/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroClientesComponent } from './components/acesso/cadastro/cadastro-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SobreNosComponent } from './components/contents/sobre-nos/sobre-nos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroClientesComponent,
    CartaoComponent,
    HomepageComponent,
    SobreNosComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{provide:LocationStrategy,
    useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]

})
export class AppModule { }
