import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RdvmComponent } from './rdvm.component';

const routes: Routes = [
  {path:'',component:RdvmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RdvmRoutingModule { }
