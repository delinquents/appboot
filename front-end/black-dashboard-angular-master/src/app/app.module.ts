import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { Userclass } from './class/userclass';
import {BrowserModule} from "@angular/platform-browser";
import {DataTablesModule} from "angular-datatables";
import { CategoriesaddComponent } from './pages/categories/categoriesadd/categoriesadd.component';
import { CategoriesupdateComponent } from './pages/categories/categoriesupdate/categoriesupdate.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserModule,
    DataTablesModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, CategoriesaddComponent, CategoriesupdateComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
