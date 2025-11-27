import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinComponent } from './layout/medecin/medecin.component';
import { PatientComponent } from './layout/patient/patient.component';
import { DashComponent } from './views/medecin/dash/dash/dash.component';
import { HomeComponent } from './views/patient/home/home/home.component';

import { RdvmComponent } from './views/medecin/rdvm/rdvm.component';
import { PdvmComponent } from './views/patient/pdvm/pdvm.component';
import { RegpComponent } from './views/patient/regp/regp/regp.component';
import { RegmComponent } from './views/medecin/regm/regm/regm.component';
import { LogComponent } from './views/patient/log/log/log.component';
import { LogmComponent } from './views/medecin/logm/logm.component';
import { CrdvComponent } from './views/patient/crdv/crdv.component';
import { CrmComponent } from './views/medecin/crm/crm.component';
import { ChatpComponent } from './views/patient/chatp/chatp.component';
import { ChatmComponent } from './views/medecin/chatm/chatm.component';



const routes: Routes = [
  {
    path: 'medecin', component: MedecinComponent, children: [
      { path: 'dash', component: DashComponent },
      { path: "rdm", component: CrmComponent },
      { path: 'chatm', component: ChatmComponent },

    ]



  },
  {
    path: 'patient', component: PatientComponent, children: [
      { path: 'chatp', component: ChatpComponent },
      { path: "rdv", component: CrdvComponent }
      ,
      { path: 'prdv', component: PdvmComponent },

    ]



  },
  { path: 'regp', component: RegpComponent },
  { path: 'regm', component: RegmComponent },
  { path: 'log', component: LogComponent },
  { path: 'logm', component: LogmComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
