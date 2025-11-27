import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdvmComponent } from './pdvm.component';

const routes: Routes = [
  {path:'',component:PdvmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdvmRoutingModule { }
