/**
 Created by liuximing on 2017/10/30.
 ╭︿︿︿╮
 {/ o o /}
 ( (oo) )
 ︶︶︶
 **/
// const greeter = require('./Greeter.js');//es5
import Greeter from './Greeter';           //es6
import '../css/main.css';
document.querySelector("#root").appendChild(Greeter());