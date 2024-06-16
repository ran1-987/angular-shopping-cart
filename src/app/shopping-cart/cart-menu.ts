import { NbMenuItem } from "@nebular/theme";

export const Cart_ITEMS: NbMenuItem[] = [
  {
    title: "E-commerce",
    icon: "shopping-cart-outline",
    link: "/cart/dashboard",
  },
  {
    title: "IoT Dashboard",
    icon: "home-outline",
    link: "/cart/iot-dashboard",
  },
  {
    title: "New Arrivals",
    icon: "eye",
    link: "/cart/new-arrivals",
    home: true,
  },
  {
    title: "Products",
    group: true,
  },
  {
    title: "Unisex",
    icon: "layout-outline",
    children: [
      {
        title: "T-Shirt",
        link: "/cart/t-shirt",
      },
      {
        title: "Shirt",
        link: "/cart/shirt",
      },
    ],
  },
];
