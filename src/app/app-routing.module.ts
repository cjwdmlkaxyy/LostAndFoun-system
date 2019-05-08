import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {FrameComponent} from './component/frame/frame.component';
import {SildeBarComponent} from './component/silde-bar/silde-bar.component';
import {HomeComponent} from './component/home/home.component';
import {UsersManagementComponent} from './component/users-management/users-management.component';
import {PagePictureComponent} from './component/pictureManagement/page-picture/page-picture.component';
import {SlideshowComponent} from './component/pictureManagement/slideshow/slideshow.component';
import {LostSthComponent} from "./component/newsManagement/lost-sth/lost-sth.component";
import {FindSthComponent} from "./component/newsManagement/find-sth/find-sth.component";
import {LinkComponent} from "./component/linkManagement/link.component";

const routes: Routes = [
  {path: '', redirectTo: '/Login', pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'Frame', component: FrameComponent,
   children: [
     {path: '', component: HomeComponent},
     {path: 'home', component: HomeComponent},
     {path: 'userManagement', component: UsersManagementComponent},
     {path: 'pagePicManagement', component: PagePictureComponent},
     {path: 'slideshow', component: SlideshowComponent},
     {path: 'lost', component: LostSthComponent},
     {path: 'found', component: FindSthComponent},
     {path: 'linkManagement', component: LinkComponent},
   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
