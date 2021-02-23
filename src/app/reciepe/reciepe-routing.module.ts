import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReciepeComponent } from './reciepe.component';

const routes: Routes = [
  {
    path: '',
    component: ReciepeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReciepeRoutingModule { }
