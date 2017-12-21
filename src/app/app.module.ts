import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent } from './components/containers/card';
import { AppRoutingModule } from './/app-routing.module';
import { CardsComponent } from './components/pages/cards/cards.component';
import { FormfieldComponent } from './components/pages/formfield/formfield.component';
import { HamburgerComponent } from './components/menu/hamburger/hamburger.component';
import { IndexComponent } from './components/pages/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardsComponent,
    FormfieldComponent,
    HamburgerComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
