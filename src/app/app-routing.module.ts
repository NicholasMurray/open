import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './components/pages/index-page/index-page.component';
import { CardsPageComponent } from './components/pages/cards-page/cards-page.component';
import { FormfieldPageComponent } from './components/pages/formfield-page/formfield-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'cards', component: CardsPageComponent },
  { path: 'formfield', component: FormfieldPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
