import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { AppListComponent } from './pages/app-list/app-list.component';
import { MainComponent } from './pages/tesoreria/main/main.component';
import { SearchComponent } from './pages/tesoreria/search/search.component';
import { SearchResultComponent } from './pages/tesoreria/search-result/search-result.component';


@NgModule({
  declarations: [
    AppListComponent,
    MainComponent,
    SearchComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
