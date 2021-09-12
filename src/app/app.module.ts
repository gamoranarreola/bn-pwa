import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { environment as env } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    CoreModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: env.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-MX'
    },
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(`${ env.production === true ? '272958167523218' : '435891111073407' }`)
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
