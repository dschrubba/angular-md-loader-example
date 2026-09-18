import { Routes } from '@angular/router';
import { ViewHome } from 'src/app/views/view-home/view-home';

export const routes: Routes = [
  { path: '', component: ViewHome },
  { path: 'posts/:postId', component: ViewHome },
  { path: '**', component: ViewHome },
];
