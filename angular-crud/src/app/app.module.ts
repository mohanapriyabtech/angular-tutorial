import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ShardModule } from './shard.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
