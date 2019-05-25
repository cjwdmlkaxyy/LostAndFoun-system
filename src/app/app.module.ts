import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersManagementComponent } from './component/users-management/users-management.component';
import { LostSthComponent } from './component/newsManagement/lost-sth/lost-sth.component';
import { FindSthComponent } from './component/newsManagement/find-sth/find-sth.component';
import { SildeBarComponent } from './component/silde-bar/silde-bar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FrameComponent } from './component/frame/frame.component';
import { HomeComponent } from './component/home/home.component';
import { SlideshowComponent } from './component/pictureManagement/slideshow/slideshow.component';
import { PagePictureComponent } from './component/pictureManagement/page-picture/page-picture.component';
import { PublicSourceComponent } from './component/publicSource/prompts/public-source.component';
import { LinkComponent } from "./component/linkManagement/link.component";
import { NzDemoDatePickerStartEndComponent } from "./service/date-picker/nz-date-picker.common";
import { CommonPageComponent } from "./service/command-page/common-page.component";

/*directive*/
import { WholePageListenDirective } from './directive/wholePageListen.directive';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
/*pipe*/
import { ConversionValuePipe, GoodsStatus} from "./pipe/Conversion-value.pipe";

registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    UsersManagementComponent,
    LostSthComponent,
    FindSthComponent,
    SildeBarComponent,
    LoginComponent,
    RegisterComponent,
    FrameComponent,
    HomeComponent,
    WholePageListenDirective,
    SlideshowComponent,
    PagePictureComponent,
    PublicSourceComponent,
    LinkComponent,
    NzDemoDatePickerStartEndComponent,
    CommonPageComponent,
    ConversionValuePipe,
    GoodsStatus
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
