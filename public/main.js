"use strict";
(self["webpackChunkfolio"] = self["webpackChunkfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill/skill.component */ 4673);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project.component */ 1417);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'skills',
  component: _skill_skill_component__WEBPACK_IMPORTED_MODULE_1__.SkillComponent,
  pathMatch: 'prefix'
}, {
  path: 'projects',
  component: _project_project_component__WEBPACK_IMPORTED_MODULE_2__.ProjectComponent,
  pathMatch: 'prefix'
}, {
  path: 'contact',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent,
  pathMatch: 'prefix'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 1108);



class AppComponent {
  constructor() {
    this.title = 'folio';
    this.routes = [{
      path: '/home',
      isActive: true
    }, {
      path: '/skills',
      isActive: true
    }, {
      path: '/projects',
      isActive: true
    }, {
      path: '/contact',
      isActive: true
    }];
  }
  getAnimationState(outlet) {
    // Renvoie l'état d'animation en fonction de l'instance du router-outlet
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 5,
  vars: 1,
  consts: [[1, "d-flex", "container-fluid"], [1, "ps_rel", "mx-2", 3, "routes"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet")(3, "app-nav-bar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routes", ctx.routes);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project.component */ 1417);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 1108);
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skill/skill.component */ 4673);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _info_pop_info_pop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info-pop/info-pop.component */ 1229);
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/global.service */ 8794);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_shared_services_global_service__WEBPACK_IMPORTED_MODULE_9__.GlobalService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__.NavBarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _skill_skill_component__WEBPACK_IMPORTED_MODULE_6__.SkillComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _project_project_component__WEBPACK_IMPORTED_MODULE_2__.ProjectComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__.ContactComponent, _info_pop_info_pop_component__WEBPACK_IMPORTED_MODULE_8__.InfoPopComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 1563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! canvas-confetti */ 7020);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/contact.service */ 6046);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








const _c0 = ["confettiCanvas"];
function ContactComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div")(2, "h1", 10)(3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "ontact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function ContactComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Open to work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " I hope you liked my portfolio v1, built with Angular and Express. Please feel free to leave your feedback. If you're looking for a motivated individual, don't hesitate to contact me! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ContactComponent_div_9_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r7.validationMessageErrors["required"], " ");
  }
}
function ContactComponent_div_9_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.validationMessageErrors["maxlength"], " ");
  }
}
function ContactComponent_div_9_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.validationMessageErrors["email"], " ");
  }
}
function ContactComponent_div_9_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.validationMessageErrors["required"], " ");
  }
}
function ContactComponent_div_9_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.validationMessageErrors["required"], " ");
  }
}
function ContactComponent_div_9_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r12.validationMessageErrors["maxlength"], " ");
  }
}
function ContactComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ContactComponent_div_9_Template_form_submit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 18)(4, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Agency name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ContactComponent_div_9_p_8_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ContactComponent_div_9_p_9_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 18)(11, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Agency email : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ContactComponent_div_9_p_15_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ContactComponent_div_9_p_16_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 25)(18, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Message : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ContactComponent_div_9_p_22_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ContactComponent_div_9_p_23_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 28)(25, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Send message");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "figure", 30)(28, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "figcaption", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " My github ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.formContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.hasError("name", "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.hasError("name", "maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.hasError("email", "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.hasError("email", "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.hasError("message", "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.hasError("message", "maxlength"));
  }
}
function ContactComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37)(1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ContactComponent {
  constructor(_fb, contactService) {
    this._fb = _fb;
    this.contactService = contactService;
    this.exp = '';
    this.count = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(8);
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.timeout = undefined;
    this.msgEmail = '';
    this.msgName = '';
    this.msgMessage = '';
    this.isSendMessage = this.contactService.isSending$;
    this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.validationMessageErrors = {
      required: 'Ce champ est requis',
      email: 'Entrer un email valide',
      maxlength: 'Le champ est trop long'
    };
  }
  ngOnInit() {
    this.formContact = this._fb.group({
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(200)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]]
    });
  }
  onSubmit() {
    if (this.formContact.valid) {
      this.unsubscribe.add(this.contactService.sendMessage(this.formContact.value).subscribe({
        next: () => {
          this.contactService.isSending$.next(false);
        }
      }));
    } else {
      this.formContact.markAllAsTouched();
    }
  }
  ngAfterViewInit() {
    this.myConfetti = canvas_confetti__WEBPACK_IMPORTED_MODULE_0__.create(this.confettiCanvasRef.nativeElement, {
      resize: true,
      useWorker: true
    });
    this.triggerConfetti();
  }
  //créer un pipe
  hasError(controlName, validationError) {
    const control = this.formContact.get(controlName);
    const errors = control?.errors;
    if (errors && validationError in errors) {
      return control.hasError(validationError) && (control.touched || control.dirty);
    }
    return false;
  }
  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
    clearInterval(this.timeout);
  }
  triggerConfetti() {
    this.timeout = setInterval(() => {
      const observable = this.count.next(this.count.value - 1);
      const duration = 10 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 30,
        spread: 800,
        ticks: 60,
        zIndex: 0
      };
      const timeLeft = animationEnd - Date.now();
      const particleCount = 400 * (timeLeft / duration);
      if (this.count.value <= 0) {
        clearInterval(this.timeout);
        this.subscription.add(observable);
      }
      this.myConfetti({
        ...defaults,
        particleCount,
        origin: {
          x: this.randomInRange(0.3, 0.6),
          y: Math.random() - 0.1
        }
      });
    }, 1000);
  }
  randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_contact_service__WEBPACK_IMPORTED_MODULE_1__.ContactService));
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  viewQuery: function ContactComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.confettiCanvasRef = _t.first);
    }
  },
  decls: 15,
  vars: 14,
  consts: [[1, "home_hero", "justify-content-center"], [1, "container", "justify-content-center", "d-flex", "flex-wrap"], [1, "profil_info", "d-flex", "flex-column", "justify-content-center"], [4, "ngIf"], ["class", "title_red typping", 4, "ngIf"], ["class", "description typing-container mb-2", 4, "ngIf"], ["class", "form_container typping", 4, "ngIf", "ngIfElse"], ["congratulation", ""], ["id", "canvas_confetti"], ["confettiCanvas", ""], [1, "title_text", "typping"], [1, "first_letter"], [1, "title_red", "typping"], [1, "description", "typing-container", "mb-2"], [1, "typping"], [1, "form_container", "typping"], [1, "wrapper_form", "d-flex", "flex-column"], [1, "my-2", 3, "formGroup", "submit"], [1, "container_input"], ["for", "name", 1, "d-flex", "align-items-center", "my-2", "label_form"], [1, "bar", "me-2"], ["id", "name", "formControlName", "name", "type", "text"], ["class", "eror_theme", 4, "ngIf"], ["for", "email", 1, "d-flex", "align-items-center", "my-2", "label_form"], ["id", "email", "formControlName", "email", "type", "email"], [1, "container_textarea"], ["for", "message", 1, "d-flex", "align-items-center", "my-2", "label_form"], ["formControlName", "message", "id", "message"], [1, "w-100", "d-flex", "justify-content-center", "mt-2"], ["type", "submit", 1, "btn", "btn-info"], [1, "profil_picture_form", "d-flex", "flex-column"], [1, "container_img_contact"], ["src", "../../assets/images/githubpng.png", "alt", "it's me", 1, "enter"], [1, "d-flex", "justify-content-center", "align-items-center"], ["href", "", "target", "_blank"], [1, "bar", "ms-2"], [1, "eror_theme"], [1, "thx"], ["src", "../../assets/../assets/images/thx.svg", "alt", "heart with message inside thx"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContactComponent_div_3_Template, 6, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ContactComponent_span_5_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ContactComponent_div_7_Template, 3, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ContactComponent_div_9_Template, 35, 7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ContactComponent_ng_template_11_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "canvas", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@queryAnimation", ctx.exp);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, ctx.isSendMessage));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 8, ctx.isSendMessage));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 10, ctx.isSendMessage));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 12, ctx.isSendMessage))("ngIfElse", _r4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["app-contact[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.home_hero[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: hidden;\n  min-height: 100%;\n  padding-right: 1rem;\n}\n@media (max-width: 992px) {\n  .home_hero[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n.form_container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  max-width: 600px;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0px;\n  flex-grow: 1;\n}\n@media (max-width: 768px) {\n  .form_container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n  }\n}\n.form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  max-height: 800px;\n  height: 100%;\n  background-color: white;\n  padding: 1rem;\n  border-radius: 20px;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.211);\n}\n@media (max-width: 768px) {\n  .form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    max-height: 100%;\n  }\n}\n.form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  flex-grow: 1;\n}\n.form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container_input[_ngcontent-%COMP%] {\n  margin: 0.8rem 0;\n  width: 100%;\n}\n.form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container_input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  background-color: #f1f1f1;\n  border: none;\n  border-radius: 10px;\n  padding: 20px 10px;\n  outline-color: transparent;\n  color: black;\n}\n.form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label_form[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 600;\n}\n.form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container_textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container_textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  padding: 20px 10px;\n  background-color: #f1f1f1;\n  border-radius: 10px;\n  height: 200px;\n  resize: none;\n}\n.form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   .profil_picture_form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  display: flex;\n  margin: 1rem 0;\n  justify-content: center;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   .profil_picture_form[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n}\n.form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   .profil_picture_form[_ngcontent-%COMP%]   .container_img_contact[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   .profil_picture_form[_ngcontent-%COMP%]   .container_img_contact[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  max-height: 200px;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   .profil_picture_form[_ngcontent-%COMP%]   .container_img_contact[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 100%;\n  }\n}\n.form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   .profil_picture_form[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n.form_container[_ngcontent-%COMP%]   .wrapper_form[_ngcontent-%COMP%]   .profil_picture_form[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-decoration: none;\n  color: black;\n}\n\n#canvas_confetti[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.thx[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.thx[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 400px;\n  max-height: 400px;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBRUUsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFQRjtJQVFJLDhCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUFFRjtBQUNGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUY7QUFERTtFQVRGO0lBVUksZUFBQTtJQUNBLFlBQUE7RUFJRjtBQUNGO0FBSEU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBS0o7QUFKSTtFQVRGO0lBVUksZUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQU9KO0FBQ0Y7QUFOSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVFOO0FBUE07RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFTUjtBQVJRO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFDQSxZQUFBO0FBU1Y7QUFOTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQVFSO0FBTk07RUFDRSxXQUFBO0FBUVI7QUFQUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFTVjtBQUxJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBRUEsY0FBQTtFQUNBLHVCQUFBO0VBNEJBLHVCQUFBO0VBQ0EsbUJBQUE7QUFyQk47QUFQTTtFQVBGO0lBUUksYUFBQTtFQVVOO0FBQ0Y7QUFUTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFXUjtBQVZRO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBWVY7QUFYVTtFQUpGO0lBS0ksZUFBQTtJQUNBLGdCQUFBO0VBY1Y7QUFDRjtBQVhNO0VBQ0UsZ0JBQUE7QUFhUjtBQVpRO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFjVjs7QUFOQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVNGOztBQVBBO0VBQ0UsV0FBQTtBQVVGO0FBUkk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFVTiIsInNvdXJjZXNDb250ZW50IjpbImFwcC1jb250YWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaG9tZV9oZXJvIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2stY29sb3I7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIC8vIGZsZXgtd3JhcDogd3JhcDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcbi5mb3JtX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC53cmFwcGVyX2Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIxMSk7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAuY29udGFpbmVyX2lucHV0IHtcclxuICAgICAgICBtYXJnaW46IDAuOHJlbSAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG5cclxuICAgICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubGFiZWxfZm9ybSB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRhaW5lcl90ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2ZpbF9waWN0dXJlX2Zvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgfVxyXG4gICAgICAuY29udGFpbmVyX2ltZ19jb250YWN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZpZ2NhcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiNjYW52YXNfY29uZmV0dGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbi50aHgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBpY3R1cmUge1xyXG4gICAgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('queryAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.query)('.typping', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      opacity: 0,
      transform: 'translateX(80px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.stagger)(100, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(500)])], {
      optional: true
    })])])]
  }
});

/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 2,
  vars: 0,
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/project.service */ 6952);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function () {
  return ["/skills"];
};
class HomeComponent {
  constructor(projectService) {
    this.projectService = projectService;
    this.projects = [];
    this.exp = '';
    this.t = '';
  }
  ngOnInit() {
    this.projectService.getAllProjects().subscribe({
      next: p => {
        const {
          data
        } = p;
        this.projects = data.projects;
      }
    });
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 28,
  vars: 3,
  consts: [[1, "home_hero"], [1, "profil_picture", "typping"], ["src", "../assets/images/r.png", "alt", "it's me", 1, "enter"], [1, "profil_info", "d-flex", "flex-column", "justify-content-center"], [1, "title_bar", "d-flex", "align-items-center", "typping"], [1, "bar", "me-2"], [1, "title_text", "typping"], [1, "first_letter"], [1, "tel_profil_picture", "my-2", "typping"], ["src", "../assets/images/r.png", "alt", ""], [1, "title_red", "typping"], [1, "description", "typing-container"], [1, "typping"], [1, "btn_arrow", "my-4", "typping", 3, "routerLink"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " I'm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "div")(9, "h1", 6)(10, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "W");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "etterene ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "R");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00E9my ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Web Developer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " As a junior full stack web developer, I am passionate about creating websites and applications. I use various technologies to develop smooth and intuitive user experiences. My goal is to bring innovative solutions and contribute to exciting projects. Want to know more? Click on \"Discover me\" and explore my journey and skills. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div")(24, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Discover me ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u2192");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@queryAnimation", ctx.exp);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('queryAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)('.typping', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0,
      transform: 'translateX(-80px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.stagger)(100, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(500)])])])])]
  }
});

/***/ }),

/***/ 1229:
/*!************************************************!*\
  !*** ./src/app/info-pop/info-pop.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPopComponent": () => (/* binding */ InfoPopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/global.service */ 8794);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





function InfoPopComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InfoPopComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function InfoPopComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 14);
  }
}
function InfoPopComponent_div_2_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r5.project.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r5.project.title, " discover ");
  }
}
function InfoPopComponent_div_2_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Githhub ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r6.project.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function (a0) {
  return {
    backgroundImage: a0
  };
};
function InfoPopComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InfoPopComponent_div_2_div_2_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InfoPopComponent_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8)(6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, InfoPopComponent_div_2_a_12_Template, 3, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, InfoPopComponent_div_2_a_13_Template, 3, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, " url(" + ctx_r1.url_image + ctx_r1.project.images[0].path + ") "));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.project.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.project.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.project.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.project.github);
  }
}
class InfoPopComponent {
  constructor(globalService) {
    this.globalService = globalService;
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onNavigateEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.url_image = '';
    this.state = 'open';
  }
  ngOnInit() {
    this.url_image = this.globalService.API_IMG_URL;
  }
  close() {
    this.view = false;
    this.onClick.emit(this.view);
  }
  onNavigate(id) {
    this.onNavigateEmit.emit(id);
  }
}
InfoPopComponent.ɵfac = function InfoPopComponent_Factory(t) {
  return new (t || InfoPopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService));
};
InfoPopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: InfoPopComponent,
  selectors: [["app-info-pop"]],
  inputs: {
    project: "project",
    view: "view"
  },
  outputs: {
    onClick: "onClick",
    onNavigateEmit: "onNavigateEmit"
  },
  decls: 3,
  vars: 3,
  consts: [[1, "all-content-pop"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "hero", 4, "ngIf"], [1, "overlay", 3, "click"], [1, "hero"], [1, "hero-inside", 3, "ngStyle"], ["class", "overlay-2", 4, "ngIf"], [1, "closed-pop", 3, "click"], [1, "container-info"], [1, "title"], [1, "description"], [1, "action", "d-flex", "my-10"], ["target", "_blank", "class", "btn btn-info", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "btn btn-info mx-2", 3, "href", 4, "ngIf"], [1, "overlay-2"], ["target", "_blank", 1, "btn", "btn-info", 3, "href"], ["target", "_blank", 1, "btn", "btn-info", "mx-2", 3, "href"]],
  template: function InfoPopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InfoPopComponent_div_1_Template, 1, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InfoPopComponent_div_2_Template, 14, 7, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", ctx.view ? "open" : "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
  styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.all-content-pop[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  padding-bottom: 10px;\n  color: rgb(0, 0, 0);\n  z-index: 10;\n  margin: 1rem 0;\n}\n\n.hero[_ngcontent-%COMP%] {\n  z-index: 10000;\n  border-radius: 10px;\n  background-color: #f6f6f6;\n  margin: 20px;\n  height: auto;\n  overflow-y: scroll;\n  max-width: 900px;\n  width: 100%;\n  z-index: 200;\n}\n@media (max-width: 576px) {\n  .hero[_ngcontent-%COMP%] {\n    margin: 9rem 10px 10px 10px;\n  }\n}\n.hero[_ngcontent-%COMP%]   .hero-inside[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 10px 10px 0 0;\n  position: relative;\n  overflow: hidden;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  cursor: default;\n  line-height: 1.2;\n  font-size: 0.85vw;\n  -webkit-user-select: none;\n          user-select: none;\n  letter-spacing: 0 !important;\n  min-height: 30vh;\n  position: relative;\n  background-position: 60%;\n  background-size: cover;\n  background-position: center center;\n  bottom: 0;\n  filter: alpha(opacity=100);\n  left: 0;\n  opacity: 1;\n  right: 0;\n  top: 0;\n  transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;\n  width: 100%;\n}\n.hero[_ngcontent-%COMP%]   .hero-inside[_ngcontent-%COMP%]   .closed-pop[_ngcontent-%COMP%] {\n  margin: 10px;\n  right: 0;\n  top: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: absolute;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 1.4rem;\n  background-color: #181818;\n  border: none;\n  z-index: 10;\n}\n.hero[_ngcontent-%COMP%]   .hero-inside[_ngcontent-%COMP%]   .overlay-2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(200.1deg, rgba(3, 4, 5, 0.183) 11.4%, rgba(22, 24, 31, 0.868) 70.2%);\n  z-index: 1;\n}\n.hero[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.hero[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: rgb(156, 156, 156);\n}\n.hero[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .info-project[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-family: cursive;\n  margin: 10px 0;\n  gap: 5px;\n}\n.hero[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .info-project[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: whitesmoke;\n}\n.hero[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .info-project[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(135.1deg, rgba(3, 4, 5, 0.363) 11.4%, rgb(22, 24, 31) 70.2%);\n  z-index: 1;\n}\n.overlay[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 300px;\n  object-fit: contain;\n  position: absolute;\n  bottom: 100px;\n  right: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby1wb3AvaW5mby1wb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQVpGO0lBYUksMkJBQUE7RUFHRjtBQUNGO0FBRkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGtFQUFBO0VBQ0EsV0FBQTtBQUlKO0FBSEk7RUFDRSxZQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBS047QUFGSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0dBQUE7RUFLQSxVQUFBO0FBQU47QUFHRTtFQUNFLGFBQUE7QUFESjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQUFOO0FBRUk7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUVBLFFBQUE7QUFETjtBQUVNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRU07RUFDRSxlQUFBO0FBQVI7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3RkFBQTtFQUtBLFVBQUE7QUFORjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFMSiIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hbGwtY29udGVudC1wb3Age1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcbi5oZXJvIHtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDIwMDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIG1hcmdpbjogOXJlbSAxMHB4IDEwcHggMTBweDtcclxuICB9XHJcbiAgLmhlcm8taW5zaWRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGZvbnQtc2l6ZTogMC44NXZ3O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMzB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGN1YmljLWJlemllcigwLjY2NSwgMC4yMzUsIDAuMjY1LCAwLjgpIDBzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuY2xvc2VkLXBvcCB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuXHJcbiAgICAub3ZlcmxheS0yIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAyMDAuMWRlZyxcclxuICAgICAgICByZ2JhKDMsIDQsIDUsIDAuMTgzKSAxMS40JSxcclxuICAgICAgICByZ2JhKDIyLCAyNCwgMzEsIDAuODY4KSA3MC4yJVxyXG4gICAgICApO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29udGFpbmVyLWluZm8ge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBjb2xvcjogcmdiKDE1NiwgMTU2LCAxNTYpO1xyXG4gICAgfVxyXG4gICAgLmluZm8tcHJvamVjdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuXHJcbiAgICAgIGdhcDogNXB4O1xyXG4gICAgICBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgIH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTM1LjFkZWcsXHJcbiAgICByZ2JhKDMsIDQsIDUsIDAuMzYzKSAxMS40JSxcclxuICAgIHJnYigyMiwgMjQsIDMxKSA3MC4yJVxyXG4gICk7XHJcbiAgei1pbmRleDogMTtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwMHB4O1xyXG4gICAgcmlnaHQ6IDIwMHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('openClose', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      transform: '  scale(1)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      transform: 'scale(0)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('open => close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(200)), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('close => open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(200))])]
  }
});

/***/ }),

/***/ 1108:
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const _c0 = function () {
  return {
    exact: true
  };
};
function NavBarComponent__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2)(1, "defs")(2, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " .Layer_1 { height: 50px; } .cls-1 { width: 20px; height: 10px; fill: none; stroke: whitesmoke; stroke-width: 1px; } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 3)(5, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "line", 4)(7, "circle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const route_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", route_r1.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
  }
}
class NavBarComponent {
  constructor() {
    this.routes = [];
  }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
  return new (t || NavBarComponent)();
};
NavBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavBarComponent,
  selectors: [["app-nav-bar"]],
  inputs: {
    routes: "routes"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "d-flex", "justify-content-center", "nav-bar-time", "flex-column", "py-1"], ["routerLinkActive", "router-link-active", "class", "bar-line", "data-name", "Calque 2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 9.56 66.01", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", "data-name", "Calque 2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 9.56 66.01", 1, "bar-line", 3, "routerLink", "routerLinkActiveOptions"], ["id", "Layer_1", "data-name", "Layer 1"], ["x1", "5.06", "x2", "5.06", "y2", "57.03", 1, "cls-1"], ["cx", "4.78", "cy", "61.23", "r", "3.28", 1, "cls-1"]],
  template: function NavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent__svg_svg_1_Template, 8, 3, "svg", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.routes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
  styles: [".nav-bar-time[_ngcontent-%COMP%] {\n  display: flex;\n  top: 10%;\n  position: fixed;\n  right: 0;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  margin: 0 10px;\n  width: 20px;\n  cursor: pointer;\n  outline: none;\n}\n\nsvg[_ngcontent-%COMP%] {\n  transition: all 5s ease-in-out;\n}\n\n.router-link-active[_ngcontent-%COMP%] {\n  transition: all 5s ease-in-out;\n}\n.router-link-active[_ngcontent-%COMP%]   line[_ngcontent-%COMP%], .router-link-active[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #95202b;\n  transition: all 0.5s ease-in-out;\n}\n.router-link-active[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: #95202b;\n}\n\n.bar-line[_ngcontent-%COMP%] {\n  max-height: 18vh;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0UsOEJBQUE7QUFFRjs7QUFBQTtFQUNFLDhCQUFBO0FBR0Y7QUFGRTs7RUFFRSxlQUFBO0VBQ0EsZ0NBQUE7QUFJSjtBQUZFO0VBQ0UsYUFBQTtBQUlKOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBSUYiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJhci10aW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRvcDogMTAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJnaW46IDAgMTBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5zdmcge1xyXG4gIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcclxufVxyXG4ucm91dGVyLWxpbmstYWN0aXZlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XHJcbiAgbGluZSxcclxuICBjaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjOTUyMDJiO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIGNpcmNsZSB7XHJcbiAgICBmaWxsOiAjOTUyMDJiO1xyXG4gIH1cclxufVxyXG4uYmFyLWxpbmUge1xyXG4gIG1heC1oZWlnaHQ6IDE4dmg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1417:
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectComponent": () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/project.service */ 6952);
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/global.service */ 8794);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _info_pop_info_pop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info-pop/info-pop.component */ 1229);







const _c0 = function (a0) {
  return [a0];
};
function ProjectComponent_div_9_figure_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "figure", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const techno_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r3.url_image + techno_r5.icon), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](techno_r5.title);
  }
}
function ProjectComponent_div_9_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "UpComming soon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProjectComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectComponent_div_9_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const project_r2 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.openPop(true, project_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ProjectComponent_div_9_figure_10_Template, 4, 4, "figure", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProjectComponent_div_9_span_12_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](8, 6, project_r2.description, 0, 100), "... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", project_r2.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !project_r2.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx_r0.url_image + project_r2.images[0].path), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", project_r2.title);
  }
}
function ProjectComponent_app_info_pop_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-info-pop", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ProjectComponent_app_info_pop_16_Template_app_info_pop_onClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.close($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("view", ctx_r1.view)("project", ctx_r1.project);
  }
}
const _c1 = function () {
  return ["/contact"];
};
class ProjectComponent {
  close(view) {
    this.view = view;
  }
  openPop(view, project) {
    this.view = view;
    this.project = project;
  }
  constructor(projectService, globalService) {
    this.projectService = projectService;
    this.globalService = globalService;
    this.url_image = '';
    this.isActive = '';
    this.projects = [];
    this.view = false;
  }
  ngOnInit() {
    this.url_image = this.globalService.API_IMG_URL;
    this.projectService.getAllProjects().subscribe({
      next: response => {
        const {
          data
        } = response;
        this.projects = data.projects;
      }
    });
  }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
  return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__.GlobalService));
};
ProjectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProjectComponent,
  selectors: [["app-project"]],
  decls: 17,
  vars: 5,
  consts: [[1, "home_hero", "ps_rel"], [1, "profil_info", "d-flex", "flex-column", "justify-content-center", "container"], [1, "title_text", "typping"], [1, "first_letter"], [1, "swiper-container", "my-5", "grid_container_card", "typping"], ["class", "wrapper", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn_arrow", "my-4", "typping", 3, "routerLink"], [1, "ps_rel"], [3, "view", "project", "onClick", 4, "ngIf"], [1, "wrapper", 3, "click"], [1, "content-splitter"], [1, "left"], [1, "block"], [1, "header"], [1, "content"], [1, "container_icon_project", "d-flex"], ["class", "d-flex flex-column align-items-center", 4, "ngFor", "ngForOf"], [1, "right"], [4, "ngIf"], [3, "src", "alt"], [1, "d-flex", "flex-column", "align-items-center"], ["alt", "techno.title", 1, "my-2", 3, "src"], [3, "view", "project", "onClick"]],
  template: function ProjectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div")(3, "div")(4, "h1", 2)(5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "P");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "rojects ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ProjectComponent_div_9_Template, 14, 12, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div")(11, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Contact me ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u2192");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ProjectComponent_app_info_pop_16_Template, 1, 2, "app-info-pop", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@queryAnimation", ctx.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.projects);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.project);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _info_pop_info_pop_component__WEBPACK_IMPORTED_MODULE_2__.InfoPopComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
  styles: ["app-project[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.project[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.swiper-container[_ngcontent-%COMP%]   .swiper[_ngcontent-%COMP%] {\n  z-index: 3;\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  cursor: pointer;\n  min-height: 30vh;\n  max-height: 40vh;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(255, 255, 255);\n  border-radius: 0.5rem;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  box-shadow: 1px 40px 20px rgba(0, 0, 0, 0.196);\n  transition: 0.8s all cubic-bezier(0.165, 0.84, 0.44, 1);\n  filter: grayscale(1);\n  transform: scale(1);\n}\n.swiper-container[_ngcontent-%COMP%]   .swiper[_ngcontent-%COMP%]:hover {\n  filter: grayscale(0);\n  transform: scale(1.05);\n  color: black;\n  font-weight: bold;\n}\n\n.right_swiper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  clip-path: polygon(35% 0%, 100% 0, 100% 100%, 8% 100%);\n  object-fit: cover;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  max-height: 400px;\n  display: grid;\n  grid-template-columns: 4fr 6fr;\n  overflow-y: hidden;\n  border-radius: 20px;\n  cursor: pointer;\n  background: hsl(0, 0%, 95%);\n  box-shadow: 1px 1px 25px 3px rgba(0, 0, 0, 0.3);\n  transition: 0.8s all cubic-bezier(0.165, 0.84, 0.44, 1);\n  transform: scale(1);\n}\n.wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.01);\n}\n@media (max-width: 992px) {\n  .wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-height: inherit;\n    overflow-y: hidden;\n  }\n}\n\n.home_hero[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n\n\n.header[_ngcontent-%COMP%] {\n  width: max-content;\n  font-size: 2.875rem;\n  text-transform: capitalize;\n  white-space: nowrap;\n  color: transparent;\n  -webkit-text-stroke: 1px #222222;\n}\n\n.header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5%;\n}\n\n\n.content-splitter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin: 1rem 0;\n}\n\n.left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0 1em;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75em;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: #404040;\n}\n@media (max-width: 576px) {\n  .content[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n\n.c2a[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  color: white;\n  padding: 0.4em 0.8em;\n  width: max-content;\n  background: #222222;\n  border-radius: 4px;\n  transition: all 250 ease-in-out;\n  cursor: pointer;\n}\n\n.c2a[_ngcontent-%COMP%]:hover {\n  background: #444444;\n}\n\n.right[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-height: inherit;\n  display: flex;\n  clip-path: polygon(35% 0%, 100% 0, 100% 100%, 8% 100%);\n  filter: grayscale(1);\n}\n.right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  z-index: 20;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: #95202b;\n  transform: translate(-50%, -50%) rotate(316deg);\n  width: 100%;\n  max-width: inherit;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n@media (max-width: 992px) {\n  .right[_ngcontent-%COMP%] {\n    display: none;\n    z-index: -1;\n  }\n}\n\n.container_icon_project[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 1rem 0rem 1rem 0rem;\n  gap: 10px;\n}\n.container_icon_project[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 10px 0;\n  transition: all 0.5s ease-in-out;\n}\n.container_icon_project[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.container_icon_project[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  text-transform: capitalize;\n}\n.container_icon_project[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 40px;\n  width: 100%;\n  height: 100%;\n  max-height: 40px;\n}\n\n.wrapper[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] {\n  filter: grayscale(0);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0FBR0Y7QUFGRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBRUEsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBEQUFBO0VBQ0EsOENBQUE7RUFDQSx1REFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQUZJO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUlOOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxzREFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLHVEQUFBO0VBQ0EsbUJBQUE7QUFHRjtBQUZFO0VBQ0Usc0JBQUE7QUFJSjtBQURFO0VBaEJGO0lBaUJJLDBCQUFBO0lBRUEsbUJBQUE7SUFDQSxrQkFBQTtFQUdGO0FBQ0Y7O0FBREE7RUFDRSxxQkFBQTtBQUlGOztBQURBLGNBQUE7QUFFQSxjQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFHRjs7QUFEQSxjQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQU1GO0FBTEU7RUFIRjtJQUlJLGlCQUFBO0VBUUY7QUFDRjs7QUFMQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtBQVNGOztBQU5BO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzREFBQTtFQW9CQSxvQkFBQTtBQVZGO0FBVEU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFXSjtBQVRFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVdKO0FBUkU7RUF6QkY7SUEwQkksYUFBQTtJQUNBLFdBQUE7RUFXRjtBQUNGOztBQVJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFFQSwyQkFBQTtFQUNBLFNBQUE7QUFVRjtBQVRFO0VBQ0UsZUFBQTtFQUlBLGNBQUE7RUFDQSxnQ0FBQTtBQVFKO0FBUEk7RUFDRSxxQkFBQTtBQVNOO0FBUEk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQVNOO0FBTEk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQU9OOztBQUZBO0VBQ0Usb0JBQUE7QUFLRiIsInNvdXJjZXNDb250ZW50IjpbImFwcC1wcm9qZWN0IHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9qZWN0IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5zd2lwZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAuc3dpcGVyIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHZoO1xyXG4gICAgbWF4LWhlaWdodDogNDB2aDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21hbmRhLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDQwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTk2KTtcclxuICAgIHRyYW5zaXRpb246IDAuOHMgYWxsIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5yaWdodF9zd2lwZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDM1JSAwJSwgMTAwJSAwLCAxMDAlIDEwMCUsIDglIDEwMCUpO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDZmcjtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgOTUlKTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDI1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB0cmFuc2l0aW9uOiAwLjhzIGFsbCBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcbi5ob21lX2hlcm8ge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKi9cclxuLmhlYWRlciB7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIGZvbnQtc2l6ZTogMi44NzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjMjIyMjIyO1xyXG59XHJcbi5oZWFkZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUlO1xyXG59XHJcbi8qKioqKioqKioqKioqL1xyXG4uY29udGVudC1zcGxpdHRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcbi5sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcbi5ibG9jayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC43NWVtO1xyXG59XHJcbi5jb250ZW50IHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiAjNDA0MDQwO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYzJhIHtcclxuICBmb250LXNpemU6IDEuNmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MCBlYXNlLWluLW91dDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmMyYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzQ0NDQ0NDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMzUlIDAlLCAxMDAlIDAsIDEwMCUgMTAwJSwgOCUgMTAwJSk7XHJcbiAgc3BhbiB7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1MjAyYjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgzMTZkZWcpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXJfaWNvbl9wcm9qZWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgbWFyZ2luOiAxcmVtIDByZW0gMXJlbSAwcmVtO1xyXG4gIGdhcDogMTBweDtcclxuICBmaWd1cmUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgfVxyXG4gICAgZmlnY2FwdGlvbiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ud3JhcHBlcjpob3ZlciAucmlnaHQge1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('queryAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.query)('.typping', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      opacity: 0,
      transform: 'translateX(80px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.stagger)(100, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)(500)])])])])]
  }
});

/***/ }),

/***/ 6046:
/*!****************************************************!*\
  !*** ./src/app/shared/services/contact.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactService": () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.service */ 8794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ContactService extends _global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService {
  constructor(http) {
    super();
    this.http = http;
    this.isSending$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
  }
  sendMessage(dataMessage) {
    return this.http.post(`${this.API_URL}message`, dataMessage);
  }
}
ContactService.ɵfac = function ContactService_Factory(t) {
  return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
ContactService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ContactService,
  factory: ContactService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8794:
/*!***************************************************!*\
  !*** ./src/app/shared/services/global.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": () => (/* binding */ GlobalService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GlobalService {
  constructor() {
    this.API_URL = 'http://localhost:5000/api/';
    this.API_IMG_URL = 'http://localhost:5000/projects/';
  }
}
GlobalService.ɵfac = function GlobalService_Factory(t) {
  return new (t || GlobalService)();
};
GlobalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: GlobalService,
  factory: GlobalService.ɵfac
});

/***/ }),

/***/ 6952:
/*!****************************************************!*\
  !*** ./src/app/shared/services/project.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.service */ 8794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ProjectService extends _global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService {
  constructor(http) {
    super();
    this.http = http;
    this.API_URI_PROJECT = this.API_URL + 'projects';
  }
  getAllProjects() {
    return this.http.get(this.API_URI_PROJECT);
  }
  getById(id) {
    return this.http.get(`${this.API_URI_PROJECT}/${id}`);
  }
  create(project) {
    return this.http.post(`${this.API_URI_PROJECT}}`, project);
  }
  update(id, updatedProject) {
    return this.http.post(`${this.API_URI_PROJECT}/${id}`, updatedProject);
  }
  delete(id) {
    return this.http.delete(`${this.API_URI_PROJECT}/${id}`);
  }
}
ProjectService.ɵfac = function ProjectService_Factory(t) {
  return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ProjectService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ProjectService,
  factory: ProjectService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6090:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/technology.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnologiesService": () => (/* binding */ TechnologiesService)
/* harmony export */ });
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.service */ 8794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class TechnologiesService extends _global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService {
  constructor(http) {
    super();
    this.http = http;
    this.API_URI_TECHNOLOGY = this.API_URL + 'technologies';
  }
  getAll() {
    return this.http.get(this.API_URI_TECHNOLOGY);
  }
  getById(id) {
    return this.http.get(`${this.API_URI_TECHNOLOGY}/${id}`);
  }
  create(project) {
    return this.http.post(`${this.API_URI_TECHNOLOGY}}`, project);
  }
  update(id, updatedProject) {
    return this.http.post(`${this.API_URI_TECHNOLOGY}/${id}`, updatedProject);
  }
  delete(id) {
    return this.http.delete(`${this.API_URI_TECHNOLOGY}/${id}`);
  }
}
TechnologiesService.ɵfac = function TechnologiesService_Factory(t) {
  return new (t || TechnologiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
TechnologiesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TechnologiesService,
  factory: TechnologiesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4673:
/*!******************************************!*\
  !*** ./src/app/skill/skill.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillComponent": () => (/* binding */ SkillComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_technology_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/technology.service */ 6090);
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/global.service */ 8794);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);






const _c0 = function (a0) {
  return [a0];
};
function SkillComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r0.url_image + t_r1.icon), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r1.title);
  }
}
const _c1 = function () {
  return ["/projects"];
};
class SkillComponent {
  constructor(technoService, globalService) {
    this.technoService = technoService;
    this.globalService = globalService;
    this.technologies = [];
    this.url_image = '';
  }
  ngOnInit() {
    this.url_image = this.globalService.API_IMG_URL;
    this.technoService.getAll().subscribe({
      next: response => {
        const {
          data
        } = response;
        this.technologies = data.technologies;
      }
    });
  }
}
SkillComponent.ɵfac = function SkillComponent_Factory(t) {
  return new (t || SkillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_technology_service__WEBPACK_IMPORTED_MODULE_0__.TechnologiesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__.GlobalService));
};
SkillComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SkillComponent,
  selectors: [["app-skill"]],
  decls: 28,
  vars: 4,
  consts: [[1, "home_hero"], [1, "profil_picture", "typping"], ["src", "../../assets/images/remyw.png", "alt", "it's me", 1, "enter"], [1, "profil_info", "d-flex", "flex-column", "justify-content-center"], [1, "title_text", "typping"], [1, "first_letter"], [1, "tel_profil_picture", "my-2", "typping"], ["src", "../../assets/images/remyw.png", "alt", ""], [1, "title_red", "typping"], [1, "description", "typing-container"], [1, "typping"], [1, "container_technologies", "my-5"], [1, "title_bar", "d-flex", "align-items-center", "typping"], [1, "bar", "me-2"], [1, "container_icon", "d-flex", "typping"], ["class", "d-flex flex-column align-items-center figure", 4, "ngFor", "ngForOf"], [1, "btn_arrow", "my-4", "typping", 3, "routerLink"], [1, "d-flex", "flex-column", "align-items-center", "figure"], ["alt", "t.title", 1, "my-2", 3, "src"], [1, "figcaption"]],
  template: function SkillComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div")(5, "div")(6, "h1", 4)(7, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "S");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "kills ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " My studies ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " In 2020, I made the decision to pursue further studies in the field of development due to my enduring passion for technology. I enrolled in a higher education program at EPSE d'Enghien, where I embarked on a two-year journey. Throughout this period, I gained extensive knowledge in PHP and Symfony, alongside an introductory understanding of frontend development using React. However, being aware of the evolving industry trends, I complemented my education by acquiring proficiency in Angular, React, and Node.js. These new skills captivated me and further fueled my enthusiasm for modern technologies. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11)(18, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Technologies ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SkillComponent_div_22_Template, 4, 4, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div")(24, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Are you ready for looking my projects ? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u2192");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@queryAnimation", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.technologies);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: [".away[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.container_technologies[_ngcontent-%COMP%]   .container_icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.container_technologies[_ngcontent-%COMP%]   .container_icon[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 80px;\n  margin: 4px 0;\n  transition: all 0.5s ease-in-out;\n}\n.container_technologies[_ngcontent-%COMP%]   .container_icon[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.container_technologies[_ngcontent-%COMP%]   .container_icon[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%]   .figcaption[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2tpbGwvc2tpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBRUEsU0FBQTtBQUpKO0FBS0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxnQ0FBQTtBQUpOO0FBS007RUFDRSxxQkFBQTtBQUhSO0FBS007RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FBSFIiLCJzb3VyY2VzQ29udGVudCI6WyIuYXdheSB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTIpO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lcl90ZWNobm9sb2dpZXMge1xyXG4gIC5jb250YWluZXJfaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgLmZpZ3VyZSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcblxyXG4gICAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICB9XHJcbiAgICAgIC5maWdjYXB0aW9uIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('queryAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.query)('.typping', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      opacity: 0,
      transform: 'translateX(80px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.stagger)(100, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)(500)])])])])]
  }
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map