import { Component } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";
import { Cart_ITEMS } from "./cart-menu";

@Component({
  selector: "ngx-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"],
})
export class ShoppingCartComponent {
  menu: NbMenuItem[] = Cart_ITEMS;
}
