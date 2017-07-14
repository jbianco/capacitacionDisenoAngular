import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from  './pages/first-page/first-page.component';
import { SecondPageComponent } from  './pages/second-page/second-page.component';
import { ThirdPageComponent } from  './pages/third-page/third-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path : '', redirectTo:'first',pathMatch: 'full'},
      {path : 'first', component: FirstPageComponent},
      {path : 'second', component: SecondPageComponent},
      {path : 'third', component: ThirdPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
