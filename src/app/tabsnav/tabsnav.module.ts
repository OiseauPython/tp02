import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';

import { TabsnavPageRoutingModule } from './tabsnav-routing.module';
import { TabsnavPage } from './tabsnav.page';

const routes: Routes = [
  {
    path: 'tabs-nav',
    component: TabsnavPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
      },
      {
        path: 'geolocation',
        loadChildren: '../geolocation/geolocation.module#GeolocationPageModule'
      },
      {
        path: 'camera',
        loadChildren: '../camera/camera.module#CameraPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-nav/dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsnavPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsnavPage]
})

export class TabsnavPageModule { }
