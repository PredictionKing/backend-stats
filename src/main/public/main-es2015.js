(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stats.service */ "./src/app/stats.service.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");










class AdminComponent {
    constructor(statsService) {
        this.statsService = statsService;
        this.results = [];
        this.selectedValues = [];
        this.suggestions = [];
    }
    ngOnInit() {
    }
    saveSetting() {
        console.log("executed");
        console.log(this.flex);
        this.currentAccount.flex = this.flex;
        this.currentAccount.solo = this.solo;
        console.log(this.currentAccount);
        this.statsService.setAccount(this.currentAccount);
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: 'Saved settings for ' + this.currentAccount.ingame });
    }
    updateKey() {
        this.statsService.updateApiKey(this.riotKey).subscribe();
    }
    onSelect(selected) {
        let account = this.suggestionAccounts.find((e) => e.ingame === selected);
        this.currentAccount = account;
        this.flex = account.flex;
        this.solo = account.solo;
        this.accountID = account.accountID;
    }
    filterAccountSingle(event) {
        const query = event.query.toLowerCase();
        this.statsService.getAccounts(query).subscribe(data => {
            this.suggestions = data.map((e) => e.ingame);
            this.suggestionAccounts = data;
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_stats_service__WEBPACK_IMPORTED_MODULE_1__["StatsService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 17, vars: 14, consts: [["header", "Refresh", 3, "toggleable"], [1, "ui-inputgroup"], [1, "ui-g-12", "ui-md-4"], [1, "ui-inputgroup-addon"], [1, "pi", "pi-user", 2, "line-height", "0"], [3, "ngModel", "dropdown", "suggestions", "forceSelection", "autoHighlight", "ngModelChange", "onSelect", "completeMethod"], [1, "ui-g-12"], ["name", "group1", "label", "Flex", "inputId", "flex", 3, "binary", "ngModel", "ngModelChange"], ["name", "group1", "label", "Solo", "inputId", "solo", 3, "binary", "ngModel", "ngModelChange"], ["label", "Save", 3, "click"], [3, "value", "hideTransitionOptions", "valueChange"], ["header", "Settings", 3, "toggleable"], ["id", "input", "type", "text", "size", "30", "placeholder", "Riot-API Key", "pInputText", "", 3, "ngModel", "ngModelChange"], ["label", "Save", 2, "margin-left", "15px", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-autoComplete", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_p_autoComplete_ngModelChange_5_listener($event) { return ctx.account = $event; })("onSelect", function AdminComponent_Template_p_autoComplete_onSelect_5_listener($event) { return ctx.onSelect($event); })("completeMethod", function AdminComponent_Template_p_autoComplete_completeMethod_5_listener($event) { return ctx.filterAccountSingle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_p_checkbox_ngModelChange_7_listener($event) { return ctx.flex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_p_checkbox_ngModelChange_9_listener($event) { return ctx.solo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_p_button_click_11_listener() { return ctx.saveSetting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-messages", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AdminComponent_Template_p_messages_valueChange_13_listener($event) { return ctx.msgs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_15_listener($event) { return ctx.riotKey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_p_button_click_16_listener() { return ctx.updateKey(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.account)("dropdown", true)("suggestions", ctx.suggestions)("forceSelection", true)("autoHighlight", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("binary", true)("ngModel", ctx.flex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("binary", true)("ngModel", ctx.solo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.msgs)("hideTransitionOptions", "300ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.riotKey);
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_2__["Panel"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["Button"], primeng_messages__WEBPACK_IMPORTED_MODULE_7__["Messages"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: _stats_service__WEBPACK_IMPORTED_MODULE_1__["StatsService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");



class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/organizationchart */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-organizationchart.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stats.service */ "./src/app/stats.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-carousel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-message.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _organization_organization_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./organization/organization.component */ "./src/app/organization/organization.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
































const appRoutes = [
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_29__["SearchComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_28__["MainComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"] },
    { path: 'organization', component: _organization_organization_component__WEBPACK_IMPORTED_MODULE_25__["OrganizationComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_27__["AdminComponent"] },
    { path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_stats_service__WEBPACK_IMPORTED_MODULE_9__["StatsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__["InputTextModule"],
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_2__["SidebarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_18__["DataViewModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_12__["PanelModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
            primeng_organizationchart__WEBPACK_IMPORTED_MODULE_7__["OrganizationChartModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__["FlexLayoutModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_23__["MenuComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
        _organization_organization_component__WEBPACK_IMPORTED_MODULE_25__["OrganizationComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_27__["AdminComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_28__["MainComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_29__["SearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__["InputTextModule"],
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_2__["SidebarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteModule"],
        primeng_dataview__WEBPACK_IMPORTED_MODULE_18__["DataViewModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_12__["PanelModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], primeng_organizationchart__WEBPACK_IMPORTED_MODULE_7__["OrganizationChartModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__["FlexLayoutModule"],
        primeng_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_23__["MenuComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
                    _organization_organization_component__WEBPACK_IMPORTED_MODULE_25__["OrganizationComponent"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_27__["AdminComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_28__["MainComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_29__["SearchComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__["InputTextModule"],
                    primeng_sidebar__WEBPACK_IMPORTED_MODULE_2__["SidebarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteModule"],
                    primeng_dataview__WEBPACK_IMPORTED_MODULE_18__["DataViewModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_12__["PanelModule"],
                    primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxModule"],
                    primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                    primeng_organizationchart__WEBPACK_IMPORTED_MODULE_7__["OrganizationChartModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__["FlexLayoutModule"],
                    primeng_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"]
                ],
                providers: [_stats_service__WEBPACK_IMPORTED_MODULE_9__["StatsService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stats.service */ "./src/app/stats.service.ts");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-carousel.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function DashboardComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const stats_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleClick(stats_r3["Ingame"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stats_r3["Ingame"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", stats_r3["Icon"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stats_r3["Position"]);
} }
function DashboardComponent_ng_template_5_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r7.header, " ");
} }
function DashboardComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_template_5_th_1_Template, 2, 1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cols);
} }
function DashboardComponent_ng_template_6_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r10 = ctx.$implicit;
    const playerstats_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", playerstats_r8[col_r10.field], " ");
} }
function DashboardComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_template_6_td_1_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cols);
} }
class DashboardComponent {
    constructor(statsService) {
        this.statsService = statsService;
        this.visible = false;
        this.playername = "cheter";
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
    handleClick(Ingame) {
        this.visible = !this.visible;
        switch (Ingame) {
            case "RB Last3ngineer": {
                this.playername = "last3ngineer";
                this.visible = true;
                break;
            }
            case "RB Pikarin": {
                this.playername = "pikarin";
                break;
            }
            case "RB cheter": {
                this.playername = "cheter";
                this.visible = true;
                break;
            }
            case "RB YoRZa": {
                this.playername = "yorza";
                break;
            }
            case "RB Kyrielight": {
                this.playername = "kyrielight";
                break;
            }
            default: {
                //statements;
                break;
            }
        }
        this.updateTable();
    }
    ngOnInit() {
        this.statsService.getStats().then(stats => this.stats = stats);
        this.statsService.getPlayerStats(this.playername).then(playerstats => this.playerstats = playerstats);
        this.cols = [
            { field: 'timestamp', header: 'Timestamp' },
            { field: 'Player', header: 'Player' },
            { field: 'Champion', header: 'Champion' },
            { field: 'Gegner', header: 'Gegner' },
            { field: 'Spielseite', header: 'Spielseite' },
            { field: 'Win', header: 'Win' },
            { field: 'Gold', header: 'Gold' },
            { field: 'Kills', header: 'Kills' },
            { field: 'Deaths', header: 'Deaths' },
            { field: 'Assists', header: 'Assists' },
            { field: 'Damage', header: 'Damage' },
            { field: 'Wards', header: 'Wards' },
            { field: 'Pinks', header: 'Pinks' },
            { field: 'Wards_Cleared', header: 'Wards cleared' },
            { field: 'Vision_Score', header: 'Vision Score' },
            { field: 'CS', header: 'CS' },
            { field: 'Game_length', header: 'Game length' },
            { field: 'Total_kill', header: 'Total kills' },
            { field: 'Total_death', header: 'Total deaths' },
            { field: 'Total_damage', header: 'Total damage' },
        ];
    }
    updateTable() {
        this.statsService.getPlayerStats(this.playername).then(playerstats => this.playerstats = playerstats);
        this.cols = [
            { field: 'timestamp', header: 'Timestamp' },
            { field: 'Player', header: 'Player' },
            { field: 'Champion', header: 'Champion' },
            { field: 'Gegner', header: 'Gegner' },
            { field: 'Spielseite', header: 'Spielseite' },
            { field: 'Win', header: 'Win' },
            { field: 'Gold', header: 'Gold' },
            { field: 'Kills', header: 'Kills' },
            { field: 'Deaths', header: 'Deaths' },
            { field: 'Assists', header: 'Assists' },
            { field: 'Damage', header: 'Damage' },
            { field: 'Wards', header: 'Wards' },
            { field: 'Pinks', header: 'Pinks' },
            { field: 'Wards_Cleared', header: 'Wards cleared' },
            { field: 'Vision_Score', header: 'Vision Score' },
            { field: 'CS', header: 'CS' },
            { field: 'Game_length', header: 'Game length' },
            { field: 'Total_kill', header: 'Total kills' },
            { field: 'Total_death', header: 'Total deaths' },
            { field: 'Total_damage', header: 'Total damage' },
        ];
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_stats_service__WEBPACK_IMPORTED_MODULE_1__["StatsService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 7, vars: 8, consts: [[1, "carousel-div"], ["styleClass", "custom-carousel", 3, "value", "numVisible", "numScroll", "circular", "responsiveOptions"], ["pTemplate", "item"], [1, "wrapper", 3, "hidden"], [3, "value", "hidden"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "car-details"], [1, "p-grid", "p-nogutter"], [1, "p-col-12"], [3, "src"], [1, "p-col-12", "car-data"], [1, "car-title"], [1, "car-buttons"], ["pButton", "", "type", "button", "icon", "pi pi-search", 1, "ui-button-secondary", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-star", 1, "ui-button-secondary"], ["pButton", "", "type", "button", "icon", "pi pi-cog", 1, "ui-button-secondary"], [4, "ngFor", "ngForOf"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_ng_template_2_Template, 13, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_ng_template_5_Template, 2, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_ng_template_6_Template, 2, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.stats)("numVisible", 3)("numScroll", 1)("circular", true)("responsiveOptions", ctx.responsiveOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.playerstats)("hidden", !ctx.visible);
    } }, directives: [primeng_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%]{\r\n  margin-top: 1%;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\n.carousel-div[_ngcontent-%COMP%]{\r\n  margin-top: 2%;\r\n}\r\n\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]    > .p-grid[_ngcontent-%COMP%] {\r\n  border: 1px solid #b3c2ca;\r\n  border-radius: 3px;\r\n  margin: 0.3em;\r\n  text-align: center;\r\n  padding: 2em 0 2.25em 0;\r\n}\r\n\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item[_ngcontent-%COMP%]   .car-data[_ngcontent-%COMP%]   .car-title[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  margin-top: 24px;\r\n}\r\n\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item[_ngcontent-%COMP%]   .car-data[_ngcontent-%COMP%]   .car-subtitle[_ngcontent-%COMP%] {\r\n  margin: 0.25em 0 2em 0;\r\n}\r\n\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item[_ngcontent-%COMP%]   .car-data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 0.5em;\r\n}\r\n\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item[_ngcontent-%COMP%]   .car-data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\r\n  margin-left: 0;\r\n}\r\n\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel.custom-carousel[_ngcontent-%COMP%]   .ui-carousel-dot-icon[_ngcontent-%COMP%] {\r\n  width: 16px !important;\r\n  height: 16px !important;\r\n  border-radius: 50%;\r\n}\r\n\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel.ui-carousel-horizontal[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item.ui-carousel-item-start[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]    > .p-grid[_ngcontent-%COMP%] {\r\n  margin-left: 0.6em;\r\n}\r\n\r\n.carousel-demo[_ngcontent-%COMP%]   .ui-carousel.ui-carousel-horizontal[_ngcontent-%COMP%]   .ui-carousel-content[_ngcontent-%COMP%]   .ui-carousel-item.ui-carousel-item-end[_ngcontent-%COMP%]   .car-details[_ngcontent-%COMP%]    > .p-grid[_ngcontent-%COMP%] {\r\n  margin-right: 0.6em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ud3JhcHBlcntcclxuICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9ue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtZGl2e1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG5cclxuLmNhcm91c2VsLWRlbW8gLnVpLWNhcm91c2VsIC51aS1jYXJvdXNlbC1jb250ZW50IC51aS1jYXJvdXNlbC1pdGVtIC5jYXItZGV0YWlscyA+IC5wLWdyaWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2MyY2E7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMC4zZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJlbSAwIDIuMjVlbSAwO1xyXG59XHJcbi5jYXJvdXNlbC1kZW1vIC51aS1jYXJvdXNlbCAudWktY2Fyb3VzZWwtY29udGVudCAudWktY2Fyb3VzZWwtaXRlbSAuY2FyLWRhdGEgLmNhci10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4uY2Fyb3VzZWwtZGVtbyAudWktY2Fyb3VzZWwgLnVpLWNhcm91c2VsLWNvbnRlbnQgLnVpLWNhcm91c2VsLWl0ZW0gLmNhci1kYXRhIC5jYXItc3VidGl0bGUge1xyXG4gIG1hcmdpbjogMC4yNWVtIDAgMmVtIDA7XHJcbn1cclxuLmNhcm91c2VsLWRlbW8gLnVpLWNhcm91c2VsIC51aS1jYXJvdXNlbC1jb250ZW50IC51aS1jYXJvdXNlbC1pdGVtIC5jYXItZGF0YSBidXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxufVxyXG4uY2Fyb3VzZWwtZGVtbyAudWktY2Fyb3VzZWwgLnVpLWNhcm91c2VsLWNvbnRlbnQgLnVpLWNhcm91c2VsLWl0ZW0gLmNhci1kYXRhIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLmNhcm91c2VsLWRlbW8gLnVpLWNhcm91c2VsLmN1c3RvbS1jYXJvdXNlbCAudWktY2Fyb3VzZWwtZG90LWljb24ge1xyXG4gIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5jYXJvdXNlbC1kZW1vIC51aS1jYXJvdXNlbC51aS1jYXJvdXNlbC1ob3Jpem9udGFsIC51aS1jYXJvdXNlbC1jb250ZW50IC51aS1jYXJvdXNlbC1pdGVtLnVpLWNhcm91c2VsLWl0ZW0tc3RhcnQgLmNhci1kZXRhaWxzID4gLnAtZ3JpZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xyXG59XHJcbi5jYXJvdXNlbC1kZW1vIC51aS1jYXJvdXNlbC51aS1jYXJvdXNlbC1ob3Jpem9udGFsIC51aS1jYXJvdXNlbC1jb250ZW50IC51aS1jYXJvdXNlbC1pdGVtLnVpLWNhcm91c2VsLWl0ZW0tZW5kIC5jYXItZGV0YWlscyA+IC5wLWdyaWQge1xyXG4gIG1hcmdpbi1yaWdodDogMC42ZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _stats_service__WEBPACK_IMPORTED_MODULE_1__["StatsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");




class MainComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 5, vars: 0, consts: [[1, "p-grid"], [1, "ui-inputgroup"], [1, "centered"], ["type", "text", "pInputText", "", "placeholder", "Name", "size", "50"], ["pButton", "", "type", "button", "label", "Search"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"]], styles: [".centered[_ngcontent-%COMP%]{\r\n  margin: 0 auto;\r\n  margin-top: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmVke1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toolbar.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");






const _c0 = function () { return { "width": "20em" }; };
class MenuComponent {
    constructor() {
        this.display = false;
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 10, vars: 4, consts: [[1, "ui-toolbar-group-left"], ["icon", "pi pi-bars", "styleClass", "test", 3, "click"], ["label", "Home", "routerLink", "/main", "routerLinkActive", "active", "styleClass", "test"], ["label", "Dashboard", "routerLink", "/dashboard", "routerLinkActive", "active", "styleClass", "test"], ["label", "Organization", "routerLink", "/organization", "routerLinkActive", "active", "styleClass", "test"], ["label", "Admin", "routerLink", "/admin", "routerLinkActive", "active", "styleClass", "test"], ["styleClass", "sidebarstyle", 3, "visible", "visibleChange"], ["src", "../../assets/riftboss_logo.png", "alt", "riftboss_logo", 1, "riftbosslogo"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_p_button_click_2_listener() { return ctx.display = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-sidebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function MenuComponent_Template_p_sidebar_visibleChange_8_listener($event) { return ctx.display = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.display);
    } }, directives: [primeng_toolbar__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], primeng_button__WEBPACK_IMPORTED_MODULE_2__["Button"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__["Sidebar"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  width: 100%;\r\n  -webkit-box-align: stretch;\r\n          align-items: stretch;\r\n}\r\n\r\n.riftbosslogo[_ngcontent-%COMP%]{\r\n  width:200px;\r\n  height:200px;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  margin-top: 10%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n[_nghost-%COMP%]     .sidebarstyle{\r\n    background-color: #3f3f3f ;\r\n    height: calc(100vh);\r\n    border: none;\r\n    overflow-y: auto;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n}\r\n\r\n[_nghost-%COMP%]     p-button + p-button{\r\n  margin-left: 5px;\r\n}\r\n\r\n[_nghost-%COMP%]     .test{\r\n  background-color: rgb(50, 0, 83) !important;\r\n  border-color: rgb(50, 0, 83) !important;\r\n  color: white;\r\n}\r\n\r\n[_nghost-%COMP%]     .test:hover{\r\n  background-color: rgb(88, 0, 146) !important;\r\n  border-color: rgb(88, 0, 146) !important;\r\n  color: white;\r\n}\r\n\r\n[_nghost-%COMP%]     .ui-toolbar{\r\n  background-color: rgb(50, 0, 83);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixXQUFXO0VBQ1gsMEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUdBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDRCQUFvQjtJQUFwQixvQkFBb0I7QUFDeEI7O0FBR0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsdUNBQXVDO0VBQ3ZDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRDQUE0QztFQUM1Qyx3Q0FBd0M7RUFDeEMsWUFBWTtBQUNkOztBQUdBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLnJpZnRib3NzbG9nb3tcclxuICB3aWR0aDoyMDBweDtcclxuICBoZWlnaHQ6MjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG5cclxuOmhvc3QgPj4+IC5zaWRlYmFyc3R5bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjNmIDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcblxyXG46aG9zdCA+Pj4gcC1idXR0b24gKyBwLWJ1dHRvbntcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnRlc3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCAwLCA4MykgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHJnYig1MCwgMCwgODMpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnRlc3Q6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAwLCAxNDYpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoODgsIDAsIDE0NikgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG46aG9zdCA+Pj4gLnVpLXRvb2xiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCAwLCA4Myk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/organization/organization.component.ts":
/*!********************************************************!*\
  !*** ./src/app/organization/organization.component.ts ***!
  \********************************************************/
/*! exports provided: OrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function() { return OrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stats.service */ "./src/app/stats.service.ts");
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/organizationchart */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-organizationchart.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");





function OrganizationComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r15.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/", node_r15.data.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r15.data.name);
} }
function OrganizationComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r16.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/", node_r16.data.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r16.data.name);
} }
function OrganizationComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const node_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r17.label, " ");
} }
class OrganizationComponent {
    constructor(statsService) {
        this.statsService = statsService;
        this.team = [];
        this.teamMember = [];
    }
    ngOnInit() {
        this.statsService.getTeam().subscribe(team => {
            var _a, _b, _c, _d, _e;
            this.data = [{
                    label: 'Organization',
                    type: 'company',
                    styleClass: 'department-cfo',
                    data: { name: 'RiftBoss', 'avatar': 'riftboss_logo.png' },
                    expanded: true,
                    children: [
                        {
                            label: 'CEO',
                            type: 'person',
                            expanded: true,
                            styleClass: 'ui-person',
                            data: { name: 'RB Last3ngineer', 'avatar': 'riftboss_logo.png' },
                            children: [{
                                    label: 'Management',
                                    type: 'person',
                                    expanded: true,
                                    styleClass: 'ui-person',
                                    data: { name: 'EngineerTrooper', 'avatar': 'riftboss_logo.png' },
                                    children: [
                                        {
                                            label: 'Coach',
                                            type: 'person',
                                            styleClass: 'ui-person',
                                            data: { name: 'RB TimeForPay', 'avatar': 'riftboss_logo.png' }
                                        },
                                        {
                                            label: 'Captain',
                                            type: 'person',
                                            expanded: true,
                                            styleClass: 'ui-person',
                                            data: { name: 'RB YoRZa', 'avatar': 'riftboss_logo.png' },
                                            children: [
                                                {
                                                    label: 'Co-Captain',
                                                    type: 'person',
                                                    styleClass: 'ui-person',
                                                    data: { name: 'RB cheter', 'avatar': 'riftboss_logo.png' }
                                                },
                                            ]
                                        },
                                        {
                                            label: 'Programmierer',
                                            type: 'person',
                                            styleClass: 'ui-person',
                                            data: { name: 'RB Ares', 'avatar': 'riftboss_logo.png' }
                                        }, {
                                            label: 'Team',
                                            type: 'leaf',
                                            expanded: true,
                                            children: [
                                                {
                                                    label: 'Top',
                                                    type: 'person',
                                                    styleClass: 'ui-person',
                                                    data: { name: (_a = team.find((e) => e.position === "Top")) === null || _a === void 0 ? void 0 : _a.ingame, 'avatar': 'Top_icon.png' }
                                                }, {
                                                    label: 'Jungle',
                                                    type: 'person',
                                                    styleClass: 'ui-person',
                                                    data: { name: (_b = team.find((e) => e.position === "Jungle")) === null || _b === void 0 ? void 0 : _b.ingame, 'avatar': 'gr_Jungle.png' }
                                                },
                                                {
                                                    label: 'Mid',
                                                    type: 'person',
                                                    styleClass: 'ui-person',
                                                    data: { name: (_c = team.find((e) => e.position === "Mid")) === null || _c === void 0 ? void 0 : _c.ingame, 'avatar': 'Middle_icon.png' }
                                                }, {
                                                    label: 'ADC',
                                                    type: 'person',
                                                    styleClass: 'ui-person',
                                                    data: { name: (_d = team.find((e) => e.position === "Adc")) === null || _d === void 0 ? void 0 : _d.ingame, 'avatar': 'Bottom_icon.png' }
                                                },
                                                {
                                                    label: 'Support',
                                                    type: 'person',
                                                    styleClass: 'ui-person',
                                                    data: { name: (_e = team.find((e) => e.position === "Supp")) === null || _e === void 0 ? void 0 : _e.ingame, 'avatar': 'Support_icon.png' }
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }];
        });
    }
}
OrganizationComponent.ɵfac = function OrganizationComponent_Factory(t) { return new (t || OrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_stats_service__WEBPACK_IMPORTED_MODULE_1__["StatsService"])); };
OrganizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizationComponent, selectors: [["app-organization"]], decls: 5, vars: 1, consts: [[1, "chart"], ["styleClass", "company", 3, "value"], ["pTemplate", "company"], ["pTemplate", "person"], ["pTemplate", "department"], [1, "node-header", "ui-corner-top"], [1, "node-content"], ["width", "32", "height", "32", 3, "src"], ["width", "20", "height", "20", 3, "src"]], template: function OrganizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-organizationChart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrganizationComponent_ng_template_2_Template, 6, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrganizationComponent_ng_template_3_Template, 6, 3, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrganizationComponent_ng_template_4_Template, 1, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.data);
    } }, directives: [primeng_organizationchart__WEBPACK_IMPORTED_MODULE_2__["OrganizationChart"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]], styles: [".chart[_ngcontent-%COMP%]{\r\n  margin-top: 1%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG4iXX0= */", ".company.ui-organizationchart[_ngcontent-%COMP%]   .ui-organizationchart-node-content.ui-person[_ngcontent-%COMP%] {\n          padding: 0;\n          border: 0 none;\n      }\n\n      .node-header[_ngcontent-%COMP%], .node-content[_ngcontent-%COMP%] {\n          padding: .5em .7em;\n      }\n\n      .node-header[_ngcontent-%COMP%] {\n          background-color: #495ebb;\n          color: #ffffff;\n      }\n\n      .node-content[_ngcontent-%COMP%] {\n          text-align: center;\n          border: 1px solid #495ebb;\n      }\n\n      .node-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n          border-radius: 50%;\n      }\n\n      .department-cfo[_ngcontent-%COMP%] {\n          background-color: #7247bc;\n          color: #ffffff;\n      }\n\n      .department-coo[_ngcontent-%COMP%] {\n          background-color: #a534b6;\n          color: #ffffff;\n      }\n\n      .department-cto[_ngcontent-%COMP%] {\n          background-color: #e9286f;\n          color: #ffffff;\n      }\n\n      .ui-person[_ngcontent-%COMP%]   .ui-node-toggler[_ngcontent-%COMP%] {\n          color: #495ebb !important;\n      }\n\n      .department-cto[_ngcontent-%COMP%]   .ui-node-toggler[_ngcontent-%COMP%] {\n          color: #8a0a39 !important;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-organization',
                templateUrl: './organization.component.html',
                styleUrls: ['./organization.component.css'],
                styles: [`
      .company.ui-organizationchart .ui-organizationchart-node-content.ui-person {
          padding: 0;
          border: 0 none;
      }

      .node-header,.node-content {
          padding: .5em .7em;
      }

      .node-header {
          background-color: #495ebb;
          color: #ffffff;
      }

      .node-content {
          text-align: center;
          border: 1px solid #495ebb;
      }

      .node-content img {
          border-radius: 50%;
      }

      .department-cfo {
          background-color: #7247bc;
          color: #ffffff;
      }

      .department-coo {
          background-color: #a534b6;
          color: #ffffff;
      }

      .department-cto {
          background-color: #e9286f;
          color: #ffffff;
      }

      .ui-person .ui-node-toggler {
          color: #495ebb !important;
      }

      .department-cto .ui-node-toggler {
          color: #8a0a39 !important;
      }
  `]
            }]
    }], function () { return [{ type: _stats_service__WEBPACK_IMPORTED_MODULE_1__["StatsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");



class SearchComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 2, vars: 0, consts: [[1, "p-grid"], ["pButton", "", "type", "button", "label", "Back", "icon", "pi pi-arrow-circle-left", 1, "ui-button-secondary"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonDirective"]], styles: [".centered[_ngcontent-%COMP%]{\r\n  margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/stats.service.ts":
/*!**********************************!*\
  !*** ./src/app/stats.service.ts ***!
  \**********************************/
/*! exports provided: StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return StatsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class StatsService {
    constructor(http) {
        this.http = http;
    }
    getStats() {
        return this.http.get('assets/players.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    getAccounts(query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('query', query);
        return this.http.get('http://localhost:8080/accounts', { params });
    }
    getTeam() {
        return this.http.get('http://localhost:8080/team');
    }
    updateApiKey(key) {
        return this.http.post('http://localhost:8080/key', key);
    }
    getPlayerStats(player) {
        return this.http.get('assets/stats_' + player + '.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    setAccount(account) {
        let data = {
            accountID: account.accountID,
            flex: account.flex,
            solo: account.solo
        };
        this.http.put("http://localhost:8080/accounts", data).toPromise().then(data => {
            console.log(data);
        });
        //console.log(this.http.put("http://localhost:8080/accounts", account, {params}))
    }
}
StatsService.ɵfac = function StatsService_Factory(t) { return new (t || StatsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
StatsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatsService, factory: StatsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Root\IdeaProjects\analyzer\src\main\resources\frontend.angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map