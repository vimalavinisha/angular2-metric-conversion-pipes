import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {TempConversions,MassConversions,LengthConversions} from '../directives/angular2-metric-conversion-pipes/index';
@NgModule({
    declarations: [AppComponent,TempConversions,MassConversions, LengthConversions],
    imports:      [BrowserModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}
