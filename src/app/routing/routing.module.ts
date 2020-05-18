import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GitHomeComponent } from '../git-home/git-home.component';
import { GitsearchComponent } from '../gitsearch/gitsearch.component';

const routes: Routes = [
  { path: 'gitsearch', component: GitsearchComponent },
  { path: 'githome', component: GitHomeComponent },
  { path: '', redirectTo: '/gitsearch', pathMatch: "full" }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
