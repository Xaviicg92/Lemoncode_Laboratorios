import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderPublicComponent } from './components/header/header-public/header-public.component';
import { HeaderPrivateComponent } from './components/header/header-private/header-private.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { MarkedDirective } from './directives/marked.directive';
import { CommonHeaderComponent } from './components/header/common-header/common-header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    UsersComponent,
    CustomersComponent,
    ProfileComponent,
    LogoutComponent,
    ProvidersComponent,
    MarkedDirective,
    CommonHeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
