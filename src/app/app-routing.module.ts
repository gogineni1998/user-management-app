import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { UserResolver } from './user-resolver';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  // {path: '', component: HomeComponent},
  {path: 'create', component: CreateComponent, resolve: {user: UserResolver}},
  {path: '', component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
