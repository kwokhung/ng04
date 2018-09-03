import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrameworkVoteComponent } from './framework-vote/framework-vote.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameworkVoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
