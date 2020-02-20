import { PostsPageComponent } from '../components/posts-page/posts-page.component';
import { PostsSinglePageComponent } from '../components/posts-single-page/posts-single-page.component';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { BaseLayoutComponent } from '../shared/components/base-layout/base-layout.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { PostEditComponent } from '../admin/post-edit/post-edit.component';
import { AdminLayoutComponent } from '../shared/components/admin-layout/admin-layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'admin', component: AdminLayoutComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'create', component: PostEditComponent },
    { path: ':id/edit', component: PostEditComponent }
  ]},
  { path: '', component: BaseLayoutComponent, children: [
    { path: '', component: PostsPageComponent },
    { path: ':id', component: PostsSinglePageComponent },
    { path: 'login', component: LoginPageComponent },
  ]},
];