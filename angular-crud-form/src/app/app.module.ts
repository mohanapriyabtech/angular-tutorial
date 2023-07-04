import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ListingComponent } from './listing/listing.component';
import { AddnewComponent } from './addnew/addnew.component';
import {Component} from '@angular/core';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    ListingComponent,
    AddnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/** 
 * @title Basic buttons 
 */  
@Component({  
  selector: 'button-overview-example',  
  templateUrl: 'button-overview-example.html',  
  styleUrls: ['button-overview-example.css'],  
})  
export class ButtonOverviewExample {}  
export class AppModule { }




