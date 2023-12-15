import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {AppComponent} from './app.component'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app.routes'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { HeaderComponent, FooterComponent } from './components';
import { HomeComponent, LoginComponent, SignupComponent, ProfileComponent } from './pages';
import { ToastrModule } from 'ngx-toastr'


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent, 
    // FooterComponent,
    // HomeComponent,
    // LoginComponent,
    // SignupComponent,
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }