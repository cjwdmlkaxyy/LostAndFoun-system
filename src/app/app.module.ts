import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UersManageMentComponent } from './uers-manage-ment/uers-manage-ment.component';
import { LostSthComponent } from './newsManagement/lost-sth/lost-sth.component';
import { FindSthComponent } from './newsManagement/find-sth/find-sth.component';
import { SildeBarComponent } from './silde-bar/silde-bar.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { FrameComponent } from './frame/frame.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UersManageMentComponent,
    LostSthComponent,
    FindSthComponent,
    SildeBarComponent,
    LoginComponent,
    RegisterComponent,
    FrameComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
