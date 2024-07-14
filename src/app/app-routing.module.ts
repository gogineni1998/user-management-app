import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { UserResolver } from './user-resolver';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateComponent, resolve: {user: UserResolver}},
  {path: 'edit', component: EditComponent},
  {path: 'view', component: ViewComponent},
  {path: 'delete', component: DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
