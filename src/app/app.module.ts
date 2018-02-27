import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { TiRadComponent } from './ti-rad.component';
import { LiverComponent } from './liver.component';
import { MaterialModule } from './material.module';
import { SimpleDialog } from './simple-dialog.component';
import { FormsModule } from '@angular/forms';
// import { LIVER_OPTIONS } from '../data/liver-options';
import { DataService } from './data.service';
import { OptionResolverService } from './option-resolver.service';

const appRoutes: Routes = [
  {
    path: 'ti-rads',
    component: TiRadComponent
  },
  {
    path: 'liver',
    component: LiverComponent,
    resolve: {
      option: OptionResolverService
    }
  },
  {
    path: 'liver/:id',
    component: LiverComponent,
    resolve: {
      option: OptionResolverService
    }
  },
  {
    path: '',
    redirectTo: '/liver',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleDialog,
    TiRadComponent,
    LiverComponent
  ],
  entryComponents: [
    SimpleDialog
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules
      }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    DataService,
    OptionResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
