/*
 * @author Vimala A
 */
System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.temperature = 20;
                    this.mass = 47;
                    this.length = 157;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <h3> TempConversions - Example </h3>\n      <p> Supported TempConversions pipes- C-F, C-K, F-C, F-K, K-F, K-C </p>\n      <span> C ->  Celsius, F -> Fahrenheit , K-> Kelvin\n      <h5> Celsius To Fahrenheit Conversion: {{temperature | TempConversions:'C-F':1}}</h5>\n      <h3> Mass/Weight Conversions - Example </h3>\n      <p> Supported Mass/Weight pipes- g-kg, g-lb, g-oz, kg-g, kg-lb, kg-oz, lb-g, lb-kg, lb-oz, oz-g, oz-kg,oz-lb</p>\n      <span> g ->  Gram, kg-> KiloGram , lb -> Pound, oz -> Ounce </span> \n      <h5> Weight Kg to LB Conversion: {{ mass| massConversions:'kg-lb':2}}</h5>\n      <h3> LengthConversions - Example </h3>\n      <p> Supported LengthConversions pipes- FT-CM, FT-M, FT-IN, FT-MI, FT-YD, \n      IN-FT, IN-M, IN-MI, IN-YD, IN-CM,\n      CM-FT,CM-IN, CM-M, CM-YD, CM-MI, \n      M-FT, M-IN, M-CM, \n      MI-IN, MI-FT, MI-CM, \n      YD-FT, YD-IN, YD-CM</p>\n      <span> CM ->  Centimeter, M -> Meter , IN-> Inches , FT -> Foot(Feet), MI -> Mile, YD -> Yard </span>\n      <h5> LengthConversions from CM to Inches: {{length | lengthConversions:'CM-IN':3}} </h5>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map