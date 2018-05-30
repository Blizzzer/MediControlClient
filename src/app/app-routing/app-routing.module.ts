import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {DripsComponent} from '../drips/drips.component';

const routes: Routes = [
  { path: '', redirectTo: '/drips', pathMatch: 'full' }, {
    path: 'drips', component: DripsComponent
  }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
