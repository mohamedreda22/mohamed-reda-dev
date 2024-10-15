import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes'; // Import the routing module
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Make sure this is imported
    AppRoutingModule,        // Import your routing module here
    FormsModule,
  ],
  providers: [],
  bootstrap: [] 
})
export class AppModule { }
