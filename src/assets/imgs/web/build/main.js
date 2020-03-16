webpackJsonp([0],{

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_json_data_json_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__liste_serve_live_liste_serve_live__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { DetailPage } from '../detail/detail'

var LivePage = /** @class */ (function () {
    function LivePage(navCtrl, navParams, JsonDataProvider, loadingCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.JsonDataProvider = JsonDataProvider;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.limit = 100;
        this.menuCtrl.enable(true);
        //this.getLiveCountry_json();
    }
    LivePage.prototype.ngOnInit = function () {
        this.getLiveCountry_json();
    };
    LivePage.prototype.getLiveCountry_json = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.JsonDataProvider.getLiveCountry()
            .subscribe(function (countries) {
            _this.countries = countries;
            loading.dismiss();
        }, function (error) {
            _this.errorMessage = error;
            loading.dismiss();
        });
    };
    LivePage.prototype.doInfinite = function (infiniteScrollEvent) {
        this.limit += 20;
        infiniteScrollEvent.complete();
        infiniteScrollEvent.disabled = true;
    };
    LivePage.prototype.push_data_country = function (categorie, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__liste_serve_live_liste_serve_live__["a" /* ListeServeLivePage */], { categorie: categorie, title: title });
    };
    LivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-live',template:/*ion-inline-start:"/builds/mofodev01/iptv-free-eng/src/pages/live/live.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title >\n        Live\n      </ion-title>\n    \n\n    \n\n            <ion-buttons end>\n                  <button ion-button left icon-only (click)="getLiveCountry_json()">\n                     <ion-icon  name="md-refresh" ></ion-icon> \n                  </button>\n           </ion-buttons>\n\n           \n\n          \n\n  </ion-navbar>\n</ion-header>\n\n    <ion-content padding>\n<!---\n\n--->\n\n<ion-grid >\n  <ion-row>\n    <ion-col  col-3 col-md-4 col-xl-3 *ngFor="let c of countries">\n      \n      <img src="{{c.url_logo}}" class="img" (click)="push_data_country(c.categorie,c.title)">\n\n      <div class="container"> \n                        \n        <p  style="font-weight:bold; text-align: center ; width:60px; font-size: 6px; color:rgb(255, 255, 255);">{{c.title}}</p>\n      </div>      \n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n        \n      <!---  \n      \n--->\n         \n          <ion-infinite-scroll threshold="100px" (ionInfinite)="doInfinite($event)">\n            <ion-infinite-scroll-content\n            loadingSpinner="bubbles"\n            loadingText="Loading more data...">\n          </ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n          \n\n</ion-content>'/*ion-inline-end:"/builds/mofodev01/iptv-free-eng/src/pages/live/live.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_json_data_json_data__["a" /* JsonDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], LivePage);
    return LivePage;
}());

//# sourceMappingURL=live.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListeServeLivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_json_data_json_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListeServeLivePage = /** @class */ (function () {
    function ListeServeLivePage(navCtrl, navParams, JsonDataProvider, loadingCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.JsonDataProvider = JsonDataProvider;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.limit = 100;
    }
    ListeServeLivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListeServeLivePage');
        this.categorie = this.navParams.get('categorie');
        console.log(this.categorie);
        this.title = this.navParams.get('title');
        console.log(this.title);
    };
    ListeServeLivePage.prototype.ngOnInit = function () {
        this.getLiveserver();
    };
    ListeServeLivePage.prototype.getLiveserver = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.JsonDataProvider.getLiveserver()
            .subscribe(function (countries) {
            _this.countries = countries;
            loading.dismiss();
        }, function (error) {
            _this.errorMessage = error;
            loading.dismiss();
        });
    };
    ListeServeLivePage.prototype.push_data_country_and_server = function (id) {
        this.categorie = this.navParams.get('categorie');
        this.title = this.navParams.get('title');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { categorie: this.categorie, title: this.title, id: id });
    };
    ListeServeLivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-liste-serve-live',template:/*ion-inline-start:"/builds/mofodev01/iptv-free-eng/src/pages/liste-serve-live/liste-serve-live.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title >\n        Liste Server\n      </ion-title>\n    \n\n    \n\n            <ion-buttons end>\n                  <button ion-button left icon-only (click)="getLiveserver()">\n                     <ion-icon  name="md-refresh" ></ion-icon> \n                  </button>\n           </ion-buttons>\n\n           \n\n          \n\n  </ion-navbar>\n</ion-header>\n\n    <ion-content padding>\n<!---\n\n--->\n\n\n<ion-list no-lines>\n  <ion-item *ngFor="let c of countries" class="listcolor">\n    <ion-avatar item-start >\n      <img src="assets/imgs/server.png">\n    </ion-avatar>\n    <h2 class="fontcolor"><strong>{{c.name}}</strong></h2>\n    <h3 class="fontcolor">This server is limited</h3>\n    <button ion-button clear item-end (click)="push_data_country_and_server(c.id)">View</button>\n  </ion-item>\n</ion-list>\n        \n      <!---  \n      \n--->\n         \n         \n          \n\n</ion-content>'/*ion-inline-end:"/builds/mofodev01/iptv-free-eng/src/pages/liste-serve-live/liste-serve-live.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_json_data_json_data__["a" /* JsonDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], ListeServeLivePage);
    return ListeServeLivePage;
}());

//# sourceMappingURL=liste-serve-live.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_json_data_json_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_streaming_media__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_toast__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, JsonDataProvider, loadingCtrl, storage, database, platform, toast, streamingMedia, admobFree, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.JsonDataProvider = JsonDataProvider;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.database = database;
        this.platform = platform;
        this.toast = toast;
        this.streamingMedia = streamingMedia;
        this.admobFree = admobFree;
        this.menuCtrl = menuCtrl;
        this.limit = 100;
        this.descending = false;
        this.column = 'tvname';
        /*----------------------------*/
        this.ListUser = [];
        this.menuCtrl.enable(true);
        this.categorie = this.navParams.get('categorie');
        this.title = this.navParams.get('title');
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        /**-----------------test user and cat-------------------- */
        this.categorie = this.navParams.get('categorie');
        console.log(this.categorie);
        this.title = this.navParams.get('title');
        console.log(this.title);
        this.id = this.navParams.get('id');
        console.log(this.id);
        this.storage.get("session_storage").then(function (res) {
            _this.data_storage = res;
            console.log(_this.data_storage);
        });
        /**-----------------test user and cat-------------------- */
    };
    DetailPage.prototype.ngOnInit = function () {
        this.getLiveCountry();
    };
    DetailPage.prototype.getLiveCountry = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        /**----------------------------------------- */
        this.storage.get("session_storage").then(function (res) {
            _this.data_storage = res;
            console.log(_this.data_storage);
            /**----------------------------------------- */
            _this.categorie = _this.navParams.get('categorie');
            console.log(_this.categorie);
            _this.id = _this.navParams.get('id');
            /**----------------------------------------- */
            _this.JsonDataProvider.getLive(_this.id, _this.categorie)
                .subscribe(function (countries) {
                _this.countries = countries;
                loading.dismiss();
            }, function (error) {
                _this.errorMessage = error;
                loading.dismiss();
            });
            ///-----
        });
        ///-----
    };
    DetailPage.prototype.doInfinite = function (infiniteScrollEvent) {
        this.limit += 20;
        infiniteScrollEvent.complete();
        infiniteScrollEvent.disabled = true;
    };
    DetailPage.prototype.startVideo = function (url) {
        var options = {
            successCallback: function () { console.log('Finished Video'); },
            errorCallback: function (e) { console.log('Error: ', e); },
        };
        // http://www.sample-videos.com
        this.streamingMedia.playVideo('' + url + '', options);
    };
    DetailPage.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    DetailPage.prototype.CreateUser = function (id, title, Url, logo, name, group) {
        this.database.Createfavorate(id, title, Url, name, logo, group)
            .then(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.toast.show('successfully added', '5000', 'center').subscribe(function (toast) {
            console.log(toast);
        });
    };
    DetailPage.prototype.GetAllUser = function () {
        var _this = this;
        this.database.GetAllfavorates().then(function (data) {
            console.log(data);
            _this.ListUser = data;
        }, function (error) {
            console.log(error);
        });
    };
    DetailPage.prototype.DeleteUser = function (idfavorate) {
        console.log(idfavorate);
    };
    DetailPage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    DetailPage.prototype.launchInterstitial = function () {
        if (this.platform.is('android')) {
            var interstitialConfig = {
                isTesting: true,
                autoShow: true,
            };
            this.admobFree.interstitial.config(interstitialConfig);
            this.admobFree.interstitial.prepare().then(function () {
                // success
            });
        }
        else if (this.platform.is('ios')) {
            var interstitialConfig = {
                isTesting: true,
                autoShow: true,
            };
            this.admobFree.interstitial.config(interstitialConfig);
            this.admobFree.interstitial.prepare().then(function () {
                // success
            });
        }
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/builds/mofodev01/iptv-free-eng/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title *ngIf="!issearchbaroponed">\n        Live {{title}}\n      </ion-title>\n     <ion-searchbar  *ngIf="issearchbaroponed"  class="search-box" color="danger" [(ngModel)]="terms"      showCancelButton=true (ionCancel)="issearchbaroponed=false" ></ion-searchbar>\n\n     <ion-buttons end>\n      <button ion-button left icon-only *ngIf="!issearchbaroponed" (click)="issearchbaroponed=true">\n         <ion-icon  name="search" ></ion-icon> \n      </button>\n    </ion-buttons>\n\n            <ion-buttons end>\n                  <button ion-button left icon-only (click)="getLiveCountry()">\n                     <ion-icon  name="md-refresh" ></ion-icon> \n                  </button>\n           </ion-buttons>\n\n           <ion-buttons end>\n            <button ion-button left icon-only (click)="sort()">\n              <ion-icon name="funnel"></ion-icon> \n            </button>\n          </ion-buttons>\n\n          \n\n  </ion-navbar>\n</ion-header>\n\n    <ion-content padding>\n\n\n        <ion-grid >\n            <ion-row>\n              <ion-col class="showbox" col-3 col-md-4 col-xl-3 *ngFor="let c of countries | slice:0:limit | search : terms | sort: {property: column, order: order}">\n                \n                <img src="{{c.tvlogo}}" class="img" >\n          \n                 \n                                  \n                    <div class="middle">\n                \n                        <div> \n                           <ion-icon class="iconplay" (click)="launchInterstitial()"  (click)="startVideo(c.tvmedia)"  name="play"></ion-icon>\n                        </div>\n\n                        <div> \n                           <ion-icon class="iconfav" (click)="CreateUser(c.id, c.tvtitle, c.tvmedia,c.tvname,c.tvlogo,c.tvgroup)"  name="heart"></ion-icon>\n                        </div>\n\n                    </div>\n               \n                        <div class="container">   \n                            <p  style="font-weight:bold; text-align: center ; width:60px; font-size: 6px; color:rgb(255, 255, 255);">{{c.tvname}}</p>\n                        </div>     \n                 \n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n\n \n         \n          <ion-infinite-scroll threshold="100px" (ionInfinite)="doInfinite($event)">\n            <ion-infinite-scroll-content\n            loadingSpinner="bubbles"\n            loadingText="Loading more data...">\n          </ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n          \n\n  </ion-content>\n'/*ion-inline-end:"/builds/mofodev01/iptv-free-eng/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_json_data_json_data__["a" /* JsonDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoratePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_json_data_json_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { AdMobFree, AdMobFreeInterstitialConfig} from '@ionic-native/admob-free';
var FavoratePage = /** @class */ (function () {
    function FavoratePage(navCtrl, navParams, streamingMedia, JsonDataProvider, database, loadingCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.streamingMedia = streamingMedia;
        this.JsonDataProvider = JsonDataProvider;
        this.database = database;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        /*
         Url : String;
           id: Number;
             title: String;
             logo: String;
             name: String;
             group: String;
       */
        this.ListUser = [];
        this.menuCtrl.enable(true);
    }
    FavoratePage.prototype.ngOnInit = function () {
        this.GetAllUser();
    };
    FavoratePage.prototype.startVideo = function (url) {
        var options = {
            successCallback: function () { console.log('Finished Video'); },
            errorCallback: function (e) { console.log('Error: ', e); },
        };
        // http://www.sample-videos.com
        this.streamingMedia.playVideo('' + url + '', options);
    };
    FavoratePage.prototype.GetAllUser = function () {
        var _this = this;
        ///-------------------------------
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        ///-------------------------------
        this.database.GetAllfavorates().then(function (data) {
            console.log(data);
            _this.ListUser = data;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    FavoratePage.prototype.Deletefavorate = function (id, index) {
        var _this = this;
        this.database.Deletefavorate(id)
            .then(function (response) {
            console.log(response);
            _this.ListUser.splice(index, 1);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    FavoratePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorate',template:/*ion-inline-start:"/builds/mofodev01/iptv-free-eng/src/pages/favorate/favorate.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title >\n      favourites\n    </ion-title>\n  \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n    <ion-grid >\n        <ion-row>\n          <ion-col class="showbox" col-3 col-md-4 col-xl-3 *ngFor="let item of ListUser ; let i = index">\n            \n              <img [src]="item.tvname" class="img" >\n      \n             \n                              \n                <div class="middle">\n            \n                    <div> \n                        <ion-icon \n                        class="iconplay"   (click)="startVideo(item.tvmedia)" name="play">\n                       </ion-icon>\n                    </div>\n\n                    <div> \n                        <ion-icon class="iconfav" (click)="Deletefavorate(item , i)"  name="close-circle"></ion-icon>\n                    </div>\n\n                </div>\n           \n                    <div class="container">   \n                        <p  style="font-weight:bold; text-align: center ; width:60px; font-size: 6px; color:rgb(250, 32, 3);">{{item.tvlogo}}</p>\n                    </div>     \n             \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n  \n    \n\n   \n</ion-content>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/builds/mofodev01/iptv-free-eng/src/pages/favorate/favorate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_3__providers_json_data_json_data__["a" /* JsonDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], FavoratePage);
    return FavoratePage;
}());

//# sourceMappingURL=favorate.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListeServerFilmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_json_data_json_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailfilms_detailfilms__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListeServerFilmsPage = /** @class */ (function () {
    function ListeServerFilmsPage(navCtrl, navParams, JsonDataProvider, loadingCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.JsonDataProvider = JsonDataProvider;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.limit = 100;
    }
    ListeServerFilmsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListeServeLivePage');
        this.categorie = this.navParams.get('categorie');
        console.log(this.categorie);
        this.title = this.navParams.get('title');
        console.log(this.title);
    };
    ListeServerFilmsPage.prototype.ngOnInit = function () {
        this.getLiveserver();
    };
    ListeServerFilmsPage.prototype.getLiveserver = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.JsonDataProvider.getLiveserver()
            .subscribe(function (countries) {
            _this.countries = countries;
            loading.dismiss();
        }, function (error) {
            _this.errorMessage = error;
            loading.dismiss();
        });
    };
    ListeServerFilmsPage.prototype.push_data_country_and_server = function (id) {
        this.categorie = this.navParams.get('categorie');
        this.title = this.navParams.get('title');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detailfilms_detailfilms__["a" /* DetailfilmsPage */], { categorie: this.categorie, title: this.title, id: id });
    };
    ListeServerFilmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-liste-server-films',template:/*ion-inline-start:"/builds/mofodev01/iptv-free-eng/src/pages/liste-server-films/liste-server-films.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title >\n        Liste Server\n      </ion-title>\n    \n\n    \n\n            <ion-buttons end>\n                  <button ion-button left icon-only (click)="getLiveserver()">\n                     <ion-icon  name="md-refresh" ></ion-icon> \n                  </button>\n           </ion-buttons>\n\n           \n\n          \n\n  </ion-navbar>\n</ion-header>\n\n    <ion-content padding>\n<!---\n\n--->\n\n\n<ion-list no-lines>\n  <ion-item *ngFor="let c of countries" class="listcolor">\n    <ion-avatar item-start >\n      <img src="assets/imgs/server.png">\n    </ion-avatar>\n    <h2 class="fontcolor"><strong>{{c.name}}</strong></h2>\n    <h3 class="fontcolor">This server is limited</h3>\n    <h5 class="fontcolor">Please pay for a better service</h5>\n    <button ion-button clear item-end (click)="push_data_country_and_server(c.id)">View</button>\n  </ion-item>\n</ion-list>\n        \n      <!---  \n      \n--->\n         \n          \n          \n\n</ion-content>'/*ion-inline-end:"/builds/mofodev01/iptv-free-eng/src/pages/liste-server-films/liste-server-films.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_json_data_json_data__["a" /* JsonDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], ListeServerFilmsPage);
    return ListeServerFilmsPage;
}());

//# sourceMappingURL=liste-server-films.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailfilmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_json_data_json_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_streaming_media__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DetailfilmsPage = /** @class */ (function () {
    function DetailfilmsPage(navCtrl, navParams, JsonDataProvider, loadingCtrl, storage, database, platform, toast, streamingMedia, menuCtrl, admobFree) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.JsonDataProvider = JsonDataProvider;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.database = database;
        this.platform = platform;
        this.toast = toast;
        this.streamingMedia = streamingMedia;
        this.menuCtrl = menuCtrl;
        this.admobFree = admobFree;
        this.limit = 100;
        this.descending = false;
        this.column = 'tvname';
        /*----------------------------*/
        this.ListUser = [];
        this.menuCtrl.enable(true);
        this.categorie = this.navParams.get('categorie');
        this.title = this.navParams.get('title');
    }
    DetailfilmsPage.prototype.ionViewDidLoad = function () {
        /**-----------------test user and cat-------------------- */
        this.categorie = this.navParams.get('categorie');
        console.log(this.categorie);
        this.title = this.navParams.get('title');
        console.log(this.title);
        this.id = this.navParams.get('id');
        console.log(this.id);
        /**-----------------test user and cat-------------------- */
    };
    DetailfilmsPage.prototype.ngOnInit = function () {
        this.getFilmsCountry();
    };
    DetailfilmsPage.prototype.getFilmsCountry = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        /**----------------------------------------- */
        this.categorie = this.navParams.get('categorie');
        console.log(this.categorie);
        this.id = this.navParams.get('id');
        /**----------------------------------------- */
        this.JsonDataProvider.getFilms(this.id, this.categorie)
            .subscribe(function (countries) {
            _this.countries = countries;
            loading.dismiss();
        }, function (error) {
            _this.errorMessage = error;
            loading.dismiss();
        });
    };
    DetailfilmsPage.prototype.doInfinite = function (infiniteScrollEvent) {
        this.limit += 20;
        infiniteScrollEvent.complete();
        infiniteScrollEvent.disabled = true;
    };
    DetailfilmsPage.prototype.startVideo = function (url) {
        var options = {
            successCallback: function () { console.log('Finished Video'); },
            errorCallback: function (e) { console.log('Error: ', e); },
        };
        // http://www.sample-videos.com
        this.streamingMedia.playVideo('' + url + '', options);
    };
    DetailfilmsPage.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    DetailfilmsPage.prototype.CreateUser = function (id, title, Url, logo, name, group) {
        this.database.Createfavorate(id, title, Url, name, logo, group)
            .then(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.toast.show('successfully added', '5000', 'center').subscribe(function (toast) {
            console.log(toast);
        });
    };
    DetailfilmsPage.prototype.GetAllUser = function () {
        var _this = this;
        this.database.GetAllfavorates().then(function (data) {
            console.log(data);
            _this.ListUser = data;
        }, function (error) {
            console.log(error);
        });
    };
    DetailfilmsPage.prototype.DeleteUser = function (idfavorate) {
        console.log(idfavorate);
    };
    DetailfilmsPage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    DetailfilmsPage.prototype.launchInterstitial = function () {
        if (this.platform.is('android')) {
            var interstitialConfig = {
                isTesting: true,
                autoShow: true,
            };
            this.admobFree.interstitial.config(interstitialConfig);
            this.admobFree.interstitial.prepare().then(function () {
                // success
            });
        }
        else if (this.platform.is('ios')) {
            var interstitialConfig = {
                isTesting: true,
                autoShow: true,
            };
            this.admobFree.interstitial.config(interstitialConfig);
            this.admobFree.interstitial.prepare().then(function () {
                // success
            });
        }
    };
    DetailfilmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailfilms',template:/*ion-inline-start:"/builds/mofodev01/iptv-free-eng/src/pages/detailfilms/detailfilms.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title *ngIf="!issearchbaroponed">\n       {{title}}\n      </ion-title>\n     <ion-searchbar  *ngIf="issearchbaroponed"  class="search-box" color="danger" [(ngModel)]="terms"      showCancelButton=true (ionCancel)="issearchbaroponed=false" ></ion-searchbar>\n\n     <ion-buttons end>\n      <button ion-button left icon-only *ngIf="!issearchbaroponed" (click)="issearchbaroponed=true">\n         <ion-icon  name="search" ></ion-icon> \n      </button>\n    </ion-buttons>\n\n            <ion-buttons end>\n                  <button ion-button left icon-only (click)="getFilmsCountry()">\n                     <ion-icon  name="md-refresh" ></ion-icon> \n                  </button>\n           </ion-buttons>\n\n           <ion-buttons end>\n            <button ion-button left icon-only (click)="sort()">\n              <ion-icon name="funnel"></ion-icon> \n            </button>\n          </ion-buttons>\n\n          \n\n  </ion-navbar>\n</ion-header>\n\n    <ion-content padding>\n\n        \n        \n<ion-grid >\n    <ion-row>\n      <ion-col class="showbox" col-3 col-md-4 col-xl-3 *ngFor="let c of countries | slice:0:limit | search : terms | sort: {property: column, order: order}">\n        \n        <img src="{{c.tvlogo}}" class="img" >\n  \n         \n                          \n            <div class="middle">\n        \n                <div> \n                   <ion-icon class="iconplay" (click)="launchInterstitial()" (click)="startVideo(c.tvmedia)"  name="play"></ion-icon>\n                </div>\n\n                <div> \n                   <ion-icon class="iconfav" (click)="CreateUser(c.id, c.tvtitle, c.tvmedia,c.tvname,c.tvlogo,c.tvgroup)"  name="heart"></ion-icon>\n                </div>\n\n            </div>\n       \n                <div class="container">   \n                    <p  style="font-weight:bold; text-align: center ; width:60px; font-size: 6px; color:rgb(250, 32, 3);">{{c.tvname}}</p>\n                </div>     \n         \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n         \n          <ion-infinite-scroll threshold="100px" (ionInfinite)="doInfinite($event)">\n            <ion-infinite-scroll-content\n            loadingSpinner="bubbles"\n            loadingText="Loading more data...">\n          </ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n          \n\n  </ion-content>\n<!--\n  <ion-tabs >\n    <ion-tab [root]="HomeRoot"  tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="FavorateRoot"  tabTitle="Favorate" tabIcon="bookmarks"></ion-tab>\n    <ion-tab [root]="SearchRoot"  tabTitle="Search" tabIcon="search"></ion-tab>\n    <ion-tab (ionSelect)="shareApp()"  tabTitle="Share" tabIcon="share"></ion-tab>\n   </ion-tabs>\n  -->'/*ion-inline-end:"/builds/mofodev01/iptv-free-eng/src/pages/detailfilms/detailfilms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_json_data_json_data__["a" /* JsonDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], DetailfilmsPage);
    return DetailfilmsPage;
}());

//# sourceMappingURL=detailfilms.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(264);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_live_live__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favorate_favorate__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_films_films__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_detail_detail__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detailfilms_detailfilms__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_streaming_media__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_json_data_json_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_search_search__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_sort_sort__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_toast__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_database_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_sqlite_porter__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_sqlite__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_social_sharing__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_market__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_admob_free__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_liste_serve_live_liste_serve_live__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_liste_server_films_liste_server_films__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



////import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

///import { HomePage } from '../pages/home/home';

////import { AnimePage } from '../pages/anime/anime';






















/**/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                ///HomePage,
                __WEBPACK_IMPORTED_MODULE_4__pages_live_live__["a" /* LivePage */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_sort_sort__["a" /* SortPipe */],
                /// AnimePage,
                __WEBPACK_IMPORTED_MODULE_6__pages_films_films__["a" /* FilmsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_favorate_favorate__["a" /* FavoratePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detailfilms_detailfilms__["a" /* DetailfilmsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_liste_serve_live_liste_serve_live__["a" /* ListeServeLivePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_liste_server_films_liste_server_films__["a" /* ListeServerFilmsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_19__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                ///HomePage,
                __WEBPACK_IMPORTED_MODULE_4__pages_live_live__["a" /* LivePage */],
                ///AnimePage,
                __WEBPACK_IMPORTED_MODULE_6__pages_films_films__["a" /* FilmsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_favorate_favorate__["a" /* FavoratePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detailfilms_detailfilms__["a" /* DetailfilmsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_liste_serve_live_liste_serve_live__["a" /* ListeServeLivePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_liste_server_films_liste_server_films__["a" /* ListeServerFilmsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_market__["a" /* Market */],
                /**/
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_json_data_json_data__["a" /* JsonDataProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_admob_free__["a" /* AdMobFree */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_live_live__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favorate_favorate__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_market__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { LocationAccuracy } from '@ionic-native/location-accuracy';
var MyApp = /** @class */ (function () {
    function MyApp(alertCtrl, platform, statusBar, splashScreen, market, socialSharing, actionsheetCtrl, admobFree) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.market = market;
        this.socialSharing = socialSharing;
        this.actionsheetCtrl = actionsheetCtrl;
        this.admobFree = admobFree;
        //rootPage: any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_live_live__["a" /* LivePage */];
        this.initializeApp();
        this.showBanner();
        //this.localisation();
        // used for an example of ngFor and navigation   SeriesPage
        this.pages = [
            { title: 'Live Tv', component: __WEBPACK_IMPORTED_MODULE_4__pages_live_live__["a" /* LivePage */], icon: "desktop" }
            // ,{ title: 'VOD Movies', component: FilmsPage,icon : "film" }
            // ,{ title: 'Contact', component: ContactPage,icon : "mail" }
            ,
            { title: 'favourites', component: __WEBPACK_IMPORTED_MODULE_5__pages_favorate_favorate__["a" /* FavoratePage */], icon: "bookmarks" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.rateApp = function () {
        if (this.platform.is('android')) {
            this.market.open('com.stories.magic');
            var alert_1 = this.alertCtrl.create({
                title: "platform !",
                subTitle: "is android",
                buttons: [{
                        text: ("Okay")
                    }]
            });
            alert_1.present();
        }
        else if (this.platform.is('ios')) {
            this.market.open('com.stories.magic');
            var alert_2 = this.alertCtrl.create({
                title: "platform !",
                subTitle: "is ios",
                buttons: [{
                        text: ("Okay")
                    }]
            });
            alert_2.present();
        }
    };
    MyApp.prototype.shareApp = function () {
        var _this = this;
        if (this.platform.is('android')) {
            /*  this.appodeal.hide(this.appodeal.AD_TYPES.BANNER);*/
            var actionSheet = this.actionsheetCtrl.create({
                title: 'Partager',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Facebook',
                        role: 'destructive',
                        icon: 'logo-facebook',
                        // cssClass: 'action-red',
                        handler: function () {
                            _this.socialSharing.shareViaFacebook("", "", "https://play.google.com/store/apps/details?id=com.stories.magic").then(function () {
                                console.log("shareViaFacebook: Success");
                            }).catch(function () {
                                console.error("shareViaFacebook: failed");
                            });
                        }
                    },
                    {
                        text: 'Whatsapp',
                        role: 'destructive',
                        icon: 'logo-whatsapp',
                        handler: function () {
                            _this.socialSharing.shareViaWhatsApp("", "https://space.iptvmedia.me/image/icon-kids.png", "https://play.google.com/store/apps/details?id=com.stories.magic").then(function () {
                                console.log("shareViaWhatsApp: Success");
                            }).catch(function () {
                                console.error("shareViaWhatsApp: failed");
                            });
                        }
                    },
                    {
                        text: 'Twitter',
                        role: 'destructive',
                        icon: 'logo-twitter',
                        handler: function () {
                            _this.socialSharing.shareViaTwitter("", "https://space.iptvmedia.me/image/icon-kids.png", "https://play.google.com/store/apps/details?id=com.stories.magic").then(function () {
                                console.log("shareViatwitter: Success");
                            }).catch(function () {
                                console.error("shareViatwitter: failed");
                            });
                        }
                    },
                    {
                        text: 'Autre',
                        role: 'destructive',
                        icon: 'paper-plane',
                        handler: function () {
                            _this.socialSharing.share("", "", "https://space.iptvmedia.me/image/icon-kids.png", "https://play.google.com/store/apps/details?id=com.stories.magic").then(function () {
                                console.log("shareViatwitter: Success");
                            }).catch(function () {
                                console.error("shareViatwitter: failed");
                            });
                        }
                    },
                    {
                        text: 'annuler',
                        role: 'cancel',
                        icon: 'close',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else if (this.platform.is('ios')) {
            /*  this.appodeal.hide(this.appodeal.AD_TYPES.BANNER);*/
            var actionSheet = this.actionsheetCtrl.create({
                title: 'Partager',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Facebook',
                        role: 'destructive',
                        icon: 'logo-facebook',
                        // cssClass: 'action-red',
                        handler: function () {
                            _this.socialSharing.shareViaFacebook("", "", "https://apps.apple.com/fr/app/apple-store/id375380948").then(function () {
                                console.log("shareViaFacebook: Success");
                            }).catch(function () {
                                console.error("shareViaFacebook: failed");
                            });
                        }
                    },
                    {
                        text: 'Whatsapp',
                        role: 'destructive',
                        icon: 'logo-whatsapp',
                        handler: function () {
                            _this.socialSharing.shareViaWhatsApp("", "https://space.iptvmedia.me/image/icon-kids.png", "https://apps.apple.com/fr/app/apple-store/id375380948").then(function () {
                                console.log("shareViaWhatsApp: Success");
                            }).catch(function () {
                                console.error("shareViaWhatsApp: failed");
                            });
                        }
                    },
                    {
                        text: 'Twitter',
                        role: 'destructive',
                        icon: 'logo-twitter',
                        handler: function () {
                            _this.socialSharing.shareViaTwitter("", "https://space.iptvmedia.me/image/icon-kids.png", "https://apps.apple.com/fr/app/apple-store/id375380948").then(function () {
                                console.log("shareViatwitter: Success");
                            }).catch(function () {
                                console.error("shareViatwitter: failed");
                            });
                        }
                    },
                    {
                        text: 'Autre',
                        role: 'destructive',
                        icon: 'paper-plane',
                        handler: function () {
                            _this.socialSharing.share("", "", "https://space.iptvmedia.me/image/icon-kids.png", "https://apps.apple.com/fr/app/apple-store/id375380948").then(function () {
                                console.log("shareViatwitter: Success");
                            }).catch(function () {
                                console.error("shareViatwitter: failed");
                            });
                        }
                    },
                    {
                        text: 'annuler',
                        role: 'cancel',
                        icon: 'close',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
    };
    MyApp.prototype.showBanner = function () {
        if (this.platform.is('android')) {
            var bannerConfig = {
                // add your config here
                // for the sake of this example we will just use the test config
                isTesting: true,
                autoShow: true,
            };
            this.admobFree.banner.config(bannerConfig);
            this.admobFree.banner.prepare()
                .then(function () {
                // banner Ad is ready
                // if we set autoShow to false, then we will need to call the show method here
            })
                .catch(function (e) { return console.log(e); });
        }
        else if (this.platform.is('ios')) {
            var bannerConfig = {
                // add your config here
                // for the sake of this example we will just use the test config
                isTesting: true,
                autoShow: true,
            };
            this.admobFree.banner.config(bannerConfig);
            this.admobFree.banner.prepare()
                .then(function () {
                // banner Ad is ready
                // if we set autoShow to false, then we will need to call the show method here
            })
                .catch(function (e) { return console.log(e); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/builds/mofodev01/iptv-free-eng/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content >\n    <ion-list no-lines  >\n      <button menuClose ion-item *ngFor="let p of pages" class="listcolor"  (click)="openPage(p)">\n      <strong class="fontcolor"> \n          <ion-icon name="{{p.icon}}"></ion-icon>\n        {{p.title}}</strong>\n\n       \n\n      </button>\n\n      <button  menuClose ion-item  class="listcolor"  (click)="rateApp()">\n        <strong class="fontcolor"><ion-icon name="star" ></ion-icon>\n        Support us</strong>\n       \n        \n\n      </button>\n\n\n      <button lines  menuClose ion-item  class="listcolor"  (click)="shareApp()">\n        <strong class="fontcolor"> <ion-icon name="share" ></ion-icon>\n        Share</strong>\n\n        \n\n      </button>\n\n    \n\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n<!--\n<ion-tabs >\n  <ion-tab [root]="HomeRoot"  tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="FavorateRoot"  tabTitle="Favorate" tabIcon="bookmarks"></ion-tab>\n  <ion-tab [root]="SearchRoot"  tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab (ionSelect)="shareApp()"  tabTitle="Share" tabIcon="share"></ion-tab>\n </ion-tabs>\n -->'/*ion-inline-end:"/builds/mofodev01/iptv-free-eng/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_market__["a" /* Market */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JsonDataProvider = /** @class */ (function () {
    function JsonDataProvider(http) {
        this.http = http;
        /*-------------------------------api-json-server-free---X----------------------------*/
        this.apiUrl_live_server = 'http://space.appmofix.com/api/liste_free_server.php';
        /*---------------------------------fin--------------------------------*/
        /*-------------------------------api-json-country-live----X----------------------------*/
        this.apiUrl_live_Country = 'http://space.appmofix.com/api/liste_country_live_free.php';
        /*---------------------------------fin--------------------------------*/
        /*------------------------------------------------------------------------------------------------------------------*/
        /*-------------------------------api-json-country-Films------X--------------------------*/
        this.apiUrl_Films_Country = 'http://space.appmofix.com/api/liste_country_films_free.php';
        console.log('Hello JsonDataProvider Provider');
    }
    JsonDataProvider.prototype.getLiveserver = function () {
        return this.http.get(this.apiUrl_live_server).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractDataserver), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleErrorserver));
    };
    JsonDataProvider.prototype.extractDataserver = function (res) {
        var body = res;
        return body || {};
    };
    JsonDataProvider.prototype.handleErrorserver = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    JsonDataProvider.prototype.getLiveCountry = function () {
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        var options = {
            headers: httpHeaders
        };
        return this.http.get(this.apiUrl_live_Country, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractDataCountry), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleErrorCountry));
    };
    JsonDataProvider.prototype.extractDataCountry = function (res) {
        var body = res;
        return body || {};
    };
    JsonDataProvider.prototype.handleErrorCountry = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    /*---------------------------------fin--------------------------------*/
    /*-------------------------------api-detail-country-live-------X-------------------------*/
    JsonDataProvider.prototype.getLive = function (id, country) {
        /** */
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        var options = {
            headers: httpHeaders
        };
        return this.http.get('http://space.appmofix.com/api/filter_channel_free.php?id=' + id + '&&country=' + country + '', options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    JsonDataProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    JsonDataProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    JsonDataProvider.prototype.getFilmsCountry = function () {
        return this.http.get(this.apiUrl_Films_Country).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractDataCountryFilms), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleErrorCountryFilms));
    };
    JsonDataProvider.prototype.extractDataCountryFilms = function (res) {
        var body = res;
        return body || {};
    };
    JsonDataProvider.prototype.handleErrorCountryFilms = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    /*-----------------------------------------------------------------*/
    /*-------------------------------api-detail-country-Films-------X------------------------*/
    JsonDataProvider.prototype.getFilms = function (id, country) {
        /** */
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        var options = {
            headers: httpHeaders
        };
        return this.http.get('http://space.appmofix.com/api/filter_films_free.php?id=' + id + '&&country=' + country + '', options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractDataFilms), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleErrorFilms));
    };
    JsonDataProvider.prototype.extractDataFilms = function (res) {
        var body = res;
        return body || {};
    };
    JsonDataProvider.prototype.handleErrorFilms = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    JsonDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], JsonDataProvider);
    return JsonDataProvider;
}());

//# sourceMappingURL=json-data.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_json_data_json_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__liste_server_films_liste_server_films__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilmsPage = /** @class */ (function () {
    function FilmsPage(navCtrl, navParams, JsonDataProvider, loadingCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.JsonDataProvider = JsonDataProvider;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.limit = 100;
        this.menuCtrl.enable(true);
    }
    FilmsPage.prototype.ngOnInit = function () {
        this.getFilmsCountry();
    };
    FilmsPage.prototype.getFilmsCountry = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.JsonDataProvider.getFilmsCountry()
            .subscribe(function (countries) {
            _this.countries = countries;
            loading.dismiss();
        }, function (error) {
            _this.errorMessage = error;
            loading.dismiss();
        });
    };
    FilmsPage.prototype.doInfinite = function (infiniteScrollEvent) {
        this.limit += 20;
        infiniteScrollEvent.complete();
        infiniteScrollEvent.disabled = true;
    };
    FilmsPage.prototype.push_data_country = function (categorie, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__liste_server_films_liste_server_films__["a" /* ListeServerFilmsPage */], { categorie: categorie, title: title });
    };
    FilmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-films',template:/*ion-inline-start:"/builds/mofodev01/iptv-free-eng/src/pages/films/films.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title >\n        VOD Movies\n      </ion-title>\n    \n\n    \n\n            <ion-buttons end>\n                  <button ion-button left icon-only (click)="getFilmsCountry()">\n                     <ion-icon  name="md-refresh" ></ion-icon> \n                  </button>\n           </ion-buttons>\n\n           \n\n          \n\n  </ion-navbar>\n</ion-header>\n\n    <ion-content padding>\n\n      \n          <!---\n\n--->\n\n<ion-grid >\n    <ion-row>\n      <ion-col  col-3 col-md-4 col-xl-3 *ngFor="let c of countries">\n        \n        <img src="{{c.url_logo}}" class="img" (click)="push_data_country(c.categorie,c.title)">\n  \n        <div class="container"> \n                          \n          <p  style="font-weight:bold; text-align: center ; width:60px; font-size: 6px; color:rgb(250, 32, 3);">{{c.title}}</p>\n        </div>      \n  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n          \n        <!---  \n        \n  --->\n\n         \n          <ion-infinite-scroll threshold="100px" (ionInfinite)="doInfinite($event)">\n            <ion-infinite-scroll-content\n            loadingSpinner="bubbles"\n            loadingText="Loading more data...">\n          </ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n          \n\n</ion-content>'/*ion-inline-end:"/builds/mofodev01/iptv-free-eng/src/pages/films/films.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_json_data_json_data__["a" /* JsonDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], FilmsPage);
    return FilmsPage;
}());

//# sourceMappingURL=films.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { LoginPage } from '../login/login';



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, alertCtrl, http, loading, storage, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(true);
    }
    ContactPage.prototype.adjustTextarea = function (event) {
        var textarea = event.target;
        textarea.style.overflow = 'hidden';
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
        return;
    };
    ContactPage.prototype.Register = function () {
        //// check to confirm the username, email, telephone and password fields are filled
        var _this = this;
        if (this.subject.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "Warning",
                subTitle: "subject field is empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.message.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "Warning",
                subTitle: "message field is empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            //--------------------------
            this.storage.get("session_storage").then(function (res) {
                _this.data_storage = res;
                console.log(_this.data_storage);
                //--------------------------
                var httpHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                });
                var options = {
                    headers: httpHeaders
                };
                var data = {
                    username: _this.data_storage,
                    subject: _this.subject.value,
                    message: _this.message.value
                };
                var loader = _this.loading.create({
                    content: 'Processing please wait...',
                });
                loader.present().then(function () {
                    _this.http.post('http://space-free.iptvmedia.me/api/contact.php', data, options)
                        .map(function (res) { return res.toString(); })
                        .subscribe(function (res) {
                        loader.dismiss();
                        if (res == "Message Saved") {
                            var alert_3 = _this.alertCtrl.create({
                                title: "Congratulation",
                                subTitle: (res),
                                buttons: ['OK']
                            });
                            alert_3.present();
                            //this.navCtrl.push(LoginPage);
                        }
                        else {
                            var alert_4 = _this.alertCtrl.create({
                                title: "Error",
                                subTitle: (res),
                                buttons: ['OK']
                            });
                            alert_4.present();
                        }
                    });
                });
                //--------------------------
            });
            //-------------------------- 
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("subject"),
        __metadata("design:type", Object)
    ], ContactPage.prototype, "subject", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("message"),
        __metadata("design:type", Object)
    ], ContactPage.prototype, "message", void 0);
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/builds/mofodev01/iptv-free-eng/src/pages/contact/contact.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Contact</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form >\n\n     \n\n     <ion-item  class="listcolor">\n        <ion-label floating>\n          subject\n        </ion-label>\n        <ion-input type="text" class="text-input" name="subject" #subject></ion-input>\n   </ion-item>\n\n   <ion-item  class="listcolor">\n      <ion-label floating>\n        message\n      </ion-label>\n      <!-- <ion-input type="text" class="text-input" name="message" #message></ion-input>-->\n\n      <ion-textarea type="text" (input)="adjustTextarea($event);" class="text-input" name="message" rows="1" maxLength="500" #message></ion-textarea>\n\n      \n\n </ion-item>\n\n \n\n\n  <ion-row class="sign-in-button-container">\n      <ion-col text-center>\n        <button ion-button block round color="green-sea" (click)="Register()">      \n          <ion-icon name="mail"></ion-icon> Send Message\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n  </ion-content>\n\n\n'/*ion-inline-end:"/builds/mofodev01/iptv-free-eng/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.tvname.toLowerCase().includes(terms); // only filter country name
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DatabaseProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        if (!this.isOpen) {
            this.storage = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]();
            this.storage.create({ name: "data.db", location: "default" }).then(function (db) {
                _this.db = db;
                db.executeSql("CREATE TABLE IF NOT EXISTS favorate (id INTEGER PRIMARY KEY , tvtitle TEXT, tvmedia TEXT, tvname TEXT,tvlogo TEXT,tvgroup TEXT)", []);
                _this.isOpen = true;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
    DatabaseProvider.prototype.Createfavorate = function (id, tvtitle, tvmedia, tvname, tvlogo, tvgroup) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sql = "INSERT INTO favorate (id, tvtitle, tvmedia,tvname,tvlogo,tvgroup) VALUES (?, ?, ?, ?, ?, ?)";
            _this.db.executeSql(sql, [id, tvtitle, tvmedia, tvname, tvlogo, tvgroup]).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.GetAllfavorates = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM favorate", []).then(function (data) {
                var arrayUsers = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        arrayUsers.push({
                            id: data.rows.item(i).id,
                            tvtitle: data.rows.item(i).tvtitle,
                            tvmedia: data.rows.item(i).tvmedia,
                            tvname: data.rows.item(i).tvname,
                            tvlogo: data.rows.item(i).tvlogo,
                            tvgroup: data.rows.item(i).tvgroup
                        });
                    }
                }
                resolve(arrayUsers);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.Deletefavorate = function (favorates) {
        var sql = 'DELETE FROM favorate WHERE id=?';
        return this.db.executeSql(sql, [favorates.id]);
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[256]);
//# sourceMappingURL=main.js.map