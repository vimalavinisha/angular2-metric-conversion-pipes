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
    var MassConversions;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // We use the @Pipe decorator to register the name of the pipe
            MassConversions = (function () {
                function MassConversions() {
                }
                MassConversions.prototype.transform = function (value, arg1, arg2) {
                    var temp, decimalLimit;
                    if (value && typeof value === 'number') {
                        // Convertions from Grams
                        if (arg1 === 'g-kg') {
                            temp = value * 0.001;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'KG';
                        }
                        if (arg1 === 'g-lb') {
                            temp = value * 0.0022046;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'LB';
                        }
                        if (arg1 === 'g-oz') {
                            temp = value * 0.035274;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'OZ';
                        }
                        // Convertions from KiloGrams
                        if (arg1 === 'kg-g') {
                            temp = value * 1000;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'G';
                        }
                        if (arg1 === 'kg-lb') {
                            temp = value * 2.2046;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'LB';
                        }
                        if (arg1 === 'kg-oz') {
                            temp = value / 0.0283495231;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'OZ';
                        }
                        // Convertions from LB(pound)
                        if (arg1 === 'lb-g') {
                            temp = value * 453.59237;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'G';
                        }
                        if (arg1 === 'lb-kg') {
                            temp = value / 2.2046;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'KG';
                        }
                        if (arg1 === 'lb-oz') {
                            temp = value * 16;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'OZ';
                        }
                        // Convertions from OZ - ounces
                        if (arg1 === 'oz-g') {
                            temp = value / 0.035274;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'G';
                        }
                        if (arg1 === 'oz-kg') {
                            temp = value * 0.0283495231;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'KG';
                        }
                        if (arg1 === 'oz-lb') {
                            temp = value / 16;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'LB';
                        }
                    }
                };
                MassConversions = __decorate([
                    core_1.Pipe({
                        name: 'massConversions'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MassConversions);
                return MassConversions;
            }());
            exports_1("MassConversions", MassConversions);
        }
    }
});
//# sourceMappingURL=MassConversions.js.map