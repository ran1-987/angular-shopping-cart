"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_shopping-cart_shopping-cart_module_ts"],{

/***/ 5384:
/*!**************************************************************************!*\
  !*** ./src/app/shopping-cart/cart-home-page/cart-home-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartHomePageComponent": () => (/* binding */ CartHomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CartHomePageComponent {
  static #_ = this.ɵfac = function CartHomePageComponent_Factory(t) {
    return new (t || CartHomePageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CartHomePageComponent,
    selectors: [["ngx-cart-home-page"]],
    decls: 2,
    vars: 0,
    template: function CartHomePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cart-home-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 25247:
/*!********************************************!*\
  !*** ./src/app/shopping-cart/cart-menu.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart_ITEMS": () => (/* binding */ Cart_ITEMS)
/* harmony export */ });
const Cart_ITEMS = [{
  title: "E-commerce",
  icon: "shopping-cart-outline",
  link: "/cart/dashboard"
}, {
  title: "IoT Dashboard",
  icon: "home-outline",
  link: "/cart/iot-dashboard"
}, {
  title: "New Arrivals",
  icon: "eye",
  link: "/cart/new-arrivals",
  home: true
}, {
  title: "Products",
  group: true
}, {
  title: "Unisex",
  icon: "layout-outline",
  children: [{
    title: "T-Shirt",
    link: "/cart/t-shirt"
  }, {
    title: "Shirt",
    link: "/cart/shirt"
  }]
}];

/***/ }),

/***/ 69332:
/*!****************************************************************!*\
  !*** ./src/app/shopping-cart/new-items/new-items.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewItemsComponent": () => (/* binding */ NewItemsComponent)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



function NewItemsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "10 seconds between slides...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "This carousel uses customized default values.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function NewItemsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function NewItemsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function NewItemsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.images[3], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class NewItemsComponent {
  constructor(config) {
    // images = [700, 533, 807, 124].map(
    //   (n) => `https://picsum.photos/id/${n}/900/500`
    // );
    this.images = [1, 2, 3, 4].map(x => `assets/t-shirt/${x}.png`);
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;
  }
  static #_ = this.ɵfac = function NewItemsComponent_Factory(t) {
    return new (t || NewItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCarouselConfig));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NewItemsComponent,
    selectors: [["ngx-new-items"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCarouselConfig])],
    decls: 6,
    vars: 0,
    consts: [[1, "carousel-container"], ["ngbSlide", ""], [1, "carousel-inner"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], ["alt", "Random second slide", 3, "src"], ["alt", "Random third slide", 3, "src"], ["alt", "Random fourth slide", 3, "src"]],
    template: function NewItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ngb-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewItemsComponent_ng_template_2_Template, 7, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewItemsComponent_ng_template_3_Template, 3, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewItemsComponent_ng_template_4_Template, 3, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewItemsComponent_ng_template_5_Template, 3, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbSlide],
    styles: [".carousel-control-next {\n  opacity: 0;\n}\n\n.carousel-control-next:hover {\n  opacity: 0;\n}\n\n.carousel-control-prev:hover {\n  opacity: 0;\n}\n\n.carousel-control-prev {\n  opacity: 0;\n}\n\n.carousel-indicators {\n  opacity: 0;\n}\n\n.carousel-container {\n  width: 100%; /* Specify the desired width */\n  height: 300px; /* Specify the desired height */\n}\n\n.carousel-container ngb-carousel,\n.carousel-container .carousel-inner,\n.carousel-container .carousel-item {\n  height: 100%; /* Ensures the carousel items fill the container */\n}\n\n.carousel-container img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover; /* Ensures the images cover the container, maintaining aspect ratio */\n  object-position: center; /* Centers the image within the container */\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcHBpbmctY2FydC9uZXctaXRlbXMvbmV3LWl0ZW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUZBO0VBQ0UsVUFBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQSxFQUFBLDhCQUFBO0VBQ0EsYUFBQSxFQUFBLCtCQUFBO0FBTUY7O0FBRkE7OztFQUdFLFlBQUEsRUFBQSxrREFBQTtBQUtGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQSxFQUFBLHFFQUFBO0VBQ0EsdUJBQUEsRUFBQSwyQ0FBQTtBQUtGIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0OmhvdmVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXY6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTsgLyogU3BlY2lmeSB0aGUgZGVzaXJlZCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMzAwcHg7IC8qIFNwZWNpZnkgdGhlIGRlc2lyZWQgaGVpZ2h0ICovXHJcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjsgLyogRW5zdXJlcyBhbnkgb3ZlcmZsb3dpbmcgY29udGVudCBpcyBoaWRkZW4gKi9cclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRhaW5lciBuZ2ItY2Fyb3VzZWwsXHJcbi5jYXJvdXNlbC1jb250YWluZXIgLmNhcm91c2VsLWlubmVyLFxyXG4uY2Fyb3VzZWwtY29udGFpbmVyIC5jYXJvdXNlbC1pdGVtIHtcclxuICBoZWlnaHQ6IDEwMCU7IC8qIEVuc3VyZXMgdGhlIGNhcm91c2VsIGl0ZW1zIGZpbGwgdGhlIGNvbnRhaW5lciAqL1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udGFpbmVyIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBFbnN1cmVzIHRoZSBpbWFnZXMgY292ZXIgdGhlIGNvbnRhaW5lciwgbWFpbnRhaW5pbmcgYXNwZWN0IHJhdGlvICovXHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlcnMgdGhlIGltYWdlIHdpdGhpbiB0aGUgY29udGFpbmVyICovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 4465:
/*!*************************************************************!*\
  !*** ./src/app/shopping-cart/new-items/new-items.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewItemsModule": () => (/* binding */ NewItemsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _new_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-items.component */ 69332);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




class NewItemsModule {
  static #_ = this.ɵfac = function NewItemsModule_Factory(t) {
    return new (t || NewItemsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NewItemsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCarouselModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewItemsModule, {
    declarations: [_new_items_component__WEBPACK_IMPORTED_MODULE_0__.NewItemsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCarouselModule]
  });
})();

/***/ }),

/***/ 13813:
/*!***************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCartRoutingModule": () => (/* binding */ ShoppingCartRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shopping_cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart.component */ 42687);
/* harmony import */ var _new_items_new_items_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-items/new-items.component */ 69332);
/* harmony import */ var _pages_miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/miscellaneous/not-found/not-found.component */ 55477);
/* harmony import */ var _pages_e_commerce_e_commerce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/e-commerce/e-commerce.component */ 14965);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/dashboard/dashboard.component */ 24789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [{
  path: "",
  component: _shopping_cart_component__WEBPACK_IMPORTED_MODULE_0__.ShoppingCartComponent,
  children: [{
    path: "dashboard",
    component: _pages_e_commerce_e_commerce_component__WEBPACK_IMPORTED_MODULE_3__.ECommerceComponent
  }, {
    path: "iot-dashboard",
    component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent
  }, {
    path: "new-arrivals",
    component: _new_items_new_items_component__WEBPACK_IMPORTED_MODULE_1__.NewItemsComponent
  }, {
    path: "",
    redirectTo: "new-arrivals",
    pathMatch: "full"
  }, {
    path: "**",
    component: _pages_miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent
  }]
}];
class ShoppingCartRoutingModule {
  static #_ = this.ɵfac = function ShoppingCartRoutingModule_Factory(t) {
    return new (t || ShoppingCartRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ShoppingCartRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ShoppingCartRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 42687:
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCartComponent": () => (/* binding */ ShoppingCartComponent)
/* harmony export */ });
/* harmony import */ var _cart_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-menu */ 25247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@theme/layouts/one-column/one-column.layout */ 6405);





class ShoppingCartComponent {
  constructor() {
    this.menu = _cart_menu__WEBPACK_IMPORTED_MODULE_0__.Cart_ITEMS;
  }
  static #_ = this.ɵfac = function ShoppingCartComponent_Factory(t) {
    return new (t || ShoppingCartComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ShoppingCartComponent,
    selectors: [["ngx-shopping-cart"]],
    decls: 3,
    vars: 1,
    consts: [[3, "items"]],
    template: function ShoppingCartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-one-column-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nb-menu", 0)(2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.menu);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbMenuComponent, _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_1__.OneColumnLayoutComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 86156:
/*!*******************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCartModule": () => (/* binding */ ShoppingCartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart-routing.module */ 13813);
/* harmony import */ var _shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart.component */ 42687);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _pages_miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/miscellaneous/miscellaneous.module */ 13452);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@theme/theme.module */ 80268);
/* harmony import */ var _cart_home_page_cart_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-home-page/cart-home-page.component */ 5384);
/* harmony import */ var _new_items_new_items_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-items/new-items.module */ 4465);
/* harmony import */ var _pages_e_commerce_e_commerce_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/e-commerce/e-commerce.module */ 61649);
/* harmony import */ var _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/dashboard/dashboard.module */ 71659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











class ShoppingCartModule {
  static #_ = this.ɵfac = function ShoppingCartModule_Factory(t) {
    return new (t || ShoppingCartModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: ShoppingCartModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShoppingCartRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbMenuModule, _pages_miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_2__.MiscellaneousModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__.ThemeModule, _new_items_new_items_module__WEBPACK_IMPORTED_MODULE_5__.NewItemsModule, _pages_e_commerce_e_commerce_module__WEBPACK_IMPORTED_MODULE_6__.ECommerceModule, _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__.DashboardModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ShoppingCartModule, {
    declarations: [_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__.ShoppingCartComponent, _cart_home_page_cart_home_page_component__WEBPACK_IMPORTED_MODULE_4__.CartHomePageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShoppingCartRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbMenuModule, _pages_miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_2__.MiscellaneousModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__.ThemeModule, _new_items_new_items_module__WEBPACK_IMPORTED_MODULE_5__.NewItemsModule, _pages_e_commerce_e_commerce_module__WEBPACK_IMPORTED_MODULE_6__.ECommerceModule, _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__.DashboardModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_shopping-cart_shopping-cart_module_ts.js.map