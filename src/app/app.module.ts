import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from "./shared/shared.modules";
import { AppComponent }  from './app.component';
import { CustomersModule } from "./customers/customer.module";

@NgModule({
  imports:      [ BrowserModule, CustomersModule, SharedModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
