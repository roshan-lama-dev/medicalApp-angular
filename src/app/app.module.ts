import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmbeddedComponent } from './embedded.component';
import { Page2Component } from './page2.component';
import { Page3Component } from './page3.component';
import { Page4Component } from './page4.component';
import { Page5Component } from './page5.component';
import { BadURLComponent } from './badurl.component';
import { HomeComponent } from './home.component';

import { RouterModule, Routes } from '@angular/router';

const myAppRoutes: Routes = [
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component },
  { path: 'page5', component: Page5Component },
  //{path : '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', component: BadURLComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EmbeddedComponent,
    Page2Component,
    Page3Component,
    BadURLComponent,
    HomeComponent,
    Page4Component,
    Page5Component,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(myAppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
