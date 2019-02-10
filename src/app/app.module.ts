import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserServiceService } from './user-service.service';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { TecherdashboardComponentComponent } from './techerdashboard-component/techerdashboard-component.component';
import { ParentdashboardComponentComponent } from './parentdashboard-component/parentdashboard-component.component';
import { CoursehomeComponentComponent } from './coursehome-component/coursehome-component.component';
import { ClassroomhomeComponentComponent } from './classroomhome-component/classroomhome-component.component';
import { ClassroomdashboardComponentComponent } from './classroomdashboard-component/classroomdashboard-component.component';
import { CoursedashboardComponentComponent } from './coursedashboard-component/coursedashboard-component.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    HomeComponentComponent,
    NavbarComponentComponent,
    SidebarComponentComponent,
    FooterComponentComponent,
    TecherdashboardComponentComponent,
    ParentdashboardComponentComponent,
    CoursehomeComponentComponent,
    ClassroomhomeComponentComponent,
    ClassroomdashboardComponentComponent,
    CoursedashboardComponentComponent,
    ProfileComponent,
    EditprofileComponent 
  ],
  imports: [
    BrowserModule,
    OwlModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'register',
      component: RegisterComponentComponent
    },{
      path: 'login',
      component: LoginComponentComponent
    },{
      path: 'home',
      component: HomeComponentComponent
    },{
      path: 'teacherDashboard',
      component: TecherdashboardComponentComponent
    },{
      path: 'parentDashboard',
      component: ParentdashboardComponentComponent
    },{
      path: 'course',
      component: CoursehomeComponentComponent
    },{
      path: 'profile',
      component: ProfileComponent
    },{
      path: 'editprofile',
      component: EditprofileComponent
    },{
      path: 'coursedashboard/:id',
      component: CoursedashboardComponentComponent
    },{
      path: 'classroomdashboard/:id',
      component: ClassroomdashboardComponentComponent
    },{
      path: 'course/:id',
      component: CoursehomeComponentComponent
    },{
      path: 'classroom/:id',
      component: CoursehomeComponentComponent
    }])
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
