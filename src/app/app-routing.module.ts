import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ChannelComponent } from './channel/channel.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: 'workspace/channel/:id', component: ChannelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
