import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion'
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { MatSelectModule } from '@angular/material/select';
import { ViewSlipsComponent } from './view-slips/view-slips.component';
import { AddSlipComponent } from './add-slip/add-slip.component';
import { AddTbgrComponent } from './add-tbgr/add-tbgr.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    SuperTabsModule,
    MatSelectModule,
  ],
  declarations: [Tab1Page,ViewSlipsComponent,AddSlipComponent,AddTbgrComponent]
})
export class Tab1PageModule {}
