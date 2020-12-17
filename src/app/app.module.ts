import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './lab4/lab4.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SearchBarComponent } from './home/navbar/search-bar/search-bar.component';
import { TopBannerComponent } from './home/top-banner/top-banner.component';
import { CategoryMenuComponent } from './home/category-menu/category-menu.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SwiftviewsComponent } from './swiftviews/swiftviews.component';
import { JumbotronComponent } from './swiftviews/jumbotron/jumbotron.component';
import { BodyComponent } from './swiftviews/body/body.component';
import { TodoComponent } from './todo/todo.component';
import { TaskItemComponent } from './todo/task-item/task-item.component';
import { BackendService } from './backend.service';
import { CatalogModule } from './modules/catalog/catalog.module';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: '',
    component: CountingComponent,
  },
  {
    path: 'lab4',
    component: Lab4Component,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'todo',
    component: TodoListComponent,
  },
  {
    path: 'swiftviews',
    component: SwiftviewsComponent,
  },
  {
    path: 'page',
    component: PageComponent,
  },
  {
    path: 'todo2',
    component: TodoComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4Component,
    NavbarComponent,
    SearchBarComponent,
    TopBannerComponent,
    CategoryMenuComponent,
    TodoListComponent,
    SwiftviewsComponent,
    JumbotronComponent,
    BodyComponent,
    TodoComponent,
    TaskItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CatalogModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
