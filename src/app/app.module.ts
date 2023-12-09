import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './@components/header/header.component';
import { FooterComponent } from './@components/footer/footer.component';
import { ServicesComponent } from './@pages/services/services.component';
import { AboutComponent } from './@pages/about/about.component';
import { TESTIMONIALComponent } from './@pages/testimonial/testimonial.component';
import { ContactComponent } from './@pages/contact/contact.component';
import { ProjectComponent } from './@pages/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AboutComponent,
    TESTIMONIALComponent,
    ContactComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
