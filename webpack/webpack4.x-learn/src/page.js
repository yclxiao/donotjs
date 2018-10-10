"use strict"
// import './page.scss'
require('./page.scss')
import $ from 'jquery'
import _ from 'lodash';
import { getRandom } from "./somemodules/util";
window.onload = function() {
    console.log(getRandom());
    var text = $('#text')
    console.log(text.html)
    text.text = _.upperCase(text.text)
}