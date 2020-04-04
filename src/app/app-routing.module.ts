import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbcComponent } from './abc/abc.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  {path: 'abc', component: AbcComponent, children: []},
  {path: 'xyz', component: XyzComponent, children: []},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
