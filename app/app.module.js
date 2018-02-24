"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("./rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var routes_1 = require("./routes");
var forms_1 = require("@angular/forms");
var index_1 = require("./events/index");
var index_2 = require("./common/index");
var events_app_component_1 = require("./events-app.component");
var navbar_component_1 = require("./nav/navbar.component");
var _404_component_1 = require("./errors/404.component");
var auth_service_1 = require("./user/auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule],
        declarations: [
            events_app_component_1.EventsAppComponent,
            index_1.EventsListComponent,
            index_1.EventThumbnailComponent,
            navbar_component_1.NavBarComponent,
            index_1.EventDetailsComponent,
            index_1.CreateEventComponent,
            index_1.CreateSessionComponent,
            index_1.SessionListComponent,
            index_2.CollapsibleWellComponent,
            index_2.SimpleModalComponent,
            _404_component_1.Error404Component,
            index_2.ModalTriggerDirective,
            index_1.DurationPipe,
            index_1.UpvoteComponent,
            index_1.LocationValidator
        ],
        bootstrap: [events_app_component_1.EventsAppComponent],
        providers: [
            index_1.EventService,
            {
                provide: index_2.TOASTR_TOKEN,
                useValue: toastr,
            },
            {
                provide: index_2.JQUERY_TOKEN,
                useValue: jQuery,
            },
            index_1.EventResolver,
            {
                provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState,
            },
            index_1.EventListResolver,
            auth_service_1.AuthService,
            index_1.VoterService
        ],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm('You have not saved your changes. Leave anyway?');
    }
    return true;
}
//# sourceMappingURL=app.module.js.map