import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { AppRouterModule } from './app-router/app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { LibraryComponent } from './library/library.component';
import { AddComponent } from './library/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    BookdetailComponent,
    LibraryComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
