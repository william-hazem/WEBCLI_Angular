import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { VarMessageComponent } from './hello-world-interpolation/hello-world-interpolation.component';
import { HelloWorldBindingComponent } from './hello-world-binding/hello-world-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    VarMessageComponent,
    HelloWorldBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
