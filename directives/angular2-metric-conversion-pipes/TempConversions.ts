import {Pipe, PipeTransform} from '@angular/core';
// We use the @Pipe decorator to register the name of the pipe
@Pipe({
  name: 'TempConversions'
})
// The work of the pipe is handled in the tranform method with our pipe's class
export class TempConversions implements PipeTransform {
  transform(value:any, arg1:any, arg2:any):any {
  	var temp, decimalLimit;
    if(value && typeof value === 'number') {
    	if(arg1 === 'C-F') {
    		 temp = value * 9/5 + 32;
    		 decimalLimit = arg2;
    		return temp.toFixed(decimalLimit) + '°F';
    	}
    	if(arg1 === 'C-K') {
    		 temp = (value + 273.15);
    		 decimalLimit = arg2;
    		return temp.toFixed(decimalLimit) + 'K';
    	}
    	if(arg1 === 'F-C') {
    	    temp = (value - 32) * 5/9;
	        decimalLimit = arg2;
	        return temp.toFixed(decimalLimit) + '°C';
    	}
    	if(arg1 === 'F-K') {
    	    temp = (value - 32) * 5/9+273.15;
	        decimalLimit = arg2;
	        return temp.toFixed(decimalLimit) + 'K';
    	}
    	if(arg1 === 'K-C') {
    		 temp = value - 273.15;
    		 decimalLimit = arg2;
    		return temp.toFixed(decimalLimit) + '°C';
    	}
    	if(arg1 === 'K-F') {
    		 temp = ((value - 273.15) * 1.8) + 32;
    		 decimalLimit = arg2;
    		return temp.toFixed(decimalLimit) + '°F';
    	}
    }
  }
}
