import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { ViewComponent } from './view/view.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [    //JSON array where each object in the array defines a route..key-value pairs(key=path and value=component)
  {
    path: '', redirectTo: 'home', pathMatch: 'full'},  //root component
    {
      path: 'home', component: HomeComponent
    },
    {path: 'login' , component: LoginComponent
  },
  {path: 'myblogs' , component: MyblogsComponent,
  canActivate:[AuthGuard]
  },
  {path: 'profile/:id' , component: ProfileComponent
  },
  {
    path: 'edit-profile/:id', component: EditProfileComponent
  },
  {
    path: 'view/:postId', component: ViewComponent
  },
{
  path: '**', redirectTo:'home'   //wildcard
}];    

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //Add RouterModule to the @NgModule.imports array and configure it with the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
