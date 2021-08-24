import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClientesComponent } from './components/acesso/cadastro/cadastro-clientes.component';
import { CartaoComponent } from './components/contents/cartao/cartao.component';

const routes: Routes = [
  { path: '', redirectTo:'homepage', pathMatch: 'full' },
  { path:'homepage',component: HomepageComponent},
  { path: 'cadastro', component: CadastroClientesComponent },


];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
