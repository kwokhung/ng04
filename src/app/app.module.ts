import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { FrameworkVoteComponent } from './framework-vote/framework-vote.component';

@NgModule({
  declarations: [
    FrameworkVoteComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    FrameworkVoteComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    customElements.define('framework-vote', createCustomElement(FrameworkVoteComponent, { injector: this.injector }));
  }
  
}
