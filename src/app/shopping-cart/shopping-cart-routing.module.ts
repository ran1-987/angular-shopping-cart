import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingCartComponent } from "./shopping-cart.component";
import { NewItemsComponent } from "./new-items/new-items.component";
import { NotFoundComponent } from "../pages/miscellaneous/not-found/not-found.component";
import { ECommerceComponent } from "../pages/e-commerce/e-commerce.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: ShoppingCartComponent,
    children: [
      {
        path: "dashboard",
        component: ECommerceComponent,
      },
      {
        path: "iot-dashboard",
        component: DashboardComponent,
      },
      { path: "new-arrivals", component: NewItemsComponent },
      {
        path: "",
        redirectTo: "new-arrivals",
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartRoutingModule {}
