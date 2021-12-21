import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ObjectFormComponent } from './components/object-form/object-form.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: SideMenuComponent },
  { path: 'login', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', pathMatch: 'full', component: SideMenuComponent },
  { path: 'form', pathMatch: 'full', component: ObjectFormComponent},
  { path: 'form', pathMatch: 'full',redirectTo: '/form'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
