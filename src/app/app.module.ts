import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router'; // PreloadAllModules
// import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TiRadComponent } from './ti-rad.component';
import { WorkflowComponent } from './workflow.component';
import { HomeComponent } from './home.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { MaterialModule } from './material.module';
import { SimpleDialogComponent } from './simple-dialog.component';
import { FormsModule } from '@angular/forms';
import { UtilComponent } from './util.component';
import { LIVER_WORKFLOW, LIVER_ROUTES } from '../data/liver-workflow';
import { ADRENAL_WORKFLOW, ADRENAL_ROUTES } from '../data/adrenal-workflow';

const appRoutes: Routes = [
  {
    path: 'ti-rads',
    component: TiRadComponent
  },
  LIVER_ROUTES[0],
  LIVER_ROUTES[1],
  ADRENAL_ROUTES[0],
  ADRENAL_ROUTES[1],
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleDialogComponent,
    UtilComponent,
    TiRadComponent,
    WorkflowComponent,
    HomeComponent,
    SubscribeComponent
  ],
  entryComponents: [
    SimpleDialogComponent,
    UtilComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // {
      //   // enableTracing: true, // <-- debugging purposes only
      //   // preloadingStrategy: PreloadAllModules
      // }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
    // HttpClientModule
  ],
  providers: [
    UtilComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
