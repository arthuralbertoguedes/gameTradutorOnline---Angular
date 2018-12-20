(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\n<app-painel-principal></app-painel-principal>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gameTradutor';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topo/topo.component */ "./src/app/topo/topo.component.ts");
/* harmony import */ var _painel_principal_painel_principal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./painel-principal/painel-principal.component */ "./src/app/painel-principal/painel-principal.component.ts");
/* harmony import */ var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progresso/progresso.component */ "./src/app/progresso/progresso.component.ts");
/* harmony import */ var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tentativas/tentativas.component */ "./src/app/tentativas/tentativas.component.ts");
/* harmony import */ var _temporizador_temporizador_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./temporizador/temporizador.component */ "./src/app/temporizador/temporizador.component.ts");
/* harmony import */ var _painel_perguntas_painel_perguntas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./painel-perguntas/painel-perguntas.component */ "./src/app/painel-perguntas/painel-perguntas.component.ts");
/* harmony import */ var _painel_instrucoes_painel_instrucoes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./painel-instrucoes/painel-instrucoes.component */ "./src/app/painel-instrucoes/painel-instrucoes.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _topo_topo_component__WEBPACK_IMPORTED_MODULE_6__["TopoComponent"],
                _painel_principal_painel_principal_component__WEBPACK_IMPORTED_MODULE_7__["PainelPrincipalComponent"],
                _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_8__["ProgressoComponent"],
                _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_9__["TentativasComponent"],
                _temporizador_temporizador_component__WEBPACK_IMPORTED_MODULE_10__["TemporizadorComponent"],
                _painel_perguntas_painel_perguntas_component__WEBPACK_IMPORTED_MODULE_11__["PainelPerguntasComponent"],
                _painel_instrucoes_painel_instrucoes_component__WEBPACK_IMPORTED_MODULE_12__["PainelInstrucoesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/compartilhado/ArrayFrases.ts":
/*!**********************************************!*\
  !*** ./src/app/compartilhado/ArrayFrases.ts ***!
  \**********************************************/
/*! exports provided: ArrayFrases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayFrases", function() { return ArrayFrases; });
/* harmony import */ var _Frase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frase */ "./src/app/compartilhado/Frase.ts");

var ArrayFrases = /** @class */ (function () {
    function ArrayFrases() {
        this.frases = [
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Who', 'Quem'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Hungry', 'Fome'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Chicken', 'Frango'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Thirsty', 'Sede'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Cheese ', 'Queijo'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('How', 'Como'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Cat', 'gato'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Alligator ', 'Jacare'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Camel', 'Camelo'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Dog', 'Cachorro'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Fish', 'Peixe'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Love', 'Amor'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Eleven', 'Onze'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Be happy', 'Seja feliz'),
            new _Frase__WEBPACK_IMPORTED_MODULE_0__["Frase"]('Two', 'Dois'),
        ];
    }
    ArrayFrases.prototype.fraseAleatoria = function () {
        this.numeroAleatorio = (Math.floor(Math.random() * this.frases.length));
        return [this.frases[this.numeroAleatorio.toFixed()], this.numeroAleatorio];
    };
    //Remove um elemento da posição sorteada
    ArrayFrases.prototype.removerFrase = function (index) {
        this.frases.splice(index, 1);
    };
    return ArrayFrases;
}());



/***/ }),

/***/ "./src/app/compartilhado/Frase.ts":
/*!****************************************!*\
  !*** ./src/app/compartilhado/Frase.ts ***!
  \****************************************/
/*! exports provided: Frase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frase", function() { return Frase; });
var Frase = /** @class */ (function () {
    function Frase(fraseIngles, frasePortugues) {
        this.fraseIngles = fraseIngles;
        this.frasePortugues = frasePortugues;
    }
    return Frase;
}());



/***/ }),

/***/ "./src/app/painel-instrucoes/painel-instrucoes.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/painel-instrucoes/painel-instrucoes.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".telaInstrucoes{\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbmVsLWluc3RydWNvZXMvcGFpbmVsLWluc3RydWNvZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyIsImZpbGUiOiJzcmMvYXBwL3BhaW5lbC1pbnN0cnVjb2VzL3BhaW5lbC1pbnN0cnVjb2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVsYUluc3RydWNvZXN7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/painel-instrucoes/painel-instrucoes.component.html":
/*!********************************************************************!*\
  !*** ./src/app/painel-instrucoes/painel-instrucoes.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"text-center m-1 p-4 telaInstrucoes\">\n  <img src=\"/assets/english.png\" style=\"width: 60%\">\n  <h1 class=\"h1\">Bem vindo!</h1>\n  <p>Digite as traduções das palavras em inglês no menor tempo possível e teste seus conhecimentos!</p>\n  <p>Cuidado que você só tem 3 vidas!</p>\n  <p>Está pronto?</p>\n  <button class=\"btn btn-success\" (click)=\"comecarJogo()\">Começar</button>\n</section>"

/***/ }),

/***/ "./src/app/painel-instrucoes/painel-instrucoes.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/painel-instrucoes/painel-instrucoes.component.ts ***!
  \******************************************************************/
/*! exports provided: PainelInstrucoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelInstrucoesComponent", function() { return PainelInstrucoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PainelInstrucoesComponent = /** @class */ (function () {
    function PainelInstrucoesComponent() {
        this.eventoComecarJogo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PainelInstrucoesComponent.prototype.ngOnInit = function () {
    };
    PainelInstrucoesComponent.prototype.comecarJogo = function () {
        this.eventoComecarJogo.emit('comecar');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PainelInstrucoesComponent.prototype, "eventoComecarJogo", void 0);
    PainelInstrucoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-painel-instrucoes',
            template: __webpack_require__(/*! ./painel-instrucoes.component.html */ "./src/app/painel-instrucoes/painel-instrucoes.component.html"),
            styles: [__webpack_require__(/*! ./painel-instrucoes.component.css */ "./src/app/painel-instrucoes/painel-instrucoes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PainelInstrucoesComponent);
    return PainelInstrucoesComponent;
}());



/***/ }),

/***/ "./src/app/painel-perguntas/painel-perguntas.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/painel-perguntas/painel-perguntas.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhaW5lbC1wZXJndW50YXMvcGFpbmVsLXBlcmd1bnRhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/painel-perguntas/painel-perguntas.component.html":
/*!******************************************************************!*\
  !*** ./src/app/painel-perguntas/painel-perguntas.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>Traduza:</h1>\n    <p>{{ fraseIngles }}</p>\n    <input type=\"text\" size=\"200\" max-size=\"200\" class=\"form-control mt-3\" [(ngModel)]=\"fraseAtual\">\n    <button class=\"btn btn-success mt-3\" (click)=conferirResposta($event);>Confirmar</button>\n</div>"

/***/ }),

/***/ "./src/app/painel-perguntas/painel-perguntas.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/painel-perguntas/painel-perguntas.component.ts ***!
  \****************************************************************/
/*! exports provided: PainelPerguntasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelPerguntasComponent", function() { return PainelPerguntasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PainelPerguntasComponent = /** @class */ (function () {
    function PainelPerguntasComponent() {
        this.eventoBotao = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PainelPerguntasComponent.prototype.ngOnInit = function () {
    };
    PainelPerguntasComponent.prototype.conferirResposta = function (e) {
        this.eventoBotao.emit(this.fraseAtual);
        this.fraseAtual = "";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PainelPerguntasComponent.prototype, "eventoBotao", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PainelPerguntasComponent.prototype, "fraseIngles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PainelPerguntasComponent.prototype, "frasePortugues", void 0);
    PainelPerguntasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-painel-perguntas',
            template: __webpack_require__(/*! ./painel-perguntas.component.html */ "./src/app/painel-perguntas/painel-perguntas.component.html"),
            styles: [__webpack_require__(/*! ./painel-perguntas.component.css */ "./src/app/painel-perguntas/painel-perguntas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PainelPerguntasComponent);
    return PainelPerguntasComponent;
}());



/***/ }),

/***/ "./src/app/painel-principal/painel-principal.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/painel-principal/painel-principal.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max-width{\r\n    max-width: 960px;\r\n    overflow: hidden;\r\n    min-height: 500px;\r\n    /*background: -webkit-linear-gradient(200deg,#aadcb2 70%,white 30%);*/\r\n    background: -webkit-linear-gradient(150deg,#aadcb2 25%,white 10%);\r\n    box-shadow: 2px 2px 14px 2px rgba(0,50,20,0.2)\r\n}\r\n.telaFinal{\r\n    box-shadow:-1px 1px 5px 0px #aaa;\r\n    max-width: 100%;\r\n    padding: 100px;\r\n    min-height: 100%;\r\n    background-size: cover;\r\n    color: black;\r\n    font-weight: 700;\r\n}\r\n.telaFinalDerrota{\r\n    background: url(\"/assets/bg-sad.jpeg\");\r\n}\r\n.telaFinalDerrota p, .telaFinalDerrota h1{\r\n    text-shadow: 1px 1px 1px #ddd;\r\n}\r\n.telaFinalVitoria{\r\n    background: url(\"/assets/bg-happy.jpeg\");\r\n    color: white;\r\n    text-shadow: 1px 1px 1px black;\r\n}\r\n@media screen and (min-width:800px){\r\n    .telaFinal, .telaFinal h1{\r\n        font-size: 40px !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbmVsLXByaW5jaXBhbC9wYWluZWwtcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzRUFBc0U7SUFDdEUsa0VBQWtFO0lBQ2xFLDhDQUE4QztDQUNqRDtBQUNEO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSx1Q0FBdUM7Q0FDMUM7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0kseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYiwrQkFBK0I7Q0FDbEM7QUFFRDtJQUNJO1FBQ0ksMkJBQTJCO0tBQzlCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWluZWwtcHJpbmNpcGFsL3BhaW5lbC1wcmluY2lwYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXgtd2lkdGh7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgLypiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgyMDBkZWcsI2FhZGNiMiA3MCUsd2hpdGUgMzAlKTsqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTUwZGVnLCNhYWRjYjIgMjUlLHdoaXRlIDEwJSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDE0cHggMnB4IHJnYmEoMCw1MCwyMCwwLjIpXHJcbn1cclxuLnRlbGFGaW5hbHtcclxuICAgIGJveC1zaGFkb3c6LTFweCAxcHggNXB4IDBweCAjYWFhO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnRlbGFGaW5hbERlcnJvdGF7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnLXNhZC5qcGVnXCIpO1xyXG59XHJcbi50ZWxhRmluYWxEZXJyb3RhIHAsIC50ZWxhRmluYWxEZXJyb3RhIGgxe1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICNkZGQ7XHJcbn1cclxuLnRlbGFGaW5hbFZpdG9yaWF7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnLWhhcHB5LmpwZWdcIik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ODAwcHgpe1xyXG4gICAgLnRlbGFGaW5hbCwgLnRlbGFGaW5hbCBoMXtcclxuICAgICAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/painel-principal/painel-principal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/painel-principal/painel-principal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-painel-instrucoes  *ngIf=\"inicioDeJogo\" (eventoComecarJogo)=\"comecarJogo($event)\"></app-painel-instrucoes>\n<section class=\"max-width mx-auto py-3\" *ngIf=\"jogoEmAndamento; else jogoEncerrado\" >\n  <div class=\"row  p-5\">\n      <div class=\"col-6 \">\n            <app-progresso [progresso]=\"progresso\"></app-progresso>\n      </div>     \n      <div class=\" col-6 offset-md-2 col-md-3 \">\n           <app-tentativas class=\"float-right\" [qtdErros]=\"erros\"></app-tentativas>\n      </div>\n  </div>\n  <div class=\"row px-5 pb-5\">\n      <div class=\"col-6 col-md-3 text-center mx-auto\">\n          <app-temporizador class=\"\"></app-temporizador>\n      </div>\n      <div class=\"col-12  \">\n          <app-painel-perguntas (eventoBotao)=\"conferirResposta($event)\" [fraseIngles]=\"fraseEN\"></app-painel-perguntas>\n      </div>\n  </div>\n</section>\n\n<ng-template #jogoEncerrado>\n    <div class=\"text-center telaFinal telaFinalVitoria\" *ngIf=\"fimDeJogo && vitoria; else jogoEncerradoDerrota\">\n        <h1 class=\"h1\">Final de jogo!</h1>\n        <p>Parabéns por seu desempenho!</p>\n        <p>Deseja jogar novamente?</p>\n        <button class=\"btn btn-success\" (click)=\"jogoEmAndamento=true; fimDeJogo=false\">Jogar novamente</button>\n    </div> \n</ng-template>\n\n<ng-template #jogoEncerradoDerrota>\n        <div class=\"text-center telaFinal telaFinalDerrota mx-auto\" *ngIf=\"telaDerrota\">\n            <h1 class=\"h1\">Não desista!</h1>\n            <p class=\"\">Você precisa praticar um pouco mais =(</p>\n            <p>Deseja jogar novamente?</p>\n            <button class=\"btn btn-success\" (click)=\"jogoEmAndamento=true; fimDeJogo=false\">Jogar novamente</button>\n        </div> \n    </ng-template>"

/***/ }),

/***/ "./src/app/painel-principal/painel-principal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/painel-principal/painel-principal.component.ts ***!
  \****************************************************************/
/*! exports provided: PainelPrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelPrincipalComponent", function() { return PainelPrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _compartilhado_ArrayFrases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compartilhado/ArrayFrases */ "./src/app/compartilhado/ArrayFrases.ts");



var PainelPrincipalComponent = /** @class */ (function () {
    function PainelPrincipalComponent() {
        this.progresso = '';
        this.progressoController = 0;
        this.erros = 0;
        //Atributos para controle de exibição
        this.jogoEmAndamento = false;
        this.inicioDeJogo = true;
        this.vitoria = false;
        this.telaDerrota = false;
        this.frases = new _compartilhado_ArrayFrases__WEBPACK_IMPORTED_MODULE_2__["ArrayFrases"]();
        this.comecarRodada();
    }
    PainelPrincipalComponent.prototype.comecarJogo = function (resposta) {
        this.jogoEmAndamento = true;
        this.inicioDeJogo = false;
    };
    PainelPrincipalComponent.prototype.comecarRodada = function () {
        //Retorna um array com duas posicoes: A primeira um objeto frase e a segunda o indice da frase;    
        this.novaFraseSorteada = this.frases.fraseAleatoria();
        //Atribuindo valores aos atributos do objeto
        this.fraseEN = this.novaFraseSorteada[0].fraseIngles;
        this.frasePT = this.novaFraseSorteada[0].frasePortugues;
    };
    PainelPrincipalComponent.prototype.conferirResposta = function (resposta) {
        if (resposta && resposta.toLowerCase() == this.frasePT.toLowerCase()) {
            this.frases.removerFrase(this.novaFraseSorteada[1]);
            this.progressoController += 20;
            this.progresso = this.progressoController + '%';
            console.log(this.progresso);
            this.comecarRodada();
        }
        else {
            this.erros++;
            if (this.erros == 4) {
                this.vitoria = false;
                this.erros = 0;
                this.progressoController = 0;
                this.progresso = '';
                this.jogoEmAndamento = false;
                this.fimDeJogo = true;
                this.telaDerrota = true;
            }
        }
        if (this.progressoController == 100) {
            this.erros = 0;
            this.progressoController = 0;
            this.progresso = '';
            this.jogoEmAndamento = false;
            this.fimDeJogo = true;
            this.vitoria = true;
        }
    };
    PainelPrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-painel-principal',
            template: __webpack_require__(/*! ./painel-principal.component.html */ "./src/app/painel-principal/painel-principal.component.html"),
            styles: [__webpack_require__(/*! ./painel-principal.component.css */ "./src/app/painel-principal/painel-principal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PainelPrincipalComponent);
    return PainelPrincipalComponent;
}());



/***/ }),

/***/ "./src/app/progresso/progresso.component.css":
/*!***************************************************!*\
  !*** ./src/app/progresso/progresso.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzby9wcm9ncmVzc28uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/progresso/progresso.component.html":
/*!****************************************************!*\
  !*** ./src/app/progresso/progresso.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n \n  <div class=\"progress-bar bg-success\" role=\"progressbar\" [style.width]=\"progresso\">{{progresso}}</div>\n</div>"

/***/ }),

/***/ "./src/app/progresso/progresso.component.ts":
/*!**************************************************!*\
  !*** ./src/app/progresso/progresso.component.ts ***!
  \**************************************************/
/*! exports provided: ProgressoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressoComponent", function() { return ProgressoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressoComponent = /** @class */ (function () {
    function ProgressoComponent() {
        this.progresso = '20%';
    }
    ProgressoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressoComponent.prototype, "progresso", void 0);
    ProgressoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progresso',
            template: __webpack_require__(/*! ./progresso.component.html */ "./src/app/progresso/progresso.component.html"),
            styles: [__webpack_require__(/*! ./progresso.component.css */ "./src/app/progresso/progresso.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressoComponent);
    return ProgressoComponent;
}());



/***/ }),

/***/ "./src/app/temporizador/temporizador.component.css":
/*!*********************************************************!*\
  !*** ./src/app/temporizador/temporizador.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".relogioAjustes{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 5px;\r\n}\r\n.fonts{\r\n    font-size: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcG9yaXphZG9yL3RlbXBvcml6YWRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3RlbXBvcml6YWRvci90ZW1wb3JpemFkb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWxvZ2lvQWp1c3Rlc3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmZvbnRze1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temporizador/temporizador.component.html":
/*!**********************************************************!*\
  !*** ./src/app/temporizador/temporizador.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <p  class=\"fonts\"><img src=\"../../assets/stopwatch.png\" class=\"relogioAjustes\" >{{ tempo }}</p>    \n\n"

/***/ }),

/***/ "./src/app/temporizador/temporizador.component.ts":
/*!********************************************************!*\
  !*** ./src/app/temporizador/temporizador.component.ts ***!
  \********************************************************/
/*! exports provided: TemporizadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemporizadorComponent", function() { return TemporizadorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TemporizadorComponent = /** @class */ (function () {
    function TemporizadorComponent() {
        var _this = this;
        this.tempo = 0;
        setInterval(function () {
            _this.inicializarCronometro();
        }, 1000);
    }
    TemporizadorComponent.prototype.inicializarCronometro = function () {
        this.tempo++;
    };
    TemporizadorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-temporizador',
            template: __webpack_require__(/*! ./temporizador.component.html */ "./src/app/temporizador/temporizador.component.html"),
            styles: [__webpack_require__(/*! ./temporizador.component.css */ "./src/app/temporizador/temporizador.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TemporizadorComponent);
    return TemporizadorComponent;
}());



/***/ }),

/***/ "./src/app/tentativas/tentativas.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbnRhdGl2YXMvdGVudGF0aXZhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.html":
/*!******************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img [src]=\"vida1 ? coracaoCheio : coracaoVazio\" >\n    <img [src]=\"vida2 ? coracaoCheio : coracaoVazio\" >\n    <img [src]=\"vida3 ? coracaoCheio : coracaoVazio\" >\n</div>\n"

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.ts ***!
  \****************************************************/
/*! exports provided: TentativasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TentativasComponent", function() { return TentativasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TentativasComponent = /** @class */ (function () {
    function TentativasComponent() {
        this.coracaoVazio = '/assets/coracao_vazio.png';
        this.coracaoCheio = '/assets/coracao_cheio.png';
        this.vida1 = true;
        this.vida2 = true;
        this.vida3 = true;
        this.qtdErros = 0;
    }
    TentativasComponent.prototype.ngOnInit = function () {
    };
    TentativasComponent.prototype.ngOnChanges = function () {
        if (this.qtdErros == 1) {
            this.vida1 = false;
        }
        else if (this.qtdErros == 2) {
            this.vida2 = false;
        }
        else if (this.qtdErros == 3) {
            this.vida3 = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TentativasComponent.prototype, "qtdErros", void 0);
    TentativasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tentativas',
            template: __webpack_require__(/*! ./tentativas.component.html */ "./src/app/tentativas/tentativas.component.html"),
            styles: [__webpack_require__(/*! ./tentativas.component.css */ "./src/app/tentativas/tentativas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TentativasComponent);
    return TentativasComponent;
}());



/***/ }),

/***/ "./src/app/topo/topo.component.css":
/*!*****************************************!*\
  !*** ./src/app/topo/topo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n   color: #eee !important;\r\n   box-shadow: 20px 0px 20px 1px #ddd;\r\n}\r\n\r\n\r\n@media screen and (max-width:600px){\r\n#logo{\r\n    width: 50%;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wby90b3BvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyx1QkFBdUI7R0FDdkIsbUNBQW1DO0NBQ3JDOzs7QUFHRDtBQUNBO0lBQ0ksV0FBVztDQUNkO0NBQ0EiLCJmaWxlIjoic3JjL2FwcC90b3BvL3RvcG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XHJcbiAgIGJveC1zaGFkb3c6IDIwcHggMHB4IDIwcHggMXB4ICNkZGQ7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcclxuI2xvZ297XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/topo/topo.component.html":
/*!******************************************!*\
  !*** ./src/app/topo/topo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <img src=\"/assets/logo.png\" alt=\"\" width=\"17%\"  id=\"logo\">\n</nav>"

/***/ }),

/***/ "./src/app/topo/topo.component.ts":
/*!****************************************!*\
  !*** ./src/app/topo/topo.component.ts ***!
  \****************************************/
/*! exports provided: TopoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopoComponent", function() { return TopoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopoComponent = /** @class */ (function () {
    function TopoComponent() {
    }
    TopoComponent.prototype.ngOnInit = function () {
    };
    TopoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topo',
            template: __webpack_require__(/*! ./topo.component.html */ "./src/app/topo/topo.component.html"),
            styles: [__webpack_require__(/*! ./topo.component.css */ "./src/app/topo/topo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopoComponent);
    return TopoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ArthurA\Desktop\Angular\gameTradutor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map