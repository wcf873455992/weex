// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(24)
)

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "G:\\weex\\weex_demo\\src\\components\\pages\\office\\Office.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3514afb8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "width": "750",
    "backgroundColor": "#EFEFEF"
  },
  "row": {
    "flexDirection": "row"
  },
  "tab-cell": {
    "backgroundColor": "#f51438"
  },
  "tab": {
    "height": "120",
    "width": "150",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "tab-icon": {
    "width": "45",
    "height": "45"
  },
  "tab-title": {
    "fontSize": "28",
    "color": "#FFFFFF",
    "marginTop": "10"
  },
  "banner-image": {
    "width": "750",
    "height": "235"
  },
  "app-cell": {
    "backgroundColor": "#FFFFFF"
  },
  "app-box": {
    "width": "180",
    "paddingTop": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "paddingRight": "15"
  },
  "app-title": {
    "width": "180",
    "fontSize": "30",
    "textAlign": "center",
    "paddingTop": "15",
    "color": "#999999"
  },
  "app-icon": {
    "width": "140",
    "height": "140",
    "marginLeft": "20"
  },
  "card": {
    "width": "710",
    "marginTop": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "marginLeft": "20",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "15"
  },
  "card-banner": {
    "width": "222",
    "height": "60"
  },
  "card-side": {
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "card-poster": {
    "width": "230",
    "height": "230",
    "marginRight": "20"
  },
  "card-title": {
    "fontSize": "26",
    "color": "#666666",
    "marginTop": "10",
    "paddingBottom": "6"
  },
  "card-line": {
    "alignItems": "center",
    "paddingTop": "5",
    "paddingBottom": "5"
  },
  "card-icon": {
    "width": "36",
    "height": "36",
    "marginRight": "8"
  },
  "card-subtitle": {
    "fontSize": "28",
    "color": "#07152a"
  },
  "card-progress": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "230",
    "height": "30",
    "backgroundColor": "#FEC1C1",
    "borderRadius": "20",
    "marginTop": "10",
    "marginBottom": "10"
  },
  "card-progress-inner": {
    "position": "absolute",
    "height": "30",
    "left": 0,
    "borderRadius": "20",
    "backgroundColor": "#ff3c32"
  },
  "card-got": {
    "position": "absolute",
    "left": "8",
    "lineHeight": "30",
    "color": "#FFFFFF",
    "fontSize": "22"
  },
  "card-remain": {
    "position": "absolute",
    "right": "8",
    "lineHeight": "30",
    "color": "#FFFFFF",
    "fontSize": "22"
  },
  "card-info": {
    "width": "400",
    "flexDirection": "row",
    "alignItems": "flex-end"
  },
  "card-price": {
    "fontSize": "52",
    "color": "#ff3c32",
    "marginBottom": "-10",
    "marginTop": "10",
    "marginRight": "8"
  },
  "card-sale-price": {
    "fontSize": "28",
    "color": "#999999",
    "textDecoration": "line-through"
  },
  "card-btn": {
    "position": "absolute",
    "right": 0,
    "bottom": 0,
    "backgroundColor": "#ff5d62",
    "borderRadius": "8",
    "width": "125",
    "height": "52",
    "justifyContent": "center"
  },
  "card-btn-text": {
    "color": "#FFFFFF",
    "fontSize": "32",
    "textAlign": "center"
  },
  "floor": {
    "marginBottom": "15",
    "backgroundColor": "#FFFFFF"
  },
  "floor-title": {
    "fontSize": "40",
    "textAlign": "center",
    "paddingTop": "35",
    "paddingBottom": "25"
  },
  "floor-desc": {
    "lines": 2,
    "color": "#999999",
    "fontSize": "30",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "floor-image-box": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": "20"
  },
  "floor-image": {
    "width": "245",
    "height": "245"
  },
  "floor-comment": {
    "color": "#52bfe6",
    "fontSize": "32",
    "textAlign": "right",
    "paddingRight": "50",
    "marginTop": "25",
    "marginBottom": "20"
  }
}

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dataset = {
  card: [{
    type: 'card',
    poster: 'http://gw.alicdn.com/tps/i4/1611893164/TB2t4mtXJqUQKJjSZFIXXcOkFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
    title: '澳洲牛排10份装送刀叉酱料黄油',
    subtitle1: '送平底锅前3000仅78',
    subtitle2: '私厨经典 镇店套餐',
    got: 173,
    progress: 35,
    price: { real: 108, sale: 240.00 }
  }, {
    type: 'card',
    poster: 'http://gw.alicdn.com/tps/i2/2838892713/TB2ma39aqmgSKJjSsphXXcy1VXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
    title: 'HUAWEI P10',
    subtitle1: '买赠好礼6期免息',
    subtitle2: '6期免息',
    got: 996,
    progress: 89,
    price: { real: 3488, sale: 3488.00 }
  }, {
    type: 'card',
    poster: 'http://gw.alicdn.com/tps/i3/902257410/TB2pzypfU3IL1JjSZFMXXajrFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
    title: '海宁真皮皮衣男绵羊皮夹克外套',
    subtitle1: '店内领券下单438',
    subtitle2: '限送500双皮手套',
    got: 296,
    progress: 16,
    price: { real: 538, sale: 3080.00 }
  }, {
    type: 'card',
    poster: 'https://gw.alicdn.com/tps/i4/0/TB2Mx3Jg4TI8KJjSspiXXbM4FXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
    title: '玛丽黛佳元气风动三色腮红正品',
    subtitle1: '满108领券立减10元',
    subtitle2: '宛若天生粉红好气色',
    got: 1457,
    progress: 61,
    price: { real: 49, sale: 69.80 }
  }, {
    type: 'card',
    poster: 'https://gw.alicdn.com/tps/i2/0/TB2i25DgN6I8KJjSszfXXaZVXXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
    title: '王小二高山脐橙，酸甜如初恋',
    subtitle1: '前3分钟半价',
    subtitle2: 'VC仓库，酸甜如初恋',
    got: 598,
    progress: 42,
    price: { real: 29.8, sale: 56.10 }
  }]
  // generate list data
};function createListData(order) {
  var array = [];
  var list = order.split(/[\s,]+/);
  for (var i = 0; i < list.length; ++i) {
    var candidates = dataset[list[i]];
    if (candidates) {
      var idx = Math.floor(Math.random() * candidates.length);
      array.push(candidates[idx]);
    }
  }
  return array;
}

exports.default = {
  data: function data() {
    var order = 'tab,banner,apps,apps,banner,card,floor,floor' + ',tab,apps,apps,banner,card,card,banner,floor,floor,floor' + ',tab,banner,card,apps,banner,card,floor,floor,floor,floor,floor' + ',tab,apps,banner,card,banner,floor,floor,floor' + ',tab,apps,apps,card,floor,card,banner,floor,floor' + ',tab,banner,card,apps,banner,card,floor,floor,floor,floor' + ',tab,apps,banner,card,card,apps,floor,floor,floor';
    return {
      longList: createListData(order)
    };
  }
};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, [_vm._l((_vm.longList), function(item, index) {
    return [(item.type === 'card') ? _c('cell', {
      key: index,
      staticClass: ["card-cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["card"]
    }, [_vm._m(0, true), _c('div', {
      staticClass: ["row"],
      staticStyle: {
        paddingBottom: "18px"
      }
    }, [_c('div', {
      staticClass: ["card-side"]
    }, [_c('image', {
      staticClass: ["card-poster"],
      attrs: {
        "src": item.poster
      }
    })]), _c('div', {
      staticClass: ["card-message"]
    }, [_c('text', {
      staticClass: ["card-title"]
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["card-line", "row"]
    }, [_c('image', {
      staticClass: ["card-icon"],
      attrs: {
        "src": "//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"
      }
    }), _c('text', {
      staticClass: ["card-subtitle"]
    }, [_vm._v(_vm._s(item.subtitle1))])]), _c('div', {
      staticClass: ["card-line", "row"]
    }, [_c('image', {
      staticClass: ["card-icon"],
      attrs: {
        "src": "//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"
      }
    }), _c('text', {
      staticClass: ["card-subtitle"]
    }, [_vm._v(_vm._s(item.subtitle2))])]), _c('div', {
      staticClass: ["card-progress", "row"]
    }, [_c('div', {
      staticClass: ["card-progress-inner"],
      style: {
        width: item.progress * 230 / 100
      }
    }), _c('text', {
      staticClass: ["card-got"]
    }, [_vm._v("已抢 " + _vm._s(item.got) + " 件")]), _c('text', {
      staticClass: ["card-remain"]
    }, [_vm._v(_vm._s(item.progress) + " %")])]), _c('div', {
      staticClass: ["card-info", "row"]
    }, [_c('text', {
      staticClass: ["card-price"]
    }, [_vm._v("¥ " + _vm._s(item.price.real))]), _c('text', {
      staticClass: ["card-sale-price"]
    }, [_vm._v("¥ " + _vm._s(item.price.sale))]), _vm._m(1, true)])])])])]) : _vm._e()]
  })], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      height: "60px",
      paddingLeft: "30"
    }
  }, [_c('image', {
    staticClass: ["card-banner"],
    attrs: {
      "src": "//img.alicdn.com/tfs/TB1moeURFXXXXasXXXXXXXXXXXX-390-105.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["card-btn"]
  }, [_c('text', {
    staticClass: ["card-btn-text"]
  }, [_vm._v("马上抢")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Office = __webpack_require__(2);

var _Office2 = _interopRequireDefault(_Office);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Office2.default.el = '#root';
new Vue(_Office2.default);

/***/ })

/******/ });