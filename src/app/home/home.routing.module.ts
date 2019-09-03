import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { NgModel } from '@angular/forms';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'goal-tabs',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/goal-tabs/goal-tabs.module').then(m => m.GoalTabsPageModule)
          }
        ]
      },
      {
        path: 'record-tabs',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/record-tabs/record-tabs.module').then(m => m.RecordTabsPageModule)
          }
        ]
      },
      {
        path: 'chart-tabs',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/chart-tabs/chart-tabs.module').then(m => m.ChartTabsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }