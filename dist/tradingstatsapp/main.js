"use strict";
(self["webpackChunktradingstatsapp"] = self["webpackChunktradingstatsapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/main-layout/main-layout.component */ 7718);
/* harmony import */ var _layout_operation_layout_operation_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/operation-layout/operation-layout.component */ 5134);
/* harmony import */ var _layout_projection_layout_projection_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/projection-layout/projection-layout.component */ 733);
/* harmony import */ var _layout_stats_layout_stats_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/stats-layout/stats-layout.component */ 5412);
/* harmony import */ var _modules_authentication_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/authentication/pages/login/login.component */ 6567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const pageRoutes = [
    { path: '', redirectTo: 'projections', pathMatch: 'full' },
    {
        path: 'projections',
        component: _layout_projection_layout_projection_layout_component__WEBPACK_IMPORTED_MODULE_2__.ProjectionLayoutComponent,
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/projection/projection.module */ 7385)).then((m) => m.ProjectionModule),
    },
    {
        path: 'operations',
        component: _layout_operation_layout_operation_layout_component__WEBPACK_IMPORTED_MODULE_1__.OperationLayoutComponent,
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/operation/operation.module */ 6410)).then((m) => m.OperationModule),
    },
    {
        path: 'stats',
        component: _layout_stats_layout_stats_layout_component__WEBPACK_IMPORTED_MODULE_3__.StatsLayoutComponent,
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/stats/stats.module */ 1078)).then((m) => m.StatsModule),
    },
];
const routes = [
    {
        path: 'authentication',
        component: _modules_authentication_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, //replace for LoginLayoutComponent
    },
    { path: '', component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainLayoutComponent, children: pageRoutes },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'tradingstatsapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highcharts-angular */ 7158);
/* harmony import */ var _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/login-layout/login-layout.component */ 7983);
/* harmony import */ var _layout_main_layout_components_toast_popup_toast_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/main-layout/components/toast-popup/toast-popup.component */ 3450);
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/main-layout/main-layout.component */ 7718);
/* harmony import */ var _layout_operation_layout_operation_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/operation-layout/operation-layout.component */ 5134);
/* harmony import */ var _layout_projection_layout_projection_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/projection-layout/projection-layout.component */ 733);
/* harmony import */ var _layout_stats_layout_stats_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/stats-layout/stats-layout.component */ 5412);
/* harmony import */ var _modules_authentication_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/authentication/pages/login/login.component */ 6567);
/* harmony import */ var _modules_operation_operation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/operation/operation.module */ 6410);
/* harmony import */ var _modules_projection_projection_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/projection/projection.module */ 7385);
/* harmony import */ var _modules_stats_stats_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/stats/stats.module */ 1078);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule,
        _modules_projection_projection_module__WEBPACK_IMPORTED_MODULE_10__.ProjectionModule,
        _modules_operation_operation_module__WEBPACK_IMPORTED_MODULE_9__.OperationModule,
        _modules_stats_stats_module__WEBPACK_IMPORTED_MODULE_11__.StatsModule,
        highcharts_angular__WEBPACK_IMPORTED_MODULE_17__.HighchartsChartModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__.MainLayoutComponent,
        _layout_projection_layout_projection_layout_component__WEBPACK_IMPORTED_MODULE_6__.ProjectionLayoutComponent,
        _layout_operation_layout_operation_layout_component__WEBPACK_IMPORTED_MODULE_5__.OperationLayoutComponent,
        _layout_main_layout_components_toast_popup_toast_popup_component__WEBPACK_IMPORTED_MODULE_3__.ToastPopupComponent,
        _layout_stats_layout_stats_layout_component__WEBPACK_IMPORTED_MODULE_7__.StatsLayoutComponent,
        _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_2__.LoginLayoutComponent,
        _modules_authentication_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__.LoginComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule,
        _modules_projection_projection_module__WEBPACK_IMPORTED_MODULE_10__.ProjectionModule,
        _modules_operation_operation_module__WEBPACK_IMPORTED_MODULE_9__.OperationModule,
        _modules_stats_stats_module__WEBPACK_IMPORTED_MODULE_11__.StatsModule,
        highcharts_angular__WEBPACK_IMPORTED_MODULE_17__.HighchartsChartModule] }); })();


/***/ }),

/***/ 3657:
/*!***********************************************!*\
  !*** ./src/app/core/service/chart.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartService": () => (/* binding */ ChartService)
/* harmony export */ });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 5972);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ChartService {
    initializeLineChart(data) {
        this.lineChart = highcharts__WEBPACK_IMPORTED_MODULE_0__.chart('line', {
            title: {
                text: 'Incremental Performance',
                style: {
                    color: '#fff',
                },
            },
            chart: {
                backgroundColor: '#333',
            },
            yAxis: {
                title: {
                    text: 'Points',
                    style: {
                        color: '#fff',
                        fontSize: '1.2rem',
                    },
                },
            },
            series: [
                {
                    type: 'line',
                    data: data,
                    color: '#32CD32',
                },
            ],
        });
    }
    initializePieChart(data) {
        this.pieChart = highcharts__WEBPACK_IMPORTED_MODULE_0__.chart('pie', {
            title: {
                text: 'Performance Ratio',
                style: {
                    color: '#fff',
                },
            },
            chart: {
                backgroundColor: '#333',
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            return (this.point.name +
                                ': ' +
                                highcharts__WEBPACK_IMPORTED_MODULE_0__.numberFormat(this.percentage, 2) +
                                '%');
                        },
                        style: {
                            color: '#fff',
                        },
                    },
                },
            },
            series: [
                {
                    type: 'pie',
                    data: this.processPieChartData(data),
                },
            ],
        });
    }
    updateChart(data, chartType) {
        switch (chartType) {
            case 'line':
                this.lineChart?.series[0].setData(data);
                break;
            case 'pie':
                this.pieChart?.series[0].setData(this.processPieChartData(data));
                break;
        }
    }
    processPieChartData(data) {
        const ratio = this.calculatePLRatio(data);
        return [
            { name: 'Benefit', color: '#32CD32', y: ratio },
            { name: 'Loss', color: 'red', y: 1 - ratio },
        ];
    }
    calculatePLRatio(data) {
        const positive = data.filter((res) => res !== null && res > 0).length;
        const total = data.filter((res) => res !== null && res !== 0).length;
        const res = positive / total;
        return Number(res.toFixed(3));
    }
}
ChartService.ɵfac = function ChartService_Factory(t) { return new (t || ChartService)(); };
ChartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChartService, factory: ChartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5680:
/*!**********************************************!*\
  !*** ./src/app/core/service/form.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormService": () => (/* binding */ FormService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);


class FormService {
    constructor() { }
    applyDebounceOnSearch(observable) {
        return observable.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((it) => it ?? ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.startWith)(''));
    }
    filterItems(source$, search$, keySelector) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([source$, search$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(([source, search]) => {
            const normalizedSearch = search.toLocaleLowerCase();
            if (normalizedSearch === '')
                return source;
            return source.filter((item) => {
                const normalizedFullName = keySelector(item).toLocaleLowerCase();
                return normalizedFullName.includes(normalizedSearch);
            });
        }));
    }
    checkErrorsByControl(formControl) {
        return formControl?.invalid && (formControl.dirty || formControl.touched);
    }
}
FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(); };
FormService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8602:
/*!*************************************************!*\
  !*** ./src/app/core/service/routing.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingService": () => (/* binding */ RoutingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RoutingService {
    navigatePreservingQueryParams(commands, router, activatedRoute) {
        router.navigate(commands, {
            relativeTo: activatedRoute,
            queryParams: activatedRoute.snapshot.queryParams,
            queryParamsHandling: 'preserve',
        });
    }
}
RoutingService.ɵfac = function RoutingService_Factory(t) { return new (t || RoutingService)(); };
RoutingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoutingService, factory: RoutingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8521:
/*!***********************************************!*\
  !*** ./src/app/core/service/toast.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ToastService {
    constructor() {
        this.toast = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.DEFAULT_TIMEOUT = 3000;
        this.pendingTimeout = false;
        this.toast$ = this.toast.asObservable();
    }
    showToast({ title = '', type = 'success', message = '', duration = this.DEFAULT_TIMEOUT, }) {
        if (this.pendingTimeout) {
            clearTimeout(this.timeoutId);
            this.pendingTimeout = false;
        }
        this.toast.next({ title, message, type });
        const timeOut = window.setTimeout(() => {
            this.toast.next(null);
        }, duration);
        this.pendingTimeout = true;
        this.timeoutId = timeOut;
    }
    success({ title = 'Success', ...restOfOptions }) {
        this.showToast({ type: 'success', ...restOfOptions });
    }
    error({ title = 'An error has occured', ...restOfOptions }) {
        this.showToast({ type: 'error', title, ...restOfOptions });
    }
    info({ title = '', ...restOfOptions }) {
        this.showToast({ type: 'info', title, ...restOfOptions });
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
ToastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3338:
/*!******************************************!*\
  !*** ./src/app/data/models/timeframe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timeframe": () => (/* binding */ Timeframe)
/* harmony export */ });
var Timeframe;
(function (Timeframe) {
    Timeframe[Timeframe["M1"] = 0] = "M1";
    Timeframe[Timeframe["M5"] = 1] = "M5";
    Timeframe[Timeframe["M15"] = 2] = "M15";
    Timeframe[Timeframe["M30"] = 3] = "M30";
    Timeframe[Timeframe["H1"] = 4] = "H1";
    Timeframe[Timeframe["H4"] = 5] = "H4";
    Timeframe[Timeframe["D"] = 6] = "D";
    Timeframe[Timeframe["W"] = 7] = "W";
    Timeframe[Timeframe["M"] = 8] = "M";
})(Timeframe || (Timeframe = {}));


/***/ }),

/***/ 5419:
/*!***************************************************!*\
  !*** ./src/app/data/service/opcomment.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationCommentService": () => (/* binding */ OperationCommentService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class OperationCommentService {
    constructor(http) {
        this.http = http;
        this.serverUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/opcomment`;
    }
    getComments() {
        return this.http.get(`${this.serverUrl}`);
    }
    getComment(operationId) {
        return this.http.get(`${this.serverUrl}/${operationId}`);
    }
    addComment(comment) {
        return this.http.post(`${this.serverUrl}`, comment);
    }
    updateComment(comment) {
        return this.http.put(`${this.serverUrl}/${comment.id_opc}`, comment);
    }
    deleteComment(operationId) {
        return this.http.delete(`${this.serverUrl}/${operationId}`);
    }
}
OperationCommentService.ɵfac = function OperationCommentService_Factory(t) { return new (t || OperationCommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
OperationCommentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OperationCommentService, factory: OperationCommentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6304:
/*!**************************************************!*\
  !*** ./src/app/data/service/pcomment.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectionCommentService": () => (/* binding */ ProjectionCommentService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ProjectionCommentService {
    constructor(http) {
        this.http = http;
        this.serverUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/pcomment`;
    }
    getComments() {
        return this.http.get(`${this.serverUrl}`);
    }
    getComment(projId) {
        return this.http.get(`${this.serverUrl}/${projId}`);
    }
    addComment(comment) {
        return this.http.post(`${this.serverUrl}`, comment);
    }
    updateComment(comment) {
        return this.http.put(`${this.serverUrl}/${comment.id_pc}`, comment);
    }
    deleteComment(projId) {
        return this.http.delete(`${this.serverUrl}/${projId}`);
    }
}
ProjectionCommentService.ɵfac = function ProjectionCommentService_Factory(t) { return new (t || ProjectionCommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProjectionCommentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectionCommentService, factory: ProjectionCommentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6649:
/*!************************************************!*\
  !*** ./src/app/data/service/status.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusService": () => (/* binding */ StatusService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class StatusService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/statuses`;
    }
    getStatuses() {
        return this.http.get(`${this.apiServerUrl}`);
    }
}
StatusService.ɵfac = function StatusService_Factory(t) { return new (t || StatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
StatusService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StatusService, factory: StatusService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9636:
/*!************************************************!*\
  !*** ./src/app/data/service/symbol.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SymbolService": () => (/* binding */ SymbolService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class SymbolService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/symbols`;
    }
    getSymbols() {
        return this.http.get(`${this.apiServerUrl}`);
    }
    getSymbol(symbolId) {
        return this.http.get(`${this.apiServerUrl}/${symbolId}`);
    }
    addSymbol(symbol) {
        return this.http.post(`${this.apiServerUrl}`, symbol);
    }
    updateSymbol(symbol) {
        return this.http.put(`${this.apiServerUrl}/${symbol.id_sym}`, symbol);
    }
    deleteSymbol(symbolId) {
        return this.http.delete(`${this.apiServerUrl}/${symbolId}`);
    }
}
SymbolService.ɵfac = function SymbolService_Factory(t) { return new (t || SymbolService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SymbolService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SymbolService, factory: SymbolService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1237:
/*!*********************************!*\
  !*** ./src/app/file.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileService": () => (/* binding */ FileService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class FileService {
    constructor(http) {
        this.http = http;
        this.fileUploadUri = 'http://localhost:8080/file/upload';
    }
    downloadFile(file) {
        let body = { filename: file };
        return this.http.post('http://localhost:8080/file/download', body, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().append('Content-Type', 'application/json'),
        });
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
FileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7983:
/*!***************************************************************!*\
  !*** ./src/app/layout/login-layout/login-layout.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginLayoutComponent": () => (/* binding */ LoginLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class LoginLayoutComponent {
}
LoginLayoutComponent.ɵfac = function LoginLayoutComponent_Factory(t) { return new (t || LoginLayoutComponent)(); };
LoginLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginLayoutComponent, selectors: [["app-login-layout"]], decls: 1, vars: 0, template: function LoginLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 3450:
/*!************************************************************************************!*\
  !*** ./src/app/layout/main-layout/components/toast-popup/toast-popup.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastPopupComponent": () => (/* binding */ ToastPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/toast.service */ 8521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function ToastPopupComponent_div_0_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.titleStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](toast_r1.title);
  }
}

function ToastPopupComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastPopupComponent_div_0_p_1_Template, 2, 2, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const toast_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", toast_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", toast_r1.title !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.getmessageStyle(toast_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](toast_r1.message);
  }
}

class ToastPopupComponent {
  constructor(toastService) {
    this.toastService = toastService;
    this.toast$ = this.toastService.toast$;
  }

  get titleStyle() {
    return 'p-5 text-white';
  }

  getmessageStyle(toastType) {
    return toastType === 'success' || 'info' ? 'text-center pt-4 text-white' : 0;
  }

}

ToastPopupComponent.ɵfac = function ToastPopupComponent_Factory(t) {
  return new (t || ToastPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
};

ToastPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ToastPopupComponent,
  selectors: [["app-toast-popup"]],
  decls: 2,
  vars: 3,
  consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
  template: function ToastPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastPopupComponent_div_0_Template, 4, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.toast$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: ["div.success[_ngcontent-%COMP%], div.error[_ngcontent-%COMP%], div.warning[_ngcontent-%COMP%], div.info[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  width: 412px;\r\n  left: 0px;\r\n  bottom: 0px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-radius: 6px;\r\n}\r\n\r\n.success[_ngcontent-%COMP%] {\r\n  background-color: #13bb79;\r\n  height: 60px;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n  background-color: #bf3523;\r\n  height: 120px;\r\n}\r\n\r\n.warning[_ngcontent-%COMP%] {\r\n  background-color: #f89406;\r\n  height: 60px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n  background-color: #2f96b4;\r\n  height: 60px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InRvYXN0LXBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuc3VjY2VzcyxcclxuZGl2LmVycm9yLFxyXG5kaXYud2FybmluZyxcclxuZGl2LmluZm8ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA0MTJweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLnN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxM2JiNzk7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5lcnJvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmMzUyMztcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4ud2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4OTQwNjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY5NmI0O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 7718:
/*!*************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutComponent": () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_toast_popup_toast_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/toast-popup/toast-popup.component */ 3450);



class MainLayoutComponent {
    constructor() { }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 3, vars: 0, consts: [[1, "fixed", "bottom-5", "left-5", "z-50"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-toast-popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_toast_popup_toast_popup_component__WEBPACK_IMPORTED_MODULE_0__.ToastPopupComponent], encapsulation: 2 });


/***/ }),

/***/ 5134:
/*!***********************************************************************!*\
  !*** ./src/app/layout/operation-layout/operation-layout.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationLayoutComponent": () => (/* binding */ OperationLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/toast.service */ 8521);
/* harmony import */ var src_app_modules_operation_service_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/operation/service/operation.service */ 624);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ 3502);
/* harmony import */ var _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/rounded-button/rounded-button.component */ 1626);
/* harmony import */ var _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/icon-button/icon-button.component */ 4055);









const _c0 = function () { return { "height.px": 32, "width.px": 32 }; };
class OperationLayoutComponent {
    constructor() {
        this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
        this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute);
        this.operationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_modules_operation_service_operation_service__WEBPACK_IMPORTED_MODULE_1__.OperationService);
        this.toastService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService);
        this.title = 'Trading Stats';
        this.buttons = [
            {
                text: 'Projections',
                link: '/projections',
            },
            {
                text: 'Operations',
                link: '/operations',
            },
            {
                text: 'Stats',
                link: '/stats',
            },
        ];
        this.accountSubscription = this.activatedRoute.queryParams.subscribe((params) => {
            const paramAccount = params['account'];
            if (paramAccount === undefined) {
                this.redirectDefaultAccount();
            }
            else if (paramAccount === '1') {
                this.account = 'Demo';
            }
            else {
                this.account = 'Live';
            }
        });
    }
    ngOnInit() {
        this.redirectDefaultAccount();
    }
    get accountFromParamOrDefault() {
        return this.activatedRoute.snapshot.queryParams['account'] ?? 1;
    }
    get accountSwitched() {
        return this.accountFromParamOrDefault?.toString() === '1' ? 2 : 1;
    }
    switchAccount() {
        const queryParams = { ...this.activatedRoute.snapshot.queryParams };
        this.router.navigate([], { queryParams: { ...queryParams, account: this.accountSwitched } });
        this.operationService.refetch();
        this.toastService.info({
            message: `Switched to ${this.accountSwitched === 1 ? 'Demo' : 'Live'} account`,
        });
    }
    redirectDefaultAccount() {
        const queryParams = { ...this.activatedRoute.snapshot.queryParams };
        if (queryParams['account'] === undefined) {
            this.router.navigate([], {
                queryParams: {
                    ...queryParams,
                    account: 1,
                },
            });
        }
    }
    ngOnDestroy() {
        this.accountSubscription.unsubscribe();
    }
}
OperationLayoutComponent.ɵfac = function OperationLayoutComponent_Factory(t) { return new (t || OperationLayoutComponent)(); };
OperationLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: OperationLayoutComponent, selectors: [["app-operation-layout"]], decls: 8, vars: 5, consts: [[3, "title", "buttons"], [1, "flex", "flex-row", "space-x-2", "items-center"], [1, "text-white", "font-medium"], [1, "flex", "flex-row", "space-x-5"], ["text", "switch", "bgColor", "bg-blue-turquoise", "styles", "rounded text-white text-sm p-1", 3, "clickEvent"], ["iconSource", "assets\\svg\\logout.svg", "routerLink", "/authentication", 1, "svg-white", 3, "iconSvgStyle"]], template: function OperationLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-navbar", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "app-rounded-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("clickEvent", function OperationLayoutComponent_Template_app_rounded_button_clickEvent_5_listener() { return ctx.switchAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-icon-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.title)("buttons", ctx.buttons);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Account: ", ctx.account, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("iconSvgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_3__.RoundedButtonComponent, _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_4__.IconButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 733:
/*!*************************************************************************!*\
  !*** ./src/app/layout/projection-layout/projection-layout.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectionLayoutComponent": () => (/* binding */ ProjectionLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ 3502);
/* harmony import */ var _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/icon-button/icon-button.component */ 4055);




const _c0 = function () { return { "height.px": 32, "width.px": 32 }; };
class ProjectionLayoutComponent {
    constructor() {
        this.title = 'Trading Stats';
        this.buttons = [
            {
                text: 'Projections',
                link: '/projections',
            },
            {
                text: 'Operations',
                link: '/operations',
            },
            {
                text: 'Stats',
                link: '/stats',
            },
        ];
    }
}
ProjectionLayoutComponent.ɵfac = function ProjectionLayoutComponent_Factory(t) { return new (t || ProjectionLayoutComponent)(); };
ProjectionLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectionLayoutComponent, selectors: [["app-projection-layout"]], decls: 3, vars: 4, consts: [[3, "title", "buttons"], ["iconSource", "assets\\svg\\logout.svg", "routerLink", "/authentication", 1, "svg-white", 3, "iconSvgStyle"]], template: function ProjectionLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-icon-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.title)("buttons", ctx.buttons);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconSvgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_1__.IconButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 5412:
/*!***************************************************************!*\
  !*** ./src/app/layout/stats-layout/stats-layout.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsLayoutComponent": () => (/* binding */ StatsLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ 3502);
/* harmony import */ var _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/rounded-button/rounded-button.component */ 1626);
/* harmony import */ var _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/icon-button/icon-button.component */ 4055);





const _c0 = function () { return { "height.px": 32, "width.px": 32 }; };
class StatsLayoutComponent {
    constructor() {
        this.title = 'Trading Stats';
        this.buttons = [
            {
                text: 'Projections',
                link: '/projections',
            },
            {
                text: 'Operations',
                link: '/operations',
            },
            {
                text: 'Stats',
                link: '/stats',
            },
        ];
    }
}
StatsLayoutComponent.ɵfac = function StatsLayoutComponent_Factory(t) { return new (t || StatsLayoutComponent)(); };
StatsLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StatsLayoutComponent, selectors: [["app-stats-layout"]], decls: 8, vars: 4, consts: [[3, "title", "buttons"], [1, "flex", "flex-row", "space-x-2", "items-center"], [1, "text-white", "font-medium"], [1, "flex", "flex-row", "space-x-5"], ["text", "switch", "bgColor", "bg-blue-turquoise", "styles", "rounded text-white text-sm p-1"], ["iconSource", "assets\\svg\\logout.svg", "routerLink", "/authentication", 1, "svg-white", 3, "iconSvgStyle"]], template: function StatsLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-navbar", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Account: Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-rounded-button", 4)(6, "app-icon-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx.title)("buttons", ctx.buttons);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("iconSvgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_1__.RoundedButtonComponent, _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__.IconButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 6567:
/*!***********************************************************************!*\
  !*** ./src/app/modules/authentication/pages/login/login.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const _c0 = function () { return ["/"]; };
class LoginComponent {
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 2, consts: [[1, "h-screen", "flex", "flex-col", "justify-center", "items-center"], [1, "bg-dark", "p-7", "rounded-[10px]", "py-16", "px-20"], [1, "text-white", "text-center", "text-2xl", "font-bold", "mb-8"], [1, "just", "w-[370px]"], [1, "mb-4"], ["for", "username", 1, "block", "text-white", "text-sm", "font-bold", "mb-2"], ["id", "username", "type", "text", "placeholder", "Username", 1, "shadow", "appearance-none", "border", "rounded", "w-full", "py-2", "px-3", "text-dark"], [1, "mb-6"], ["for", "password", 1, "block", "text-white", "text-sm", "font-bold", "mb-2"], ["id", "password", "type", "password", "placeholder", "******************", 1, "shadow", "appearance-none", "border", "rounded", "w-full", "py-2", "px-3", "text-dark", "mb-3"], [1, "bg-blue-500", "w-full", "h-12", "rounded-full", "font-semibold", "text-white", "disabled:bg-dark", "disabled:bg-opacity-60", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TRADING STATS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3)(5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 8379:
/*!***************************************************************!*\
  !*** ./src/app/modules/operation/operation-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationRoutingModule": () => (/* binding */ OperationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_operation_operation_details_operation_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/operation/operation-details/operation-details.component */ 5789);
/* harmony import */ var _pages_operation_operation_list_operation_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/operation/operation-list/operation-list.component */ 6202);
/* harmony import */ var _pages_operation_operation_mutation_operation_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/operation/operation-mutation/operation-mutation.component */ 87);
/* harmony import */ var _pages_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/view-chart/view-chart.component */ 5517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    {
        path: 'view-chart/:id',
        component: _pages_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_3__.ViewChartComponent,
    },
    {
        path: '',
        component: _pages_operation_operation_list_operation_list_component__WEBPACK_IMPORTED_MODULE_1__.OperationListComponent,
        children: [
            {
                path: 'add',
                component: _pages_operation_operation_mutation_operation_mutation_component__WEBPACK_IMPORTED_MODULE_2__.OperationMutationComponent,
            },
            {
                path: 'edit/:id',
                component: _pages_operation_operation_mutation_operation_mutation_component__WEBPACK_IMPORTED_MODULE_2__.OperationMutationComponent,
            },
            {
                path: ':id',
                component: _pages_operation_operation_details_operation_details_component__WEBPACK_IMPORTED_MODULE_0__.OperationDetailsComponent,
            },
        ],
    },
];
class OperationRoutingModule {
}
OperationRoutingModule.ɵfac = function OperationRoutingModule_Factory(t) { return new (t || OperationRoutingModule)(); };
OperationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: OperationRoutingModule });
OperationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](OperationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 6410:
/*!*******************************************************!*\
  !*** ./src/app/modules/operation/operation.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationModule": () => (/* binding */ OperationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var angular_tradingview_widget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-tradingview-widget */ 6623);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ 4896);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _operation_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operation-routing.module */ 8379);
/* harmony import */ var _pages_operation_operation_details_operation_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/operation/operation-details/operation-details.component */ 5789);
/* harmony import */ var _pages_operation_operation_list_operation_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/operation/operation-list/operation-list.component */ 6202);
/* harmony import */ var _pages_operation_operation_list_table_operation_table_operation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/operation/operation-list/table-operation/table-operation.component */ 2273);
/* harmony import */ var _pages_operation_operation_mutation_operation_mutation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/operation/operation-mutation/operation-mutation.component */ 87);
/* harmony import */ var _pages_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/view-chart/view-chart.component */ 5517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);












class OperationModule {
}
OperationModule.ɵfac = function OperationModule_Factory(t) { return new (t || OperationModule)(); };
OperationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: OperationModule });
OperationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _operation_routing_module__WEBPACK_IMPORTED_MODULE_1__.OperationRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__.FileUploadModule,
        angular_tradingview_widget__WEBPACK_IMPORTED_MODULE_11__.TradingviewWidgetModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](OperationModule, { declarations: [_pages_operation_operation_list_operation_list_component__WEBPACK_IMPORTED_MODULE_3__.OperationListComponent,
        _pages_operation_operation_list_table_operation_table_operation_component__WEBPACK_IMPORTED_MODULE_4__.TableOperationComponent,
        _pages_operation_operation_details_operation_details_component__WEBPACK_IMPORTED_MODULE_2__.OperationDetailsComponent,
        _pages_operation_operation_mutation_operation_mutation_component__WEBPACK_IMPORTED_MODULE_5__.OperationMutationComponent,
        _pages_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_6__.ViewChartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _operation_routing_module__WEBPACK_IMPORTED_MODULE_1__.OperationRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__.FileUploadModule,
        angular_tradingview_widget__WEBPACK_IMPORTED_MODULE_11__.TradingviewWidgetModule] }); })();


/***/ }),

/***/ 5789:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/operation/pages/operation/operation-details/operation-details.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationDetailsComponent": () => (/* binding */ OperationDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/operation.service */ 624);
/* harmony import */ var src_app_data_service_opcomment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/service/opcomment.service */ 5419);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_service_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/routing.service */ 8602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-svg-icon */ 2183);
/* harmony import */ var _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/loading-template/loading-template.component */ 2142);
/* harmony import */ var _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/rounded-button/rounded-button.component */ 1626);
/* harmony import */ var _shared_components_form_label_form_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/form-label/form-label.component */ 3595);
/* harmony import */ var _shared_components_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/close-button/close-button.component */ 2907);
/* harmony import */ var _shared_components_label_label_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/label/label.component */ 7827);














function OperationDetailsComponent_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "app-rounded-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("clickEvent", function OperationDetailsComponent_ng_container_0_div_4_Template_app_rounded_button_clickEvent_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const operation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.goToEdit(operation_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "app-rounded-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("clickEvent", function OperationDetailsComponent_ng_container_0_div_4_Template_app_rounded_button_clickEvent_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const operation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.onDeleteOperation(operation_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function OperationDetailsComponent_ng_container_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const operation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](4, 1, operation_r3.dateOpen, "yyyy-MM-dd"));
  }
}

function OperationDetailsComponent_ng_container_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-form-label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const operation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](4, 1, operation_r3.dateClose, "yyyy-MM-dd"));
  }
}

function OperationDetailsComponent_ng_container_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-form-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const operation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", operation_r3.volume.toString());
  }
}

function OperationDetailsComponent_ng_container_0_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-form-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const operation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", operation_r3.ratio.toString());
  }
}

function OperationDetailsComponent_ng_container_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-form-label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const operation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", operation_r3.points.toString())("textColor", ctx_r9.getPointsColorClass(operation_r3.points));
  }
}

function OperationDetailsComponent_ng_container_0_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const comment_r22 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("            ", comment_r22.opcomment, "");
  }
}

const _c0 = function () {
  return {
    "height.px": 32,
    "width.px": 32
  };
};

function OperationDetailsComponent_ng_container_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OperationDetailsComponent_ng_container_0_div_38_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const operation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.goToChart(operation_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "svg-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 42)(5, "h5", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "View chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}

function OperationDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "app-close-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("closeEvent", function OperationDetailsComponent_ng_container_0_Template_app_close_button_closeEvent_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, OperationDetailsComponent_ng_container_0_div_4_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 6)(6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "OPERATION DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-form-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "app-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "app-form-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, OperationDetailsComponent_ng_container_0_div_16_Template, 5, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, OperationDetailsComponent_ng_container_0_div_17_Template, 5, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "app-form-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "app-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "app-form-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "app-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "app-form-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "app-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, OperationDetailsComponent_ng_container_0_div_30_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, OperationDetailsComponent_ng_container_0_div_31_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, OperationDetailsComponent_ng_container_0_div_32_Template, 4, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "app-form-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, OperationDetailsComponent_ng_container_0_ng_container_36_Template, 3, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, OperationDetailsComponent_ng_container_0_div_38_Template, 7, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const operation_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.extended);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", operation_r3.symbol.name_sym);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", operation_r3.updown ? "LONG" : "SHORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", operation_r3.dateOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", operation_r3.dateClose);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", operation_r3.timeframe);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", operation_r3.account.account_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", operation_r3.status.name_st);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", operation_r3.volume);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", operation_r3.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", operation_r3.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 13, ctx_r0.comment$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.extended && operation_r3.graph);
  }
}

function OperationDetailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loading-template");
  }
}

class OperationDetailsComponent {
  constructor(operationService, commentService, activatedRoute, router, routingService) {
    this.operationService = operationService;
    this.commentService = commentService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.routingService = routingService;
    this.extended = true;
    this.isLoading = false;
    this.errors = [];
  }

  ngOnInit() {
    this.operation$ = this.activatedRoute.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(params => {
      const id = params['id'];
      return this.operationService.getOperation(id);
    }));
    this.comment$ = this.activatedRoute.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(params => {
      const id = params['id'];
      return this.commentService.getComment(id);
    }));
  }

  onDeleteOperation(operationId) {
    this.operationService.deleteOperation(operationId);
    this.goBack();
  }

  goToEdit(operationId) {
    this.routingService.navigatePreservingQueryParams(['../edit', operationId], this.router, this.activatedRoute);
  }

  goBack() {
    this.routingService.navigatePreservingQueryParams(['../'], this.router, this.activatedRoute);
  }

  goToChart(operation) {
    this.router.navigate(['../view-chart', operation.id], {
      relativeTo: this.activatedRoute,
      queryParams: { ...this.activatedRoute.snapshot.queryParams,
        fileName: operation.graph
      },
      queryParamsHandling: 'merge'
    });
  }

  getPointsColorClass(points) {
    return points > 0 ? 'text-dark-green' : 'text-red';
  }

}

OperationDetailsComponent.ɵfac = function OperationDetailsComponent_Factory(t) {
  return new (t || OperationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_operation_service__WEBPACK_IMPORTED_MODULE_0__.OperationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_data_service_opcomment_service__WEBPACK_IMPORTED_MODULE_1__.OperationCommentService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_service_routing_service__WEBPACK_IMPORTED_MODULE_2__.RoutingService));
};

OperationDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: OperationDetailsComponent,
  selectors: [["app-operation-details"]],
  inputs: {
    extended: "extended"
  },
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "p-8", "bg-dark"], [1, "flex", "justify-between"], [3, "closeEvent"], ["class", "flex flex-row items-center space-x-5", 4, "ngIf"], [1, "p-8"], [1, "text-white", "font-semibold"], [1, "flex", "flex-row", "items-center", "pt-5"], ["text", "Symbol"], [1, "pl-10"], [3, "text"], ["text", "Order type"], [1, "pl-[17px]"], ["class", "flex flex-row items-center pt-5", 4, "ngIf"], ["text", "Timeframe"], [1, "pl-4"], ["text", "Account"], [1, "pl-[35px]"], ["text", "Status"], [1, "pl-[50px]"], ["text", "Comment"], [1, "pl-7"], [4, "ngIf"], ["class", "flex items-center flex-row pt-10", 4, "ngIf"], [1, "flex", "flex-row", "items-center", "space-x-5"], ["text", "Edit", "bgColor", "bg-orange", "type", "submit", 3, "clickEvent"], ["text", "Delete", "bgColor", "bg-red", "type", "submit", 3, "clickEvent"], ["text", "Opened"], ["text", "Close"], [1, "pl-[53px]"], ["text", "Volume"], [1, "pl-[40px]"], ["text", "Ratio"], [1, "pl-[55px]"], ["text", "Points"], [3, "text", "textColor"], ["cols", "30", "rows", "5", "readonly", "", 1, "rounded"], [1, "flex", "items-center", "flex-row", "pt-10"], ["type", "button", 3, "click"], [1, "flex", "flex-row", "bg-blue-turquoise", "rounded", "text-white", "items-center", "font-semibold", "p-3"], ["src", "assets/svg/graphics.svg", 3, "svgStyle"], [1, "pl-2"], [1, "text-center"]],
  template: function OperationDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, OperationDetailsComponent_ng_container_0_Template, 39, 15, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, OperationDetailsComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, ctx.operation$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, angular_svg_icon__WEBPACK_IMPORTED_MODULE_12__.SvgIconComponent, _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_3__.LoadingTemplateComponent, _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_4__.RoundedButtonComponent, _shared_components_form_label_form_label_component__WEBPACK_IMPORTED_MODULE_5__.FormLabelComponent, _shared_components_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_6__.CloseButtonComponent, _shared_components_label_label_component__WEBPACK_IMPORTED_MODULE_7__.LabelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 6202:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/operation/pages/operation/operation-list/operation-list.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationListComponent": () => (/* binding */ OperationListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_service_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/form.service */ 5680);
/* harmony import */ var src_app_core_service_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/routing.service */ 8602);
/* harmony import */ var src_app_shared_utils_sidebar_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utils/sidebar-right-animation */ 505);
/* harmony import */ var _service_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/operation.service */ 624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/loading-template/loading-template.component */ 2142);
/* harmony import */ var _shared_components_sidebar_right_sidebar_right_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/sidebar-right/sidebar-right.component */ 9917);
/* harmony import */ var _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/rounded-button/rounded-button.component */ 1626);
/* harmony import */ var _shared_components_search_by_text_search_by_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/search-by-text/search-by-text.component */ 2323);
/* harmony import */ var _shared_components_trimester_selector_trimester_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/trimester-selector/trimester-selector.component */ 6971);
/* harmony import */ var _shared_components_year_selector_year_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/year-selector/year-selector.component */ 5263);
/* harmony import */ var _table_operation_table_operation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-operation/table-operation.component */ 2273);



















function OperationListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-search-by-text", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "app-trimester-selector")(6, "app-year-selector");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "app-rounded-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("clickEvent", function OperationListComponent_ng_container_0_Template_app_rounded_button_clickEvent_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.goToAdd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 7)(9, "app-table-operation", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("deleteEvent", function OperationListComponent_ng_container_0_Template_app_table_operation_deleteEvent_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r6.onDeleteOperation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "app-sidebar-right", 9)(11, "router-outlet", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("activate", function OperationListComponent_ng_container_0_Template_router_outlet_activate_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.sidebarRightAnimationState = "in");
    })("deactivate", function OperationListComponent_ng_container_0_Template_router_outlet_deactivate_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r8.sidebarRightAnimationState = "out");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const operations_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("searchControl", ctx_r0.searchOperationsControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("text", "Add operation")("bgColor", "bg-green");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("rows", operations_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@sidebarRightInOut", ctx_r0.sidebarRightAnimationState);
  }
}

function OperationListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-loading-template");
  }
}

class OperationListComponent {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router);
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute);
    this.routingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.inject)(src_app_core_service_routing_service__WEBPACK_IMPORTED_MODULE_1__.RoutingService);
    this.operationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.inject)(_service_operation_service__WEBPACK_IMPORTED_MODULE_3__.OperationService);
    this.formService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.inject)(src_app_core_service_form_service__WEBPACK_IMPORTED_MODULE_0__.FormService);
    this.operations$ = this.operationService.operations$;
    this.searchOperationsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('');
    this.searchOperations$ = this.formService.applyDebounceOnSearch(this.searchOperationsControl.valueChanges);
    this.filteredOperations$ = this.formService.filterItems(this.operations$, this.searchOperations$, ({
      symbol
    }) => symbol.name_sym);
    this.sidebarRightAnimationState = 'out';
  }

  ngOnInit() {
    this.operationService.setRefetchInterval();
  }

  goToAdd() {
    this.routingService.navigatePreservingQueryParams(['add'], this.router, this.activatedRoute);
  }

  onDeleteOperation(operationId) {
    this.operationService.deleteOperation(operationId);
  }

}

OperationListComponent.ɵfac = function OperationListComponent_Factory(t) {
  return new (t || OperationListComponent)();
};

OperationListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: OperationListComponent,
  selectors: [["app-operation-list"]],
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "flex", "justify-between", "items-center", "p-5"], [1, "flex", "items-center", "space-x-4"], [1, "pb-2"], ["placeholder", "Search by symbol", 3, "searchControl"], [3, "text", "bgColor", "clickEvent"], [1, "p-5"], [3, "rows", "deleteEvent"], [1, "fixed", "top-0", "bottom-0", "right-0", "md:w-[460px]"], [3, "activate", "deactivate"]],
  template: function OperationListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, OperationListComponent_ng_container_0_Template, 12, 5, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, OperationListComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, ctx.filteredOperations$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_4__.LoadingTemplateComponent, _shared_components_sidebar_right_sidebar_right_component__WEBPACK_IMPORTED_MODULE_5__.SidebarRightComponent, _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_6__.RoundedButtonComponent, _shared_components_search_by_text_search_by_text_component__WEBPACK_IMPORTED_MODULE_7__.SearchByTextComponent, _shared_components_trimester_selector_trimester_selector_component__WEBPACK_IMPORTED_MODULE_8__.TrimesterSelectorComponent, _shared_components_year_selector_year_selector_component__WEBPACK_IMPORTED_MODULE_9__.YearSelectorComponent, _table_operation_table_operation_component__WEBPACK_IMPORTED_MODULE_10__.TableOperationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('sidebarRightInOut', src_app_shared_utils_sidebar_right_animation__WEBPACK_IMPORTED_MODULE_2__.sidebarRightAnimationSlide)]
  }
});

/***/ }),

/***/ 2273:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/operation/pages/operation/operation-list/table-operation/table-operation.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableOperationComponent": () => (/* binding */ TableOperationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_service_routing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/routing.service */ 8602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-svg-icon */ 2183);
/* harmony import */ var _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/icon-button/icon-button.component */ 4055);







function TableOperationComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](column_r2.name);
} }
const _c0 = function () { return { "height.px": 32, "width.px": 32 }; };
const _c1 = function () { return { "width.px": 20, "height.px": 20 }; };
function TableOperationComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9)(17, "div", 11)(18, "app-icon-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clickEvent", function TableOperationComponent_ng_container_6_Template_app_icon_button_clickEvent_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const row_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.goToDetails(row_r3.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "svg-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TableOperationComponent_ng_container_6_Template_svg_icon_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const row_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.deleteOperation(row_r3.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r3.symbol.name_sym);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r3.updown ? "LONG" : "SHORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 9, row_r3.dateOpen, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 12, row_r3.dateClose, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r3.timeframe);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "py-3 px-6 text-center flex-1 whitespace-nowrap font-semibold " + ctx_r1.getPointsColorClass(row_r3.points));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r3.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconSvgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c1));
} }
class TableOperationComponent {
    constructor() {
        this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
        this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
        this.routingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_core_service_routing_service__WEBPACK_IMPORTED_MODULE_0__.RoutingService);
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.columns = [
            { name: 'Symbol' },
            { name: 'Direction' },
            { name: 'Date open' },
            { name: 'Date close' },
            { name: 'Timeframe' },
            { name: 'Points' },
            { name: 'Actions' },
        ];
    }
    getPointsColorClass(points) {
        return points > 0 ? 'text-green' : 'text-red';
    }
    goToDetails(operationId) {
        this.routingService.navigatePreservingQueryParams(['.', operationId], this.router, this.activatedRoute);
    }
    deleteOperation(operationId) {
        this.deleteEvent.emit(operationId);
    }
}
TableOperationComponent.ɵfac = function TableOperationComponent_Factory(t) { return new (t || TableOperationComponent)(); };
TableOperationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TableOperationComponent, selectors: [["app-table-operation"]], inputs: { rows: "rows" }, outputs: { deleteEvent: "deleteEvent" }, decls: 7, vars: 2, consts: [[1, "overflow-x-auto", "rounded"], [1, "w-full"], [1, "flex", "flex-col"], [1, "flex", "flex-row", "items-center", "bg-dark", "text-white"], [4, "ngFor", "ngForOf"], [1, "bg-gray-900", "text-white", "text-sm", "font-light"], [1, "py-3", "px-6", "text-center", "flex-1", "font-bold"], [1, "flex", "flex-row", "items-center", "not-last:border-b", "hover:bg-gray-500"], [1, "py-3", "px-6", "text-center", "flex-1", "whitespace-nowrap", "font-bold"], [1, "py-3", "px-6", "text-center", "flex-1", "whitespace-nowrap", "font-semibold"], [3, "ngClass"], [1, "flex", "flex-row", "justify-center", "space-x-2", "items-center"], ["iconSource", "assets/svg/edit-32.svg", "iconSvgClass", "hover:bg-gray-300 rounded", 1, "svg-white", 3, "iconSvgStyle", "clickEvent"], ["src", "assets/svg/delete.svg", "svgClass", "hover:bg-gray-300 rounded", 1, "rounded-full", "w-[20px]", "h-[20px]", "bg-red", "svg-red-stroke", 3, "svgStyle", "click"]], template: function TableOperationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TableOperationComponent_ng_container_4_Template, 3, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TableOperationComponent_ng_container_6_Template, 20, 17, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent, _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_1__.IconButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 87:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/operation/pages/operation/operation-mutation/operation-mutation.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationMutationComponent": () => (/* binding */ OperationMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-file-upload */ 4896);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_data_models_timeframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/models/timeframe */ 3338);
/* harmony import */ var src_app_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/file.service */ 1237);
/* harmony import */ var src_app_shared_utils_custom_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utils/custom-types */ 8175);
/* harmony import */ var src_app_shared_utils_shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/shared-utils */ 409);
/* harmony import */ var _service_operation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/operation.service */ 624);
/* harmony import */ var src_app_data_service_symbol_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/symbol.service */ 9636);
/* harmony import */ var src_app_data_service_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/status.service */ 6649);
/* harmony import */ var src_app_data_service_opcomment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/opcomment.service */ 5419);
/* harmony import */ var src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/service/toast.service */ 8521);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_service_routing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/service/routing.service */ 8602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-svg-icon */ 2183);
/* harmony import */ var _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/loading-template/loading-template.component */ 2142);
/* harmony import */ var _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/rounded-button/rounded-button.component */ 1626);
/* harmony import */ var _shared_components_form_label_form_label_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/form-label/form-label.component */ 3595);
/* harmony import */ var _shared_components_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/close-button/close-button.component */ 2907);
/* harmony import */ var _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/validation-error/validation-error.component */ 7711);
/* harmony import */ var _shared_components_text_button_text_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/components/text-button/text-button.component */ 8724);




























function OperationMutationComponent_ng_container_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 55)(1, "app-rounded-button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("clickEvent", function OperationMutationComponent_ng_container_0_div_5_Template_app_rounded_button_clickEvent_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r10.goToDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "app-rounded-button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("text", ctx_r5.buttonType)("bgColor", ctx_r5.buttonColor);
  }
}

function OperationMutationComponent_ng_container_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const symbol_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", symbol_r12.id_sym);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](symbol_r12.name_sym);
  }
}

function OperationMutationComponent_ng_container_0_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const timeframe_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", timeframe_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](timeframe_r13);
  }
}

function OperationMutationComponent_ng_container_0_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const status_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", status_r14.id_st);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](status_r14.name_st);
  }
}

function OperationMutationComponent_ng_container_0_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 58)(1, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "File uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "app-text-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("clickEvent", function OperationMutationComponent_ng_container_0_div_70_Template_app_text_button_clickEvent_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r15.removeUploadedFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}

const _c0 = function () {
  return {
    "height.px": 32,
    "width.px": 32
  };
};

function OperationMutationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngSubmit", function OperationMutationComponent_ng_container_0_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r17.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "app-close-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("closeEvent", function OperationMutationComponent_ng_container_0_Template_app_close_button_closeEvent_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r19.goToList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, OperationMutationComponent_ng_container_0_div_5_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 8)(7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "app-form-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 12)(12, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, OperationMutationComponent_ng_container_0_ng_container_13_Template, 3, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "app-validation-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "app-form-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 17)(19, "select", 18)(20, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, "BUY");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23, "SELL");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](24, "app-validation-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](26, "app-form-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](28, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](30, "app-form-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](32, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](34, "app-form-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "div", 27)(36, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](37, OperationMutationComponent_ng_container_0_ng_container_37_Template, 3, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](38, "app-validation-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](40, "app-form-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "div", 31)(42, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](43, OperationMutationComponent_ng_container_0_ng_container_43_Template, 3, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](44, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](45, "app-validation-error", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](47, "app-form-label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](49, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](51, "app-form-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](53, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](54, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](55, "app-form-label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](56, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](57, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](59, "app-form-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](60, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](61, "textarea", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](62, "div", 47)(63, "button", 48)(64, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](65, "svg-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](66, "div", 51)(67, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](68, "Upload chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](69, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](70, OperationMutationComponent_ng_container_0_div_70_Template, 4, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r0.operationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r0.isMutationAdd)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", ctx_r0.formType, " OPERATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](14, 14, ctx_r0.symbols$));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx_r0.dateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx_r0.dateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r0.timeframes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](44, 16, ctx_r0.statuses$));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](18, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("uploader", ctx_r0.uploader);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.isFileUploaded);
  }
}

function OperationMutationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-loading-template");
  }
}

function OperationMutationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-rounded-button", 57);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("text", ctx_r4.buttonType)("bgColor", ctx_r4.buttonColor);
  }
}

class OperationMutationComponent {
  constructor(formBuilder, operationService, symbolService, statusService, commentService, toastService, router, activatedRoute, routingService) {
    this.formBuilder = formBuilder;
    this.operationService = operationService;
    this.symbolService = symbolService;
    this.statusService = statusService;
    this.commentService = commentService;
    this.toastService = toastService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.routingService = routingService;
    this.isLoading = false;
    this.errors = [];
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_18__.FileUploader({
      url: (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.inject)(src_app_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService).fileUploadUri,
      itemAlias: 'chart'
    });
    this.chartFileName = '';
    this.account = 1;
    this.idComment = undefined;
    this.symbols$ = this.symbolService.getSymbols();
    this.statuses$ = this.statusService.getStatuses();
    this.timeframes = Object.values(src_app_data_models_timeframe__WEBPACK_IMPORTED_MODULE_1__.Timeframe).filter(value => typeof value !== 'number'); //CONTROLS

    this.id = this.formBuilder.control(null);
    this.symbol = this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required);
    this.orderType = this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required);
    this.dateOpen = this.formBuilder.control(null);
    this.dateClose = this.formBuilder.control(null);
    this.timeframe = this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required);
    this.status = this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required);
    this.volume = this.formBuilder.control(null);
    this.ratio = this.formBuilder.control(null);
    this.points = this.formBuilder.control(null);
    this.comment = this.formBuilder.control(null);
    this.operationForm = this.formBuilder.group({
      id: this.id,
      symbol: this.symbol,
      orderType: this.orderType,
      dateOpen: this.dateOpen,
      dateClose: this.dateClose,
      timeframe: this.timeframe,
      status: this.status,
      volume: this.volume,
      ratio: this.ratio,
      points: this.points,
      comment: this.comment
    });

    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };

    this.uploader.onCompleteItem = (item, response, status, headers) => {
      this.chartFileName = JSON.parse(response);
      console.log('Uploaded successfully...', status);
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const id = _this.activatedRoute.snapshot.params['id'];
      _this.account = _this.activatedRoute.snapshot.queryParams['account'];

      if (id) {
        const operationDetails = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this.operationService.getOperation(id));

        if (operationDetails) {
          _this.setInitialFormState(operationDetails);
        }

        const comment = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this.commentService.getComment(id));

        if (comment) {
          _this.setInitialFormStateComment(comment);
        }
      }
    })();
  }

  get isFileUploaded() {
    return this.uploader.queue.length > 0;
  }

  get mutation() {
    if (this.activatedRoute.snapshot.params['id']) {
      return src_app_shared_utils_custom_types__WEBPACK_IMPORTED_MODULE_3__.MutationType.EDIT;
    }

    return src_app_shared_utils_custom_types__WEBPACK_IMPORTED_MODULE_3__.MutationType.ADD;
  }

  get isMutationAdd() {
    return this.mutation === src_app_shared_utils_custom_types__WEBPACK_IMPORTED_MODULE_3__.MutationType.ADD;
  } //if is add operation OR we are on edit and we don't have a comment, we create one


  get isCreateCommentFromEdit() {
    return this.isMutationAdd || !this.idComment;
  }

  get closeRoute() {
    return this.isMutationAdd ? '../' : '../../';
  }

  get cancelRoute() {
    return '../../' + this.operationForm.value.id;
  }

  get buttonType() {
    return this.isMutationAdd ? 'Add' : 'Save';
  }

  get formType() {
    return this.isMutationAdd ? 'ADD' : 'EDIT';
  }

  get buttonColor() {
    return this.isMutationAdd ? 'bg-green' : 'bg-orange';
  }

  get dateValue() {
    return "${this.operationForm.get('date')!.value} | date: 'yyyy-MM-dd'";
  }

  goToList() {
    this.routingService.navigatePreservingQueryParams([this.closeRoute], this.router, this.activatedRoute);
  }

  goToDetails() {
    this.routingService.navigatePreservingQueryParams([this.cancelRoute], this.router, this.activatedRoute);
  }

  onAddOperation(operationCreateInput) {
    return this.operationService.addOperation(operationCreateInput);
  }

  onUpdateOperation(operationUpdateInput) {
    return this.operationService.updateOperation(operationUpdateInput);
  }

  onAddComment(commentCreateInput) {
    return this.commentService.addComment(commentCreateInput);
  }

  onUpdateComment(commentUpdateInput) {
    return this.commentService.updateComment(commentUpdateInput);
  }

  removeUploadedFile() {
    this.uploader.clearQueue();
  }

  setInitialFormState(operationDetails) {
    const {
      id,
      symbol: {
        id_sym
      },
      updown,
      dateOpen,
      dateClose,
      graph,
      timeframe,
      status: {
        id_st
      },
      account: {
        id_ac
      },
      volume,
      ratio,
      points
    } = operationDetails;
    this.id.setValue(id);
    this.symbol.setValue(id_sym);
    this.orderType.setValue(updown ? 1 : 0);
    this.dateOpen.setValue((0,src_app_shared_utils_shared_utils__WEBPACK_IMPORTED_MODULE_4__.formatDate)(dateOpen));
    this.dateClose.setValue((0,src_app_shared_utils_shared_utils__WEBPACK_IMPORTED_MODULE_4__.formatDate)(dateClose));
    this.chartFileName = graph;
    this.timeframe.setValue(timeframe);
    this.status.setValue(id_st);
    this.account = id_ac;
    this.volume.setValue(volume);
    this.ratio.setValue(ratio);
    this.points.setValue(points);
  }

  setInitialFormStateComment(comment) {
    this.idComment = comment.id_opc;
    this.comment.setValue(comment.opcomment);
  }

  handleUploadChart() {
    var _this2 = this;

    return (0,C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.isLoading = true;

        if (_this2.isFileUploaded) {
          const fileItem = _this2.uploader.queue[_this2.uploader.queue.length - 1];
          const uploadPromise = new Promise(resolve => {
            _this2.uploaderSubscription = _this2.uploader.response.subscribe(res => {
              _this2.chartFileName = JSON.parse(res).filename;
              resolve();
            });
          });
          fileItem.upload();
          _this2.isLoading = false;
          return uploadPromise;
        }
      } catch (e) {
        _this2.errors = [..._this2.errors, e.message];
      } finally {
        _this2.isLoading = false;
      }
    })();
  }

  handleMutationOperation(operationInput) {
    var _this3 = this;

    return (0,C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this3.isLoading = true;
        const result = _this3.isMutationAdd ? yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this3.onAddOperation(operationInput)) : yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this3.onUpdateOperation(operationInput));

        if (result) {
          _this3.isLoading = false;
          return result;
        }
      } catch (e) {
        _this3.errors = [..._this3.errors, e.message];
      } finally {
        _this3.isLoading = false;
      }
    })();
  }

  handleMutationComment(commentInput) {
    var _this4 = this;

    return (0,C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this4.isLoading = true;
        const result = _this4.isCreateCommentFromEdit ? yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this4.onAddComment(commentInput)) : yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this4.onUpdateComment(commentInput));

        if (result) {
          _this4.isLoading = false;
          return result;
        }
      } catch (e) {
        _this4.errors = [..._this4.errors, e.message];
      } finally {
        _this4.isLoading = false;
      }
    })();
  }

  getOperationCreateInput() {
    const {
      symbol,
      orderType,
      dateOpen,
      dateClose,
      timeframe,
      status,
      volume,
      ratio,
      points
    } = this.operationForm.value;
    return {
      id_sym: symbol,
      updown: orderType,
      time_op: dateOpen,
      time_close: dateClose,
      graph: this.chartFileName,
      name_tf: timeframe.toString(),
      id_st: status,
      id_ac: this.account,
      rr_ratio: ratio,
      volume: volume,
      points: points
    };
  }

  getOperationUpdateInput() {
    const {
      id,
      symbol,
      orderType,
      dateOpen,
      dateClose,
      timeframe,
      status,
      volume,
      ratio,
      points
    } = this.operationForm.value;
    return {
      id_op: id,
      id_sym: symbol,
      updown: orderType,
      time_op: dateOpen,
      time_close: dateClose,
      graph: this.chartFileName,
      name_tf: timeframe.toString(),
      id_st: status,
      id_ac: this.account,
      rr_ratio: ratio,
      volume: volume,
      points: points
    };
  }

  getCommentCreateInput(idOperation) {
    const {
      comment
    } = this.operationForm.value;
    return {
      opcomment: comment,
      id_op: idOperation
    };
  }

  getCommentUpdateInput() {
    const {
      id,
      comment
    } = this.operationForm.value;
    return {
      id_opc: this.idComment,
      opcomment: comment,
      id_op: id
    };
  }

  onSubmit() {
    var _this5 = this;

    return (0,C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.operationForm.invalid) {
        _this5.toastService.error({
          message: 'Invalid form!'
        });

        return;
      }

      yield _this5.handleUploadChart(); // wait to load this.chartFileName

      const operationInput = _this5.isMutationAdd ? _this5.getOperationCreateInput() : _this5.getOperationUpdateInput();
      const operationId = yield _this5.handleMutationOperation(operationInput);
      const comment = _this5.operationForm.value.comment;

      if (operationId && comment) {
        const commentInput = _this5.isCreateCommentFromEdit ? _this5.getCommentCreateInput(operationId) : _this5.getCommentUpdateInput();

        _this5.handleMutationComment(commentInput);
      }

      if (_this5.errors.length === 0) {
        const operation = _this5.isMutationAdd ? 'created' : 'updated';

        _this5.toastService.success({
          message: `Operation ${operation} successfully`
        });

        _this5.routingService.navigatePreservingQueryParams([`${_this5.closeRoute}${operationId}`], _this5.router, _this5.activatedRoute);
      } else {
        _this5.errors.forEach(error => {
          _this5.toastService.error({
            message: error
          });
        });
      }
    })();
  }

  ngOnDestroy() {
    if (this.uploaderSubscription) {
      this.uploaderSubscription.unsubscribe();
    }
  }

}

OperationMutationComponent.ɵfac = function OperationMutationComponent_Factory(t) {
  return new (t || OperationMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_service_operation_service__WEBPACK_IMPORTED_MODULE_5__.OperationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_data_service_symbol_service__WEBPACK_IMPORTED_MODULE_6__.SymbolService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_data_service_status_service__WEBPACK_IMPORTED_MODULE_7__.StatusService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_data_service_opcomment_service__WEBPACK_IMPORTED_MODULE_8__.OperationCommentService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_9__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_service_routing_service__WEBPACK_IMPORTED_MODULE_10__.RoutingService));
};

OperationMutationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: OperationMutationComponent,
  selectors: [["app-operation-mutation"]],
  decls: 5,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], ["addSingleBtn", ""], [3, "formGroup", "ngSubmit"], [1, "p-8", "bg-dark"], [1, "flex", "justify-between"], [3, "closeEvent"], ["class", "flex flex-row items-center space-x-5", 4, "ngIf", "ngIfElse"], [1, "p-8"], [1, "text-white", "font-semibold"], [1, "flex", "flex-row", "pt-5"], ["text", "Select symbol"], [1, "pl-10"], ["name", "symbolSelect", "formControlName", "symbol", 1, "rounded"], [4, "ngFor", "ngForOf"], ["for", "symbol", "fieldName", "symbol"], ["text", "Select order type"], [1, "pl-[17px]"], ["name", "orderTypeSelect", "formControlName", "orderType", 1, "rounded"], [3, "value"], ["for", "orderType", "fieldName", "order type"], ["text", "Select date open"], [1, "pl-[20px]"], ["type", "date", "formControlName", "dateOpen", 1, "rounded", 3, "value"], ["text", "Select date close"], ["type", "date", "formControlName", "dateClose", 1, "rounded", 3, "value"], ["text", "Select timeframe"], [1, "pl-5"], ["name", "timeframeSelect", "formControlName", "timeframe", 1, "rounded"], ["for", "timeframe", "fieldName", "timeframe"], ["text", "Select status"], [1, "pl-[50px]"], ["name", "statusSelect", "formControlName", "status", 1, "rounded"], ["for", "status", "fieldName", "status"], ["text", "Volume"], [1, "pl-[85px]"], ["type", "number", "formControlName", "volume", 1, "w-[100px]", "rounded"], ["text", "Risk reward %"], [1, "pl-[40px]"], ["type", "number", "formControlName", "ratio", 1, "w-[100px]", "rounded"], ["text", "Points"], [1, "pl-[95px]"], ["type", "number", "formControlName", "points", 1, "w-[100px]", "rounded"], [1, "flex", "items-center", "flex-row", "pt-5"], ["text", "Comment"], [1, "pl-[68px]"], ["name", "commentSelect", "formControlName", "comment", "cols", "30", "rows", "5", 1, "rounded"], [1, "flex", "items-center", "flex-row", "pt-10"], ["type", "button"], [1, "flex", "flex-row", "bg-red-violet", "rounded", "text-white", "items-center", "font-semibold", "p-3"], ["src", "assets/svg/graphics.svg", 3, "svgStyle"], [1, "pl-2"], [1, "text-center"], ["type", "file", "name", "chart", "ng2FileSelect", "", 1, "hidden", 3, "uploader"], ["class", "flex flex-row items-center pl-4 space-x-2", 4, "ngIf"], [1, "flex", "flex-row", "items-center", "space-x-5"], ["text", "Cancel", "bgColor", "bg-gray-400", 3, "clickEvent"], ["type", "submit", 3, "text", "bgColor"], [1, "flex", "flex-row", "items-center", "pl-4", "space-x-2"], [1, "text-white"], ["buttonText", "Cancel", "buttonClass", "bg-red text-white rounded p-1", 3, "clickEvent"]],
  template: function OperationMutationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, OperationMutationComponent_ng_container_0_Template, 71, 19, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, OperationMutationComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, OperationMutationComponent_ng_template_3_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControlName, angular_svg_icon__WEBPACK_IMPORTED_MODULE_23__.SvgIconComponent, _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_11__.LoadingTemplateComponent, _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_12__.RoundedButtonComponent, _shared_components_form_label_form_label_component__WEBPACK_IMPORTED_MODULE_13__.FormLabelComponent, _shared_components_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_14__.CloseButtonComponent, _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_15__.ValidationErrorComponent, _shared_components_text_button_text_button_component__WEBPACK_IMPORTED_MODULE_16__.TextButtonComponent, ng2_file_upload__WEBPACK_IMPORTED_MODULE_18__.FileSelectDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 5517:
/*!****************************************************************************!*\
  !*** ./src/app/modules/operation/pages/view-chart/view-chart.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewChartComponent": () => (/* binding */ ViewChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_file_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/file.service */ 1237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/toast.service */ 8521);
/* harmony import */ var _shared_components_sidebar_right_sidebar_right_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/sidebar-right/sidebar-right.component */ 9917);
/* harmony import */ var _shared_components_back_to_back_to_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/back-to/back-to.component */ 52);
/* harmony import */ var _operation_operation_details_operation_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operation/operation-details/operation-details.component */ 5789);








class ViewChartComponent {
    constructor(fileService, activatedRoute, sanitizer, toastService) {
        this.fileService = fileService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.toastService = toastService;
        this.widgetConfig = {
            symbol: 'EURUSD',
            widgetType: 'widget',
        };
    }
    ngOnInit() {
        const filename = this.activatedRoute.snapshot.queryParamMap.get('fileName');
        if (filename) {
            this.downloadFile(filename);
        }
    }
    downloadFile(filename) {
        this.fileService.downloadFile(filename).subscribe((data) => {
            const blob = new Blob([data], { type: 'image/png' });
            this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
        }, (error) => this.toastService.error({
            message: error,
        }));
    }
}
ViewChartComponent.ɵfac = function ViewChartComponent_Factory(t) { return new (t || ViewChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_file_service__WEBPACK_IMPORTED_MODULE_0__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService)); };
ViewChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ViewChartComponent, selectors: [["app-view-chart"]], decls: 5, vars: 2, consts: [[1, "p-10"], ["backText", "BACK TO OPERATIONS", "backTo", "../../"], ["alt", "chart image", 1, "w-2/3", 3, "src"], [1, "fixed", "top-0", "bottom-0", "right-0", "md:w-[460px]"], [3, "extended"]], template: function ViewChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-back-to", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-sidebar-right", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-operation-details", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("extended", false);
    } }, dependencies: [_shared_components_sidebar_right_sidebar_right_component__WEBPACK_IMPORTED_MODULE_2__.SidebarRightComponent, _shared_components_back_to_back_to_component__WEBPACK_IMPORTED_MODULE_3__.BackToComponent, _operation_operation_details_operation_details_component__WEBPACK_IMPORTED_MODULE_4__.OperationDetailsComponent], encapsulation: 2 });


/***/ }),

/***/ 624:
/*!****************************************************************!*\
  !*** ./src/app/modules/operation/service/operation.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationService": () => (/* binding */ OperationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/toast.service */ 8521);







class OperationService {
    constructor(http, toastService) {
        this.http = http;
        this.toastService = toastService;
        this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
        this.apiServerUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/operations`;
        this.fetchSignal = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.DEFAULT_REFETCH_INTERVAL = 5000;
        this.operations$ = this.fetchSignal.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.getOperations()), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((operations) => {
            const accountId = this.activatedRoute.snapshot.queryParams['account'];
            if (accountId) {
                const filteredByAccount = operations.filter((operation) => operation.account.id_ac.toString() === accountId);
                return filteredByAccount;
            }
            else
                return operations;
        }));
    }
    refetch() {
        this.fetchSignal.next(null);
    }
    setRefetchInterval(interval) {
        setInterval(() => {
            this.refetch();
        }, interval ?? this.DEFAULT_REFETCH_INTERVAL);
    }
    getOperations() {
        return this.http.get(`${this.apiServerUrl}`);
    }
    getOperation(operationId) {
        return this.http.get(`${this.apiServerUrl}/${operationId}`);
    }
    addOperation(operationCreateInput) {
        return this.http.post(`${this.apiServerUrl}`, operationCreateInput).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((res) => {
            this.refetch();
            return res;
        }, (error) => {
            this.toastService.error({
                message: error.message,
            });
        }));
    }
    updateOperation(operation) {
        return this.http
            .put(`${this.apiServerUrl}/${operation.id_op}`, operation)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((res) => {
            this.refetch();
            return res;
        }, (error) => {
            this.toastService.error({
                message: error.message,
            });
        }));
    }
    deleteOperation(operationId) {
        this.deleteSubscription = this.http
            .delete(`${this.apiServerUrl}/${operationId}`)
            .subscribe(() => {
            this.toastService.success({
                message: 'Operation deleted successfully',
            });
            this.refetch();
        }, (error) => {
            this.toastService.error({
                message: error.message,
            });
        });
    }
}
OperationService.ɵfac = function OperationService_Factory(t) { return new (t || OperationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService)); };
OperationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OperationService, factory: OperationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2204:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/projection/pages/projection/projection-details/projection-details.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectionDetailsComponent": () => (/* binding */ ProjectionDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_projection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/projection.service */ 4174);
/* harmony import */ var src_app_data_service_pcomment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/service/pcomment.service */ 6304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-svg-icon */ 2183);
/* harmony import */ var _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/loading-template/loading-template.component */ 2142);
/* harmony import */ var _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/rounded-button/rounded-button.component */ 1626);
/* harmony import */ var _shared_components_form_label_form_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/form-label/form-label.component */ 3595);
/* harmony import */ var _shared_components_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/close-button/close-button.component */ 2907);
/* harmony import */ var _shared_components_label_label_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/label/label.component */ 7827);













function ProjectionDetailsComponent_ng_container_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-form-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const projection_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 1, projection_r3.date, "yyyy-MM-dd"));
  }
}

function ProjectionDetailsComponent_ng_container_0_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const comment_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", comment_r8.pcomment, "\n          ");
  }
}

const _c0 = function (a1) {
  return ["../view-chart", a1];
};

const _c1 = function (a0) {
  return {
    fileName: a0
  };
};

const _c2 = function () {
  return {
    "height.px": 32,
    "width.px": 32
  };
};

function ProjectionDetailsComponent_ng_container_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "button", 29)(2, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "svg-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 32)(5, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "View chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const projection_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, projection_r3.id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c1, projection_r3.graph));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c2));
  }
}

function ProjectionDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-close-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-rounded-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-rounded-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProjectionDetailsComponent_ng_container_0_Template_app_rounded_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const projection_r3 = restoredCtx.ngIf;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.onDeleteProjection(projection_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 8)(8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "PROJECTION DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "app-form-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-form-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ProjectionDetailsComponent_ng_container_0_div_18_Template, 5, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "app-form-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "app-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "app-form-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "app-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "app-form-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ProjectionDetailsComponent_ng_container_0_ng_container_30_Template, 3, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ProjectionDetailsComponent_ng_container_0_div_32_Template, 7, 8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const projection_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "../edit/" + projection_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", projection_r3.symbol.name_sym);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", projection_r3.updown ? "LONG" : "SHORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", projection_r3.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", projection_r3.timeframe);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", projection_r3.status.name_st);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 8, ctx_r0.comment$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", projection_r3.graph);
  }
}

function ProjectionDetailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loading-template");
  }
}

class ProjectionDetailsComponent {
  constructor(projectionService, commentService, activatedRoute, router) {
    this.projectionService = projectionService;
    this.commentService = commentService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.isLoading = false;
    this.errors = [];
  }

  ngOnInit() {
    this.projection$ = this.activatedRoute.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(params => {
      const id = params['id'];
      return this.projectionService.getProjection(id);
    }));
    this.comment$ = this.activatedRoute.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(params => {
      const id = params['id'];
      return this.commentService.getComment(id);
    }));
  }

  onDeleteProjection(projectionId) {
    this.projectionService.deleteProjection(projectionId);
    this.goBack();
  }

  goBack() {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute
    });
  }

}

ProjectionDetailsComponent.ɵfac = function ProjectionDetailsComponent_Factory(t) {
  return new (t || ProjectionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_projection_service__WEBPACK_IMPORTED_MODULE_0__.ProjectionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_data_service_pcomment_service__WEBPACK_IMPORTED_MODULE_1__.ProjectionCommentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};

ProjectionDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ProjectionDetailsComponent,
  selectors: [["app-projection-details"]],
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "p-8", "bg-dark"], [1, "flex", "justify-between"], ["routerLink", "../"], [1, "flex", "flex-row", "items-center", "space-x-5"], ["text", "Edit", "bgColor", "bg-orange", "type", "submit", 3, "routerLink"], ["text", "Delete", "bgColor", "bg-red", "type", "submit", 3, "click"], [1, "p-8"], [1, "text-white", "font-semibold"], [1, "flex", "flex-row", "items-center", "pt-5"], ["text", "Symbol"], [1, "pl-10"], [3, "text"], ["text", "Order type"], [1, "pl-[17px]"], ["class", "flex flex-row items-center pt-5", 4, "ngIf"], ["text", "Timeframe"], [1, "pl-5"], ["text", "Status"], [1, "pl-[50px]"], ["text", "Comment"], [1, "pl-7"], [4, "ngIf"], ["class", "flex items-center flex-row pt-10", 4, "ngIf"], ["text", "Date"], [1, "pl-[60px]"], ["cols", "30", "rows", "5", "readonly", "", 1, "rounded"], [1, "flex", "items-center", "flex-row", "pt-10"], ["type", "button", 3, "routerLink", "queryParams"], [1, "flex", "flex-row", "bg-blue-turquoise", "rounded", "text-white", "items-center", "font-semibold", "p-3"], ["src", "assets/svg/graphics.svg", 3, "svgStyle"], [1, "pl-2"], [1, "text-center"]],
  template: function ProjectionDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ProjectionDetailsComponent_ng_container_0_Template, 33, 10, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ProjectionDetailsComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx.projection$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, angular_svg_icon__WEBPACK_IMPORTED_MODULE_11__.SvgIconComponent, _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_2__.LoadingTemplateComponent, _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_3__.RoundedButtonComponent, _shared_components_form_label_form_label_component__WEBPACK_IMPORTED_MODULE_4__.FormLabelComponent, _shared_components_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_5__.CloseButtonComponent, _shared_components_label_label_component__WEBPACK_IMPORTED_MODULE_6__.LabelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 9483:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/projection/pages/projection/projection-list/projection-list.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectionListComponent": () => (/* binding */ ProjectionListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_utils_sidebar_right_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/sidebar-right-animation */ 505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_projection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/projection.service */ 4174);
/* harmony import */ var src_app_core_service_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/form.service */ 5680);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/loading-template/loading-template.component */ 2142);
/* harmony import */ var _shared_components_sidebar_right_sidebar_right_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/sidebar-right/sidebar-right.component */ 9917);
/* harmony import */ var _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/rounded-button/rounded-button.component */ 1626);
/* harmony import */ var _shared_components_search_by_text_search_by_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/search-by-text/search-by-text.component */ 2323);
/* harmony import */ var _shared_components_trimester_selector_trimester_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/trimester-selector/trimester-selector.component */ 6971);
/* harmony import */ var _shared_components_year_selector_year_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/year-selector/year-selector.component */ 5263);
/* harmony import */ var _table_projection_table_projection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-projection/table-projection.component */ 4904);
















function ProjectionListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-search-by-text", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "app-trimester-selector")(6, "app-year-selector");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "app-rounded-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 7)(9, "app-table-projection", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("deleteEvent", function ProjectionListComponent_ng_container_0_Template_app_table_projection_deleteEvent_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.onDeleteProjection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "app-sidebar-right", 9)(11, "router-outlet", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("activate", function ProjectionListComponent_ng_container_0_Template_router_outlet_activate_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.sidebarRightAnimationState = "in");
    })("deactivate", function ProjectionListComponent_ng_container_0_Template_router_outlet_deactivate_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.sidebarRightAnimationState = "out");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const projections_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("searchControl", ctx_r0.searchProjectionsControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", "Add projection")("bgColor", "bg-green")("routerLink", "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rows", projections_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@sidebarRightInOut", ctx_r0.sidebarRightAnimationState);
  }
}

function ProjectionListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-loading-template");
  }
}

class ProjectionListComponent {
  constructor(projectionService, formService) {
    this.projectionService = projectionService;
    this.formService = formService;
    this.projections$ = this.projectionService.projections$;
    this.searchProjectionsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('');
    this.searchProjections$ = this.formService.applyDebounceOnSearch(this.searchProjectionsControl.valueChanges);
    this.filteredProjections$ = this.formService.filterItems(this.projections$, this.searchProjections$, ({
      symbol
    }) => symbol.name_sym);
    this.sidebarRightAnimationState = 'out';
  }

  ngOnInit() {
    this.projectionService.setRefetchInterval();
  }

  onDeleteProjection(projectionId) {
    this.projectionService.deleteProjection(projectionId);
  }

}

ProjectionListComponent.ɵfac = function ProjectionListComponent_Factory(t) {
  return new (t || ProjectionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_projection_service__WEBPACK_IMPORTED_MODULE_1__.ProjectionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_service_form_service__WEBPACK_IMPORTED_MODULE_2__.FormService));
};

ProjectionListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: ProjectionListComponent,
  selectors: [["app-projection-list"]],
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "flex", "justify-between", "items-center", "p-5"], [1, "flex", "items-center", "space-x-4"], [1, "pb-2"], ["placeholder", "Search by symbol", 3, "searchControl"], [3, "text", "bgColor", "routerLink"], [1, "p-5"], [3, "rows", "deleteEvent"], [1, "fixed", "top-0", "bottom-0", "right-0", "md:w-[460px]"], [3, "activate", "deactivate"]],
  template: function ProjectionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ProjectionListComponent_ng_container_0_Template, 12, 6, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProjectionListComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx.filteredProjections$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_3__.LoadingTemplateComponent, _shared_components_sidebar_right_sidebar_right_component__WEBPACK_IMPORTED_MODULE_4__.SidebarRightComponent, _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_5__.RoundedButtonComponent, _shared_components_search_by_text_search_by_text_component__WEBPACK_IMPORTED_MODULE_6__.SearchByTextComponent, _shared_components_trimester_selector_trimester_selector_component__WEBPACK_IMPORTED_MODULE_7__.TrimesterSelectorComponent, _shared_components_year_selector_year_selector_component__WEBPACK_IMPORTED_MODULE_8__.YearSelectorComponent, _table_projection_table_projection_component__WEBPACK_IMPORTED_MODULE_9__.TableProjectionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('sidebarRightInOut', src_app_shared_utils_sidebar_right_animation__WEBPACK_IMPORTED_MODULE_0__.sidebarRightAnimationSlide)]
  }
});

/***/ }),

/***/ 4904:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/projection/pages/projection/projection-list/table-projection/table-projection.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableProjectionComponent": () => (/* binding */ TableProjectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-icon */ 2183);
/* harmony import */ var _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/components/icon-button/icon-button.component */ 4055);






function TableProjectionComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](column_r2.name);
} }
const _c0 = function () { return { "height.px": 32, "width.px": 32 }; };
const _c1 = function (a1) { return [".", a1]; };
const _c2 = function () { return { "width.px": 20, "height.px": 20 }; };
function TableProjectionComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-icon-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableProjectionComponent_ng_container_6_Template_svg_icon_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const row_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.deleteProjection(row_r3.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.symbol.name_sym);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.updown ? "LONG" : "SHORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 8, row_r3.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.timeframe);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.status.name_st);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("iconSvgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, row_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c2));
} }
class TableProjectionComponent {
    constructor() {
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.columns = [
            { name: 'Symbol' },
            { name: 'Direction' },
            { name: 'Date' },
            { name: 'Timeframe' },
            { name: 'Status' },
            { name: 'Actions' },
        ];
    }
    deleteProjection(projId) {
        this.deleteEvent.emit(projId);
    }
}
TableProjectionComponent.ɵfac = function TableProjectionComponent_Factory(t) { return new (t || TableProjectionComponent)(); };
TableProjectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableProjectionComponent, selectors: [["app-table-projection"]], inputs: { rows: "rows" }, outputs: { deleteEvent: "deleteEvent" }, decls: 7, vars: 2, consts: [[1, "overflow-x-auto", "rounded"], [1, "w-full"], [1, "flex", "flex-col"], [1, "flex", "flex-row", "items-center", "bg-dark", "text-white"], [4, "ngFor", "ngForOf"], [1, "bg-gray-900", "text-white", "text-sm", "font-light"], [1, "py-3", "px-6", "text-center", "flex-1", "font-bold"], [1, "flex", "flex-row", "items-center", "not-last:border-b", "hover:bg-gray-500"], [1, "py-3", "px-6", "text-center", "flex-1", "whitespace-nowrap", "font-bold"], [1, "py-3", "px-6", "text-center", "flex-1", "whitespace-nowrap", "font-semibold"], [1, "flex", "justify-center", "space-x-2", "items-center"], ["iconSource", "assets/svg/edit-32.svg", "iconSvgClass", "hover:bg-gray-300 rounded", 1, "svg-white", 3, "iconSvgStyle", "routerLink"], ["src", "assets/svg/delete.svg", "svgClass", "hover:bg-gray-300 rounded", 1, "rounded-full", "w-[20px]", "h-[20px]", "bg-red", "svg-red-stroke", 3, "svgStyle", "click"]], template: function TableProjectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TableProjectionComponent_ng_container_4_Template, 3, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TableProjectionComponent_ng_container_6_Template, 17, 15, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconComponent, _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__.IconButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 7659:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/projection/pages/projection/projection-mutation/projection-mutation.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectionMutationComponent": () => (/* binding */ ProjectionMutationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-file-upload */ 4896);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_data_models_timeframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/models/timeframe */ 3338);
/* harmony import */ var src_app_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/file.service */ 1237);
/* harmony import */ var src_app_shared_utils_custom_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utils/custom-types */ 8175);
/* harmony import */ var src_app_shared_utils_shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/shared-utils */ 409);
/* harmony import */ var _service_projection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/projection.service */ 4174);
/* harmony import */ var src_app_data_service_symbol_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/symbol.service */ 9636);
/* harmony import */ var src_app_data_service_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/status.service */ 6649);
/* harmony import */ var src_app_data_service_pcomment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/pcomment.service */ 6304);
/* harmony import */ var src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/service/toast.service */ 8521);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_service_routing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/service/routing.service */ 8602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-svg-icon */ 2183);
/* harmony import */ var _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/loading-template/loading-template.component */ 2142);
/* harmony import */ var _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/rounded-button/rounded-button.component */ 1626);
/* harmony import */ var _shared_components_form_label_form_label_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/form-label/form-label.component */ 3595);
/* harmony import */ var _shared_components_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/close-button/close-button.component */ 2907);
/* harmony import */ var _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/validation-error/validation-error.component */ 7711);
/* harmony import */ var _shared_components_text_button_text_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/components/text-button/text-button.component */ 8724);




























function ProjectionMutationComponent_ng_container_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-rounded-button", 45)(2, "app-rounded-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", ctx_r5.cancelRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("text", ctx_r5.buttonType)("bgColor", ctx_r5.buttonColor);
  }
}

function ProjectionMutationComponent_ng_container_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const symbol_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", symbol_r10.id_sym);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](symbol_r10.name_sym);
  }
}

function ProjectionMutationComponent_ng_container_0_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const timeframe_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", timeframe_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](timeframe_r11);
  }
}

function ProjectionMutationComponent_ng_container_0_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const status_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", status_r12.id_st);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](status_r12.name_st);
  }
}

function ProjectionMutationComponent_ng_container_0_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 47)(1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "File uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "app-text-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("clickEvent", function ProjectionMutationComponent_ng_container_0_div_54_Template_app_text_button_clickEvent_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r13.removeUploadedFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}

const _c0 = function () {
  return {
    "height.px": 32,
    "width.px": 32
  };
};

function ProjectionMutationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngSubmit", function ProjectionMutationComponent_ng_container_0_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r15.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "app-close-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, ProjectionMutationComponent_ng_container_0_div_5_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 8)(7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "app-form-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 12)(12, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, ProjectionMutationComponent_ng_container_0_ng_container_13_Template, 3, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "app-validation-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "app-form-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 17)(19, "select", 18)(20, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, "BUY");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23, "SELL");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](24, "app-validation-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](26, "app-form-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](28, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](30, "app-form-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "div", 25)(32, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](33, ProjectionMutationComponent_ng_container_0_ng_container_33_Template, 3, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](34, "app-validation-error", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](36, "app-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](37, "div", 29)(38, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](39, ProjectionMutationComponent_ng_container_0_ng_container_39_Template, 3, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](40, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](41, "app-validation-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](43, "app-form-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](44, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](45, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "div", 36)(47, "button", 37)(48, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](49, "svg-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "div", 40)(51, "h5", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](52, "Upload chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](53, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](54, ProjectionMutationComponent_ng_container_0_div_54_Template, 4, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r0.projectionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", ctx_r0.closeRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r0.isMutationAdd)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", ctx_r0.formType, " PROJECTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](14, 14, ctx_r0.symbols$));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx_r0.dateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r0.timeframes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](40, 16, ctx_r0.statuses$));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](18, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("uploader", ctx_r0.uploader);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.isFileUploaded);
  }
}

function ProjectionMutationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-loading-template");
  }
}

function ProjectionMutationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-rounded-button", 46);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("text", ctx_r4.buttonType)("bgColor", ctx_r4.buttonColor);
  }
}

class ProjectionMutationComponent {
  constructor(formBuilder, projectionService, symbolService, statusService, commentService, toastService, router, activatedRoute, routingService) {
    this.formBuilder = formBuilder;
    this.projectionService = projectionService;
    this.symbolService = symbolService;
    this.statusService = statusService;
    this.commentService = commentService;
    this.toastService = toastService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.routingService = routingService;
    this.isLoading = false;
    this.errors = [];
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_18__.FileUploader({
      url: (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.inject)(src_app_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService).fileUploadUri,
      itemAlias: 'chart'
    });
    this.chartFileName = '';
    this.idComment = undefined;
    this.symbols$ = this.symbolService.getSymbols();
    this.statuses$ = this.statusService.getStatuses();
    this.timeframes = Object.values(src_app_data_models_timeframe__WEBPACK_IMPORTED_MODULE_1__.Timeframe).filter(value => typeof value !== 'number'); //CONTROLS

    this.id = this.formBuilder.control(null);
    this.symbol = this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required);
    this.orderType = this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required);
    this.date = this.formBuilder.control(null);
    this.timeframe = this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required);
    this.status = this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required);
    this.comment = this.formBuilder.control(null);
    this.projectionForm = this.formBuilder.group({
      id: this.id,
      symbol: this.symbol,
      orderType: this.orderType,
      date: this.date,
      timeframe: this.timeframe,
      status: this.status,
      comment: this.comment
    });

    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };

    this.uploader.onCompleteItem = (item, response, status, headers) => {
      this.chartFileName = JSON.parse(response);
      console.log('Uploaded successfully...', status);
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const id = _this.activatedRoute.snapshot.params['id'];

      if (id) {
        const projectionDetails = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this.projectionService.getProjection(id));

        if (projectionDetails) {
          _this.setInitialFormStateProj(projectionDetails);
        }

        const comment = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this.commentService.getComment(id));

        if (comment) {
          _this.setInitialFormStateComment(comment);
        }
      }
    })();
  }

  get isFileUploaded() {
    return this.uploader.queue.length > 0;
  }

  get mutation() {
    if (this.activatedRoute.snapshot.params['id']) {
      return src_app_shared_utils_custom_types__WEBPACK_IMPORTED_MODULE_3__.MutationType.EDIT;
    }

    return src_app_shared_utils_custom_types__WEBPACK_IMPORTED_MODULE_3__.MutationType.ADD;
  }

  get isMutationAdd() {
    return this.mutation === src_app_shared_utils_custom_types__WEBPACK_IMPORTED_MODULE_3__.MutationType.ADD;
  } //if is add projection OR we are on edit and we don't have a comment, we create one


  get isCreateCommentFromEdit() {
    return this.isMutationAdd || !this.idComment;
  }

  get closeRoute() {
    return this.isMutationAdd ? '../' : '../../';
  }

  get cancelRoute() {
    return '../../' + this.projectionForm.value.id;
  }

  get buttonType() {
    return this.isMutationAdd ? 'Add' : 'Save';
  }

  get formType() {
    return this.isMutationAdd ? 'ADD' : 'EDIT';
  }

  get buttonColor() {
    return this.isMutationAdd ? 'bg-green' : 'bg-orange';
  }

  get dateValue() {
    return "${this.projectionForm.get('date')!.value} | date: 'yyyy-MM-dd'";
  }

  onAddProjection(projectionCreateInput) {
    return this.projectionService.addProjection(projectionCreateInput);
  }

  onUpdateProjection(projectionUpdateInput) {
    return this.projectionService.updateProjection(projectionUpdateInput);
  }

  onAddComment(commentCreateInput) {
    return this.commentService.addComment(commentCreateInput);
  }

  onUpdateComment(commentUpdateInput) {
    return this.commentService.updateComment(commentUpdateInput);
  }

  removeUploadedFile() {
    this.uploader.clearQueue();
  }

  setInitialFormStateProj(projectionDetails) {
    this.id.setValue(projectionDetails.id);
    this.symbol.setValue(projectionDetails.symbol.id_sym);
    this.orderType.setValue(projectionDetails.updown ? 1 : 0);
    this.date.setValue((0,src_app_shared_utils_shared_utils__WEBPACK_IMPORTED_MODULE_4__.formatDate)(projectionDetails.date));
    this.chartFileName = projectionDetails.graph;
    this.timeframe.setValue(projectionDetails.timeframe);
    this.status.setValue(projectionDetails.status.id_st);
  }

  setInitialFormStateComment(comment) {
    this.idComment = comment.id_pc;
    this.comment.setValue(comment.pcomment);
  }

  handleUploadChart() {
    var _this2 = this;

    return (0,C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.isLoading = true;

        if (_this2.isFileUploaded) {
          const fileItem = _this2.uploader.queue[_this2.uploader.queue.length - 1];
          const uploadPromise = new Promise(resolve => {
            _this2.uploaderSubscription = _this2.uploader.response.subscribe(res => {
              _this2.chartFileName = JSON.parse(res).filename;
              resolve();
            });
          });
          fileItem.upload();
          _this2.isLoading = false;
          return uploadPromise;
        }
      } catch (e) {
        _this2.errors = [..._this2.errors, e.message];
      } finally {
        _this2.isLoading = false;
      }
    })();
  }

  handleMutationProjection(projectionInput) {
    var _this3 = this;

    return (0,C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this3.isLoading = true;
        const result = _this3.isMutationAdd ? yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this3.onAddProjection(projectionInput)) : yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this3.onUpdateProjection(projectionInput));

        if (result) {
          _this3.isLoading = false;
          return result;
        }
      } catch (e) {
        _this3.errors = [..._this3.errors, e.message];
      } finally {
        _this3.isLoading = false;
      }
    })();
  }

  handleMutationComment(commentInput) {
    var _this4 = this;

    return (0,C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this4.isLoading = true;
        const result = _this4.isCreateCommentFromEdit ? yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this4.onAddComment(commentInput)) : yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this4.onUpdateComment(commentInput));

        if (result) {
          _this4.isLoading = false;
          return result;
        }
      } catch (e) {
        _this4.errors = [..._this4.errors, e.message];
      } finally {
        _this4.isLoading = false;
      }
    })();
  }

  getProjectionCreateInput() {
    const {
      symbol,
      orderType,
      date,
      timeframe,
      status
    } = this.projectionForm.value;
    return {
      id_sym: symbol,
      updown: orderType,
      date_proj: date,
      graph: this.chartFileName,
      name_tf: timeframe.toString(),
      id_st: status
    };
  }

  getProjectionUpdateInput() {
    const {
      id,
      symbol,
      orderType,
      date,
      timeframe,
      status
    } = this.projectionForm.value;
    return {
      id_proj: id,
      id_sym: symbol,
      updown: orderType,
      date_proj: date,
      graph: this.chartFileName,
      name_tf: timeframe.toString(),
      id_st: status
    };
  }

  getCommentCreateInput(idProj) {
    const {
      comment
    } = this.projectionForm.value;
    return {
      pcomment: comment,
      id_proj: idProj
    };
  }

  getCommentUpdateInput() {
    const {
      id,
      comment
    } = this.projectionForm.value;
    return {
      id_pc: this.idComment,
      pcomment: comment,
      id_proj: id
    };
  }

  onSubmit() {
    var _this5 = this;

    return (0,C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.projectionForm.invalid) {
        _this5.toastService.error({
          message: 'Invalid form!'
        });

        return;
      }

      yield _this5.handleUploadChart(); // wait to load this.chartFileName

      const projectionInput = _this5.isMutationAdd ? _this5.getProjectionCreateInput() : _this5.getProjectionUpdateInput();
      const projId = yield _this5.handleMutationProjection(projectionInput);
      const comment = _this5.projectionForm.value.comment;

      if (projId && comment) {
        const commentInput = _this5.isCreateCommentFromEdit ? _this5.getCommentCreateInput(projId) : _this5.getCommentUpdateInput();

        _this5.handleMutationComment(commentInput);
      }

      if (_this5.errors.length === 0) {
        const operation = _this5.isMutationAdd ? 'created' : 'updated';

        _this5.toastService.success({
          message: `Projection ${operation} successfully`
        });

        _this5.routingService.navigatePreservingQueryParams([`${_this5.closeRoute}${projId}`], _this5.router, _this5.activatedRoute);
      } else {
        _this5.errors.forEach(error => {
          _this5.toastService.error({
            message: error
          });
        });
      }
    })();
  }

  ngOnDestroy() {
    if (this.uploaderSubscription) {
      this.uploaderSubscription.unsubscribe();
    }
  }

}

ProjectionMutationComponent.ɵfac = function ProjectionMutationComponent_Factory(t) {
  return new (t || ProjectionMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_service_projection_service__WEBPACK_IMPORTED_MODULE_5__.ProjectionService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_data_service_symbol_service__WEBPACK_IMPORTED_MODULE_6__.SymbolService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_data_service_status_service__WEBPACK_IMPORTED_MODULE_7__.StatusService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_data_service_pcomment_service__WEBPACK_IMPORTED_MODULE_8__.ProjectionCommentService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_9__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_core_service_routing_service__WEBPACK_IMPORTED_MODULE_10__.RoutingService));
};

ProjectionMutationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: ProjectionMutationComponent,
  selectors: [["app-projection-mutation"]],
  decls: 5,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], ["addSingleBtn", ""], [3, "formGroup", "ngSubmit"], [1, "p-8", "bg-dark"], [1, "flex", "justify-between"], [3, "routerLink"], ["class", "flex flex-row items-center space-x-5", 4, "ngIf", "ngIfElse"], [1, "p-8"], [1, "text-white", "font-semibold"], [1, "flex", "flex-row", "pt-5"], ["text", "Select symbol"], [1, "pl-10"], ["name", "symbolSelect", "formControlName", "symbol", 1, "rounded"], [4, "ngFor", "ngForOf"], ["for", "symbol", "fieldName", "symbol"], ["text", "Select order type"], [1, "pl-[17px]"], ["name", "orderTypeSelect", "formControlName", "orderType", 1, "rounded"], [3, "value"], ["for", "orderType", "fieldName", "order type"], ["text", "Select date"], [1, "pl-[60px]"], ["type", "date", "formControlName", "date", 1, "rounded", 3, "value"], ["text", "Select timeframe"], [1, "pl-5"], ["name", "timeframeSelect", "formControlName", "timeframe", 1, "rounded"], ["for", "timeframe", "fieldName", "timeframe"], ["text", "Select status"], [1, "pl-[50px]"], ["name", "statusSelect", "formControlName", "status", 1, "rounded"], ["for", "status", "fieldName", "status"], [1, "flex", "items-center", "flex-row", "pt-5"], ["text", "Comment"], [1, "pl-[68px]"], ["name", "commentSelect", "formControlName", "comment", "cols", "30", "rows", "5", 1, "rounded"], [1, "flex", "items-center", "flex-row", "pt-10"], ["type", "button"], [1, "flex", "flex-row", "bg-red-violet", "rounded", "text-white", "items-center", "font-semibold", "p-3"], ["src", "assets/svg/graphics.svg", 3, "svgStyle"], [1, "pl-2"], [1, "text-center"], ["type", "file", "name", "chart", "ng2FileSelect", "", 1, "hidden", 3, "uploader"], ["class", "flex flex-row items-center pl-4 space-x-2", 4, "ngIf"], [1, "flex", "flex-row", "items-center", "space-x-5"], ["text", "Cancel", "bgColor", "bg-gray-400", 3, "routerLink"], ["type", "submit", 3, "text", "bgColor"], [1, "flex", "flex-row", "items-center", "pl-4", "space-x-2"], [1, "text-white"], ["buttonText", "Cancel", "buttonClass", "bg-red text-white rounded p-1", 3, "clickEvent"]],
  template: function ProjectionMutationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, ProjectionMutationComponent_ng_container_0_Template, 55, 19, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, ProjectionMutationComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, ProjectionMutationComponent_ng_template_3_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControlName, angular_svg_icon__WEBPACK_IMPORTED_MODULE_23__.SvgIconComponent, _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_11__.LoadingTemplateComponent, _shared_components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_12__.RoundedButtonComponent, _shared_components_form_label_form_label_component__WEBPACK_IMPORTED_MODULE_13__.FormLabelComponent, _shared_components_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_14__.CloseButtonComponent, _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_15__.ValidationErrorComponent, _shared_components_text_button_text_button_component__WEBPACK_IMPORTED_MODULE_16__.TextButtonComponent, ng2_file_upload__WEBPACK_IMPORTED_MODULE_18__.FileSelectDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 9391:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/projection/pages/view-chart/view-chart.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewChartComponent": () => (/* binding */ ViewChartComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_projection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/projection.service */ 4174);
/* harmony import */ var src_app_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/file.service */ 1237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/toast.service */ 8521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/loading-template/loading-template.component */ 2142);
/* harmony import */ var _shared_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/label/label.component */ 7827);
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/card/card.component */ 9219);
/* harmony import */ var _shared_components_back_to_back_to_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/back-to/back-to.component */ 52);
/* harmony import */ var angular_tradingview_widget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-tradingview-widget */ 6623);














function ViewChartComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-card")(2, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 9)(5, "div", 10)(6, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Timeframe");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-label", 13)(18, "app-label", 13)(19, "app-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "app-label", 13)(22, "app-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const projection_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", projection_r3.symbol.name_sym);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", projection_r3.updown ? "LONG" : "SHORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](20, 5, projection_r3.date, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", projection_r3.timeframe);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", projection_r3.status.name_st);
  }
}

function ViewChartComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loading-template");
  }
}

var IntervalTypes;

(function (IntervalTypes) {
  IntervalTypes["D"] = "D";
  IntervalTypes["W"] = "W";
})(IntervalTypes || (IntervalTypes = {}));

var Themes;

(function (Themes) {
  Themes["LIGHT"] = "Light";
  Themes["DARK"] = "Dark";
})(Themes || (Themes = {}));

class ViewChartComponent {
  constructor(projectionService, fileService, activatedRoute, sanitizer, toastService) {
    this.projectionService = projectionService;
    this.fileService = fileService;
    this.activatedRoute = activatedRoute;
    this.sanitizer = sanitizer;
    this.toastService = toastService;
  }

  ngOnInit() {
    this.projection$ = this.activatedRoute.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(params => {
      const id = params['id'];
      return this.projectionService.getProjection(id);
    }));
    const intervalMapping = {
      M1: '1',
      M3: '3',
      M5: '5',
      M15: '15',
      M30: '30',
      H1: '60',
      H2: '120',
      H3: '180',
      D: IntervalTypes.D,
      W: IntervalTypes.W
    };
    this.projection$.subscribe(projection => {
      this.widgetConfig = {
        symbol: projection.symbol.name_sym,
        interval: intervalMapping[projection.timeframe],
        theme: Themes.DARK,
        widgetType: 'widget'
      };
    });
    const filename = this.activatedRoute.snapshot.queryParamMap.get('fileName');

    if (filename) {
      this.downloadFile(filename);
    }
  }

  downloadFile(filename) {
    this.fileSubscription = this.fileService.downloadFile(filename).subscribe(data => {
      const blob = new Blob([data], {
        type: 'image/png'
      });
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
    }, error => this.toastService.error({
      message: error
    }));
  }

  ngOnDestroy() {
    this.fileSubscription?.unsubscribe();
    this.projectionSubscription?.unsubscribe();
  }

}

ViewChartComponent.ɵfac = function ViewChartComponent_Factory(t) {
  return new (t || ViewChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_projection_service__WEBPACK_IMPORTED_MODULE_0__.ProjectionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_file_service__WEBPACK_IMPORTED_MODULE_1__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
};

ViewChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ViewChartComponent,
  selectors: [["app-view-chart"]],
  decls: 10,
  vars: 6,
  consts: [[1, "pt-5", "pl-5"], ["backText", "BACK TO PROJECTIONS", "backTo", "../../"], [1, "flex", "flex-row", "p-5"], [1, "flex", "flex-col"], [4, "ngIf", "ngIfElse"], ["alt", "chart image", 3, "src"], [3, "widgetConfig"], ["loading", ""], [1, "text-xl", "font-bold", "mb-2"], [1, "flex", "flex-row", "space-x-8"], [1, "flex", "flex-col", "space-y-2"], [1, "font-semibold"], [1, "flex", "flex-col", "space-y-3"], ["bgColor", "bg-dark-gray", "textColor", "text-white", 3, "text"]],
  template: function ViewChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-back-to", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ViewChartComponent_ng_container_4_Template, 23, 8, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "tradingview-widget", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ViewChartComponent_ng_template_8_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 4, ctx.projection$))("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("widgetConfig", ctx.widgetConfig);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_3__.LoadingTemplateComponent, _shared_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__.LabelComponent, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__.CardComponent, _shared_components_back_to_back_to_component__WEBPACK_IMPORTED_MODULE_6__.BackToComponent, angular_tradingview_widget__WEBPACK_IMPORTED_MODULE_12__.TradingviewWidgetComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 8692:
/*!*****************************************************************!*\
  !*** ./src/app/modules/projection/projection-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectionRoutingModule": () => (/* binding */ ProjectionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_projection_projection_details_projection_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/projection/projection-details/projection-details.component */ 2204);
/* harmony import */ var _pages_projection_projection_list_projection_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/projection/projection-list/projection-list.component */ 9483);
/* harmony import */ var _pages_projection_projection_mutation_projection_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/projection/projection-mutation/projection-mutation.component */ 7659);
/* harmony import */ var _pages_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/view-chart/view-chart.component */ 9391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    {
        path: 'view-chart/:id',
        component: _pages_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_3__.ViewChartComponent,
    },
    {
        path: '',
        component: _pages_projection_projection_list_projection_list_component__WEBPACK_IMPORTED_MODULE_1__.ProjectionListComponent,
        children: [
            {
                path: 'add',
                component: _pages_projection_projection_mutation_projection_mutation_component__WEBPACK_IMPORTED_MODULE_2__.ProjectionMutationComponent,
            },
            {
                path: 'edit/:id',
                component: _pages_projection_projection_mutation_projection_mutation_component__WEBPACK_IMPORTED_MODULE_2__.ProjectionMutationComponent,
            },
            {
                path: ':id',
                component: _pages_projection_projection_details_projection_details_component__WEBPACK_IMPORTED_MODULE_0__.ProjectionDetailsComponent,
            },
        ],
    },
];
class ProjectionRoutingModule {
}
ProjectionRoutingModule.ɵfac = function ProjectionRoutingModule_Factory(t) { return new (t || ProjectionRoutingModule)(); };
ProjectionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProjectionRoutingModule });
ProjectionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProjectionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 7385:
/*!*********************************************************!*\
  !*** ./src/app/modules/projection/projection.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectionModule": () => (/* binding */ ProjectionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var angular_tradingview_widget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-tradingview-widget */ 6623);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ 4896);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _pages_projection_projection_details_projection_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/projection/projection-details/projection-details.component */ 2204);
/* harmony import */ var _pages_projection_projection_list_projection_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/projection/projection-list/projection-list.component */ 9483);
/* harmony import */ var _pages_projection_projection_list_table_projection_table_projection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/projection/projection-list/table-projection/table-projection.component */ 4904);
/* harmony import */ var _pages_projection_projection_mutation_projection_mutation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/projection/projection-mutation/projection-mutation.component */ 7659);
/* harmony import */ var _pages_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/view-chart/view-chart.component */ 9391);
/* harmony import */ var _projection_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projection-routing.module */ 8692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);












class ProjectionModule {
}
ProjectionModule.ɵfac = function ProjectionModule_Factory(t) { return new (t || ProjectionModule)(); };
ProjectionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ProjectionModule });
ProjectionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _projection_routing_module__WEBPACK_IMPORTED_MODULE_6__.ProjectionRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__.FileUploadModule,
        angular_tradingview_widget__WEBPACK_IMPORTED_MODULE_11__.TradingviewWidgetModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProjectionModule, { declarations: [_pages_projection_projection_list_projection_list_component__WEBPACK_IMPORTED_MODULE_2__.ProjectionListComponent,
        _pages_projection_projection_list_table_projection_table_projection_component__WEBPACK_IMPORTED_MODULE_3__.TableProjectionComponent,
        _pages_projection_projection_mutation_projection_mutation_component__WEBPACK_IMPORTED_MODULE_4__.ProjectionMutationComponent,
        _pages_projection_projection_details_projection_details_component__WEBPACK_IMPORTED_MODULE_1__.ProjectionDetailsComponent,
        _pages_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_5__.ViewChartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _projection_routing_module__WEBPACK_IMPORTED_MODULE_6__.ProjectionRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__.FileUploadModule,
        angular_tradingview_widget__WEBPACK_IMPORTED_MODULE_11__.TradingviewWidgetModule] }); })();


/***/ }),

/***/ 4174:
/*!******************************************************************!*\
  !*** ./src/app/modules/projection/service/projection.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectionService": () => (/* binding */ ProjectionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/toast.service */ 8521);





class ProjectionService {
    constructor(http, toastService) {
        this.http = http;
        this.toastService = toastService;
        this.apiServerUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/projections`;
        this.fetchSignal = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.DEFAULT_REFETCH_INTERVAL = 5000;
        this.projections$ = this.fetchSignal
            .asObservable()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.getProjections()));
    }
    refetch() {
        this.fetchSignal.next(null);
    }
    setRefetchInterval(interval) {
        setInterval(() => {
            this.refetch();
        }, interval ?? this.DEFAULT_REFETCH_INTERVAL);
    }
    getProjections() {
        return this.http.get(`${this.apiServerUrl}`);
    }
    getProjection(projectionId) {
        return this.http.get(`${this.apiServerUrl}/${projectionId}`);
    }
    addProjection(projectionCreateInput) {
        return this.http.post(`${this.apiServerUrl}`, projectionCreateInput).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
            this.refetch();
            return res;
        }, (error) => {
            this.toastService.error({
                message: error.message,
            });
        }));
    }
    updateProjection(projection) {
        return this.http
            .put(`${this.apiServerUrl}/${projection.id_proj}`, projection)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
            this.refetch();
            return res;
        }, (error) => {
            this.toastService.error({
                message: error.message,
            });
        }));
    }
    deleteProjection(projectionId) {
        this.deleteSubscription = this.http
            .delete(`${this.apiServerUrl}/${projectionId}`)
            .subscribe(() => {
            this.toastService.success({
                message: 'Projection deleted successfully',
            });
            this.refetch();
        }, (error) => {
            this.toastService.error({
                message: error.message,
            });
        });
    }
    ngOnDestroy() {
        this.deleteSubscription?.unsubscribe();
    }
}
ProjectionService.ɵfac = function ProjectionService_Factory(t) { return new (t || ProjectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_core_service_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService)); };
ProjectionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ProjectionService, factory: ProjectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1529:
/*!************************************************************************!*\
  !*** ./src/app/modules/stats/pages/view-stats/view-stats.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewStatsComponent": () => (/* binding */ ViewStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_chart_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/chart/chart.component */ 2620);
/* harmony import */ var _shared_components_hope_hope_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/hope/hope.component */ 5226);
/* harmony import */ var _shared_components_trimester_selector_trimester_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/trimester-selector/trimester-selector.component */ 6971);
/* harmony import */ var _shared_components_year_selector_year_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/year-selector/year-selector.component */ 5263);





class ViewStatsComponent {
}
ViewStatsComponent.ɵfac = function ViewStatsComponent_Factory(t) { return new (t || ViewStatsComponent)(); };
ViewStatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ViewStatsComponent, selectors: [["app-view-stats"]], decls: 9, vars: 0, consts: [[1, "flex", "justify-center", "pt-10"], [1, "flex", "flex-col", "w-1/2"], [1, "flex", "justify-center", "items-center", "space-x-4"], [1, "mt-10", "p-10", "bg-light-gray", "rounded"], ["chartType", "line"], ["chartType", "pie"]], template: function ViewStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-trimester-selector")(4, "app-year-selector");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-chart", 4)(7, "app-chart", 5)(8, "app-hope");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } }, dependencies: [_shared_components_chart_chart_component__WEBPACK_IMPORTED_MODULE_0__.ChartComponent, _shared_components_hope_hope_component__WEBPACK_IMPORTED_MODULE_1__.HopeComponent, _shared_components_trimester_selector_trimester_selector_component__WEBPACK_IMPORTED_MODULE_2__.TrimesterSelectorComponent, _shared_components_year_selector_year_selector_component__WEBPACK_IMPORTED_MODULE_3__.YearSelectorComponent], encapsulation: 2 });


/***/ }),

/***/ 1078:
/*!***********************************************!*\
  !*** ./src/app/modules/stats/stats.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsModule": () => (/* binding */ StatsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _pages_view_stats_view_stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/view-stats/view-stats.component */ 1529);
/* harmony import */ var _stats_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stats.routing.module */ 6928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class StatsModule {
}
StatsModule.ɵfac = function StatsModule_Factory(t) { return new (t || StatsModule)(); };
StatsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: StatsModule });
StatsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _stats_routing_module__WEBPACK_IMPORTED_MODULE_2__.StatsRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StatsModule, { declarations: [_pages_view_stats_view_stats_component__WEBPACK_IMPORTED_MODULE_1__.ViewStatsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _stats_routing_module__WEBPACK_IMPORTED_MODULE_2__.StatsRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 6928:
/*!*******************************************************!*\
  !*** ./src/app/modules/stats/stats.routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsRoutingModule": () => (/* binding */ StatsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_view_stats_view_stats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/view-stats/view-stats.component */ 1529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'view-stats', pathMatch: 'full' },
    {
        path: 'view-stats',
        component: _pages_view_stats_view_stats_component__WEBPACK_IMPORTED_MODULE_0__.ViewStatsComponent,
    },
];
class StatsRoutingModule {
}
StatsRoutingModule.ɵfac = function StatsRoutingModule_Factory(t) { return new (t || StatsRoutingModule)(); };
StatsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StatsRoutingModule });
StatsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StatsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 52:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/back-to/back-to.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackToComponent": () => (/* binding */ BackToComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _text_icon_button_text_icon_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../text-icon-button/text-icon-button.component */ 9807);



class BackToComponent {
    constructor() {
        this.backText = 'Back previous';
        this.backTo = '../';
    }
}
BackToComponent.ɵfac = function BackToComponent_Factory(t) { return new (t || BackToComponent)(); };
BackToComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BackToComponent, selectors: [["app-back-to"]], inputs: { backText: "backText", backTo: "backTo" }, decls: 1, vars: 2, consts: [["buttonClass", "flex flex-row items-center space-x-1 text-white font-semibold", "iconSource", "assets/svg/arrow-left.svg", 3, "buttonText", "routerLink"]], template: function BackToComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-text-icon-button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("buttonText", ctx.backText)("routerLink", ctx.backTo);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _text_icon_button_text_icon_button_component__WEBPACK_IMPORTED_MODULE_0__.TextIconButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 9219:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/card/card.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class CardComponent {
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "bg-gray-200", "p-4", "rounded", "shadow"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 2620:
/*!************************************************************!*\
  !*** ./src/app/shared/components/chart/chart.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartComponent": () => (/* binding */ ChartComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_service_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/chart.service */ 3657);
/* harmony import */ var src_app_modules_operation_service_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/operation/service/operation.service */ 624);





class ChartComponent {
  constructor() {
    this.operationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_modules_operation_service_operation_service__WEBPACK_IMPORTED_MODULE_2__.OperationService);
    this.chartService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_core_service_chart_service__WEBPACK_IMPORTED_MODULE_1__.ChartService);
    this.data = [];
    this.chartType = 'line';
    this.operationData$ = this.operationService.operations$;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (_this.chartType) {
        case 'line':
          yield new Promise(resolve => {
            _this.subscription = _this.operationData$.subscribe(operations => {
              _this.data = operations.filter(operation => operation.account.id_ac === 1).sort((a, b) => new Date(a.dateOpen).getTime() - new Date(b.dateOpen).getTime()).reduce((accumulatedData, operation) => {
                const previousTotal = accumulatedData.length > 0 ? accumulatedData[accumulatedData.length - 1] : 0;
                const currentPoints = operation.points ?? 0;
                const newTotal = previousTotal + currentPoints;
                accumulatedData.push(newTotal);
                return accumulatedData;
              }, []);

              _this.chartService.updateChart(_this.data, _this.chartType);

              resolve();
            });
          });

          _this.chartService.initializeLineChart(_this.data);

          break;

        case 'pie':
          yield new Promise(resolve => {
            _this.subscription = _this.operationData$.subscribe(operations => {
              _this.data = operations.filter(operation => operation.account.id_ac === 1).map(({
                points
              }) => points ?? null);

              _this.chartService.updateChart(_this.data, _this.chartType);

              resolve();
            });
          });

          _this.chartService.initializePieChart(_this.data);

          break;
      }
    })();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

ChartComponent.ɵfac = function ChartComponent_Factory(t) {
  return new (t || ChartComponent)();
};

ChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ChartComponent,
  selectors: [["app-chart"]],
  inputs: {
    chartType: "chartType"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "id"]],
  template: function ChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.chartType);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 2907:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/close-button/close-button.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseButtonComponent": () => (/* binding */ CloseButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);



class CloseButtonComponent {
    constructor() {
        this.routerLink = '/';
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
CloseButtonComponent.ɵfac = function CloseButtonComponent_Factory(t) { return new (t || CloseButtonComponent)(); };
CloseButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CloseButtonComponent, selectors: [["app-close-button"]], inputs: { routerLink: "routerLink" }, outputs: { closeEvent: "closeEvent" }, decls: 2, vars: 1, consts: [[1, "text-4xl", "font-semibold", "text-white", "inline-block", "transform", "rotate-45", 3, "routerLink", "click"]], template: function CloseButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CloseButtonComponent_Template_a_click_0_listener($event) { return ctx.closeEvent.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.routerLink);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 4897:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/date-picker/date-picker.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerComponent": () => (/* binding */ DatePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ 2183);






const _c0 = function () { return { "width.px": 32 }; };
class DatePickerComponent {
    constructor() {
        this.date = new Date();
        this.bgColor = 'bg-light-gray';
        this.onchangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
        this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute);
    }
    ngOnInit() {
        const initialDate = this.activatedRoute.snapshot.queryParams['date'];
        if (initialDate)
            this.date = new Date(initialDate);
        else {
            this.navigateOnDateChange(); //navigate with initial date (today)
        }
    }
    get value() {
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe('en-US');
        const formattedDate = datePipe.transform(this.date, 'yyyy-MM');
        return formattedDate || '';
    }
    nextMonth() {
        this.date.setMonth(this.date.getMonth() + 1);
        this.navigateOnDateChange();
    }
    previousMonth() {
        this.date.setMonth(this.date.getMonth() - 1);
        this.navigateOnDateChange();
    }
    updateDate(newDate) {
        this.date = newDate ?? new Date();
        this.navigateOnDateChange();
    }
    emitDateChange() {
        this.onchangeEvent.emit(this.date);
    }
    navigateOnDateChange() {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { date: this.value },
            queryParamsHandling: 'merge',
        });
    }
}
DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) { return new (t || DatePickerComponent)(); };
DatePickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatePickerComponent, selectors: [["app-date-picker"]], inputs: { bgColor: "bgColor" }, outputs: { onchangeEvent: "onchangeEvent" }, decls: 7, vars: 7, consts: [[3, "ngClass"], ["src", "assets/svg/go-left.svg", 3, "svgStyle", "click"], ["type", "month", 3, "value", "ngClass", "change"], ["date", ""], ["src", "assets/svg/go-right.svg", 3, "svgStyle", "click"]], template: function DatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button")(2, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatePickerComponent_Template_svg_icon_click_2_listener() { return ctx.previousMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatePickerComponent_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.updateDate(_r0.valueAsDate)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button")(6, "svg-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatePickerComponent_Template_svg_icon_click_6_listener() { return ctx.nextMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "flex flex-nowrap justify-between items-center border border-dark/[.08] rounded-md px-4 gap-4 hover:border-dark " + ctx.bgColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("ngClass", "text-center " + ctx.bgColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent], encapsulation: 2 });


/***/ }),

/***/ 3595:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/form-label/form-label.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormLabelComponent": () => (/* binding */ FormLabelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FormLabelComponent {
    constructor() {
        this.text = '';
    }
}
FormLabelComponent.ɵfac = function FormLabelComponent_Factory(t) { return new (t || FormLabelComponent)(); };
FormLabelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormLabelComponent, selectors: [["app-form-label"]], inputs: { text: "text" }, decls: 2, vars: 1, consts: [[1, "text-white"]], template: function FormLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, encapsulation: 2 });


/***/ }),

/***/ 5226:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/hope/hope.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HopeComponent": () => (/* binding */ HopeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_modules_operation_service_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/operation/service/operation.service */ 624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _label_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label/label.component */ 7827);








const _c0 = function (a0, a1, a2) {
  return {
    "text-dark-green": a0,
    "text-bright-blue": a1,
    "text-red": a2
  };
};

class HopeComponent {
  constructor() {
    this.operationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_modules_operation_service_operation_service__WEBPACK_IMPORTED_MODULE_1__.OperationService);
    this.data = [];
    this.operationData$ = this.operationService.operations$;
    this.targetValue = 0;
    this.counterValue = 0;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_Tomeu_Documents_dev_tradingstatsapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield new Promise(resolve => {
        _this.subscription = _this.operationData$.subscribe(operations => {
          _this.data = operations.filter(operation => operation.account.id_ac === 1).map(({
            points
          }) => points ?? null);
          _this.targetValue = _this.calculateHope(_this.data);
          resolve();
        });
      });

      _this.startCounter();
    })();
  }

  calculateHope(data) {
    // Separate positive and negative values
    const positiveValues = data.filter(value => value !== null && value > 0);
    const negativeValues = data.filter(value => value !== null && value < 0);
    const n_positive = positiveValues.length;
    const n_negative = negativeValues.length;
    const total = positiveValues.length + n_negative;
    const probPositive = n_positive / total; // Calculate mean for positive values

    const sumPositive = positiveValues.reduce((acc, value) => acc + value, 0);
    const meanPositive = (sumPositive ?? 0) / positiveValues.length; // Calculate mean for negative values

    const sumNegative = negativeValues.reduce((acc, value) => acc + value, 0);
    const meanNegative = (sumNegative ?? 0) / negativeValues.length;
    const sum = meanPositive * probPositive + meanNegative * (1 - probPositive);
    return sum;
  }

  startCounter() {
    const delay = 10;
    const duration = 2000;
    const steps = Math.ceil(duration / delay);
    const increment = this.targetValue / steps;
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      this.counterValue = Math.round(increment * currentStep);

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, delay);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

HopeComponent.ɵfac = function HopeComponent_Factory(t) {
  return new (t || HopeComponent)();
};

HopeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HopeComponent,
  selectors: [["app-hope"]],
  decls: 11,
  vars: 7,
  consts: [[1, "text-center", "p-4"], ["bgColor", "bg-dark", "textColor", "text-white", "styles", "inline-flex items-center justify-center rounded-md p-10 font-semibold text-sm"], [1, "flex", "flex-col", "space-y-10"], [1, "font-semibold", "text-base"], [3, "ngClass"], [1, "pl-1"]],
  template: function HopeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "app-label", 1)(3, "div", 2)(4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Hope");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "app-label")(7, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "points");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@counterAnimation", ctx.counterValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](3, _c0, ctx.counterValue > 0, ctx.counterValue === 0, ctx.counterValue < 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.counterValue, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _label_label_component__WEBPACK_IMPORTED_MODULE_2__.LabelComponent],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('counterAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('start', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      opacity: 0
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('end', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      opacity: 1
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('start => end', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('2000ms 10ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      opacity: 1
    }))])])]
  }
});

/***/ }),

/***/ 4055:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/icon-button/icon-button.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconButtonComponent": () => (/* binding */ IconButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-svg-icon */ 2183);



class IconButtonComponent {
    constructor() {
        this.iconSvgStyle = { 'height.px': 32, 'width.px': 32 };
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
IconButtonComponent.ɵfac = function IconButtonComponent_Factory(t) { return new (t || IconButtonComponent)(); };
IconButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconButtonComponent, selectors: [["app-icon-button"]], inputs: { iconSource: "iconSource", iconSvgStyle: "iconSvgStyle", iconSvgClass: "iconSvgClass" }, outputs: { clickEvent: "clickEvent" }, decls: 2, vars: 3, consts: [["type", "button", 3, "click"], [3, "svgClass", "svgStyle", "src"]], template: function IconButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IconButtonComponent_Template_button_click_0_listener($event) { return ctx.clickEvent.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgClass", ctx.iconSvgClass)("svgStyle", ctx.iconSvgStyle)("src", ctx.iconSource);
    } }, dependencies: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__.SvgIconComponent], encapsulation: 2 });


/***/ }),

/***/ 7827:
/*!************************************************************!*\
  !*** ./src/app/shared/components/label/label.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelComponent": () => (/* binding */ LabelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = ["*"];
class LabelComponent {
    constructor() {
        this.text = '';
        this.bgColor = 'bg-light-gray';
        this.textColor = 'text-black';
        this.styles = 'inline-flex items-center justify-center rounded-md px-2 font-semibold text-sm';
    }
}
LabelComponent.ɵfac = function LabelComponent_Factory(t) { return new (t || LabelComponent)(); };
LabelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabelComponent, selectors: [["app-label"]], inputs: { text: "text", bgColor: "bgColor", textColor: "textColor", styles: "styles" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[3, "ngClass"]], template: function LabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bgColor + " " + ctx.textColor + " " + ctx.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], encapsulation: 2 });


/***/ }),

/***/ 2142:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/loading-template/loading-template.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingTemplateComponent": () => (/* binding */ LoadingTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spinner/spinner.component */ 2925);


class LoadingTemplateComponent {
}
LoadingTemplateComponent.ɵfac = function LoadingTemplateComponent_Factory(t) { return new (t || LoadingTemplateComponent)(); };
LoadingTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoadingTemplateComponent, selectors: [["app-loading-template"]], decls: 1, vars: 0, template: function LoadingTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");
    } }, dependencies: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent], encapsulation: 2 });


/***/ }),

/***/ 3502:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function NavbarComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", btn_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", btn_r1.text, " ");
} }
const _c0 = function () { return []; };
const _c1 = ["*"];
class NavbarComponent {
    constructor() {
        this.title = '';
        this.buttons = [];
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { title: "title", buttons: "buttons" }, ngContentSelectors: _c1, decls: 8, vars: 3, consts: [[1, "bg-gray-800"], [1, "sm:px-6", "lg:px-8"], [1, "flex", "items-center", "justify-between", "h-16"], [1, "flex", "items-baseline", "space-x-5"], ["routerLink", "", 1, "text-white", "text-lg", "font-semibold"], ["class", "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "routerLinkActive", "text-white", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "text-white", 1, "text-gray-300", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_a_6_Template, 2, 2, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", (tmp_1_0 = ctx.buttons) !== null && tmp_1_0 !== undefined ? tmp_1_0 : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: [".home[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-left: 2%;\r\n}\r\n\r\n.btn-new[_ngcontent-%COMP%] {\r\n  margin-right: 2%;\r\n  padding: 16px 20px 16px 20px;\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n  line-height: 16px;\r\n  color: #fff;\r\n  background: #5efd71;\r\n  border-radius: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7RUFHbkIsa0JBQWtCO0FBQ3BCOztBQUVBLHNEQUFzRCIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcblxyXG4uYnRuLW5ldyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICBwYWRkaW5nOiAxNnB4IDIwcHggMTZweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM1ZWZkNzE7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4vKkZJWDogbmF2IHNlIHNlcGFyYSBkZXMgbWFyZ2UgZHJldCBwZXIgYSB3aWR0aCA8IDE1OCovXHJcbiJdfQ== */"] });


/***/ }),

/***/ 1626:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/rounded-button/rounded-button.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundedButtonComponent": () => (/* binding */ RoundedButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class RoundedButtonComponent {
    constructor() {
        this.text = '';
        this.bgColor = 'bg-green';
        this.styles = 'rounded-full text-white px-5 py-2';
        this.type = 'button';
        this.disabled = false;
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
RoundedButtonComponent.ɵfac = function RoundedButtonComponent_Factory(t) { return new (t || RoundedButtonComponent)(); };
RoundedButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoundedButtonComponent, selectors: [["app-rounded-button"]], inputs: { text: "text", bgColor: "bgColor", styles: "styles", routerLink: "routerLink", type: "type", disabled: "disabled" }, outputs: { clickEvent: "clickEvent" }, decls: 2, vars: 5, consts: [[3, "ngClass", "routerLink", "type", "disabled", "click"]], template: function RoundedButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoundedButtonComponent_Template_button_click_0_listener($event) { return ctx.clickEvent.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bgColor + " " + ctx.styles)("routerLink", ctx.routerLink)("type", ctx.type)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 2323:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/search-by-text/search-by-text.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchByTextComponent": () => (/* binding */ SearchByTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icon-button/icon-button.component */ 4055);




const _c0 = function () { return { "width.px": 24, "height.px": 24, "opacity": 0.4 }; };
class SearchByTextComponent {
    constructor() {
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
        this.placeholder = '';
    }
}
SearchByTextComponent.ɵfac = function SearchByTextComponent_Factory(t) { return new (t || SearchByTextComponent)(); };
SearchByTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchByTextComponent, selectors: [["app-search-by-text"]], inputs: { searchControl: "searchControl", placeholder: "placeholder" }, decls: 3, vars: 4, consts: [[1, "pl-4", "flex", "justify-between", "space-x-2", "h-10", "items-center", "bg-white", "mt-2", "rounded"], ["iconSource", "assets/svg/search.svg", 3, "iconSvgStyle"], ["type", "text", "autocomplete", "off", 1, "small", "appearance-none", "bg-transparent", "w-full", "border-none", "focus:outline-none", 3, "formControl", "placeholder"]], template: function SearchByTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-icon-button", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconSvgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.searchControl)("placeholder", ctx.placeholder);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__.IconButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 9917:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-right/sidebar-right.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarRightComponent": () => (/* binding */ SidebarRightComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class SidebarRightComponent {
    constructor() { }
}
SidebarRightComponent.ɵfac = function SidebarRightComponent_Factory(t) { return new (t || SidebarRightComponent)(); };
SidebarRightComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarRightComponent, selectors: [["app-sidebar-right"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "h-full", "bg-dark-gray", "flex-grow", "overflow-auto"]], template: function SidebarRightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 2925:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function SpinnerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SpinnerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpinnerComponent {
    constructor() {
        this.type = 'fullscreen';
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { type: "type" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["fullScreen", ""], [1, "spinner"], [1, "flex", "justify-center", "items-center", "h-screen"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "inline")("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["@keyframes spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%], .spinner[_ngcontent-%COMP%]::before, .spinner[_ngcontent-%COMP%]::after {\r\n  width: 30px;\r\n  height: 30px;\r\n  content: '';\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  border: 3px solid transparent;\r\n  border-top-color: #ff6600;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]::before {\r\n  top: -3px;\r\n  left: -3px;\r\n  animation: spin 3.5s linear infinite;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]::after {\r\n  top: -3px;\r\n  left: -3px;\r\n  animation: spin 1.75s linear infinite;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixxQ0FBcUM7QUFDdkMiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzcGluIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLnNwaW5uZXIsXHJcbi5zcGlubmVyOjpiZWZvcmUsXHJcbi5zcGlubmVyOjphZnRlciB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmNjYwMDtcclxufVxyXG4uc3Bpbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLnNwaW5uZXI6OmJlZm9yZSB7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIGxlZnQ6IC0zcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDMuNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi5zcGlubmVyOjphZnRlciB7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIGxlZnQ6IC0zcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDEuNzVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8724:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/text-button/text-button.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextButtonComponent": () => (/* binding */ TextButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



class TextButtonComponent {
    constructor() {
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    emitEvent() {
        this.clickEvent.emit();
    }
}
TextButtonComponent.ɵfac = function TextButtonComponent_Factory(t) { return new (t || TextButtonComponent)(); };
TextButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextButtonComponent, selectors: [["app-text-button"]], inputs: { buttonText: "buttonText", buttonClass: "buttonClass" }, outputs: { clickEvent: "clickEvent" }, decls: 4, vars: 2, consts: [["type", "button", 3, "click"], [2, "flex; flex-row; align-items", "center", 3, "ngClass"], [2, "text-align", "center"]], template: function TextButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextButtonComponent_Template_button_click_0_listener() { return ctx.emitEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.buttonClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonText);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], encapsulation: 2 });


/***/ }),

/***/ 9807:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/text-icon-button/text-icon-button.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextIconButtonComponent": () => (/* binding */ TextIconButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-icon */ 2183);



class TextIconButtonComponent {
    constructor() { }
}
TextIconButtonComponent.ɵfac = function TextIconButtonComponent_Factory(t) { return new (t || TextIconButtonComponent)(); };
TextIconButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextIconButtonComponent, selectors: [["app-text-icon-button"]], inputs: { buttonText: "buttonText", buttonClass: "buttonClass", iconSource: "iconSource", iconSvgStyle: "iconSvgStyle", iconSvgClass: "iconSvgClass" }, decls: 6, vars: 5, consts: [["type", "button"], [2, "flex; flex-row; align-items", "center", 3, "ngClass"], [3, "svgClass", "svgStyle", "src"], [1, "pl-2"], [2, "text-align", "center"]], template: function TextIconButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.buttonClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgClass", ctx.iconSvgClass)("svgStyle", ctx.iconSvgStyle)("src", ctx.iconSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonText);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconComponent], encapsulation: 2 });


/***/ }),

/***/ 6971:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/trimester-selector/trimester-selector.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrimesterSelectorComponent": () => (/* binding */ TrimesterSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TrimesterSelectorComponent {
}
TrimesterSelectorComponent.ɵfac = function TrimesterSelectorComponent_Factory(t) { return new (t || TrimesterSelectorComponent)(); };
TrimesterSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrimesterSelectorComponent, selectors: [["app-trimester-selector"]], decls: 13, vars: 0, consts: [[1, "flex", "flex-row", "space-x-4"], [1, "square-btn", "bg-gray-300"], [1, "text-black"], [1, "square-btn", "bg-dark"], [1, "text-white"]], template: function TrimesterSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1)(2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Q1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3)(5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Q2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3)(8, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Q3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3)(11, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Q4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, encapsulation: 2 });


/***/ }),

/***/ 7711:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/validation-error/validation-error.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationErrorComponent": () => (/* binding */ ValidationErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function ValidationErrorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx_r0.errorText);
} }
class ValidationErrorComponent {
    constructor(control) {
        this.control = control;
    }
    get errorText() {
        const formControl = this.control.form.get(this.for);
        const errorsAndMessages = new Map([
            ['required', `${this.fieldName} required`],
            ['max', `${this.fieldName} can't exceed ${this.maxRange}`],
        ]);
        if (formControl && formControl.touched) {
            const keyOrNull = Object.keys(formControl.errors ?? {}).at(0);
            if (keyOrNull) {
                return (errorsAndMessages.get(keyOrNull) ??
                    `Undefined error message for key ${keyOrNull}`);
            }
        }
        return undefined;
    }
}
ValidationErrorComponent.ɵfac = function ValidationErrorComponent_Factory(t) { return new (t || ValidationErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ControlContainer, 8)); };
ValidationErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidationErrorComponent, selectors: [["app-validation-error"]], inputs: { fieldName: "fieldName", maxRange: "maxRange", for: "for" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "text-red", 3, "innerText"]], template: function ValidationErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ValidationErrorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorText);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 5263:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/year-selector/year-selector.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YearSelectorComponent": () => (/* binding */ YearSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-svg-icon */ 2183);


const _c0 = function (a1) { return { "width.px": 32, "opacity": a1 }; };
class YearSelectorComponent {
    constructor() {
        this.year = 2023;
        this.minYear = 2000;
        this.maxYear = 2100;
        this.previousYear = () => {
            if (this.year > this.minYear) {
                this.year--;
            }
        };
        this.nextYear = () => {
            if (this.year < this.maxYear) {
                this.year++;
            }
        };
    }
    get isPrevDisabled() {
        return this.year <= this.minYear;
    }
    get isNextDisabled() {
        return this.year >= this.maxYear;
    }
}
YearSelectorComponent.ɵfac = function YearSelectorComponent_Factory(t) { return new (t || YearSelectorComponent)(); };
YearSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YearSelectorComponent, selectors: [["app-year-selector"]], decls: 7, vars: 9, consts: [[1, "h-[48px]", "justify-between", "items-center", "flex", "flex-nowrap", "border", "border-dark/[.08]", "rounded-md", "px-4", "gap-4", "bg-white"], [3, "disabled", "click"], ["src", "assets/svg/go-left.svg", 3, "svgStyle"], ["src", "assets/svg/go-right.svg", 3, "svgStyle"]], template: function YearSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearSelectorComponent_Template_button_click_1_listener() { return ctx.previousYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearSelectorComponent_Template_button_click_5_listener() { return ctx.nextYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "svg-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isPrevDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.isPrevDisabled ? 0.4 : 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isNextDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.isNextDisabled ? 0.4 : 1));
    } }, dependencies: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__.SvgIconComponent], encapsulation: 2 });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-svg-icon */ 2183);
/* harmony import */ var _components_back_to_back_to_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/back-to/back-to.component */ 52);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card/card.component */ 9219);
/* harmony import */ var _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chart/chart.component */ 2620);
/* harmony import */ var _components_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/close-button/close-button.component */ 2907);
/* harmony import */ var _components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/date-picker/date-picker.component */ 4897);
/* harmony import */ var _components_form_label_form_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form-label/form-label.component */ 3595);
/* harmony import */ var _components_hope_hope_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/hope/hope.component */ 5226);
/* harmony import */ var _components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/icon-button/icon-button.component */ 4055);
/* harmony import */ var _components_label_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/label/label.component */ 7827);
/* harmony import */ var _components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/loading-template/loading-template.component */ 2142);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3502);
/* harmony import */ var _components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/rounded-button/rounded-button.component */ 1626);
/* harmony import */ var _components_search_by_text_search_by_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search-by-text/search-by-text.component */ 2323);
/* harmony import */ var _components_sidebar_right_sidebar_right_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sidebar-right/sidebar-right.component */ 9917);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/spinner/spinner.component */ 2925);
/* harmony import */ var _components_text_button_text_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/text-button/text-button.component */ 8724);
/* harmony import */ var _components_text_icon_button_text_icon_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/text-icon-button/text-icon-button.component */ 9807);
/* harmony import */ var _components_trimester_selector_trimester_selector_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/trimester-selector/trimester-selector.component */ 6971);
/* harmony import */ var _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/validation-error/validation-error.component */ 7711);
/* harmony import */ var _components_year_selector_year_selector_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/year-selector/year-selector.component */ 5263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);


























class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        angular_svg_icon__WEBPACK_IMPORTED_MODULE_24__.AngularSvgIconModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        angular_svg_icon__WEBPACK_IMPORTED_MODULE_24__.AngularSvgIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__.NavbarComponent,
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__.SpinnerComponent,
        _components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_9__.LoadingTemplateComponent,
        _components_sidebar_right_sidebar_right_component__WEBPACK_IMPORTED_MODULE_13__.SidebarRightComponent,
        _components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_11__.RoundedButtonComponent,
        _components_form_label_form_label_component__WEBPACK_IMPORTED_MODULE_5__.FormLabelComponent,
        _components_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_3__.CloseButtonComponent,
        _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_18__.ValidationErrorComponent,
        _components_label_label_component__WEBPACK_IMPORTED_MODULE_8__.LabelComponent,
        _components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_7__.IconButtonComponent,
        _components_text_icon_button_text_icon_button_component__WEBPACK_IMPORTED_MODULE_16__.TextIconButtonComponent,
        _components_text_button_text_button_component__WEBPACK_IMPORTED_MODULE_15__.TextButtonComponent,
        _components_search_by_text_search_by_text_component__WEBPACK_IMPORTED_MODULE_12__.SearchByTextComponent,
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent,
        _components_back_to_back_to_component__WEBPACK_IMPORTED_MODULE_0__.BackToComponent,
        _components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__.DatePickerComponent,
        _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__.ChartComponent,
        _components_hope_hope_component__WEBPACK_IMPORTED_MODULE_6__.HopeComponent,
        _components_trimester_selector_trimester_selector_component__WEBPACK_IMPORTED_MODULE_17__.TrimesterSelectorComponent,
        _components_year_selector_year_selector_component__WEBPACK_IMPORTED_MODULE_19__.YearSelectorComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_24__.AngularSvgIconModule], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        angular_svg_icon__WEBPACK_IMPORTED_MODULE_24__.AngularSvgIconModule,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__.NavbarComponent,
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__.SpinnerComponent,
        _components_loading_template_loading_template_component__WEBPACK_IMPORTED_MODULE_9__.LoadingTemplateComponent,
        _components_sidebar_right_sidebar_right_component__WEBPACK_IMPORTED_MODULE_13__.SidebarRightComponent,
        _components_rounded_button_rounded_button_component__WEBPACK_IMPORTED_MODULE_11__.RoundedButtonComponent,
        _components_form_label_form_label_component__WEBPACK_IMPORTED_MODULE_5__.FormLabelComponent,
        _components_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_3__.CloseButtonComponent,
        _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_18__.ValidationErrorComponent,
        _components_label_label_component__WEBPACK_IMPORTED_MODULE_8__.LabelComponent,
        _components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_7__.IconButtonComponent,
        _components_text_icon_button_text_icon_button_component__WEBPACK_IMPORTED_MODULE_16__.TextIconButtonComponent,
        _components_text_button_text_button_component__WEBPACK_IMPORTED_MODULE_15__.TextButtonComponent,
        _components_search_by_text_search_by_text_component__WEBPACK_IMPORTED_MODULE_12__.SearchByTextComponent,
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent,
        _components_back_to_back_to_component__WEBPACK_IMPORTED_MODULE_0__.BackToComponent,
        _components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__.DatePickerComponent,
        _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__.ChartComponent,
        _components_hope_hope_component__WEBPACK_IMPORTED_MODULE_6__.HopeComponent,
        _components_trimester_selector_trimester_selector_component__WEBPACK_IMPORTED_MODULE_17__.TrimesterSelectorComponent,
        _components_year_selector_year_selector_component__WEBPACK_IMPORTED_MODULE_19__.YearSelectorComponent] }); })();


/***/ }),

/***/ 8175:
/*!**********************************************!*\
  !*** ./src/app/shared/utils/custom-types.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationType": () => (/* binding */ MutationType)
/* harmony export */ });
var MutationType;
(function (MutationType) {
    MutationType[MutationType["ADD"] = 0] = "ADD";
    MutationType[MutationType["EDIT"] = 1] = "EDIT";
})(MutationType || (MutationType = {}));


/***/ }),

/***/ 409:
/*!**********************************************!*\
  !*** ./src/app/shared/utils/shared-utils.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(inputDate) {
    return inputDate.split('T')[0];
}


/***/ }),

/***/ 505:
/*!*********************************************************!*\
  !*** ./src/app/shared/utils/sidebar-right-animation.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebarRightAnimationSlide": () => (/* binding */ sidebarRightAnimationSlide)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

const sidebarRightAnimationSlide = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'translateX(0)',
        zIndex: 20,
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'translateX(700px)',
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('in => out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease-in')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('out => in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease-out')),
];


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: 'http://localhost:8080',
    bucketHost: 'cellar-c2.services.clever-cloud.com',
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map