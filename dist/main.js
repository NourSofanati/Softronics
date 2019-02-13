(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dFlexMain\">\n  <nav>\n    <div class=\"sidebar-header\">\n      <a href=\"index.html\">\n        {{title}}\n      </a>\n    </div>\n    <ul class=\"menu-items\">\n      <li class=\"menu-title\">الرئيسية</li>\n      <li class=\"EmergeHoverColor active\" routerLink=\"/dashboard\" routerLinkActive=\"active\">\n        <span class=\"icon-thumbnail\">🏠</span>\n        <a class=\"cursor\">\n          <span class=\"title EmergeHoverColor\">لوحة القيادة</span>\n        </a>\n      </li>\n      <li class=\"EmergeHoverColor\" routerLink=\"/costumers\" routerLinkActive=\"active\">\n        <span class=\"icon-thumbnail\">👥</span>\n        <a class=\"cursor\">\n          <span class=\"title EmergeHoverColor\">الزبائن</span>\n        </a>\n      </li>\n      <li class=\"EmergeHoverColor\" routerLink=\"/suppliers\" routerLinkActive=\"active\">\n        <span class=\"icon-thumbnail\">👥</span>\n        <a class=\"cursor\">\n          <span class=\"title EmergeHoverColor\">الموردين</span>\n        </a>\n      </li>\n      <li class=\"EmergeHoverColor\" routerLink=\"/products\" routerLinkActive=\"active\">\n        <span class=\"icon-thumbnail\">🏠</span>\n        <a class=\"cursor\">\n          <span class=\"title EmergeHoverColor\">المنتجات</span>\n        </a>\n      </li>\n      <li class=\"menu-title\">إدارة</li>\n      <li class=\"EmergeHoverColor\" routerLink=\"/sales\" routerLinkActive=\"active\">\n        <span class=\"icon-thumbnail\">📓</span>\n        <a class=\"cursor\">\n          <span class=\"title EmergeHoverColor\">المبيعات</span>\n        </a>\n      </li>\n      <li class=\"EmergeHoverColor\" routerLink=\"/purchases\" routerLinkActive=\"active\">\n        <span class=\"icon-thumbnail\">📒</span>\n        <a class=\"cursor\">\n          <span class=\"title EmergeHoverColor\">المشتريات</span>\n        </a>\n      </li>\n      <li class=\"EmergeHoverColor\" routerLink=\"/inventory\" routerLinkActive=\"active\">\n        <span class=\"icon-thumbnail\">📦</span>\n        <a class=\"cursor\">\n          <span class=\"title EmergeHoverColor\">المستودع</span>\n        </a>\n      </li>\n      <li class=\"menu-title\">الحسابات</li>\n      <li class=\"EmergeHoverColor\">\n        <span class=\"icon-thumbnail\">💵</span>\n        <a class=\"cursor\">\n          <span class=\"title EmergeHoverColor\">الذمم المستحقة</span>\n        </a>\n      </li>\n      <li class=\"EmergeHoverColor\">\n        <span class=\"icon-thumbnail\">💷</span>\n        <a class=\"cursor\">\n          <span class=\"title EmergeHoverColor\">الذمم الدائنة</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Softronics';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _costumers_costumers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./costumers/costumers.component */ "./src/app/costumers/costumers.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./suppliers/suppliers.component */ "./src/app/suppliers/suppliers.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _purchases_purchases_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./purchases/purchases.component */ "./src/app/purchases/purchases.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");














var appRoutes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'costumers', component: _costumers_costumers_component__WEBPACK_IMPORTED_MODULE_7__["CostumersComponent"] },
    { path: 'suppliers', component: _suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_9__["SuppliersComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"] },
    { path: 'sales', component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_11__["SalesComponent"] },
    { path: 'purchases', component: _purchases_purchases_component__WEBPACK_IMPORTED_MODULE_12__["PurchasesComponent"] },
    { path: 'inventory', component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _costumers_costumers_component__WEBPACK_IMPORTED_MODULE_7__["CostumersComponent"],
                _suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_9__["SuppliersComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                _sales_sales_component__WEBPACK_IMPORTED_MODULE_11__["SalesComponent"],
                _purchases_purchases_component__WEBPACK_IMPORTED_MODULE_12__["PurchasesComponent"],
                _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/costumers/costumers.component.html":
/*!****************************************************!*\
  !*** ./src/app/costumers/costumers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  costumers works!\n</p>\n"

/***/ }),

/***/ "./src/app/costumers/costumers.component.scss":
/*!****************************************************!*\
  !*** ./src/app/costumers/costumers.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvc3R1bWVycy9jb3N0dW1lcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/costumers/costumers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/costumers/costumers.component.ts ***!
  \**************************************************/
/*! exports provided: CostumersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostumersComponent", function() { return CostumersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CostumersComponent = /** @class */ (function () {
    function CostumersComponent() {
    }
    CostumersComponent.prototype.ngOnInit = function () {
    };
    CostumersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-costumers',
            template: __webpack_require__(/*! ./costumers.component.html */ "./src/app/costumers/costumers.component.html"),
            styles: [__webpack_require__(/*! ./costumers.component.scss */ "./src/app/costumers/costumers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CostumersComponent);
    return CostumersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-container\">\n  <div class=\"dashboard-shortcut-buttons\">\n    <ul>\n      <li class=\"quickButton\">\n        <p>\n          إضافة زبون\n        </p>\n      </li>\n      <li class=\"quickButton\">\n        <p>\n          إضافة منتج\n        </p>\n      </li>\n      <li class=\"quickButton\">\n        <p>\n          إضافة سجل شراء\n        </p>\n      </li>\n      <li class=\"quickButton\">\n        <p>\n          إضافة سجل بيع\n        </p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"content-m\">\n    <div class=\"col-sm-6\">\n      <div class=\"row\">\n        <div class=\"panel\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">s</div>\n            <div class=\"col-sm-6\">d</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"row\">\n        <div class=\"panel\">\n          <div class=\"row\">\n            hey\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-shortcut-buttons {\n  text-align: center;\n  color: white;\n  background-color: #10cfbd;\n  min-height: 0px;\n  padding: 0px;\n  box-shadow: 0 1px 5px #aaaaaa;\n  z-index: 10; }\n  .dashboard-shortcut-buttons ul {\n    margin: 0 auto;\n    padding: 0;\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    list-style: none;\n    height: 60px; }\n  .dashboard-shortcut-buttons ul li {\n      cursor: pointer;\n      padding: 0 15px;\n      transition: 0.1s;\n      height: 60px; }\n  .dashboard-shortcut-buttons ul li:hover {\n      background-color: #24e9d5 !important;\n      transition: 0.1s ease-in-out; }\n  .content-m {\n  padding: 15px;\n  background: #fafafa;\n  flex-grow: 1; }\n  .dashboard-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .col-sm-6 {\n  width: 49%;\n  float: right;\n  margin: 0px 8px; }\n  .panel {\n  padding: 10px;\n  margin: 0 0 15px 0;\n  height: 410px;\n  box-shadow: 3px 3px 32px -14px rgba(0, 0, 0, 0.75);\n  background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcU29mYW5hdGlcXERlc2t0b3BcXFNvZnRyb25pY3NcXGFuZ3VsYXJTb2Z0cm9uaWNzXFxTb2Z0cm9uaWNzXFxTb2Z0cm9uaWNzL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBcUJaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixXQUFXLEVBQUE7RUEzQmI7SUFJSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7RUFWaEI7TUFZTSxlQUFlO01BQ2YsZUFBZTtNQUNmLGdCQUFnQjtNQUVoQixZQUFZLEVBQUE7RUFoQmxCO01BbUJNLG9DQUFvQztNQUNwQyw0QkFBNEIsRUFBQTtFQVNsQztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0VBRWQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTtFQUVkO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlLEVBQUE7RUFJbkI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrREFBa0Q7RUFDbEQsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1zaG9ydGN1dC1idXR0b25zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGxpIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMXM7XHJcblxyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICBsaTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNGU5ZDUgIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICB9XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwY2ZiZDtcclxuICBtaW4taGVpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCAjYWFhYWFhO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbi5jb250ZW50LW0ge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuLmRhc2hib2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmNvbC1zbS02IHtcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDBweCA4cHg7XHJcbn1cclxuLnJvdyB7XHJcbn1cclxuLnBhbmVsIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMCAwIDE1cHggMDtcclxuICBoZWlnaHQ6IDQxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMzJweCAtMTRweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/inventory/inventory.component.html":
/*!****************************************************!*\
  !*** ./src/app/inventory/inventory.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  inventory works!\n</p>\n"

/***/ }),

/***/ "./src/app/inventory/inventory.component.scss":
/*!****************************************************!*\
  !*** ./src/app/inventory/inventory.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InventoryComponent = /** @class */ (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.scss */ "./src/app/inventory/inventory.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  products works!\n</p>\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/purchases/purchases.component.html":
/*!****************************************************!*\
  !*** ./src/app/purchases/purchases.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  purchases works!\n</p>\n"

/***/ }),

/***/ "./src/app/purchases/purchases.component.scss":
/*!****************************************************!*\
  !*** ./src/app/purchases/purchases.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1cmNoYXNlcy9wdXJjaGFzZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/purchases/purchases.component.ts":
/*!**************************************************!*\
  !*** ./src/app/purchases/purchases.component.ts ***!
  \**************************************************/
/*! exports provided: PurchasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesComponent", function() { return PurchasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PurchasesComponent = /** @class */ (function () {
    function PurchasesComponent() {
    }
    PurchasesComponent.prototype.ngOnInit = function () {
    };
    PurchasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchases',
            template: __webpack_require__(/*! ./purchases.component.html */ "./src/app/purchases/purchases.component.html"),
            styles: [__webpack_require__(/*! ./purchases.component.scss */ "./src/app/purchases/purchases.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PurchasesComponent);
    return PurchasesComponent;
}());



/***/ }),

/***/ "./src/app/sales/sales.component.html":
/*!********************************************!*\
  !*** ./src/app/sales/sales.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sales works!\n</p>\n"

/***/ }),

/***/ "./src/app/sales/sales.component.scss":
/*!********************************************!*\
  !*** ./src/app/sales/sales.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sales/sales.component.ts":
/*!******************************************!*\
  !*** ./src/app/sales/sales.component.ts ***!
  \******************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SalesComponent = /** @class */ (function () {
    function SalesComponent() {
    }
    SalesComponent.prototype.ngOnInit = function () {
    };
    SalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.component.html */ "./src/app/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ./sales.component.scss */ "./src/app/sales/sales.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/app/suppliers/suppliers.component.html":
/*!****************************************************!*\
  !*** ./src/app/suppliers/suppliers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  suppliers works!\n</p>\n"

/***/ }),

/***/ "./src/app/suppliers/suppliers.component.scss":
/*!****************************************************!*\
  !*** ./src/app/suppliers/suppliers.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVycy9zdXBwbGllcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/suppliers/suppliers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/suppliers/suppliers.component.ts ***!
  \**************************************************/
/*! exports provided: SuppliersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersComponent", function() { return SuppliersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuppliersComponent = /** @class */ (function () {
    function SuppliersComponent() {
    }
    SuppliersComponent.prototype.ngOnInit = function () {
    };
    SuppliersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suppliers',
            template: __webpack_require__(/*! ./suppliers.component.html */ "./src/app/suppliers/suppliers.component.html"),
            styles: [__webpack_require__(/*! ./suppliers.component.scss */ "./src/app/suppliers/suppliers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuppliersComponent);
    return SuppliersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sofanati\Desktop\Softronics\angularSoftronics\Softronics\Softronics\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map