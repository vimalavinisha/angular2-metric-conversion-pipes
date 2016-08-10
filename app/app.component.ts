/* 
 * @author Vimala A
 */

import {Component} from '@angular/core';
import {TempConversions,MassConversions,LengthConversions} from '../directives/angular2-metric-conversion-pipes/index';
@Component({
    selector : 'my-app',
    pipes: [TempConversions,MassConversions,LengthConversions],
    template:  `
      <h3> TempConversions - Example </h3>
      <p> Supported TempConversions pipes- C-F, C-K, F-C, F-K, K-F, K-C </p>
      <span> C ->  Celsius, F -> Fahrenheit , K-> Kelvin
      <h5> Celsius To Fahrenheit Conversion: {{temperature | TempConversions:'C-F':1}}</h5>
      <h3> Mass/Weight Conversions - Example </h3>
      <p> Supported Mass/Weight pipes- g-kg, g-lb, g-oz, kg-g, kg-lb, kg-oz, lb-g, lb-kg, lb-oz, oz-g, oz-kg,oz-lb</p>
      <span> g ->  Gram, kg-> KiloGram , lb -> Pound, oz -> Ounce </span> 
      <h5> Weight Kg to LB Conversion: {{ mass| massConversions:'kg-lb':2}}</h5>
      <h3> LengthConversions - Example </h3>
      <p> Supported LengthConversions pipes- FT-CM, FT-M, FT-IN, FT-MI, FT-YD, 
      IN-FT, IN-M, IN-MI, IN-YD, IN-CM,
      CM-FT,CM-IN, CM-M, CM-YD, CM-MI, 
      M-FT, M-IN, M-CM, 
      MI-IN, MI-FT, MI-CM, 
      YD-FT, YD-IN, YD-CM</p>
      <span> CM ->  Centimeter, M -> Meter , IN-> Inches , FT -> Foot(Feet), MI -> Mile, YD -> Yard </span>
      <h5> LengthConversions from CM to Inches: {{length | lengthConversions:'CM-IN':3}} </h5>
	`    
})
export class AppComponent {
  temperature:number = 20;
  mass:number = 47;
  length:number = 157;
}
