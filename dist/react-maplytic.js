(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('axios'), require('react')) :
	typeof define === 'function' && define.amd ? define(['axios', 'react'], factory) :
	(factory(global.axios,global.React));
}(this, (function (axios,React) { 'use strict';

axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;
var React__default = 'default' in React ? React['default'] : React;

// Maplytic replaces the placeholder with its own address
var connection = axios.create({
    baseURL: 'https://lurajon.maplytic.no/'
});

})));
//# sourceMappingURL=react-maplytic.js.map
