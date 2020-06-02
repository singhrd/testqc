function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'quarantine-pilot-covid-19';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_multiselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/multiselect */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-multiselect.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _bar_chart_widget_bar_chart_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./bar-chart-widget/bar-chart-widget.component */
    "./src/app/bar-chart-widget/bar-chart-widget.component.ts");
    /* harmony import */


    var _charts_stacked_bar_chart_stacked_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./charts/stacked-bar-chart/stacked-bar-chart.component */
    "./src/app/charts/stacked-bar-chart/stacked-bar-chart.component.ts");
    /* harmony import */


    var _services_covid_report_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/covid-report.service */
    "./src/app/services/covid-report.service.ts");
    /* harmony import */


    var _line_chart_widget_line_chart_widget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./line-chart-widget/line-chart-widget.component */
    "./src/app/line-chart-widget/line-chart-widget.component.ts");
    /* harmony import */


    var _charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./charts/line-chart/line-chart.component */
    "./src/app/charts/line-chart/line-chart.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_covid_report_service__WEBPACK_IMPORTED_MODULE_11__["CovidReportService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_5__["MultiSelectModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _bar_chart_widget_bar_chart_widget_component__WEBPACK_IMPORTED_MODULE_9__["BarChartWidgetComponent"], _charts_stacked_bar_chart_stacked_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__["StackedBarChartComponent"], _line_chart_widget_line_chart_widget_component__WEBPACK_IMPORTED_MODULE_12__["LineChartWidgetComponent"], _charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_13__["LineChartComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_5__["MultiSelectModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _bar_chart_widget_bar_chart_widget_component__WEBPACK_IMPORTED_MODULE_9__["BarChartWidgetComponent"], _charts_stacked_bar_chart_stacked_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__["StackedBarChartComponent"], _line_chart_widget_line_chart_widget_component__WEBPACK_IMPORTED_MODULE_12__["LineChartWidgetComponent"], _charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_13__["LineChartComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_5__["MultiSelectModule"]],
          providers: [_services_covid_report_service__WEBPACK_IMPORTED_MODULE_11__["CovidReportService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/bar-chart-widget/bar-chart-widget.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/bar-chart-widget/bar-chart-widget.component.ts ***!
    \****************************************************************/

  /*! exports provided: BarChartWidgetComponent */

  /***/
  function srcAppBarChartWidgetBarChartWidgetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarChartWidgetComponent", function () {
      return BarChartWidgetComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_data_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/data-types */
    "./src/app/models/data-types.ts");
    /* harmony import */


    var _services_covid_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/covid-report.service */
    "./src/app/services/covid-report.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _charts_stacked_bar_chart_stacked_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../charts/stacked-bar-chart/stacked-bar-chart.component */
    "./src/app/charts/stacked-bar-chart/stacked-bar-chart.component.ts");

    function BarChartWidgetComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarChartWidgetComponent_div_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

          var loc_r54 = ctx.$implicit;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.selectLocation(loc_r54);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var loc_r54 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loc_r54);
      }
    }

    function BarChartWidgetComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarChartWidgetComponent_div_16_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var snapshot_r57 = ctx.$implicit;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.selectSnapshot(snapshot_r57);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var snapshot_r57 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, snapshot_r57));
      }
    }

    function BarChartWidgetComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarChartWidgetComponent_div_22_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var normalization_r60 = ctx.$implicit;
          var i_r61 = ctx.index;

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.selectNormalization(normalization_r60, i_r61);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var normalization_r60 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, normalization_r60));
      }
    }

    var BarChartWidgetComponent =
    /*#__PURE__*/
    function () {
      function BarChartWidgetComponent(service) {
        _classCallCheck(this, BarChartWidgetComponent);

        this.service = service;
        this.locations = _models_data_types__WEBPACK_IMPORTED_MODULE_1__["LocationsByCountryName"];
        this.snapshots = ['daily', 'cumulative'];
        this.normalizations = ['absolute', 'per-capita'];
        this.yAxisTitles = ['Cases', 'Cases per capita'];
        this.selectedLocation = 'US';
        this.selectedSnapshot = this.snapshots[0];
        this.selectedNormalization = this.normalizations[1];
        this.yAxisTitle = this.yAxisTitles[1];
        this.dataSet = [];
        this.dataLabels = ['Date', 'Active', 'Recovered', 'Deaths'];
      }
      /**
       * Populate the data set for for a given location.
       */


      _createClass(BarChartWidgetComponent, [{
        key: "populateDataSet",
        value: function populateDataSet() {
          var _this = this;

          var displayData = [];
          this.service.getCovidResults(this.selectedLocation, this.selectedSnapshot).subscribe(function (res) {
            if (res.snapshots) {
              res.snapshots.forEach(function (entry) {
                if (_this.selectedNormalization === 'absolute') {
                  displayData.push([entry.date, entry.active, entry.recovered, entry.deaths]);
                } else {
                  displayData.push([entry.date, entry.activeNormalized, entry.recoveredNormalized, entry.deathsNormalized]);
                }
              });
              _this.dataSet = displayData;
            }
          });
        }
        /**
         * Location dropdown callback
         * @param loc - selected location
         */

      }, {
        key: "selectLocation",
        value: function selectLocation(loc) {
          this.selectedLocation = loc;
          this.populateDataSet();
        }
        /**
         * Snapshot type dropdown callback
         * @param snapshot - selected snapshot
         */

      }, {
        key: "selectSnapshot",
        value: function selectSnapshot(snapshot) {
          this.selectedSnapshot = snapshot;
          this.populateDataSet();
        }
        /**
         * Normalization dropdown callback
         * @param normalization - selected normalization
         */

      }, {
        key: "selectNormalization",
        value: function selectNormalization(normalization, idx) {
          this.selectedNormalization = normalization;
          this.yAxisTitle = this.yAxisTitles[idx];
          this.populateDataSet();
        }
        /**
         * Init lifecycle hook
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.populateDataSet();
        }
      }]);

      return BarChartWidgetComponent;
    }();

    BarChartWidgetComponent.ɵfac = function BarChartWidgetComponent_Factory(t) {
      return new (t || BarChartWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_report_service__WEBPACK_IMPORTED_MODULE_2__["CovidReportService"]));
    };

    BarChartWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BarChartWidgetComponent,
      selectors: [["app-bar-chart-widget"]],
      inputs: {
        uuid: "uuid"
      },
      decls: 26,
      vars: 14,
      consts: [[1, "bar-chart-widget"], [1, "card-container"], [1, "card"], [1, "card-title"], [1, "btn-group", "d-flex", "flex-row", "pt-2", "pb-1", "mx-3"], ["dropdown", "", 1, "dropdown"], ["type", "button", "id", "locationDropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "locationDropdown", 1, "dropdown-menu", "scrollable-menu"], [4, "ngFor", "ngForOf"], ["type", "button", "id", "snapshotDropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "snapShotDropdown", 1, "dropdown-menu", "scrollable-menu"], ["type", "button", "id", "normalizationDropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "normalizationDropdown", 1, "dropdown-menu", "scrollable-menu"], [1, "card-body"], [3, "uuid", "inputDataSet", "inputDataLabels", "ylabel"], ["type", "button", 1, "dropdown-item", 3, "click"]],
      template: function BarChartWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Covid-19 Cases by Country ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BarChartWidgetComponent_div_10_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BarChartWidgetComponent_div_16_Template, 4, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BarChartWidgetComponent_div_22_Template, 4, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-stacked-bar-chart", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedLocation, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, ctx.selectedSnapshot), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.snapshots);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 12, ctx.selectedNormalization), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.normalizations);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uuid", ctx.uuid)("inputDataSet", ctx.dataSet)("inputDataLabels", ctx.dataLabels)("ylabel", ctx.yAxisTitle);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _charts_stacked_bar_chart_stacked_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["StackedBarChartComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
      styles: ["div.bar-chart-widget .card-container {\n  margin: 2em;\n}\ndiv.bar-chart-widget .card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\ndiv.bar-chart-widget .card .card-title {\n  margin: 0.5em 0.5em 0 0.5em;\n  padding-bottom: 0.125em;\n}\ndiv.bar-chart-widget .card .card-body {\n  margin: 0.125em 1em 0 1em;\n  border-top: 1px solid lightgray;\n}\ndiv.bar-chart-widget .card div.dropdown {\n  margin: 0 0.5em 0.5em 0;\n  padding-bottom: 0.5em;\n}\ndiv.bar-chart-widget .card div.dropdown .btn {\n  padding: 0.25rem 0.75rem;\n}\ndiv.bar-chart-widget .card div.dropdown .dropdown-menu {\n  max-height: 200px;\n  overflow-y: auto;\n}\ndiv.bar-chart-widget .card div.dropdown .dropdown-item {\n  padding: 0.125rem 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhamRlZXAvd29ya3NwYWNlL3Rlc3RxYy9zcmMvYXBwL2Jhci1jaGFydC13aWRnZXQvYmFyLWNoYXJ0LXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFyLWNoYXJ0LXdpZGdldC9iYXItY2hhcnQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtBQ0FSO0FER0k7RUFDSSwwQ0FBQTtBQ0RSO0FER1E7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0FDRFo7QURJUTtFQUNJLHlCQUFBO0VBQ0EsK0JBQUE7QUNGWjtBREtRO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtBQ0haO0FES1k7RUFDSSx3QkFBQTtBQ0hoQjtBREtZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0hoQjtBREtZO0VBQ0ksd0JBQUE7QUNIaEIiLCJmaWxlIjoic3JjL2FwcC9iYXItY2hhcnQtd2lkZ2V0L2Jhci1jaGFydC13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuYmFyLWNoYXJ0LXdpZGdldCB7XG4gICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAyZW07XG4gICAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBcbiAgICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAuNWVtIC41ZW0gMCAuNWVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IC4xMjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAuMTI1ZW0gMWVtIDAgMWVtO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5kcm9wZG93biB7XG4gICAgICAgICAgICBtYXJnaW46IDAgLjVlbSAuNWVtIDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcblxuICAgICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4xMjVyZW0gMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZGl2LmJhci1jaGFydC13aWRnZXQgLmNhcmQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyZW07XG59XG5kaXYuYmFyLWNoYXJ0LXdpZGdldCAuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbmRpdi5iYXItY2hhcnQtd2lkZ2V0IC5jYXJkIC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAwLjVlbSAwLjVlbSAwIDAuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4xMjVlbTtcbn1cbmRpdi5iYXItY2hhcnQtd2lkZ2V0IC5jYXJkIC5jYXJkLWJvZHkge1xuICBtYXJnaW46IDAuMTI1ZW0gMWVtIDAgMWVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuZGl2LmJhci1jaGFydC13aWRnZXQgLmNhcmQgZGl2LmRyb3Bkb3duIHtcbiAgbWFyZ2luOiAwIDAuNWVtIDAuNWVtIDA7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbn1cbmRpdi5iYXItY2hhcnQtd2lkZ2V0IC5jYXJkIGRpdi5kcm9wZG93biAuYnRuIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xufVxuZGl2LmJhci1jaGFydC13aWRnZXQgLmNhcmQgZGl2LmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5kaXYuYmFyLWNoYXJ0LXdpZGdldCAuY2FyZCBkaXYuZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0ge1xuICBwYWRkaW5nOiAwLjEyNXJlbSAxLjVyZW07XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bar-chart-widget',
          templateUrl: './bar-chart-widget.component.html',
          styleUrls: ['./bar-chart-widget.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _services_covid_report_service__WEBPACK_IMPORTED_MODULE_2__["CovidReportService"]
        }];
      }, {
        uuid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/charts/line-chart/line-chart.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/charts/line-chart/line-chart.component.ts ***!
    \***********************************************************/

  /*! exports provided: LineChartComponent */

  /***/
  function srcAppChartsLineChartLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
      return LineChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["lineContainer"];

    var LineChartComponent =
    /*#__PURE__*/
    function () {
      function LineChartComponent() {
        _classCallCheck(this, LineChartComponent);

        // @Input() uuid: string;
        // @Input() inputDataSet: any[];
        // @Input() inputDataLabels: string[];
        // Widget vars
        this.alive = false; // Data set vars
        // data: Array<ResultsPerDate> = [];
        // dataSet: anychart.data.Set = null;
        // Chart vars

        this.chart = null;
      }

      _createClass(LineChartComponent, [{
        key: "generateChart",
        value: function generateChart() {
          console.log('destroy chart line');
          this.chart = anychart.line(); // get data
          // create data set on our data

          var dataSet = anychart.data.set(this.getData());
          console.log(dataSet); // map data for the first series, take x from the zero column and value from the first column of data set

          var seriesData_1 = dataSet.mapAs({
            'x': 0,
            'value': 1
          }); // map data for the second series, take x from the zero column and value from the second column of data set

          var seriesData_2 = dataSet.mapAs({
            'x': 0,
            'value': 2
          }); // map data for the third series, take x from the zero column and value from the third column of data set

          var seriesData_3 = dataSet.mapAs({
            'x': 0,
            'value': 3
          }); // turn on chart animation

          this.chart.animation(true); // set chart padding

          this.chart.padding([10, 20, 5, 20]); // turn on the crosshair

          this.chart.crosshair().enabled(true).yLabel(false).yStroke(null); // set tooltip mode to point

          this.chart.tooltip().positionMode('point'); // set yAxis title

          this.chart.yAxis().title('Number of Bottles Sold (thousands)');
          this.chart.xAxis().labels().padding(5); // create first series with mapped data

          var series_1 = this.chart.line(seriesData_1);
          series_1.name('Brandy');
          series_1.hovered().markers().enabled(true).type('circle').size(4);
          series_1.tooltip().position('right').anchor('left-center').offsetX(5).offsetY(5); // create second series with mapped data

          var series_2 = this.chart.line(seriesData_2);
          series_2.name('Whiskey');
          series_2.hovered().markers().enabled(true).type('circle').size(4);
          series_2.tooltip().position('right').anchor('left-center').offsetX(5).offsetY(5); // create third series with mapped data

          var series_3 = this.chart.line(seriesData_3);
          series_3.name('Tequila');
          series_3.hovered().markers().enabled(true).type('circle').size(4);
          series_3.tooltip().position('right').anchor('left-center').offsetX(5).offsetY(5); // turn the legend on

          this.chart.legend().enabled(true).fontSize(13).padding([0, 0, 10, 0]); // set container id for the chart

          this.chart.container('lineContainer'); // initiate chart drawing

          this.chart.draw();
        }
      }, {
        key: "getData",
        value: function getData() {
          return [['1986', 3.6, 2.3, 2.8, 11.5], ['1987', 7.1, 4.0, 4.1, 14.1], ['1988', 8.5, 6.2, 5.1, 17.5], ['1989', 9.2, 11.8, 6.5, 18.9], ['1990', 10.1, 13.0, 12.5, 20.8], ['1991', 11.6, 13.9, 18.0, 22.9], ['1992', 16.4, 18.0, 21.0, 25.2], ['1993', 18.0, 23.3, 20.3, 27.0], ['1994', 13.2, 24.7, 19.2, 26.5], ['1995', 12.0, 18.0, 14.4, 25.3], ['1996', 3.2, 15.1, 9.2, 23.4], ['1997', 4.1, 11.3, 5.9, 19.5], ['1998', 6.3, 14.2, 5.2, 17.8], ['1999', 9.4, 13.7, 4.7, 16.2], ['2000', 11.5, 9.9, 4.2, 15.4], ['2001', 13.5, 12.1, 1.2, 14.0], ['2002', 14.8, 13.5, 5.4, 12.5], ['2003', 16.6, 15.1, 6.3, 10.8], ['2004', 18.1, 17.9, 8.9, 8.9], ['2005', 17.0, 18.9, 10.1, 8.0], ['2006', 16.6, 20.3, 11.5, 6.2], ['2007', 14.1, 20.7, 12.2, 5.1], ['2008', 15.7, 21.6, 10, 3.7], ['2009', 12.0, 22.5, 8.9, 1.5]];
        }
        /**
         * Destroy an existing chart before re-writing.
         */

      }, {
        key: "destroyChart",
        value: function destroyChart() {
          console.log('destroy chart line');

          if (this.chart) {
            if (this.chart.container()) {
              this.chart.container().remove();
            }

            this.chart = null;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('line init');
          this.alive = true;
          this.destroyChart();
          this.generateChart(); // this.renderer.setProperty(this.el.nativeElement, 'id', this.uuid);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log('on changes line');
          this.destroyChart();
          this.generateChart();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.alive = false;
        }
      }]);

      return LineChartComponent;
    }();

    LineChartComponent.ɵfac = function LineChartComponent_Factory(t) {
      return new (t || LineChartComponent)();
    };

    LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LineChartComponent,
      selectors: [["app-line-chart"]],
      viewQuery: function LineChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lineContainer = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 0,
      consts: [[1, "line-chart"], ["id", "lineContainer", 1, "chart-container"]],
      template: function LineChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["div.line-chart[_ngcontent-%COMP%]   div.chart-container[_ngcontent-%COMP%] {\n  height: 400px;\n}\ndiv.line-chart[_ngcontent-%COMP%]   div.chart-container.invisible[_ngcontent-%COMP%] {\n  height: 0px;\n}\ndiv.line-chart[_ngcontent-%COMP%]   div.anychart-credits[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhamRlZXAvd29ya3NwYWNlL3Rlc3RxYy9zcmMvYXBwL2NoYXJ0cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXJ0cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FDQVI7QURFUTtFQUNJLFdBQUE7QUNBWjtBREdJO0VBQ0ksYUFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvY2hhcnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5saW5lLWNoYXJ0IHtcbiAgICBkaXYuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcblxuICAgICAgICAmLmludmlzaWJsZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXYuYW55Y2hhcnQtY3JlZGl0cyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSIsImRpdi5saW5lLWNoYXJ0IGRpdi5jaGFydC1jb250YWluZXIge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuZGl2LmxpbmUtY2hhcnQgZGl2LmNoYXJ0LWNvbnRhaW5lci5pbnZpc2libGUge1xuICBoZWlnaHQ6IDBweDtcbn1cbmRpdi5saW5lLWNoYXJ0IGRpdi5hbnljaGFydC1jcmVkaXRzIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-line-chart',
          templateUrl: './line-chart.component.html',
          styleUrls: ['./line-chart.component.scss']
        }]
      }], function () {
        return [];
      }, {
        lineContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['lineContainer']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/charts/stacked-bar-chart/stacked-bar-chart.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/charts/stacked-bar-chart/stacked-bar-chart.component.ts ***!
    \*************************************************************************/

  /*! exports provided: StackedBarChartComponent */

  /***/
  function srcAppChartsStackedBarChartStackedBarChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StackedBarChartComponent", function () {
      return StackedBarChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var anychart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! anychart */
    "./node_modules/anychart/index.js");
    /* harmony import */


    var anychart__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(anychart__WEBPACK_IMPORTED_MODULE_1__);

    var _c0 = ["chartContainer"];

    var StackedBarChartComponent =
    /*#__PURE__*/
    function () {
      /**
       * Component constructor.
       */
      function StackedBarChartComponent(renderer, el) {
        _classCallCheck(this, StackedBarChartComponent);

        this.renderer = renderer;
        this.el = el; // Widget vars

        this.alive = false; // Data set vars

        this.data = [];
        this.dataSet = null; // Chart vars

        this.chart = null;
      }
      /**
       * Generate chart element.
       */


      _createClass(StackedBarChartComponent, [{
        key: "generateChart",
        value: function generateChart() {
          // Create a data set from input data
          this.dataSet = anychart.data.set(this.inputDataSet);
          anychart.graphics.useAbsoluteReferences(false); // Create chart object

          this.chart = anychart.column();
          this.chart.animation(true);
          this.chart.yScale().stackMode('value'); // Create series data

          for (var idx = this.inputDataLabels.length - 1; idx > 0; idx--) {
            // Map data for each series, take x from the zero column and value from the column of data set
            this.chart.column(this.dataSet.mapAs({
              x: 0,
              value: idx,
              label: this.inputDataLabels[idx]
            })).name(this.inputDataLabels[idx]);
          } // Turn on legend


          this.chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]).inverted(true); // Set yAxis labels formatter

          this.chart.yAxis().labels().format('{%Value}{groupsSeparator: }'); // Set titles for axes

          this.chart.yAxis().title(this.ylabel); // Set interactivity hover

          this.chart.interactivity().hoverMode('by-x');
          this.chart.tooltip().displayMode('union');
          this.chart.tooltip().useHtml(true);
          this.chart.tooltip().unionFormat(function () {
            var total = 0;
            var tip = '';
            this.points.forEach(function (element) {
              tip += element.seriesName + ': ' + element.value.toLocaleString() + '<br>';
              total += +element.value;
            });
            return tip + '<strong>Total: ' + total.toLocaleString() + '</strong>';
          }); // Set container id for the chart

          this.chart.container('chartContainer'); // Initiate chart drawing

          this.chart.draw();
        }
        /**
         * Destroy an existing chart before re-writing.
         */

      }, {
        key: "destroyChart",
        value: function destroyChart() {
          if (this.chart) {
            if (this.chart.container()) {
              this.chart.container().remove();
            }

            this.chart = null;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.alive = true;
          this.renderer.setProperty(this.el.nativeElement, 'id', this.uuid);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.destroyChart();
          this.generateChart();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.alive = false;
        }
      }]);

      return StackedBarChartComponent;
    }();

    StackedBarChartComponent.ɵfac = function StackedBarChartComponent_Factory(t) {
      return new (t || StackedBarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    StackedBarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StackedBarChartComponent,
      selectors: [["app-stacked-bar-chart"]],
      viewQuery: function StackedBarChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chartContainer = _t.first);
        }
      },
      inputs: {
        uuid: "uuid",
        inputDataSet: "inputDataSet",
        inputDataLabels: "inputDataLabels",
        ylabel: "ylabel"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 0,
      consts: [[1, "stacked-bar-chart"], ["id", "chartContainer", 1, "chart-container"]],
      template: function StackedBarChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["div.stacked-bar-chart div.chart-container {\n  height: 400px;\n}\ndiv.stacked-bar-chart div.chart-container.invisible {\n  height: 0px;\n}\ndiv.stacked-bar-chart div.anychart-credits {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhamRlZXAvd29ya3NwYWNlL3Rlc3RxYy9zcmMvYXBwL2NoYXJ0cy9zdGFja2VkLWJhci1jaGFydC9zdGFja2VkLWJhci1jaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhcnRzL3N0YWNrZWQtYmFyLWNoYXJ0L3N0YWNrZWQtYmFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtBQ0FSO0FERVE7RUFDSSxXQUFBO0FDQVo7QURHSTtFQUNJLGFBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdGFja2VkLWJhci1jaGFydC9zdGFja2VkLWJhci1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5zdGFja2VkLWJhci1jaGFydCB7XG4gICAgZGl2LmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG5cbiAgICAgICAgJi5pbnZpc2libGUge1xuICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGl2LmFueWNoYXJ0LWNyZWRpdHMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsImRpdi5zdGFja2VkLWJhci1jaGFydCBkaXYuY2hhcnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbmRpdi5zdGFja2VkLWJhci1jaGFydCBkaXYuY2hhcnQtY29udGFpbmVyLmludmlzaWJsZSB7XG4gIGhlaWdodDogMHB4O1xufVxuZGl2LnN0YWNrZWQtYmFyLWNoYXJ0IGRpdi5hbnljaGFydC1jcmVkaXRzIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StackedBarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stacked-bar-chart',
          templateUrl: './stacked-bar-chart.component.html',
          styleUrls: ['./stacked-bar-chart.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        chartContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['chartContainer']
        }],
        uuid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputDataSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputDataLabels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ylabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _bar_chart_widget_bar_chart_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../bar-chart-widget/bar-chart-widget.component */
    "./src/app/bar-chart-widget/bar-chart-widget.component.ts");
    /* harmony import */


    var _line_chart_widget_line_chart_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../line-chart-widget/line-chart-widget.component */
    "./src/app/line-chart-widget/line-chart-widget.component.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 5,
      vars: 1,
      consts: [["role", "navigation", 1, "navbar", "navbar-expand-lg", "navbar-light"], ["href", "#", 1, "navbar-brand", "mb-0", "h1"], [3, "uuid"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quarantine Pilot Covid 19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-bar-chart-widget", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-line-chart-widget");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uuid", "1");
        }
      },
      directives: [_bar_chart_widget_bar_chart_widget_component__WEBPACK_IMPORTED_MODULE_1__["BarChartWidgetComponent"], _line_chart_widget_line_chart_widget_component__WEBPACK_IMPORTED_MODULE_2__["LineChartWidgetComponent"]],
      styles: ["nav.navbar {\n  height: 50px;\n  padding: 0;\n  background-color: #5ed8e0;\n}\nnav.navbar a.navbar-brand, nav.navbar span.navbar-brand {\n  display: inline-block;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n  padding: 0.5rem 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhamRlZXAvd29ya3NwYWNlL3Rlc3RxYy9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0EsVUFBQTtFQUNHLHlCQUFBO0FDQ0o7QURDSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDTixvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdi5uYXZiYXIge1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk0LCAyMTYsIDIyNCk7XG4gICAgXG4gICAgYS5uYXZiYXItYnJhbmQsIHNwYW4ubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0cGFkZGluZzogMC41cmVtIDFyZW07XG5cdH1cbn0iLCJuYXYubmF2YmFyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVkOGUwO1xufVxubmF2Lm5hdmJhciBhLm5hdmJhci1icmFuZCwgbmF2Lm5hdmJhciBzcGFuLm5hdmJhci1icmFuZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn0iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/line-chart-widget/line-chart-widget.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/line-chart-widget/line-chart-widget.component.ts ***!
    \******************************************************************/

  /*! exports provided: LineChartWidgetComponent */

  /***/
  function srcAppLineChartWidgetLineChartWidgetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartWidgetComponent", function () {
      return LineChartWidgetComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_data_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/data-types */
    "./src/app/models/data-types.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_covid_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/covid-report.service */
    "./src/app/services/covid-report.service.ts");
    /* harmony import */


    var primeng_multiselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/multiselect */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-multiselect.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["lineContainer"];

    function LineChartWidgetComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineChartWidgetComponent_div_13_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var window_r67 = ctx.$implicit;

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.selectWindow(window_r67);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var window_r67 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, window_r67));
      }
    }

    function LineChartWidgetComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineChartWidgetComponent_div_19_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var metric_r70 = ctx.$implicit;
          var i_r71 = ctx.index;

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.selectMetric(metric_r70, i_r71);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var metric_r70 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, metric_r70));
      }
    }

    function LineChartWidgetComponent_p_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r66.chartDescriptionText);
      }
    }

    var LineChartWidgetComponent =
    /*#__PURE__*/
    function () {
      /**
       * Constructor
       * @param service
       */
      function LineChartWidgetComponent(service) {
        _classCallCheck(this, LineChartWidgetComponent);

        this.service = service; // Widget vars

        this.alive = false; // Chart vars

        this.chart = null; // Data set vars

        this.data = []; // Dropdown options

        this.locations = _models_data_types__WEBPACK_IMPORTED_MODULE_1__["LocationsByCountryName"];
        this.availableLocations = [];
        this.selectedLocations = [];
        this.windowsAvailable = ['daily', 'weekly', 'biweekly', 'triweekly'];
        this.selectedWindow = this.windowsAvailable[1];
        this.metrics = ['spread rate', 'daily growth rate', 'fatality rate', 'epidemic control ratio'];
        this.selectedMetric = this.metrics[0];
        this.chartDescriptions = ['Rate of growth of cumulative confirmed cases. Similar to rho.', 'Ratio of daily confirmed cases over successive days. Value less than 1 for a sustained period indicates inflection point (peak) has been reached.', 'Percentage deaths within confirmed cases. Flu fatality rate is 0.001.', 'Ratio of daily confirmed cases to threshold per capita. Value less than 1 for 3 weeks implies the epidemic is under control'];
        this.chartDescriptionText = this.chartDescriptions[0];
        this.noChartData = true;
        this.createMultiselectLabels();
      }
      /**
       * Update selected window to view, redraw graph
       * @param day - window to get the moving average for
       */


      _createClass(LineChartWidgetComponent, [{
        key: "selectWindow",
        value: function selectWindow(window) {
          this.selectedWindow = window;
          this.getData(this.selectedLocations, this.selectedWindow, this.selectedMetric);
        }
        /**
         * Update selected metric, redraw graph
         * @param metric - metric type
         */

      }, {
        key: "selectMetric",
        value: function selectMetric(metric, idx) {
          this.selectedMetric = metric;
          this.getData(this.selectedLocations, this.selectedWindow, this.selectedMetric);
          this.chartDescriptionText = this.chartDescriptions[idx];
        }
        /**
         * Populate the data set to be used for the chart, and then call the chart generation function
         * @param locations - string array of locations to chart
         * @param window - window to view the moving average
         * @param metric - metric type to chart
         */

      }, {
        key: "getData",
        value: function getData(locations, window, metric) {
          var _this2 = this;

          this.noChartData = true;
          var displayData = [];
          var requestArray = [];
          var labels = []; // Skip empty data sets

          if (locations.length === 0) {
            return;
          } // Reset chart data, create list of service calls for all selected locations


          this.noChartData = false;
          locations.forEach(function (loc) {
            requestArray.push(_this2.service.getAnnotations(loc));
            labels.push(loc);
          }); // Wait for all service calls to return before proceeding

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(requestArray) // .takeWhile(() => this.alive)
          .subscribe(function (allResponses) {
            var _loop = function _loop(i) {
              var res = allResponses[i];
              var arr = new Array(allResponses.length);

              if (res.elements) {
                // Loop over each date of data within each location
                res.elements.forEach(function (entry, j) {
                  // Plot the selected metric
                  var metricData = entry.movingAverageGrowthRate;

                  if (metric === 'spread rate') {
                    metricData = entry.movingAverageEstimatedAlpha;
                  }

                  if (metric === 'fatality rate') {
                    metricData = entry.movingAverageDeathRate;
                  }

                  if (metric === 'epidemic control ratio') {
                    metricData = entry.movingAverageControlAssessment;
                  } // Grab the value based on selected time period


                  metricData.filter(function (windowInfo) {
                    if (windowInfo[0] === window) {
                      if (i === 0) {
                        // Push initial label and empty arrays for data
                        // 2D array that is organized by:
                        // [ date1, location1, location2, location3, ... ]
                        // [ date2, location1, location2, location3, ... ]
                        // [ date3, location1, location2, location3, ... ]
                        var arr2 = [entry.date].concat(arr);
                        displayData.push(arr2);
                      } // Set value for the array in the column based on location index


                      displayData[j][i + 1] = windowInfo[1];
                    }
                  });
                });
              }
            };

            // Loop over all responses (one per selected location)
            for (var i = 0; i < allResponses.length; i++) {
              _loop(i);
            } // Generate the chart


            _this2.generateChart(displayData, labels);
          }, function (err) {// TODO
          });
        }
        /**
         * Generate the line chart with given input data set.
         * @param data - input data set
         * @param labels - labels for data set
         */

      }, {
        key: "generateChart",
        value: function generateChart(data, labels) {
          var _this3 = this;

          this.destroyChart();
          this.chart = anychart.line();
          var dataSet = anychart.data.set(data);
          var seriesData = [];
          var series = []; // turn on chart animation

          this.chart.animation(true); // set chart padding

          this.chart.padding([10, 20, 5, 20]); // turn on the crosshair

          this.chart.crosshair().enabled(true).yLabel(false).yStroke(null); // set tooltip mode to point

          this.chart.tooltip().positionMode('point'); // set yAxis title in title case

          var title = this.selectedMetric.replace(/\b[a-z]/g, function (x) {
            return x.toLocaleUpperCase();
          });
          this.chart.yAxis().title('Moving Average ' + title);
          this.chart.xAxis().labels().padding(5); // Map data per location

          labels.forEach(function (loc, col) {
            // mat data set
            seriesData.push(dataSet.mapAs({
              'x': 0,
              'value': col + 1
            })); // create series data

            series.push(_this3.chart.line(seriesData[col]));
            series[col].name(loc);
            series[col].hovered().markers().enabled(true).type('circle').size(4);
            series[col].tooltip().position('right').anchor('left-center').offsetX(5).offsetY(5);
          }); // turn the legend on

          this.chart.legend().enabled(true).fontSize(13).padding([0, 0, 10, 0]); // set container id for the chart

          this.chart.container('lineContainer'); // initiate chart drawing

          this.chart.draw();
        }
        /**
         * Set the multi-select options based on the contry list.
         */

      }, {
        key: "createMultiselectLabels",
        value: function createMultiselectLabels() {
          var locationsMultiselect = [];
          this.locations.forEach(function (country) {
            locationsMultiselect.push({
              label: country,
              value: country
            });
          });
          this.availableLocations = locationsMultiselect;
        }
        /**
         * Hide the multiselect panel, kick off chart update.
         */

      }, {
        key: "hidePanel",
        value: function hidePanel() {
          this.getData(this.selectedLocations, this.selectedWindow, this.selectedMetric);
        }
        /**
         * Destroy an existing chart before re-writing.
         */

      }, {
        key: "destroyChart",
        value: function destroyChart() {
          if (this.chart) {
            if (this.chart.container()) {
              this.chart.container().remove();
            }

            this.chart = null;
          }
        }
        /**
         * Init lifecycle hook
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.alive = true;
        }
      }]);

      return LineChartWidgetComponent;
    }();

    LineChartWidgetComponent.ɵfac = function LineChartWidgetComponent_Factory(t) {
      return new (t || LineChartWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_report_service__WEBPACK_IMPORTED_MODULE_3__["CovidReportService"]));
    };

    LineChartWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LineChartWidgetComponent,
      selectors: [["app-line-chart-widget"]],
      viewQuery: function LineChartWidgetComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lineContainer = _t.first);
        }
      },
      decls: 24,
      vars: 15,
      consts: [[1, "line-chart-widget"], [1, "card-container"], [1, "card"], [1, "card-title"], [1, "btn-group", "pt-2", "pb-1", "mx-3"], [3, "options", "ngModel", "dropdownIcon", "filter", "defaultLabel", "maxSelectedLabels", "ngModelChange", "onPanelHide"], ["dropdown", "", 1, "dropdown"], ["type", "button", "id", "windowDropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "windowDropdown", 1, "dropdown-menu", "scrollable-menu"], [4, "ngFor", "ngForOf"], ["type", "button", "id", "metricDropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "metricDropdown", 1, "dropdown-menu", "scrollable-menu"], ["class", "card-text text-muted pt-1 mx-2", 4, "ngIf"], [1, "card-body"], ["id", "lineContainer", 1, "chart-container"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "card-text", "text-muted", "pt-1", "mx-2"]],
      template: function LineChartWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Covid-19 Annotations/Metrics Comparison by Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-multiSelect", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LineChartWidgetComponent_Template_p_multiSelect_ngModelChange_7_listener($event) {
            return ctx.selectedLocations = $event;
          })("onPanelHide", function LineChartWidgetComponent_Template_p_multiSelect_onPanelHide_7_listener() {
            return ctx.hidePanel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LineChartWidgetComponent_div_13_Template, 4, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LineChartWidgetComponent_div_19_Template, 4, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LineChartWidgetComponent_p_20_Template, 2, 1, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.availableLocations)("ngModel", ctx.selectedLocations)("dropdownIcon", "pi pi-caret-down")("filter", true)("defaultLabel", "Select Countries")("maxSelectedLabels", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, ctx.selectedWindow), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.windowsAvailable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 13, ctx.selectedMetric), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.metrics);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.noChartData);
        }
      },
      directives: [primeng_multiselect__WEBPACK_IMPORTED_MODULE_4__["MultiSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]],
      styles: ["div.line-chart-widget .card-container {\n  margin: 2em;\n}\ndiv.line-chart-widget .card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\ndiv.line-chart-widget .card .card-title {\n  margin: 0.5em 0.5em 0 0.5em;\n  padding-bottom: 0.125em;\n}\ndiv.line-chart-widget .card .card-body {\n  margin: 0.125em 1em 0 1em;\n  border-top: 1px solid lightgray;\n}\ndiv.line-chart-widget .card .ui-multiselect {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n  margin: 0 0.5em 0.5em 0;\n  border-radius: 0.25rem;\n  background: #6c757d;\n}\ndiv.line-chart-widget .card .ui-multiselect:hover {\n  background: #545b62;\n}\ndiv.line-chart-widget .card .ui-multiselect .ui-multiselect-label {\n  color: #fff;\n  padding: 0.25rem 2em 0.25rem 0.75rem;\n}\ndiv.line-chart-widget .card .ui-multiselect .ui-multiselect-trigger {\n  background: transparent;\n}\ndiv.line-chart-widget .card .ui-multiselect .ui-multiselect-trigger-icon {\n  color: #fff;\n}\ndiv.line-chart-widget .card .ui-multiselect .pi {\n  font-size: 0.75em;\n}\ndiv.line-chart-widget .card div.dropdown {\n  margin: 0 0.5em 0.5em 0;\n  padding-bottom: 0.125em;\n}\ndiv.line-chart-widget .card div.dropdown .btn {\n  padding: 0.25rem 0.75rem;\n}\ndiv.line-chart-widget .card div.dropdown .dropdown-menu {\n  max-height: 200px;\n  overflow-y: auto;\n}\ndiv.line-chart-widget .card div.dropdown .dropdown-item {\n  padding: 0.125rem 1.5rem;\n}\ndiv.line-chart-widget .card div.chart-container {\n  height: 400px;\n}\ndiv.line-chart-widget .card div.chart-container.invisible {\n  height: 0px;\n}\ndiv.line-chart-widget .card div.anychart-credits {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhamRlZXAvd29ya3NwYWNlL3Rlc3RxYy9zcmMvYXBwL2xpbmUtY2hhcnQtd2lkZ2V0L2xpbmUtY2hhcnQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saW5lLWNoYXJ0LXdpZGdldC9saW5lLWNoYXJ0LXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7QUNBUjtBREdJO0VBQ0ksMENBQUE7QUNEUjtBREdRO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtBQ0RaO0FESVE7RUFDSSx5QkFBQTtFQUNBLCtCQUFBO0FDRlo7QURLUTtFQUNJLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0haO0FESVk7RUFDSSxtQkFBQTtBQ0ZoQjtBREtZO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0FDSGhCO0FETVk7RUFDSSx1QkFBQTtBQ0poQjtBRE9ZO0VBQ0ksV0FBQTtBQ0xoQjtBRFFZO0VBQ0ksaUJBQUE7QUNOaEI7QURVUTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7QUNSWjtBRFVZO0VBQ0ksd0JBQUE7QUNSaEI7QURVWTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNSaEI7QURVWTtFQUNJLHdCQUFBO0FDUmhCO0FEWVE7RUFDSSxhQUFBO0FDVlo7QURZWTtFQUNJLFdBQUE7QUNWaEI7QURhUTtFQUNJLGFBQUE7QUNYWiIsImZpbGUiOiJzcmMvYXBwL2xpbmUtY2hhcnQtd2lkZ2V0L2xpbmUtY2hhcnQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmxpbmUtY2hhcnQtd2lkZ2V0IHtcbiAgICAuY2FyZC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDJlbTtcbiAgICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIFxuICAgICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IC41ZW0gLjVlbSAwIC41ZW07XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjEyNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IC4xMjVlbSAxZW0gMCAxZW07XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnVpLW11bHRpc2VsZWN0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIC41ZW0gLjVlbSAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTQ1YjYyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudWktbXVsdGlzZWxlY3QtbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMmVtIDAuMjVyZW0gMC43NXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVpLW11bHRpc2VsZWN0LXRyaWdnZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudWktbXVsdGlzZWxlY3QtdHJpZ2dlci1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5kcm9wZG93biB7XG4gICAgICAgICAgICBtYXJnaW46IDAgLjVlbSAuNWVtIDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjEyNWVtO1xuXG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjEyNXJlbSAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgXG4gICAgICAgICAgICAmLmludmlzaWJsZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmFueWNoYXJ0LWNyZWRpdHMge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImRpdi5saW5lLWNoYXJ0LXdpZGdldCAuY2FyZC1jb250YWluZXIge1xuICBtYXJnaW46IDJlbTtcbn1cbmRpdi5saW5lLWNoYXJ0LXdpZGdldCAuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbmRpdi5saW5lLWNoYXJ0LXdpZGdldCAuY2FyZCAuY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogMC41ZW0gMC41ZW0gMCAwLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMTI1ZW07XG59XG5kaXYubGluZS1jaGFydC13aWRnZXQgLmNhcmQgLmNhcmQtYm9keSB7XG4gIG1hcmdpbjogMC4xMjVlbSAxZW0gMCAxZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5kaXYubGluZS1jaGFydC13aWRnZXQgLmNhcmQgLnVpLW11bHRpc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwIDAuNWVtIDAuNWVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG59XG5kaXYubGluZS1jaGFydC13aWRnZXQgLmNhcmQgLnVpLW11bHRpc2VsZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU0NWI2Mjtcbn1cbmRpdi5saW5lLWNoYXJ0LXdpZGdldCAuY2FyZCAudWktbXVsdGlzZWxlY3QgLnVpLW11bHRpc2VsZWN0LWxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMmVtIDAuMjVyZW0gMC43NXJlbTtcbn1cbmRpdi5saW5lLWNoYXJ0LXdpZGdldCAuY2FyZCAudWktbXVsdGlzZWxlY3QgLnVpLW11bHRpc2VsZWN0LXRyaWdnZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmRpdi5saW5lLWNoYXJ0LXdpZGdldCAuY2FyZCAudWktbXVsdGlzZWxlY3QgLnVpLW11bHRpc2VsZWN0LXRyaWdnZXItaWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZGl2LmxpbmUtY2hhcnQtd2lkZ2V0IC5jYXJkIC51aS1tdWx0aXNlbGVjdCAucGkge1xuICBmb250LXNpemU6IDAuNzVlbTtcbn1cbmRpdi5saW5lLWNoYXJ0LXdpZGdldCAuY2FyZCBkaXYuZHJvcGRvd24ge1xuICBtYXJnaW46IDAgMC41ZW0gMC41ZW0gMDtcbiAgcGFkZGluZy1ib3R0b206IDAuMTI1ZW07XG59XG5kaXYubGluZS1jaGFydC13aWRnZXQgLmNhcmQgZGl2LmRyb3Bkb3duIC5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG59XG5kaXYubGluZS1jaGFydC13aWRnZXQgLmNhcmQgZGl2LmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5kaXYubGluZS1jaGFydC13aWRnZXQgLmNhcmQgZGl2LmRyb3Bkb3duIC5kcm9wZG93bi1pdGVtIHtcbiAgcGFkZGluZzogMC4xMjVyZW0gMS41cmVtO1xufVxuZGl2LmxpbmUtY2hhcnQtd2lkZ2V0IC5jYXJkIGRpdi5jaGFydC1jb250YWluZXIge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuZGl2LmxpbmUtY2hhcnQtd2lkZ2V0IC5jYXJkIGRpdi5jaGFydC1jb250YWluZXIuaW52aXNpYmxlIHtcbiAgaGVpZ2h0OiAwcHg7XG59XG5kaXYubGluZS1jaGFydC13aWRnZXQgLmNhcmQgZGl2LmFueWNoYXJ0LWNyZWRpdHMge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-line-chart-widget',
          templateUrl: './line-chart-widget.component.html',
          styleUrls: ['./line-chart-widget.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _services_covid_report_service__WEBPACK_IMPORTED_MODULE_3__["CovidReportService"]
        }];
      }, {
        lineContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['lineContainer']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/models/data-types.ts":
  /*!**************************************!*\
    !*** ./src/app/models/data-types.ts ***!
    \**************************************/

  /*! exports provided: ResultsPerDate, ResultMessage, LocationsByCountryName */

  /***/
  function srcAppModelsDataTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultsPerDate", function () {
      return ResultsPerDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultMessage", function () {
      return ResultMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationsByCountryName", function () {
      return LocationsByCountryName;
    });

    var ResultsPerDate = function ResultsPerDate() {
      _classCallCheck(this, ResultsPerDate);
    };

    var ResultMessage = function ResultMessage() {
      _classCallCheck(this, ResultMessage);
    };

    var LocationsByCountryName = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Congo (Brazzaville)', 'Congo (Kinshasa)', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Denmark', 'Diamond Princess', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea-Bissau', 'Guinea', 'Guyana', 'Haiti', 'Holy See', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Korea', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'MS Zaandam', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan*', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'US', 'Uzbekistan', 'Venezuela', 'Vietnam', 'West Bank and Gaza', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];
    /***/
  },

  /***/
  "./src/app/services/covid-report.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/covid-report.service.ts ***!
    \**************************************************/

  /*! exports provided: CovidReportService */

  /***/
  function srcAppServicesCovidReportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidReportService", function () {
      return CovidReportService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CovidReportService =
    /*#__PURE__*/
    function () {
      function CovidReportService(http) {
        _classCallCheck(this, CovidReportService);

        this.http = http; // data = [];

        this.data = [];
      } // getResultsByCity(city: string): ResultsPerDate[] {
      //   this.loadCovidResults().subscribe((res: ResultMessage) => {
      //     if (res.snapshots) {
      //       return res.snapshots.filter(item => item.province_state === city);
      //     }
      //   });
      // }


      _createClass(CovidReportService, [{
        key: "printResults",
        value: function printResults() {
          return this.data;
        }
      }, {
        key: "getCovidResults",
        value: function getCovidResults(location, snapshot) {
          if (snapshot === 'daily') return this.http.get('/assets/snapshots/daily-snapshots/' + location + '_DailySnapshots.json');else return this.http.get('/assets/snapshots/cumulative-snapshots/' + location + '_CumulativeSnapshots.json');
        }
      }, {
        key: "getAnnotations",
        value: function getAnnotations(location) {
          return this.http.get('/assets/annotations/' + location + '_Annotations.json');
        }
      }]);

      return CovidReportService;
    }();

    CovidReportService.ɵfac = function CovidReportService_Factory(t) {
      return new (t || CovidReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CovidReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CovidReportService,
      factory: CovidReportService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/rajdeep/workspace/testqc/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map