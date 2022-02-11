import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MlmComponent } from './mlm/mlm.component'

const routes: Routes = [
  {
    path: ':id',
    component: MlmComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
