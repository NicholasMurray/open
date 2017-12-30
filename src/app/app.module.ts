import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent } from './components/containers/card';
import { FormfieldComponent } from './components/controls/formfield/formfield.component';
import { AppRoutingModule } from './app-routing.module';
import { CardsPageComponent } from './components/pages/cards-page/cards-page.component';
import { FormfieldPageComponent } from './components/pages/formfield-page/formfield-page.component';
import { IndexPageComponent } from './components/pages/index-page/index-page.component';
import { HamburgerComponent } from './components/menu/hamburger/hamburger.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardsPageComponent,
    FormfieldComponent,
    FormfieldPageComponent,
    HamburgerComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
