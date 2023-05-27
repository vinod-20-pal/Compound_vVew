import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponentComponent } from './view-component/view-component.component';
import { CompoundComponent } from './compound/compound.component';

const routes: Routes = [
  {
    component: ViewComponentComponent,
    path:'viewComp/:id'
  },
  {
    component: CompoundComponent,
    path: 'compound',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
