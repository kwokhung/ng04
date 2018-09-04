import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { FrameworkVoteComponent } from './framework-vote/framework-vote.component';
import { FrameworkResultComponent } from './framework-result/framework-result.component';

@NgModule({
  declarations: [
    FrameworkVoteComponent,
    FrameworkResultComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    FrameworkVoteComponent,
    FrameworkResultComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    customElements.define('framework-vote', createCustomElement(FrameworkVoteComponent, { injector: this.injector }));
    customElements.define('framework-result', createCustomElement(FrameworkResultComponent, { injector: this.injector }));
  }
  
}
