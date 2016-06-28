import {Pipe, PipeTransform} from 'angular2/core';
// We use the @Pipe decorator to register the name of the pipe
@Pipe({
  name: 'massConversions'
})
// The work of the pipe is handled in the tranform method with our pipe's class
export class MassConversions implements PipeTransform {
  transform(value:any, arg1:any, arg2:any):any {
  	var temp, decimalLimit;
  	if(value && typeof value === 'number')) {
      // Convertions from Grams
  		  if(arg1 === 'g-kg') {
  		     temp = value * 0.001;
  		     decimalLimit= arg2;
  		    return temp.toFixed(decimalLimit) + 'KG';
  		}
        if(arg1 === 'g-lb') {
           temp = value * 0.0022046;
           decimalLimit= arg2;
          return temp.toFixed(decimalLimit) + 'LB';
      }
        if(arg1 === 'g-oz') {
           temp = value * 0.035274;
           decimalLimit= arg2;
          return temp.toFixed(decimalLimit) + 'OZ';
      }
      // Convertions from KiloGrams
        if(arg1 === 'kg-g') {
           temp = value *1000;
           decimalLimit= arg2;
          return temp.toFixed(decimalLimit) + 'G';
      }
        if(arg1 === 'kg-lb') {
           temp = value *2.2046;
           decimalLimit= arg2;
          return temp.toFixed(decimalLimit) + 'LB';
      }
        if(arg1 === 'kg-oz') {
           temp = value / 0.0283495231;
           decimalLimit= arg2;
          return temp.toFixed(decimalLimit) + 'OZ';
      }
      // Convertions from LB(pound)
        if(arg1 === 'lb-g') {
           temp = value * 453.59237;
           decimalLimit= arg2;
          return temp.toFixed(decimalLimit) + 'G';
      }
        if(arg1 === 'lb-kg') {
           temp = value / 2.2046;
           decimalLimit= arg2;
          return temp.toFixed(decimalLimit) + 'KG';
      }
        if(arg1 === 'lb-oz') {
           temp = value * 16;
           decimalLimit= arg2;
          return temp.toFixed(decimalLimit) + 'OZ';
      }
      // Convertions from OZ - ounces
        if(arg1 === 'oz-g') {
           temp = value / 0.035274;
           decimalLimit= arg2;
          return temp.toFixed(decimalLimit) + 'G';
      }
        if(arg1 === 'oz-kg') {
           temp = value * 0.0283495231;
           decimalLimit= arg2;
          return temp.toFixed(decimalLimit) + 'KG';
      }
        if(arg1 === 'oz-lb') {
           temp = value / 16;
           decimalLimit= arg2;
          return temp.toFixed(decimalLimit) + 'LB';
      }
  	}
 }
}
