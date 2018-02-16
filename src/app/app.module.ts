import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TiRadComponent } from './ti-rad.component';
import { LiverComponent } from './liver.component';
import { MaterialModule } from './material.module';
import { SimpleDialog } from './simple-dialog.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'ti-rads', component: TiRadComponent },
  { path: 'liver', component: LiverComponent },
  // { path: 'hero/:id',      component: AppComponent },
  // {
  //   path: 'heroes',
  //   component: AppComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/ti-rads',
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
      appRoutes // ,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
