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
    var TempConversions;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // We use the @Pipe decorator to register the name of the pipe
            TempConversions = (function () {
                function TempConversions() {
                }
                TempConversions.prototype.transform = function (value, arg1, arg2) {
                    var temp, decimalLimit;
                    if (value && typeof value === 'number') {
                        if (arg1 === 'C-F') {
                            temp = value * 9 / 5 + 32;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + '°F';
                        }
                        if (arg1 === 'C-K') {
                            temp = (value + 273.15);
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'K';
                        }
                        if (arg1 === 'F-C') {
                            temp = (value - 32) * 5 / 9;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + '°C';
                        }
                        if (arg1 === 'F-K') {
                            temp = (value - 32) * 5 / 9 + 273.15;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + 'K';
                        }
                        if (arg1 === 'K-C') {
                            temp = value - 273.15;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + '°C';
                        }
                        if (arg1 === 'K-F') {
                            temp = ((value - 273.15) * 1.8) + 32;
                            decimalLimit = arg2;
                            return temp.toFixed(decimalLimit) + '°F';
                        }
                    }
                };
                TempConversions = __decorate([
                    core_1.Pipe({
                        name: 'TempConversions'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TempConversions);
                return TempConversions;
            }());
            exports_1("TempConversions", TempConversions);
        }
    }
});
//# sourceMappingURL=TempConversions.js.map