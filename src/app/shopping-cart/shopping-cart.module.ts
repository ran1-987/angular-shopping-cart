import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShoppingCartRoutingModule } from "./shopping-cart-routing.module";
import { ShoppingCartComponent } from "./shopping-cart.component";
import { NbMenuModule } from "@nebular/theme";
import { MiscellaneousModule } from "../pages/miscellaneous/miscellaneous.module";
import { ThemeModule } from "../@theme/theme.module";
import { NewItemsComponent } from "./new-items/new-items.component";
import { CartHomePageComponent } from "./cart-home-page/cart-home-page.component";
import { NewItemsModule } from "./new-items/new-items.module";
import { ECommerceModule } from "../pages/e-commerce/e-commerce.module";
import { DashboardModule } from "../pages/dashboard/dashboard.module";

@NgModule({
  declarations: [ShoppingCartComponent, CartHomePageComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    NbMenuModule,
    MiscellaneousModule,
    ThemeModule,
    NewItemsModule,
    ECommerceModule,
    DashboardModule,
  ],
})
export class ShoppingCartModule {}
