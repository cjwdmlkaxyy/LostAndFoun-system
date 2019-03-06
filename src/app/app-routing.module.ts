import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {FrameComponent} from './component/frame/frame.component';
import {SildeBarComponent} from './component/silde-bar/silde-bar.component';
import {HomeComponent} from './component/home/home.component';
import {UersManageMentComponent} from './component/uers-manage-ment/uers-manage-ment.component';
import {PagePictureComponent} from './component/pictureManagement/page-picture/page-picture.component';
import {SlideshowComponent} from './component/pictureManagement/slideshow/slideshow.component';

const routes: Routes = [
  {path: '', redirectTo: '/Login', pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'Frame', component: FrameComponent,
   children: [
     {path: '', component: HomeComponent},
     {path: 'Home', component: HomeComponent},
     {path: 'UserManagement', component: UersManageMentComponent},
     {path: 'PagePicManagement', component: PagePictureComponent},
     {path: 'Slideshow', component: SlideshowComponent},
   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
