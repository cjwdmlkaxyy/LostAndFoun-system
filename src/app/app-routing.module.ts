import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {FrameComponent} from './component/frame/frame.component';
import {SildeBarComponent} from './component/silde-bar/silde-bar.component';
import {HomeComponent} from './component/home/home.component';
import {UersManageMentComponent} from './component/uers-manage-ment/uers-manage-ment.component';

const routes: Routes = [
  {path: '', redirectTo: '/Login', pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'Frame', component: FrameComponent,
   children: [
     {path: '', component: HomeComponent},
     {path: 'Home', component: HomeComponent},
     {path: 'UserManagement', component: UersManageMentComponent}
   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
