import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ApplicationsComponent } from './components/applications/applications.component';
import { BreadcumbComponent } from './components/breadcumb/breadcumb.component';
import { HeadClientDataComponent } from './components/head-client-data/head-client-data.component';
import { LoadMessagesComponent } from './components/load-messages/load-messages.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ModalComponent } from './components/modal/modal.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';


@NgModule({
  declarations: [
    ApplicationsComponent,
    BreadcumbComponent,
    HeadClientDataComponent,
    LoadMessagesComponent,
    LogoComponent,
    MainMenuComponent,
    ModalComponent,
    SlidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
