import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router'; // PreloadAllModules
import { AppComponent } from './app.component';
import { TiRadComponent } from './ti-rad.component';
import { WorkflowComponent } from './workflow.component';
import { MaterialModule } from './material.module';
import { SimpleDialogComponent } from './simple-dialog.component';
import { FormsModule } from '@angular/forms';
import { UtilComponent } from './util.component';
import { LIVER_WORKFLOW, LIVER_ROUTES } from '../data/liver-workflow';

const appRoutes: Routes = [
  {
    path: 'ti-rads',
    component: TiRadComponent
  },
  LIVER_ROUTES[0],
  LIVER_ROUTES[1],
  {
    path: '',
    redirectTo: LIVER_WORKFLOW.rootPath,
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleDialogComponent,
    UtilComponent,
    TiRadComponent,
    WorkflowComponent
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
