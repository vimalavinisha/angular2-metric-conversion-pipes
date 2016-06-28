import {Pipe, PipeTransform} from 'angular2/core';
// We use the @Pipe decorator to register the name of the pipe
@Pipe({
  name: 'lengthConversions'
})
// The work of the pipe is handled in the tranform method with our pipe's class
export class LengthConversions implements PipeTransform {
  transform(value:any, arg1:any, arg2:any):any {
  	var temp, decimalLimit;
    if(value && typeof value === 'number') {
      // convert from Feet-Centimeters
    	if(arg1 === 'FT-CM') {
             temp = value * 30.48;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'cm';
        }
      // convert from Feet-Meters
      if(arg1 === 'FT-M') {
             temp = value * 0.3048;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'm';
        }
      // convert from Feet-Inches
    	if(arg1 === 'FT-IN') {
    		 temp = (value  * 12);
    		 decimalLimit = arg2;
    		return temp.toFixed(decimalLimit) + 'in';
    	}
      // convert from Feet-Miles
      if(arg1 === 'FT-MI') {
         temp = (value / 5280);
         decimalLimit = arg2;
        return temp.toFixed(decimalLimit) + 'mi';
      }
      // convert from Feet-Yard
      if(arg1 === 'FT-YD') {
         temp = (value / 3);
         decimalLimit = arg2;
        return temp.toFixed(decimalLimit) + 'yd';
      }
      // convert from Inches-Feet
    	if(arg1 === 'IN-FT') {
             temp = value /12;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'ft';
        }
      // convert from Inches-Meter
      if(arg1 === 'IN-M') {
             temp = value * 0.0254;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'm';
        }
      // convert from Inches-Miles
      if(arg1 === 'IN-MI') {
             temp = value /63360;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'mi';
        }
      // convert from Inches-Yards
      if(arg1 === 'IN-YD') {
             temp = value /36;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'yd';
        }
      // convert from Inches-Centimeters
      if(arg1 === 'IN-CM') {
             temp = value * 2.54;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'cm';
        }
      // convert from Centimeters-Feet
      if(arg1 === 'CM-FT') {
             temp = value / 30.48;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'ft';
        }
      // convert from Centimeters-Inches
      if(arg1 === 'CM-IN') {
             temp = value / 2.54;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'in';
        }
      // convert from Centimeters-Meter
      if(arg1 === 'CM-M') {
             temp = value / 100;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'm';
        }
      // convert from Centimeters-Miles
      if(arg1 === 'CM-MI') {
             temp = value / 160934.4;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'mi';
        }
      // convert from Centimeters-Yard
      if(arg1 === 'CM-YD') {
             temp = value / 91.44;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'yd';
        }
      // convert from Meters-Feet
      if(arg1 === 'M-FT') {
             temp = value / 0.3048;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'ft';
        }
      // convert from Meter-Inches
      if(arg1 === 'M-IN') {
             temp = value / 0.0254;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'In';
        }
        // convert from Meter-Centimeter
        if(arg1 === 'M-CM') {
               temp = value * 100;
               decimalLimit = arg2;
              return temp.toFixed(decimalLimit) + 'cm';
          }
      // convert from Miles-Inches
      if(arg1 === 'MI-IN') {
             temp = value * 63360;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'in';
        }
      // convert from Miles-Centimeter
      if(arg1 === 'MI-CM') {
         temp = (value * 160934.4);
         decimalLimit = arg2;
        return temp.toFixed(decimalLimit) + 'cm';
      }
      // convert from Miles-Feet
      if(arg1 === 'MI-FT') {
         temp = (value * 5280);
         decimalLimit = arg2;
        return temp.toFixed(decimalLimit) + 'ft';
      }
      // convert from Yard-Feet
      if(arg1 === 'YD-FT') {
         temp = (value * 3);
         decimalLimit = arg2;
        return temp.toFixed(decimalLimit) + 'ft';
      }
      // convert from Yards-Inches
      if(arg1 === 'YD-IN') {
             temp = value *36;
             decimalLimit = arg2;
            return temp.toFixed(decimalLimit) + 'in';
        }
        // convert from Yards-Centimeter
        if(arg1 === 'YD-CM') {
               temp = value * 91.44;
               decimalLimit = arg2;
              return temp.toFixed(decimalLimit) + 'cm';
          }

    }
  }
}
