import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TadePage } from './tade.page';

const routes: Routes = [
  {
    path: '',
    component: TadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TadePageRoutingModule {}
