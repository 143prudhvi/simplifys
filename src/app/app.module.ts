import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { SharedService } from './shared.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpRequestInterceptor } from './interceptor/http-loading.interceptor';
import { StoreModule } from '@ngrx/store';
import { SlipReducer, TbgrReducer } from './store/reducers/slip.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SlipEffects } from './store/effects/slip.effects';
import { GradeReducer, BoardReducer, VillageReducer, ContactReducer, DataReducer } from './store/reducers/root.reducer';
import { rootEffects } from './store/effects/root.effects';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule,
    SuperTabsModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      slip: SlipReducer,
      tbgr : TbgrReducer,
      grade : GradeReducer,
      village : VillageReducer,
      board : BoardReducer,
      contact : ContactReducer,
      data : DataReducer,
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([SlipEffects,rootEffects]),
  ],
  providers: [
    SharedService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
