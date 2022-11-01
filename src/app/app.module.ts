import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';
import { MenuComponent } from './misc/menu/menu.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeChangeComponent } from './employee/employee-change/employee-change.component';
import { HeadComponent } from './common/head/head.component';
import { FootComponent } from './common/foot/foot.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { BoolDisplayPipe } from './common/bool-display.pipe';
import { EmployeeSearchPipe } from './employee/employee-search.pipe';
import { SortPipe } from './common/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    EmployeeChangeComponent,
    HeadComponent,
    FootComponent,
    EmployeeLoginComponent,
    BoolDisplayPipe,
    EmployeeSearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
