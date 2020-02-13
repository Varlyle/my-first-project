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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Client.js":
/*!***********************!*\
  !*** ./src/Client.js ***!
  \***********************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Client\", function() { return Client; });\nclass Client {\n    constructor(id, name, surname, spentMoney = 0) {\n        this.id = id;\n        this.name = name;\n        this.surname = surname;\n        this.spentMoney = spentMoney;\n        this.productsList = [];\n    }\n\n    addProduct(productName, count) {\n        for(let i = 0; i < count; i++) {\n            this.productsList.push(productName);\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/Client.js?");

/***/ }),

/***/ "./src/Product.js":
/*!************************!*\
  !*** ./src/Product.js ***!
  \************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Product\", function() { return Product; });\nclass Product {\n    constructor(id, name, type, cost) {\n        this.id = id;\n        this.name = name;\n        this.type = type;\n        this.cost = cost;\n    }\n}\n\n//# sourceURL=webpack:///./src/Product.js?");

/***/ }),

/***/ "./src/Purchase.js":
/*!*************************!*\
  !*** ./src/Purchase.js ***!
  \*************************/
/*! exports provided: Purchase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Purchase\", function() { return Purchase; });\nclass Purchase {\n    constructor(productName, type, sum, amount = 1, time = new Date()) {\n        this.productName = productName;\n        this.type = type;\n        this.sum = sum;\n        this.amount = amount;\n        this.time = time;\n    }\n};\n\n//# sourceURL=webpack:///./src/Purchase.js?");

/***/ }),

/***/ "./src/Shop.js":
/*!*********************!*\
  !*** ./src/Shop.js ***!
  \*********************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Shop\", function() { return Shop; });\n/* harmony import */ var _Purchase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Purchase */ \"./src/Purchase.js\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ \"./src/Product.js\");\n\n\n\nclass Shop {\n    constructor() {\n        this.clients = [];\n        this.products = [];\n        this.purchases = [];\n    }\n\n    addClient(client) {\n        this.clients.push(client);\n    }\n\n    deleteClient(client) {\n        this.clients.forEach((item, i, clients) => {\n            if(item.id == client.id) {\n                clients.splice(i, 1);\n            }\n        });\n    }\n\n    addProduct(product) {\n        this.products.push(product);\n    }\n\n    deleteProduct(product) {\n        this.products.forEach((item, i, products) => {\n            if(item.id == product.id) {\n                products.splice(i, 1);\n            }\n        });\n    }\n\n    addPurchase(purchase) {\n        this.purchases.push(purchase);\n    }\n\n    sellProduct(client, productName, count) {\n\n        let productsToSell = this.products.filter(item => item.name == productName),\n            infoProduct = productsToSell[0];\n\n        if(!productsToSell) {\n            return `Товара ${productName} нет на складе.`;\n        }\n        if(productsToSell.length < count) {\n            return `Товара ${productName} недостаточно на складе.`\n        }\n\n        productsToSell.splice(0, productsToSell.length - count);\n\n        let sum = count * infoProduct.cost;\n\n        productsToSell.forEach(p => {\n            this.deleteProduct(p);\n        });\n\n        this.addPurchase(new _Purchase__WEBPACK_IMPORTED_MODULE_0__[\"Purchase\"](infoProduct.name, infoProduct.type, sum, count));\n        client.addProduct(productName, count);\n        client.spentMoney += sum;\n    }\n\n    productsCount() {\n        console.log('-------ProductsCount')\n        return this.products.length;\n    }\n\n    productsCountByType() {\n        console.log('-------ProductsCountByType')\n        let result = {};\n        this.products.map(p => p.type).forEach(function(type) { result[type] = (result[type] || 0) + 1});\n        return result;\n    }\n\n    purchasedProductsCount() {\n        console.log('-------PurchasedProductsCount')\n        return this.purchases.map(p => p.amount).reduce((sum, i) => sum + i);\n    }\n\n    purchasedSumByType() {\n        console.log('-------PurchasedSumByType')\n        let result = {};\n        this.purchases.forEach(function(p) { result[p.type] = (result[p.type] || 0) + p.sum});\n        return result;\n    }\n\n    earnedMoney() {\n        console.log('-------EarnedMoney')\n        return this.clients.map(c => c.spentMoney).reduce((sum, i) => sum + i);\n    }\n\n    countClientProducts(client) {\n        console.log('-------countClientProducts')\n        return client.productsList.length;\n    }\n}\n\n//# sourceURL=webpack:///./src/Shop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Client.js */ \"./src/Client.js\");\n/* harmony import */ var _Product_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.js */ \"./src/Product.js\");\n/* harmony import */ var _Shop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shop.js */ \"./src/Shop.js\");\n// Магазин\n\n\n\n\n\nlet danylo = new _Client_js__WEBPACK_IMPORTED_MODULE_0__[\"Client\"](1, 'Danylo', 'Varlyhin');\nlet yaroslav = new _Client_js__WEBPACK_IMPORTED_MODULE_0__[\"Client\"](2, 'Yaroslav', 'Isaenkov');\n\nlet potato1 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](1, 'Potato', 'Vegetables', 7);\nlet potato2 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](2, 'Potato', 'Vegetables', 7);\nlet potato3 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](3, 'Potato', 'Vegetables', 7);\n\nlet tomato1 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](4, 'Tomato', 'Vegetables', 19);\nlet tomato2 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](5, 'Tomato', 'Vegetables', 19);\nlet tomato3 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](6, 'Tomato', 'Vegetables', 19);\nlet tomato4 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](7, 'Tomato', 'Vegetables', 19);\nlet tomato5 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](8, 'Tomato', 'Vegetables', 19);\n\nlet apple1 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](9, 'Apple', 'Fruits', 20);\nlet apple2 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](10, 'Apple', 'Fruits', 20);\n\nlet banana1 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](11, 'Banana', 'Fruits', 25);\nlet banana2 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](12, 'Banana', 'Fruits', 25);\nlet banana3 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](13, 'Banana', 'Fruits', 25);\nlet banana4 = new _Product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](14, 'Banana', 'Fruits', 25);\n\nlet shop = new _Shop_js__WEBPACK_IMPORTED_MODULE_2__[\"Shop\"]();\n\nshop.addClient(danylo);\nshop.addClient(yaroslav);\n\nshop.addProduct(potato1);\nshop.addProduct(potato2);\nshop.addProduct(potato3);\n\nshop.addProduct(tomato1);\nshop.addProduct(tomato2);\nshop.addProduct(tomato3);\nshop.addProduct(tomato4);\nshop.addProduct(tomato5);\n\nshop.addProduct(apple1);\nshop.addProduct(apple2);\n\nshop.addProduct(banana1);\nshop.addProduct(banana2);\nshop.addProduct(banana3);\nshop.addProduct(banana4);\n\nshop.sellProduct(danylo, 'Banana', 4);\nshop.sellProduct(danylo, 'Apple', 2);\n\nconsole.log(shop.purchasedProductsCount());\nconsole.log(shop.earnedMoney());\nconsole.log(shop.productsCount());\nconsole.log(shop.productsCountByType());\nconsole.log(shop.purchasedSumByType());\nconsole.log(shop.countClientProducts(danylo));\n\nconsole.log(shop.clients);\nconsole.log(shop.products);\nconsole.log(shop.purchases);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });