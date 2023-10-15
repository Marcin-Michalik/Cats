import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { TadePageRoutingModule } from './tade-routing.module';

import { TadePage } from './tade.page';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TadePageRoutingModule
  ],
  declarations: [TadePage]
})
export class TadePageModule {}
