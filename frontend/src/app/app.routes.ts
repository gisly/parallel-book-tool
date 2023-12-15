import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { HomeComponent, LoginComponent, SignupComponent, ProfileComponent } from './pages';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'Sign Up',
    },
    {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {
}