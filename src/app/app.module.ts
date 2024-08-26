import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuestionsComponent } from './questions/questions.component';
import { LetterComponent } from './letter/letter.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    QuestionsComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule, 
    RouterModule.forRoot([
      { path: "", component: HomepageComponent },
      { path: "questions", component: QuestionsComponent },
      {path:"letters", component:LetterComponent }
    ])
  ],
  providers: [
    provideClientHydration(),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
