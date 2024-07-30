import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentComponent } from './components/content/content.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },  // Aqui você pode querer verificar se HeaderComponent é o componente certo
  { path: 'about', component: ContentComponent },  // Aqui você pode querer verificar se ContentComponent é o componente certo
  { path: '**', component: DashboardComponent } // Rota para páginas não encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura as rotas principais
  exports: [RouterModule] // Permite que outros módulos acessem as rotas
})
export class AppRoutingModule {}
