import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdvmRoutingModule } from './rdvm-routing.module';
import { RdvmComponent } from './rdvm.component';


@NgModule({
  declarations: [
    RdvmComponent
  ],
  imports: [
    CommonModule,
    RdvmRoutingModule
  ]
})
export class RdvmModule { }
