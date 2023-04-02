import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoomComponent } from './zoom/zoom.component';
import { Route, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'meeting',
        component:ZoomComponent
      }
    ]),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
