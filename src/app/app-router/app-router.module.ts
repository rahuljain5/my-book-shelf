import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { BookdetailComponent } from '../bookdetail/bookdetail.component';
import { LibraryComponent } from '../library/library.component';
import { AddComponent } from '../library/add/add.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'search',
    pathMatch:'full'
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'bookDetail/:id',
    component: BookdetailComponent
  },
  {
    path: 'library',
    component: LibraryComponent,
  },
  {
    path: 'library/:id',
    component: AddComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule {
}
