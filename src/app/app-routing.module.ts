import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './components/pages/cards/cards.component';
import { FormfieldComponent } from './components/pages/formfield/formfield.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'formfield', component: FormfieldComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }