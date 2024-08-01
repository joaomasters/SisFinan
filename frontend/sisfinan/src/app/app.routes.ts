import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './pages/login/login.component';
import { SiderComponent } from './components/sider/sider.component';
import { ContasComponent } from './pages/contas/contas.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Página inicial é o Login
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: SiderComponent },  // Aqui você pode querer verificar se HeaderComponent é o componente certo
  { path: 'contas', component: ContasComponent },  // Aqui você pode querer verificar se ContentComponent é o componente certo
  { path: '**', component: LoginComponent } // Rota para páginas não encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura as rotas principais
  exports: [RouterModule] // Permite que outros módulos acessem as rotas
})
export class AppRoutingModule {}
