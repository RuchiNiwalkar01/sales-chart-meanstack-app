import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { AddSalesComponent } from './add-sales/add-sales.component';
import { EditSalesComponent } from './edit-sales/edit-sales.component';

const routes: Routes = [
  {
    component: SalesComponent,
    path: 'sales',
    data: { title: 'List of Sales' },
  },
  {
    component: SalesDetailsComponent,
    path: 'sales-details/:id',
    data: { title: 'Sales Details' },
  },
  {
    component: AddSalesComponent,
    path: 'add-sales',
    data: { title: 'Add Sales' },
  },
  {
    component: EditSalesComponent,
    path: 'edit-sales/:id',
    data: { title: 'Edit Sales' },
  },

  { path: '', redirectTo: 'sales', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
