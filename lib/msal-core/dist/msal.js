/*! msal v0.2.4 2019-04-17 */
'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Msal", [], factory);
	else if(typeof exports === 'object')
		exports["Msal"] = factory();
	else
		root["Msal"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(1);
/**
 * @hidden
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    //#region General Util
    /**
     * Utils function to compare two User objects - used to check if the same user is logged in
     *
     * @param u1: User object
     * @param u2: User object
     */
    // TODO: Change the name of this to compareUsers or compareAccounts
    Utils.compareObjects = function (u1, u2) {
        if (!u1 || !u2) {
            return false;
        }
        if (u1.userIdentifier && u2.userIdentifier) {
            if (u1.userIdentifier === u2.userIdentifier) {
                return true;
            }
        }
        return false;
    };
    /**
     * Decimal to Hex
     *
     * @param num
     */
    Utils.decimalToHex = function (num) {
        var hex = num.toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    /**
     * MSAL JS Library Version
     */
    Utils.getLibraryVersion = function () {
        return "0.2.4";
    };
    /**
     * Creates a new random GUID - used to populate state?
     * @returns string (GUID)
     */
    Utils.createNewGuid = function () {
        // RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
        // pseudo-random numbers.
        // The algorithm is as follows:
        //     Set the two most significant bits (bits 6 and 7) of the
        //        clock_seq_hi_and_reserved to zero and one, respectively.
        //     Set the four most significant bits (bits 12 through 15) of the
        //        time_hi_and_version field to the 4-bit version number from
        //        Section 4.1.3. Version4
        //     Set all the other bits to randomly (or pseudo-randomly) chosen
        //     values.
        // UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
        // time-low               = 4hexOctet
        // time-mid               = 2hexOctet
        // time-high-and-version  = 2hexOctet
        // clock-seq-and-reserved = hexOctet:
        // clock-seq-low          = hexOctet
        // node                   = 6hexOctet
        // Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
        // y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
        // y values are 8, 9, A, B
        var cryptoObj = window.crypto; // for IE 11
        if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            //buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; //buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; //buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            //buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; //buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; //buffer[8] & 10111111 will set the 6 bit to 0.
            return Utils.decimalToHex(buffer[0]) + Utils.decimalToHex(buffer[1])
                + Utils.decimalToHex(buffer[2]) + Utils.decimalToHex(buffer[3])
                + "-" + Utils.decimalToHex(buffer[4]) + Utils.decimalToHex(buffer[5])
                + "-" + Utils.decimalToHex(buffer[6]) + Utils.decimalToHex(buffer[7])
                + "-" + Utils.decimalToHex(buffer[8]) + Utils.decimalToHex(buffer[9])
                + "-" + Utils.decimalToHex(buffer[10]) + Utils.decimalToHex(buffer[11])
                + Utils.decimalToHex(buffer[12]) + Utils.decimalToHex(buffer[13])
                + Utils.decimalToHex(buffer[14]) + Utils.decimalToHex(buffer[15]);
        }
        else {
            var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var hex = "0123456789abcdef";
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
                if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                    // each x and y needs to be random
                    r = Math.random() * 16 | 0;
                }
                if (guidHolder[i] === "x") {
                    guidResponse += hex[r];
                }
                else if (guidHolder[i] === "y") {
                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                    r |= 0x8; // set pos 3 to 1 as 1???
                    guidResponse += hex[r];
                }
                else {
                    guidResponse += guidHolder[i];
                }
            }
            return guidResponse;
        }
    };
    //#endregion
    //#region Time
    /**
     * Returns time in seconds for expiration based on string value passed in.
     *
     * @param expires
     */
    Utils.expiresIn = function (expires) {
        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
        if (!expires) {
            expires = "3599";
        }
        return this.now() + parseInt(expires, 10);
    };
    /**
     * return the current time
     */
    Utils.now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };
    //#endregion
    //#region String Ops
    /**
     * Check if a string is empty
     *
     * @param str
     */
    Utils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    //#endregion
    //#region Token Processing (Extract to TokenProcessing.ts)
    /**
     * decode a JWT
     *
     * @param jwtToken
     */
    Utils.decodeJwt = function (jwtToken) {
        if (this.isEmpty(jwtToken)) {
            return null;
        }
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            //this._requestContext.logger.warn("The returned id_token is not parseable.");
            return null;
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Extract IdToken by decoding the RAWIdToken
     *
     * @param encodedIdToken
     */
    Utils.extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this.decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }
        try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = this.base64DecodeStringUrlSafe(base64IdToken);
            if (!base64Decoded) {
                //this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            //this._requestContext.logger.error("The returned id_token could not be decoded" + err);
        }
        return null;
    };
    //#endregion
    //#region Encode and Decode
    /**
     * encoding string to base64 - platform specific check
     *
     * @param input
     */
    Utils.base64EncodeStringUrlSafe = function (input) {
        // html5 should support atob function for decoding
        if (window.btoa) {
            return window.btoa(input);
        }
        else {
            return this.encode(input);
        }
    };
    /**
     * decoding base64 token - platform specific check
     *
     * @param base64IdToken
     */
    Utils.base64DecodeStringUrlSafe = function (base64IdToken) {
        // html5 should support atob function for decoding
        base64IdToken = base64IdToken.replace(/-/g, "+").replace(/_/g, "/");
        if (window.atob) {
            return decodeURIComponent(encodeURIComponent(window.atob(base64IdToken))); // jshint ignore:line
        }
        else {
            return decodeURIComponent(encodeURIComponent(this.decode(base64IdToken)));
        }
    };
    /**
     * base64 encode a string
     *
     * @param input
     */
    // TODO: Rename to specify type of encoding
    Utils.encode = function (input) {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = this.utf8Encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
        }
        return output.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    };
    /**
     * utf8 encode a string
     *
     * @param input
     */
    Utils.utf8Encode = function (input) {
        input = input.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < input.length; n++) {
            var c = input.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    /**
     * decode a base64 token string
     *
     * @param base64IdToken
     */
    // TODO: Rename to specify type of encoding
    Utils.decode = function (base64IdToken) {
        var codes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        base64IdToken = String(base64IdToken).replace(/=+$/, "");
        var length = base64IdToken.length;
        if (length % 4 === 1) {
            throw new Error("The token to be decoded is not correctly encoded.");
        }
        var h1, h2, h3, h4, bits, c1, c2, c3, decoded = "";
        for (var i = 0; i < length; i += 4) {
            //Every 4 base64 encoded character will be converted to 3 byte string, which is 24 bits
            // then 6 bits per base64 encoded character
            h1 = codes.indexOf(base64IdToken.charAt(i));
            h2 = codes.indexOf(base64IdToken.charAt(i + 1));
            h3 = codes.indexOf(base64IdToken.charAt(i + 2));
            h4 = codes.indexOf(base64IdToken.charAt(i + 3));
            // For padding, if last two are "="
            if (i + 2 === length - 1) {
                bits = h1 << 18 | h2 << 12 | h3 << 6;
                c1 = bits >> 16 & 255;
                c2 = bits >> 8 & 255;
                decoded += String.fromCharCode(c1, c2);
                break;
            }
            // if last one is "="
            else if (i + 1 === length - 1) {
                bits = h1 << 18 | h2 << 12;
                c1 = bits >> 16 & 255;
                decoded += String.fromCharCode(c1);
                break;
            }
            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
            // then convert to 3 byte chars
            c1 = bits >> 16 & 255;
            c2 = bits >> 8 & 255;
            c3 = bits & 255;
            decoded += String.fromCharCode(c1, c2, c3);
        }
        return decoded;
    };
    /**
     * deserialize a string
     *
     * @param query
     */
    Utils.deserialize = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    //#endregion
    //#region Scopes (extract to Scopes.ts)
    /**
     * Check if there are dup scopes in a given request
     *
     * @param cachedScopes
     * @param scopes
     */
    // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
    Utils.isIntersectingScopes = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        for (var i = 0; i < scopes.length; i++) {
            if (cachedScopes.indexOf(scopes[i].toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Check if a given scope is present in the request
     *
     * @param cachedScopes
     * @param scopes
     */
    Utils.containsScope = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        return scopes.every(function (value) { return cachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
    };
    /**
     * toLower
     *
     * @param scopes
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    Utils.convertToLowerCase = function (scopes) {
        return scopes.map(function (scope) { return scope.toLowerCase(); });
    };
    /**
     * remove one element from a scope array
     *
     * @param scopes
     * @param scope
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    Utils.removeElement = function (scopes, scope) {
        return scopes.filter(function (value) { return value !== scope; });
    };
    //#endregion
    //#region URL Processing (Extract to UrlProcessing.ts?)
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    Utils.replaceFirstPath = function (url, tenantId) {
        if (!tenantId) {
            return url;
        }
        var urlObject = this.GetUrlComponents(url);
        var pathArray = urlObject.PathSegments;
        if (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.Constants.organizations)) {
            pathArray[0] = tenantId;
            url = urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/");
        }
        return url;
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    Utils.GetUrlComponents = function (url) {
        if (!url) {
            throw "Url required";
        }
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        var match = url.match(regEx);
        if (!match || match.length < 6) {
            throw "Valid url required";
        }
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        return urlComponents;
    };
    /**
     * Given a url or path, append a trailing slash if one doesnt exist
     *
     * @param url
     */
    Utils.CanonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
        }
        if (url && !Utils.endsWith(url, "/")) {
            url += "/";
        }
        return url;
    };
    /**
     * Checks to see if the url ends with the suffix
     * Required because we are compiling for es5 instead of es6
     * @param url
     * @param str
     */
    // TODO: Rename this, not clear what it is supposed to do
    Utils.endsWith = function (url, suffix) {
        if (!url || !suffix) {
            return false;
        }
        return url.indexOf(suffix, url.length - suffix.length) !== -1;
    };
    /**
     * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
     * @param url
     * @param name
     */
    Utils.urlRemoveQueryStringParameter = function (url, name) {
        if (this.isEmpty(url)) {
            return url;
        }
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        url = url.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        return url;
    };
    //#endregion
    //#region ExtraQueryParameters Processing (Extract?)
    /**
     *
     * @param extraQueryParameters
     */
    Utils.checkSSO = function (extraQueryParameters) {
        return !(extraQueryParameters && ((extraQueryParameters.indexOf(Constants_1.Constants.login_hint) !== -1 || extraQueryParameters.indexOf(Constants_1.Constants.sid) !== -1)));
    };
    /**
    * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
    * in any login() or acquireToken() calls
    *
    * @param idTokenObject
    * @param login_hint
    * @param extraQueryParameters
    */
    //TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
    //TODO: Test all paths thoroughly
    Utils.constructUnifiedCacheExtraQueryParameter = function (idTokenObject, extraQueryParameters) {
        if (idTokenObject) {
            if (idTokenObject.hasOwnProperty(Constants_1.Constants.upn)) {
                extraQueryParameters = this.urlRemoveQueryStringParameter(extraQueryParameters, Constants_1.Constants.login_hint);
                extraQueryParameters = this.urlRemoveQueryStringParameter(extraQueryParameters, Constants_1.Constants.domain_hint);
                if (extraQueryParameters) {
                    return extraQueryParameters += "&" + Constants_1.Constants.login_hint + "=" + idTokenObject.upn + "&" + Constants_1.Constants.domain_hint + "=" + Constants_1.Constants.organizations;
                }
                else {
                    return extraQueryParameters = "&" + Constants_1.Constants.login_hint + "=" + idTokenObject.upn + "&" + Constants_1.Constants.domain_hint + "=" + Constants_1.Constants.organizations;
                }
            }
            else {
                extraQueryParameters = this.urlRemoveQueryStringParameter(extraQueryParameters, Constants_1.Constants.domain_hint);
                if (extraQueryParameters) {
                    return extraQueryParameters += "&" + Constants_1.Constants.domain_hint + "=" + Constants_1.Constants.organizations;
                }
                else {
                    return extraQueryParameters = "&" + Constants_1.Constants.domain_hint + "=" + Constants_1.Constants.organizations;
                }
            }
        }
        return extraQueryParameters;
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "errorDescription", {
        get: function () { return "error_description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "error", {
        get: function () { return "error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "scope", {
        get: function () { return "scope"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "acquireTokenUser", {
        get: function () { return "msal.acquireTokenUser"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientInfo", {
        get: function () { return "client_info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientId", {
        get: function () { return "clientId"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "authority", {
        get: function () { return "msal.authority"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idToken", {
        get: function () { return "id_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessToken", {
        get: function () { return "access_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expiresIn", {
        get: function () { return "expires_in"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "sessionState", {
        get: function () { return "session_state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalClientInfo", {
        get: function () { return "msal.client.info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalError", {
        get: function () { return "msal.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalErrorDescription", {
        get: function () { return "msal.error.description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalSessionState", {
        get: function () { return "msal.session.state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenKeys", {
        get: function () { return "msal.token.keys"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessTokenKey", {
        get: function () { return "msal.access.token.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expirationKey", {
        get: function () { return "msal.expiration.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateLogin", {
        get: function () { return "msal.state.login"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateAcquireToken", {
        get: function () { return "msal.state.acquireToken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateRenew", {
        get: function () { return "msal.state.renew"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "nonceIdToken", {
        get: function () { return "msal.nonce.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "userName", {
        get: function () { return "msal.username"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idTokenKey", {
        get: function () { return "msal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginRequest", {
        get: function () { return "msal.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginError", {
        get: function () { return "msal.login.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewStatus", {
        get: function () { return "msal.token.renew.status"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msal", {
        get: function () { return "msal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "no_user", {
        get: function () { return "NO_USER"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "login_hint", {
        get: function () { return "login_hint"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "domain_hint", {
        get: function () { return "domain_hint"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "organizations", {
        get: function () { return "organizations"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "consumers", {
        get: function () { return "consumers"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "consumersUtid", {
        get: function () { return "9188040d-6c67-4c5b-b112-36a304b66dad"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "sid", {
        get: function () { return "sid"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "upn", {
        get: function () { return "upn"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "adalIdToken", {
        get: function () { return "adal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_select_account", {
        get: function () { return "&prompt=select_account"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_none", {
        get: function () { return "&prompt=none"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt", {
        get: function () { return "prompt"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "response_mode_fragment", {
        get: function () { return "&response_mode=fragment"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "resourceDelimeter", {
        get: function () { return "|"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCancelled", {
        get: function () { return "Canceled"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCompleted", {
        get: function () { return "Completed"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusInProgress", {
        get: function () { return "In Progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpWidth", {
        get: function () { return this._popUpWidth; },
        set: function (width) {
            this._popUpWidth = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpHeight", {
        get: function () { return this._popUpHeight; },
        set: function (height) {
            this._popUpHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "login", {
        get: function () { return "LOGIN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewToken", {
        get: function () { return "RENEW_TOKEN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "unknown", {
        get: function () { return "UNKNOWN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "urlHash", {
        get: function () { return "msal.urlHash"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "angularLoginRequest", {
        get: function () { return "msal.angular.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "userIdentifier", {
        get: function () { return "userIdentifier"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "common", {
        get: function () { return "common"; },
        enumerable: true,
        configurable: true
    });
    Constants._popUpWidth = 483;
    Constants._popUpHeight = 600;
    return Constants;
}());
exports.Constants = Constants;
/**
 * @hidden
 */
var ErrorCodes = /** @class */ (function () {
    function ErrorCodes() {
    }
    Object.defineProperty(ErrorCodes, "loginProgressError", {
        get: function () { return "login_progress_error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCodes, "acquireTokenProgressError", {
        get: function () { return "acquiretoken_progress_error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCodes, "inputScopesError", {
        get: function () { return "input_scopes_error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCodes, "endpointResolutionError", {
        get: function () { return "endpoints_resolution_error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCodes, "popUpWindowError", {
        get: function () { return "popup_window_error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCodes, "userLoginError", {
        get: function () { return "user_login_error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCodes, "userCancelledError", {
        get: function () { return "user_cancelled"; },
        enumerable: true,
        configurable: true
    });
    return ErrorCodes;
}());
exports.ErrorCodes = ErrorCodes;
/**
 * @hidden
 */
var ErrorDescription = /** @class */ (function () {
    function ErrorDescription() {
    }
    Object.defineProperty(ErrorDescription, "loginProgressError", {
        get: function () { return "Login is in progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorDescription, "acquireTokenProgressError", {
        get: function () { return "Acquire token is in progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorDescription, "inputScopesError", {
        get: function () { return "Invalid value of input scopes provided"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorDescription, "endpointResolutionError", {
        get: function () { return "Endpoints cannot be resolved"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorDescription, "popUpWindowError", {
        get: function () { return "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorDescription, "userLoginError", {
        get: function () { return "User login is required"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorDescription, "userCancelledError", {
        get: function () { return "User closed the popup window and cancelled the flow"; },
        enumerable: true,
        configurable: true
    });
    return ErrorDescription;
}());
exports.ErrorDescription = ErrorDescription;
/**
 * @hidden
 */
exports.CacheKeys = {
    AUTHORITY: "msal_authority",
    ACQUIRE_TOKEN_USER: "msal.acquireTokenUser"
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var ErrorMessage_1 = __webpack_require__(5);
var XHRClient_1 = __webpack_require__(10);
/**
 * @hidden
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Aad"] = 0] = "Aad";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    AuthorityType[AuthorityType["B2C"] = 2] = "B2C";
})(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
/**
 * @hidden
 */
var Authority = /** @class */ (function () {
    function Authority(authority, validateAuthority) {
        this.IsValidationEnabled = validateAuthority;
        this.CanonicalAuthority = authority;
        this.validateAsUri();
    }
    Object.defineProperty(Authority.prototype, "Tenant", {
        get: function () {
            return this.CanonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "AuthorizationEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "EndSessionEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.EndSessionEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "SelfSignedJwtAudience", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.Issuer.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Authority.prototype.validateResolved = function () {
        if (!this.tenantDiscoveryResponse) {
            throw "Please call ResolveEndpointsAsync first";
        }
    };
    Object.defineProperty(Authority.prototype, "CanonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this.canonicalAuthority;
        },
        set: function (url) {
            this.canonicalAuthority = Utils_1.Utils.CanonicalizeUri(url);
            this.canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
        get: function () {
            if (!this.canonicalAuthorityUrlComponents) {
                this.canonicalAuthorityUrlComponents = Utils_1.Utils.GetUrlComponents(this.CanonicalAuthority);
            }
            return this.canonicalAuthorityUrlComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "DefaultOpenIdConfigurationEndpoint", {
        /**
         * // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
         */
        get: function () {
            return this.CanonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Given a string, validate that it is of the form https://domain/path
     */
    Authority.prototype.validateAsUri = function () {
        var components;
        try {
            components = this.CanonicalAuthorityUrlComponents;
        }
        catch (e) {
            throw ErrorMessage_1.ErrorMessage.invalidAuthorityType;
        }
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ErrorMessage_1.ErrorMessage.authorityUriInsecure;
        }
        if (!components.PathSegments || components.PathSegments.length < 1) {
            throw ErrorMessage_1.ErrorMessage.authorityUriInvalidPath;
        }
    };
    /**
     * Calls the OIDC endpoint and returns the response
     */
    Authority.prototype.DiscoverEndpoints = function (openIdConfigurationEndpoint) {
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(openIdConfigurationEndpoint, "GET", /*enableCaching: */ true)
            .then(function (response) {
            return {
                AuthorizationEndpoint: response.authorization_endpoint,
                EndSessionEndpoint: response.end_session_endpoint,
                Issuer: response.issuer
            };
        });
    };
    /**
     * Returns a promise.
     * Checks to see if the authority is in the cache
     * Discover endpoints via openid-configuration
     * If successful, caches the endpoint for later use in OIDC
     */
    Authority.prototype.ResolveEndpointsAsync = function () {
        var _this = this;
        var openIdConfigurationEndpoint = "";
        return this.GetOpenIdConfigurationEndpointAsync().then(function (openIdConfigurationEndpointResponse) {
            openIdConfigurationEndpoint = openIdConfigurationEndpointResponse;
            return _this.DiscoverEndpoints(openIdConfigurationEndpoint);
        }).then(function (tenantDiscoveryResponse) {
            _this.tenantDiscoveryResponse = tenantDiscoveryResponse;
            return _this;
        });
    };
    return Authority;
}());
exports.Authority = Authority;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
Object.defineProperty(exports, "__esModule", { value: true });
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
exports.__extends = __extends;
exports.__assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
    }
    return t;
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
    return t;
}
exports.__rest = __rest;
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
exports.__decorate = __decorate;
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
exports.__param = __param;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
exports.__metadata = __metadata;
function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator.throw(value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
exports.__awaiter = __awaiter;
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [0, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
exports.__generator = __generator;
function __exportStar(m, exports) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
exports.__exportStar = __exportStar;
function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m)
        return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length)
                o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}
exports.__values = __values;
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
exports.__read = __read;
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
exports.__spread = __spread;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
exports.__await = __await;
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
exports.__asyncGenerator = __asyncGenerator;
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n])
        i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}
exports.__asyncDelegator = __asyncDelegator;
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}
exports.__asyncValues = __asyncValues;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(localCallback, options) {
        if (options === void 0) { options = {}; }
        /**
         * @hidden
         */
        this.level = LogLevel.Info;
        var _a = options.correlationId, correlationId = _a === void 0 ? "" : _a, _b = options.level, level = _b === void 0 ? LogLevel.Info : _b, _c = options.piiLoggingEnabled, piiLoggingEnabled = _c === void 0 ? false : _c;
        this.localCallback = localCallback;
        this.correlationId = correlationId;
        this.level = level;
        this.piiLoggingEnabled = piiLoggingEnabled;
    }
    /**
     * @hidden
     */
    Logger.prototype.logMessage = function (logLevel, logMessage, containsPii) {
        if ((logLevel > this.level) || (!this.piiLoggingEnabled && containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var log;
        if (!Utils_1.Utils.isEmpty(this.correlationId)) {
            log = timestamp + ":" + this.correlationId + "-" + Utils_1.Utils.getLibraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        else {
            log = timestamp + ":" + Utils_1.Utils.getLibraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        this.executeCallback(logLevel, log, containsPii);
    };
    /**
     * @hidden
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * @hidden
     */
    Logger.prototype.error = function (message) {
        this.logMessage(LogLevel.Error, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.errorPii = function (message) {
        this.logMessage(LogLevel.Error, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.warning = function (message) {
        this.logMessage(LogLevel.Warning, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.warningPii = function (message) {
        this.logMessage(LogLevel.Warning, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.info = function (message) {
        this.logMessage(LogLevel.Info, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.infoPii = function (message) {
        this.logMessage(LogLevel.Info, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbose = function (message) {
        this.logMessage(LogLevel.Verbose, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbosePii = function (message) {
        this.logMessage(LogLevel.Verbose, message, true);
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Shouldn't this class go away post Error API completion?
/**
 * @hidden
 */
var ErrorMessage = /** @class */ (function () {
    function ErrorMessage() {
    }
    Object.defineProperty(ErrorMessage, "authorityUriInvalidPath", {
        get: function () { return "AuthorityUriInvalidPath"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage, "authorityUriInsecure", {
        get: function () { return "AuthorityUriInsecure"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage, "invalidAuthorityType", {
        get: function () { return "InvalidAuthorityType"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage, "unsupportedAuthorityValidation", {
        get: function () { return "UnsupportedAuthorityValidation"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage, "b2cAuthorityUriInvalidPath", {
        get: function () { return "B2cAuthorityUriInvalidPath"; },
        enumerable: true,
        configurable: true
    });
    return ErrorMessage;
}());
exports.ErrorMessage = ErrorMessage;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(3);
var AccessTokenKey_1 = __webpack_require__(13);
var AccessTokenValue_1 = __webpack_require__(14);
var AuthenticationRequestParameters_1 = __webpack_require__(15);
var ClientInfo_1 = __webpack_require__(16);
var Constants_1 = __webpack_require__(1);
var IdToken_1 = __webpack_require__(17);
var Logger_1 = __webpack_require__(4);
var Storage_1 = __webpack_require__(18);
var RequestInfo_1 = __webpack_require__(7);
var User_1 = __webpack_require__(8);
var Utils_1 = __webpack_require__(0);
var AuthorityFactory_1 = __webpack_require__(20);
/**
 * @hidden
 */
var ResponseTypes = {
    id_token: "id_token",
    token: "token",
    id_token_token: "id_token token"
};
var resolveTokenOnlyIfOutOfIframe = function (target, propertyKey, descriptor) {
    var tokenAcquisitionMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.isInIframe()
            ? new Promise(function () {
                return;
            })
            : tokenAcquisitionMethod.apply(this, args);
    };
    return descriptor;
};
var UserAgentApplication = /** @class */ (function () {
    /**
     * Initialize a UserAgentApplication with a given clientId and authority.
     * @constructor
     * @param {string} clientId - The clientID of your application, you should get this from the application registration portal.
     * @param {string} authority - A URL indicating a directory that MSAL can use to obtain tokens.
     * - In Azure AD, it is of the form https://&lt;instance>/&lt;tenant&gt;,\ where &lt;instance&gt; is the directory host (e.g. https://login.microsoftonline.com) and &lt;tenant&gt; is a identifier within the directory itself (e.g. a domain associated to the tenant, such as contoso.onmicrosoft.com, or the GUID representing the TenantID property of the directory)
     * - In Azure B2C, it is of the form https://&lt;instance&gt;/tfp/&lt;tenantId&gt;/&lt;policyName&gt;/
     * - Default value is: "https://login.microsoftonline.com/common"
     * @param _tokenReceivedCallback -  The function that will get the call back once this API is completed (either successfully or with a failure).
     * @param {boolean} validateAuthority -  boolean to turn authority validation on/off.
     */
    function UserAgentApplication(clientId, authority, tokenReceivedCallback, options) {
        if (options === void 0) { options = {}; }
        /**
         * @hidden
         */
        this._cacheLocations = {
            localStorage: "localStorage",
            sessionStorage: "sessionStorage"
        };
        /**
         * @hidden
         */
        this._clockSkew = 300;
        /**
         * @hidden
         */
        this._tokenReceivedCallback = null;
        this._isAngular = false;
        var _a = options.validateAuthority, validateAuthority = _a === void 0 ? true : _a, _b = options.cacheLocation, cacheLocation = _b === void 0 ? "sessionStorage" : _b, _c = options.redirectUri, redirectUri = _c === void 0 ? function () { return window.location.href.split("?")[0].split("#")[0]; } : _c, _d = options.postLogoutRedirectUri, postLogoutRedirectUri = _d === void 0 ? function () { return window.location.href.split("?")[0].split("#")[0]; } : _d, _e = options.logger, logger = _e === void 0 ? new Logger_1.Logger(null) : _e, _f = options.loadFrameTimeout, loadFrameTimeout = _f === void 0 ? 6000 : _f, _g = options.navigateToLoginRequestUrl, navigateToLoginRequestUrl = _g === void 0 ? true : _g, _h = options.state, state = _h === void 0 ? "" : _h, _j = options.isAngular, isAngular = _j === void 0 ? false : _j, _k = options.unprotectedResources, unprotectedResources = _k === void 0 ? new Array() : _k, _l = options.protectedResourceMap, protectedResourceMap = _l === void 0 ? new Map() : _l, _m = options.storeAuthStateInCookie, storeAuthStateInCookie = _m === void 0 ? false : _m;
        this.loadFrameTimeout = loadFrameTimeout;
        this.clientId = clientId;
        this.validateAuthority = validateAuthority;
        this.authority = authority || "https://login.microsoftonline.com/common";
        this._tokenReceivedCallback = tokenReceivedCallback;
        this._redirectUri = redirectUri;
        this._postLogoutredirectUri = postLogoutRedirectUri;
        this._loginInProgress = false;
        this._acquireTokenInProgress = false;
        this._cacheLocation = cacheLocation;
        this._navigateToLoginRequestUrl = navigateToLoginRequestUrl;
        this._state = state;
        this._isAngular = isAngular;
        this._unprotectedResources = unprotectedResources;
        this._protectedResourceMap = protectedResourceMap;
        if (!this._cacheLocations[cacheLocation]) {
            throw new Error("Cache Location is not valid. Provided value:" + this._cacheLocation + ".Possible values are: " + this._cacheLocations.localStorage + ", " + this._cacheLocations.sessionStorage);
        }
        this._cacheStorage = new Storage_1.Storage(this._cacheLocation); //cache keys msal
        this._logger = logger;
        this.storeAuthStateInCookie = storeAuthStateInCookie;
        window.openedWindows = [];
        window.activeRenewals = {};
        window.renewStates = [];
        window.callBackMappedToRenewStates = {};
        window.callBacksMappedToRenewStates = {};
        window.msal = this;
        var urlHash = window.location.hash;
        var isCallback = this.isCallback(urlHash);
        if (!this._isAngular) {
            if (isCallback) {
                this.handleAuthenticationResponse.call(this, urlHash);
            }
            else {
                var pendingCallback = this._cacheStorage.getItem(Constants_1.Constants.urlHash);
                if (pendingCallback) {
                    this.processCallBack(pendingCallback);
                }
            }
        }
    }
    Object.defineProperty(UserAgentApplication.prototype, "cacheLocation", {
        /**
         * Used to get the cache location
         */
        get: function () {
            return this._cacheLocation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserAgentApplication.prototype, "authority", {
        /**
         * Used to get the authority.
         */
        get: function () {
            return this.authorityInstance.CanonicalAuthority;
        },
        /**
         * Used to set the authority.
         * @param {string} authority - A URL indicating a directory that MSAL can use to obtain tokens.
         * - In Azure AD, it is of the form https://&lt;tenant&gt;/&lt;tenant&gt;, where &lt;tenant&gt; is the directory host (e.g. https://login.microsoftonline.com) and &lt;tenant&gt; is a identifier within the directory itself (e.g. a domain associated to the tenant, such as contoso.onmicrosoft.com, or the GUID representing the TenantID property of the directory)
         * - In Azure B2C, it is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/<policyName>/
         * - Default value is: "https://login.microsoftonline.com/common"
         */
        set: function (val) {
            this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.validateAuthority);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Used to call the constructor callback with the token/error
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     * @hidden
     */
    UserAgentApplication.prototype.processCallBack = function (hash) {
        this._logger.info("Processing the callback from redirect response");
        var requestInfo = this.getRequestInfo(hash);
        this.saveTokenFromHash(requestInfo);
        var token = requestInfo.parameters[Constants_1.Constants.accessToken] || requestInfo.parameters[Constants_1.Constants.idToken];
        var errorDesc = requestInfo.parameters[Constants_1.Constants.errorDescription];
        var error = requestInfo.parameters[Constants_1.Constants.error];
        var tokenType;
        if (requestInfo.parameters[Constants_1.Constants.accessToken]) {
            tokenType = Constants_1.Constants.accessToken;
        }
        else {
            tokenType = Constants_1.Constants.idToken;
        }
        this._cacheStorage.removeItem(Constants_1.Constants.urlHash);
        try {
            if (this._tokenReceivedCallback) {
                this._tokenReceivedCallback.call(this, errorDesc, token, error, tokenType, this.getUserState(this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie)));
            }
        }
        catch (err) {
            this._logger.error("Error occurred in token received callback function: " + err);
        }
    };
    /**
     * Used to get the redirect uri. Evaluates redirectUri if its a function, otherwise simply returns its value.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.getRedirectUri = function () {
        if (typeof this._redirectUri === "function") {
            return this._redirectUri();
        }
        return this._redirectUri;
    };
    /**
     * Used to get the post logout redirect uri. Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
        if (typeof this._postLogoutredirectUri === "function") {
            return this._postLogoutredirectUri();
        }
        return this._postLogoutredirectUri;
    };
    /**
     * Initiate the login process by redirecting the user to the STS authorization endpoint.
     * @param {Array.<string>} scopes - Permissions you want included in the access token. Not all scopes are guaranteed to be included in the access token returned.
     * @param {string} extraQueryParameters - Key-value pairs to pass to the authentication server during the interactive authentication flow.
     */
    UserAgentApplication.prototype.loginRedirect = function (scopes, extraQueryParameters) {
        var _this = this;
        /*
        1. Create navigate url
        2. saves value in cache
        3. redirect user to AAD
         */
        if (this._loginInProgress) {
            if (this._tokenReceivedCallback) {
                this._tokenReceivedCallback(Constants_1.ErrorDescription.loginProgressError, null, Constants_1.ErrorCodes.loginProgressError, Constants_1.Constants.idToken, this.getUserState(this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie)));
                return;
            }
        }
        if (scopes) {
            var isValidScope = this.validateInputScope(scopes);
            if (isValidScope && !Utils_1.Utils.isEmpty(isValidScope)) {
                if (this._tokenReceivedCallback) {
                    this._tokenReceivedCallback(Constants_1.ErrorDescription.inputScopesError, null, Constants_1.ErrorCodes.inputScopesError, Constants_1.Constants.idToken, this.getUserState(this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie)));
                    return;
                }
            }
            scopes = this.filterScopes(scopes);
        }
        var idTokenObject;
        idTokenObject = this.extractADALIdToken();
        if (idTokenObject && !scopes) {
            this._logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
            extraQueryParameters = Utils_1.Utils.constructUnifiedCacheExtraQueryParameter(idTokenObject, extraQueryParameters);
            this._silentLogin = true;
            this.acquireTokenSilent([this.clientId], this.authority, this.getUser(), extraQueryParameters)
                .then(function (idToken) {
                _this._silentLogin = false;
                _this._logger.info("Unified cache call is successful");
                if (_this._tokenReceivedCallback) {
                    _this._tokenReceivedCallback.call(_this, null, idToken, null, Constants_1.Constants.idToken, _this.getUserState(_this._silentAuthenticationState));
                }
            }, function (error) {
                _this._silentLogin = false;
                _this._logger.error("Error occurred during unified cache ATS");
                _this.loginRedirectHelper(scopes, extraQueryParameters);
            });
        }
        else {
            this.loginRedirectHelper(scopes, extraQueryParameters);
        }
    };
    UserAgentApplication.prototype.loginRedirectHelper = function (scopes, extraQueryParameters) {
        var _this = this;
        this._loginInProgress = true;
        this.authorityInstance.ResolveEndpointsAsync()
            .then(function () {
            var authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(_this.authorityInstance, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this._state);
            if (extraQueryParameters) {
                authenticationRequest.extraQueryParameters = extraQueryParameters;
            }
            var loginStartPage = _this._cacheStorage.getItem(Constants_1.Constants.angularLoginRequest);
            if (!loginStartPage || loginStartPage === "") {
                loginStartPage = window.location.href;
            }
            else {
                _this._cacheStorage.setItem(Constants_1.Constants.angularLoginRequest, "");
            }
            _this._cacheStorage.setItem(Constants_1.Constants.loginRequest, loginStartPage, _this.storeAuthStateInCookie);
            _this._cacheStorage.setItem(Constants_1.Constants.loginError, "");
            _this._cacheStorage.setItem(Constants_1.Constants.stateLogin, authenticationRequest.state, _this.storeAuthStateInCookie);
            _this._cacheStorage.setItem(Constants_1.Constants.nonceIdToken, authenticationRequest.nonce, _this.storeAuthStateInCookie);
            _this._cacheStorage.setItem(Constants_1.Constants.msalError, "");
            _this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
            var authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
            _this._cacheStorage.setItem(authorityKey, _this.authority, _this.storeAuthStateInCookie);
            var urlNavigate = authenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
            _this.promptUser(urlNavigate);
        });
    };
    /**
     * Initiate the login process by opening a popup window.
     * @param {Array.<string>} scopes - Permissions you want included in the access token. Not all scopes are  guaranteed to be included in the access token returned.
     * @param {string} extraQueryParameters - Key-value pairs to pass to the STS during the interactive authentication flow.
     * @returns {Promise.<string>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the token or error.
     */
    UserAgentApplication.prototype.loginPopup = function (scopes, extraQueryParameters) {
        var _this = this;
        /*
        1. Create navigate url
        2. saves value in cache
        3. redirect user to AAD
         */
        return new Promise(function (resolve, reject) {
            if (_this._loginInProgress) {
                reject(Constants_1.ErrorCodes.loginProgressError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.loginProgressError);
                return;
            }
            if (scopes) {
                var isValidScope = _this.validateInputScope(scopes);
                if (isValidScope && !Utils_1.Utils.isEmpty(isValidScope)) {
                    reject(Constants_1.ErrorCodes.inputScopesError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.inputScopesError);
                    return;
                }
                scopes = _this.filterScopes(scopes);
            }
            var idTokenObject;
            idTokenObject = _this.extractADALIdToken();
            if (idTokenObject && !scopes) {
                _this._logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                extraQueryParameters = Utils_1.Utils.constructUnifiedCacheExtraQueryParameter(idTokenObject, extraQueryParameters);
                _this._silentLogin = true;
                _this.acquireTokenSilent([_this.clientId], _this.authority, _this.getUser(), extraQueryParameters)
                    .then(function (idToken) {
                    _this._silentLogin = false;
                    _this._logger.info("Unified cache call is successful");
                    resolve(idToken);
                }, function (error) {
                    _this._silentLogin = false;
                    _this._logger.error("Error occurred during unified cache ATS");
                    _this.loginPopupHelper(resolve, reject, scopes, extraQueryParameters);
                });
            }
            else {
                _this.loginPopupHelper(resolve, reject, scopes, extraQueryParameters);
            }
        });
    };
    UserAgentApplication.prototype.loginPopupHelper = function (resolve, reject, scopes, extraQueryParameters) {
        var _this = this;
        //TODO why this is needed only for loginpopup
        if (!scopes) {
            scopes = [this.clientId];
        }
        var scope = scopes.join(" ").toLowerCase();
        var popUpWindow = this.openWindow("about:blank", "_blank", 1, this, resolve, reject);
        if (!popUpWindow) {
            return;
        }
        this._loginInProgress = true;
        this.authorityInstance.ResolveEndpointsAsync().then(function () {
            var authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(_this.authorityInstance, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this._state);
            if (extraQueryParameters) {
                authenticationRequest.extraQueryParameters = extraQueryParameters;
            }
            _this._cacheStorage.setItem(Constants_1.Constants.loginRequest, window.location.href, _this.storeAuthStateInCookie);
            _this._cacheStorage.setItem(Constants_1.Constants.loginError, "");
            _this._cacheStorage.setItem(Constants_1.Constants.nonceIdToken, authenticationRequest.nonce, _this.storeAuthStateInCookie);
            _this._cacheStorage.setItem(Constants_1.Constants.msalError, "");
            _this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
            var authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
            _this._cacheStorage.setItem(authorityKey, _this.authority, _this.storeAuthStateInCookie);
            var urlNavigate = authenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
            window.renewStates.push(authenticationRequest.state);
            window.requestType = Constants_1.Constants.login;
            _this.registerCallback(authenticationRequest.state, scope, resolve, reject);
            if (popUpWindow) {
                _this._logger.infoPii("Navigated Popup window to:" + urlNavigate);
                popUpWindow.location.href = urlNavigate;
            }
        }, function () {
            _this._logger.info(Constants_1.ErrorCodes.endpointResolutionError + ":" + Constants_1.ErrorDescription.endpointResolutionError);
            _this._cacheStorage.setItem(Constants_1.Constants.msalError, Constants_1.ErrorCodes.endpointResolutionError);
            _this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, Constants_1.ErrorDescription.endpointResolutionError);
            if (reject) {
                reject(Constants_1.ErrorCodes.endpointResolutionError + ":" + Constants_1.ErrorDescription.endpointResolutionError);
            }
            if (popUpWindow) {
                popUpWindow.close();
            }
        }).catch(function (err) {
            _this._logger.warning("could not resolve endpoints");
            reject(err);
        });
    };
    /**
      * Used to redirect the browser to the STS authorization endpoint
      * @param {string} urlNavigate - URL of the authorization endpoint
      * @hidden
      */
    UserAgentApplication.prototype.promptUser = function (urlNavigate) {
        if (urlNavigate && !Utils_1.Utils.isEmpty(urlNavigate)) {
            this._logger.infoPii("Navigate to:" + urlNavigate);
            window.location.replace(urlNavigate);
        }
        else {
            this._logger.info("Navigate url is empty");
        }
    };
    /**
     * Used to send the user to the redirect_uri after authentication is complete. The user"s bearer token is attached to the URI fragment as an id_token/access_token field.
     * This function also closes the popup window after redirection.
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.openWindow = function (urlNavigate, title, interval, instance, resolve, reject) {
        var _this = this;
        var popupWindow = this.openPopup(urlNavigate, title, Constants_1.Constants.popUpWidth, Constants_1.Constants.popUpHeight);
        if (popupWindow == null) {
            instance._loginInProgress = false;
            instance._acquireTokenInProgress = false;
            this._logger.info(Constants_1.ErrorCodes.popUpWindowError + ":" + Constants_1.ErrorDescription.popUpWindowError);
            this._cacheStorage.setItem(Constants_1.Constants.msalError, Constants_1.ErrorCodes.popUpWindowError);
            this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, Constants_1.ErrorDescription.popUpWindowError);
            if (reject) {
                reject(Constants_1.ErrorCodes.popUpWindowError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.popUpWindowError);
            }
            return null;
        }
        window.openedWindows.push(popupWindow);
        var pollTimer = window.setInterval(function () {
            if (popupWindow && popupWindow.closed && instance._loginInProgress) {
                if (reject) {
                    reject(Constants_1.ErrorCodes.userCancelledError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.userCancelledError);
                }
                window.clearInterval(pollTimer);
                if (_this._isAngular) {
                    _this.broadcast("msal:popUpClosed", Constants_1.ErrorCodes.userCancelledError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.userCancelledError);
                    return;
                }
                instance._loginInProgress = false;
                instance._acquireTokenInProgress = false;
            }
            try {
                var popUpWindowLocation = popupWindow.location;
                if (popUpWindowLocation.href.indexOf(_this.getRedirectUri()) !== -1) {
                    window.clearInterval(pollTimer);
                    instance._loginInProgress = false;
                    instance._acquireTokenInProgress = false;
                    _this._logger.info("Closing popup window");
                    if (_this._isAngular) {
                        _this.broadcast("msal:popUpHashChanged", popUpWindowLocation.hash);
                        for (var i = 0; i < window.openedWindows.length; i++) {
                            window.openedWindows[i].close();
                        }
                    }
                }
            }
            catch (e) {
                //Cross Domain url check error. Will be thrown until AAD redirects the user back to the app"s root page with the token. No need to log or throw this error as it will create unnecessary traffic.
            }
        }, interval);
        return popupWindow;
    };
    UserAgentApplication.prototype.broadcast = function (eventName, data) {
        var evt = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(evt);
    };
    /**
     * Used to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Defaults behaviour is to redirect the user to `window.location.href`.
     */
    UserAgentApplication.prototype.logout = function () {
        this.clearCache();
        this._user = null;
        var logout = "";
        if (this.getPostLogoutRedirectUri()) {
            logout = "post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
        }
        var urlNavigate = this.authority + "/oauth2/v2.0/logout?" + logout;
        this.promptUser(urlNavigate);
    };
    /**
     * Used to configure the popup window for login.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.clearCache = function () {
        window.renewStates = [];
        var accessTokenItems = this._cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.userIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            this._cacheStorage.removeItem(JSON.stringify(accessTokenItems[i].key));
        }
        this._cacheStorage.resetCacheItems();
        this._cacheStorage.clearCookie();
    };
    UserAgentApplication.prototype.clearCacheForScope = function (accessToken) {
        var accessTokenItems = this._cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.userIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            var token = accessTokenItems[i];
            if (token.value.accessToken === accessToken) {
                this._cacheStorage.removeItem(JSON.stringify(token.key));
            }
        }
    };
    /**
     * Configures popup window for login.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
        try {
            /**
             * adding winLeft and winTop to account for dual monitor
             * using screenLeft and screenTop for IE8 and earlier
             */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /**
             * window.innerWidth displays browser window"s height and width excluding toolbars
             * using document.documentElement.clientWidth for IE8 and earlier
             */
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
            var top = ((height / 2) - (popUpHeight / 2)) + winTop;
            var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top + ", left=" + left);
            if (popupWindow.focus) {
                popupWindow.focus();
            }
            return popupWindow;
        }
        catch (e) {
            this._logger.error("error opening popup " + e.message);
            this._loginInProgress = false;
            this._acquireTokenInProgress = false;
            return null;
        }
    };
    /**
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.validateInputScope = function (scopes) {
        if (!scopes || scopes.length < 1) {
            return "Scopes cannot be passed as an empty array";
        }
        if (!Array.isArray(scopes)) {
            throw new Error("API does not accept non-array scopes");
        }
        if (scopes.indexOf(this.clientId) > -1) {
            if (scopes.length > 1) {
                return "ClientId can only be provided as a single scope";
            }
        }
        return "";
    };
    /**
      * Used to remove openid and profile from the list of scopes passed by the developer.These scopes are added by default
      * @hidden
      */
    UserAgentApplication.prototype.filterScopes = function (scopes) {
        scopes = scopes.filter(function (element) {
            return element !== "openid";
        });
        scopes = scopes.filter(function (element) {
            return element !== "profile";
        });
        return scopes;
    };
    /**
     * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
     * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {string} expectedState - Unique state identifier (guid).
     * @param {Function} resolve - The resolve function of the promise object.
     * @param {Function} reject - The reject function of the promise object.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.registerCallback = function (expectedState, scope, resolve, reject) {
        var _this = this;
        window.activeRenewals[scope] = expectedState;
        if (!window.callBacksMappedToRenewStates[expectedState]) {
            window.callBacksMappedToRenewStates[expectedState] = [];
        }
        window.callBacksMappedToRenewStates[expectedState].push({ resolve: resolve, reject: reject });
        if (!window.callBackMappedToRenewStates[expectedState]) {
            window.callBackMappedToRenewStates[expectedState] =
                function (errorDesc, token, error, tokenType) {
                    window.activeRenewals[scope] = null;
                    for (var i = 0; i < window.callBacksMappedToRenewStates[expectedState].length; ++i) {
                        try {
                            if (errorDesc || error) {
                                window.callBacksMappedToRenewStates[expectedState][i].reject(errorDesc + Constants_1.Constants.resourceDelimeter + error);
                            }
                            else if (token) {
                                window.callBacksMappedToRenewStates[expectedState][i].resolve(token);
                            }
                        }
                        catch (e) {
                            _this._logger.warning(e);
                        }
                    }
                    window.callBacksMappedToRenewStates[expectedState] = null;
                    window.callBackMappedToRenewStates[expectedState] = null;
                };
        }
    };
    UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, user) {
        var userObject = user ? user : this.getUser();
        if (!userObject) {
            return null;
        }
        var authenticationRequest;
        var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.validateAuthority);
        if (Utils_1.Utils.compareObjects(userObject, this.getUser())) {
            if (scopes.indexOf(this.clientId) > -1) {
                authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(newAuthority, this.clientId, scopes, ResponseTypes.id_token, this.getRedirectUri(), this._state);
            }
            else {
                authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(newAuthority, this.clientId, scopes, ResponseTypes.token, this.getRedirectUri(), this._state);
            }
        }
        else {
            authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(newAuthority, this.clientId, scopes, ResponseTypes.id_token_token, this.getRedirectUri(), this._state);
        }
        return this.getCachedToken(authenticationRequest, user);
    };
    /**
     * Used to get token for the specified set of scopes from the cache
     * @param {AuthenticationRequestParameters} authenticationRequest - Request sent to the STS to obtain an id_token/access_token
     * @param {User} user - User for which the scopes were requested
     * @hidden
     */
    UserAgentApplication.prototype.getCachedToken = function (authenticationRequest, user) {
        var accessTokenCacheItem = null;
        var scopes = authenticationRequest.scopes;
        var tokenCacheItems = this._cacheStorage.getAllAccessTokens(this.clientId, user ? user.userIdentifier : null); //filter by clientId and user
        if (tokenCacheItems.length === 0) { // No match found after initial filtering
            return null;
        }
        var filteredItems = [];
        //if no authority passed
        if (!authenticationRequest.authority) {
            //filter by scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (Utils_1.Utils.containsScope(cachedScopes, scopes)) {
                    filteredItems.push(cacheItem);
                }
            }
            //if only one cached token found
            if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
                authenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(accessTokenCacheItem.key.authority, this.validateAuthority);
            }
            else if (filteredItems.length > 1) {
                return {
                    errorDesc: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements like authority",
                    token: null,
                    error: "multiple_matching_tokens_detected"
                };
            }
            else {
                //no match found. check if there was a single authority used
                var authorityList = this.getUniqueAuthority(tokenCacheItems, "authority");
                if (authorityList.length > 1) {
                    return {
                        errorDesc: "Multiple authorities found in the cache. Pass authority in the API overload.",
                        token: null,
                        error: "multiple_matching_tokens_detected"
                    };
                }
                authenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(authorityList[0], this.validateAuthority);
            }
        }
        else {
            //authority was passed in the API, filter by authority and scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (Utils_1.Utils.containsScope(cachedScopes, scopes) && cacheItem.key.authority === authenticationRequest.authority) {
                    filteredItems.push(cacheItem);
                }
            }
            //no match
            if (filteredItems.length === 0) {
                return null;
            }
            //only one cachedToken Found
            else if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
            }
            else {
                //more than one match found.
                return {
                    errorDesc: "The cache contains multiple tokens satisfying the requirements.Call AcquireToken again providing more requirements like authority",
                    token: null,
                    error: "multiple_matching_tokens_detected"
                };
            }
        }
        if (accessTokenCacheItem != null) {
            var expired = Number(accessTokenCacheItem.value.expiresIn);
            // If expiration is within offset, it will force renew
            var offset = this._clockSkew || 300;
            if (expired && (expired > Utils_1.Utils.now() + offset)) {
                return {
                    errorDesc: null,
                    token: accessTokenCacheItem.value.accessToken,
                    error: null
                };
            }
            else {
                this._cacheStorage.removeItem(JSON.stringify(filteredItems[0].key));
                return null;
            }
        }
        else {
            return null;
        }
    };
    /**
     * Used to filter all cached items and return a list of unique users based on userIdentifier.
     * @param {Array<User>} Users - users saved in the cache.
     */
    UserAgentApplication.prototype.getAllUsers = function () {
        var users = [];
        var accessTokenCacheItems = this._cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.userIdentifier);
        for (var i = 0; i < accessTokenCacheItems.length; i++) {
            var idToken = new IdToken_1.IdToken(accessTokenCacheItems[i].value.idToken);
            var clientInfo = new ClientInfo_1.ClientInfo(accessTokenCacheItems[i].value.clientInfo);
            var user = User_1.User.createUser(idToken, clientInfo);
            users.push(user);
        }
        return this.getUniqueUsers(users);
    };
    /**
     * Used to filter users based on userIdentifier
     * @param {Array<User>}  Users - users saved in the cache
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.getUniqueUsers = function (users) {
        if (!users || users.length <= 1) {
            return users;
        }
        var flags = [];
        var uniqueUsers = [];
        for (var index = 0; index < users.length; ++index) {
            if (users[index].userIdentifier && flags.indexOf(users[index].userIdentifier) === -1) {
                flags.push(users[index].userIdentifier);
                uniqueUsers.push(users[index]);
            }
        }
        return uniqueUsers;
    };
    /**
    * Used to get a unique list of authoritues from the cache
    * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
    * @ignore
    * @hidden
    */
    UserAgentApplication.prototype.getUniqueAuthority = function (accessTokenCacheItems, property) {
        var authorityList = [];
        var flags = [];
        accessTokenCacheItems.forEach(function (element) {
            if (element.key.hasOwnProperty(property) && (flags.indexOf(element.key[property]) === -1)) {
                flags.push(element.key[property]);
                authorityList.push(element.key[property]);
            }
        });
        return authorityList;
    };
    /**
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
     * domain_hint can be one of users/organisations which when added skips the email based discovery process of the user
     * domain_req utid received as part of the clientInfo
     * login_req uid received as part of clientInfo
     * @param {string} urlNavigate - Authentication request url
     * @param {User} user - User for which the token is requested
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.addHintParameters = function (urlNavigate, user) {
        var userObject = user ? user : this.getUser();
        if (userObject) {
            var decodedClientInfo = userObject.userIdentifier.split(".");
            var uid = Utils_1.Utils.base64DecodeStringUrlSafe(decodedClientInfo[0]);
            var utid = Utils_1.Utils.base64DecodeStringUrlSafe(decodedClientInfo[1]);
            if (userObject.sid && urlNavigate.indexOf(Constants_1.Constants.prompt_none) !== -1) {
                if (!this.urlContainsQueryStringParameter(Constants_1.Constants.sid, urlNavigate) && !this.urlContainsQueryStringParameter(Constants_1.Constants.login_hint, urlNavigate)) {
                    urlNavigate += "&" + Constants_1.Constants.sid + "=" + encodeURIComponent(userObject.sid);
                }
            }
            else {
                if (!this.urlContainsQueryStringParameter(Constants_1.Constants.login_hint, urlNavigate) && userObject.displayableId && !Utils_1.Utils.isEmpty(userObject.displayableId)) {
                    urlNavigate += "&" + Constants_1.Constants.login_hint + "=" + encodeURIComponent(userObject.displayableId);
                }
            }
            if (!Utils_1.Utils.isEmpty(uid) && !Utils_1.Utils.isEmpty(utid)) {
                if (!this.urlContainsQueryStringParameter("domain_req", urlNavigate) && !Utils_1.Utils.isEmpty(utid)) {
                    urlNavigate += "&domain_req=" + encodeURIComponent(utid);
                }
                if (!this.urlContainsQueryStringParameter("login_req", urlNavigate) && !Utils_1.Utils.isEmpty(uid)) {
                    urlNavigate += "&login_req=" + encodeURIComponent(uid);
                }
            }
            if (!this.urlContainsQueryStringParameter(Constants_1.Constants.domain_hint, urlNavigate) && !Utils_1.Utils.isEmpty(utid)) {
                if (utid === Constants_1.Constants.consumersUtid) {
                    urlNavigate += "&" + Constants_1.Constants.domain_hint + "=" + encodeURIComponent(Constants_1.Constants.consumers);
                }
                else {
                    urlNavigate += "&" + Constants_1.Constants.domain_hint + "=" + encodeURIComponent(Constants_1.Constants.organizations);
                }
            }
        }
        return urlNavigate;
    };
    /**
     * Checks if the authorization endpoint URL contains query string parameters
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.urlContainsQueryStringParameter = function (name, url) {
        // regex to detect pattern of a ? or & followed by the name parameter and an equals character
        var regex = new RegExp("[\\?&]" + name + "=");
        return regex.test(url);
    };
    UserAgentApplication.prototype.acquireTokenRedirect = function (scopes, authority, user, extraQueryParameters) {
        var _this = this;
        var isValidScope = this.validateInputScope(scopes);
        if (isValidScope && !Utils_1.Utils.isEmpty(isValidScope)) {
            if (this._tokenReceivedCallback) {
                this._tokenReceivedCallback(Constants_1.ErrorDescription.inputScopesError, null, Constants_1.ErrorCodes.inputScopesError, Constants_1.Constants.accessToken, this.getUserState(this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie)));
                return;
            }
        }
        if (scopes) {
            scopes = this.filterScopes(scopes);
        }
        var userObject = user ? user : this.getUser();
        if (this._acquireTokenInProgress) {
            return;
        }
        var scope = scopes.join(" ").toLowerCase();
        if (!userObject && !(extraQueryParameters && (extraQueryParameters.indexOf(Constants_1.Constants.login_hint) !== -1))) {
            if (this._tokenReceivedCallback) {
                this._logger.info("User login is required");
                this._tokenReceivedCallback(Constants_1.ErrorDescription.userLoginError, null, Constants_1.ErrorCodes.userLoginError, Constants_1.Constants.accessToken, this.getUserState(this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie)));
                return;
            }
        }
        this._acquireTokenInProgress = true;
        var authenticationRequest;
        var acquireTokenAuthority = authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, this.validateAuthority) : this.authorityInstance;
        acquireTokenAuthority.ResolveEndpointsAsync().then(function () {
            if (Utils_1.Utils.compareObjects(userObject, _this.getUser())) {
                if (scopes.indexOf(_this.clientId) > -1) {
                    authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(acquireTokenAuthority, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this._state);
                }
                else {
                    authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(acquireTokenAuthority, _this.clientId, scopes, ResponseTypes.token, _this.getRedirectUri(), _this._state);
                }
            }
            else {
                authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(acquireTokenAuthority, _this.clientId, scopes, ResponseTypes.id_token_token, _this.getRedirectUri(), _this._state);
            }
            if (extraQueryParameters) {
                authenticationRequest.extraQueryParameters = extraQueryParameters;
            }
            _this.updateAcquireTokenCache(authenticationRequest, user);
            var urlNavigate = authenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
            urlNavigate = _this.addHintParameters(urlNavigate, userObject);
            if (urlNavigate) {
                _this._cacheStorage.setItem(Constants_1.Constants.stateAcquireToken, authenticationRequest.state, _this.storeAuthStateInCookie);
                window.location.replace(urlNavigate);
            }
        });
    };
    UserAgentApplication.prototype.acquireTokenPopup = function (scopes, authority, user, extraQueryParameters) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isValidScope = _this.validateInputScope(scopes);
            if (isValidScope && !Utils_1.Utils.isEmpty(isValidScope)) {
                reject(Constants_1.ErrorCodes.inputScopesError + Constants_1.Constants.resourceDelimeter + isValidScope);
            }
            if (scopes) {
                scopes = _this.filterScopes(scopes);
            }
            var userObject = user ? user : _this.getUser();
            if (_this._acquireTokenInProgress) {
                reject(Constants_1.ErrorCodes.acquireTokenProgressError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.acquireTokenProgressError);
                return;
            }
            var scope = scopes.join(" ").toLowerCase();
            //if user is not currently logged in and no login_hint is passed
            if (!userObject && !(extraQueryParameters && (extraQueryParameters.indexOf(Constants_1.Constants.login_hint) !== -1))) {
                _this._logger.info("User login is required");
                reject(Constants_1.ErrorCodes.userLoginError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.userLoginError);
                return;
            }
            _this._acquireTokenInProgress = true;
            var authenticationRequest;
            var acquireTokenAuthority = authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, _this.validateAuthority) : _this.authorityInstance;
            var popUpWindow = _this.openWindow("about:blank", "_blank", 1, _this, resolve, reject);
            if (!popUpWindow) {
                return;
            }
            acquireTokenAuthority.ResolveEndpointsAsync().then(function () {
                if (Utils_1.Utils.compareObjects(userObject, _this.getUser())) {
                    if (scopes.indexOf(_this.clientId) > -1) {
                        authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(acquireTokenAuthority, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this._state);
                    }
                    else {
                        authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(acquireTokenAuthority, _this.clientId, scopes, ResponseTypes.token, _this.getRedirectUri(), _this._state);
                    }
                }
                else {
                    authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(acquireTokenAuthority, _this.clientId, scopes, ResponseTypes.id_token_token, _this.getRedirectUri(), _this._state);
                }
                if (extraQueryParameters) {
                    authenticationRequest.extraQueryParameters = extraQueryParameters;
                }
                _this.updateAcquireTokenCache(authenticationRequest, userObject);
                var urlNavigate = authenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
                urlNavigate = _this.addHintParameters(urlNavigate, userObject);
                window.renewStates.push(authenticationRequest.state);
                window.requestType = Constants_1.Constants.renewToken;
                _this.registerCallback(authenticationRequest.state, scope, resolve, reject);
                if (popUpWindow) {
                    popUpWindow.location.href = urlNavigate;
                }
            }, function () {
                _this._logger.info(Constants_1.ErrorCodes.endpointResolutionError + ":" + Constants_1.ErrorDescription.endpointResolutionError);
                _this._cacheStorage.setItem(Constants_1.Constants.msalError, Constants_1.ErrorCodes.endpointResolutionError);
                _this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, Constants_1.ErrorDescription.endpointResolutionError);
                if (reject) {
                    reject(Constants_1.ErrorCodes.endpointResolutionError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.endpointResolutionError);
                }
                if (popUpWindow) {
                    popUpWindow.close();
                }
            }).catch(function (err) {
                _this._logger.warning("could not resolve endpoints");
                reject(err);
            });
        });
    };
    /**
     * Used to get the token from cache.
     * MSAL will return the cached token if it is not expired.
     * Or it will send a request to the STS to obtain an access_token using a hidden iframe. To renew idToken, clientId should be passed as the only scope in the scopes array.
     * @param {Array<string>} scopes - Permissions you want included in the access token. Not all scopes are  guaranteed to be included in the access token. Scopes like "openid" and "profile" are sent with every request.
     * @param {string} authority - A URL indicating a directory that MSAL can use to obtain tokens.
     * - In Azure AD, it is of the form https://&lt;tenant&gt;/&lt;tenant&gt;, where &lt;tenant&gt; is the directory host (e.g. https://login.microsoftonline.com) and &lt;tenant&gt; is a identifier within the directory itself (e.g. a domain associated to the tenant, such as contoso.onmicrosoft.com, or the GUID representing the TenantID property of the directory)
     * - In Azure B2C, it is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/<policyName>/
     * - Default value is: "https://login.microsoftonline.com/common"
     * @param {User} user - The user for which the scopes are requested.The default user is the logged in user.
     * @param {string} extraQueryParameters - Key-value pairs to pass to the STS during the  authentication flow.
     * @returns {Promise.<string>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Resolved with token or rejected with error.
     */
    UserAgentApplication.prototype.acquireTokenSilent = function (scopes, authority, user, extraQueryParameters) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isValidScope = _this.validateInputScope(scopes);
            if (isValidScope && !Utils_1.Utils.isEmpty(isValidScope)) {
                reject(Constants_1.ErrorCodes.inputScopesError + "|" + isValidScope);
                return null;
            }
            else {
                if (scopes) {
                    scopes = _this.filterScopes(scopes);
                }
                var scope_1 = scopes.join(" ").toLowerCase();
                var userObject_1 = user ? user : _this.getUser();
                var adalIdToken = _this._cacheStorage.getItem(Constants_1.Constants.adalIdToken);
                //if user is not currently logged in and no login_hint/sid is passed as an extraQueryParamater
                if (!userObject_1 && Utils_1.Utils.checkSSO(extraQueryParameters) && Utils_1.Utils.isEmpty(adalIdToken)) {
                    _this._logger.info("User login is required");
                    reject(Constants_1.ErrorCodes.userLoginError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.userLoginError);
                    return null;
                }
                //if user didn't passes the login_hint and adal's idtoken is present and no userobject, use the login_hint from adal's idToken
                else if (!userObject_1 && !Utils_1.Utils.isEmpty(adalIdToken)) {
                    var idTokenObject = Utils_1.Utils.extractIdToken(adalIdToken);
                    console.log("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                    extraQueryParameters = Utils_1.Utils.constructUnifiedCacheExtraQueryParameter(idTokenObject, extraQueryParameters);
                }
                var authenticationRequest_1;
                if (Utils_1.Utils.compareObjects(userObject_1, _this.getUser())) {
                    if (scopes.indexOf(_this.clientId) > -1) {
                        authenticationRequest_1 = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, _this.validateAuthority), _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this._state);
                    }
                    else {
                        authenticationRequest_1 = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, _this.validateAuthority), _this.clientId, scopes, ResponseTypes.token, _this.getRedirectUri(), _this._state);
                    }
                }
                else {
                    if (scopes.indexOf(_this.clientId) > -1) {
                        authenticationRequest_1 = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, _this.validateAuthority), _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this._state);
                    }
                    else {
                        authenticationRequest_1 = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, _this.validateAuthority), _this.clientId, scopes, ResponseTypes.id_token_token, _this.getRedirectUri(), _this._state);
                    }
                }
                var cacheResult = _this.getCachedToken(authenticationRequest_1, userObject_1);
                if (cacheResult) {
                    if (cacheResult.token) {
                        _this._logger.info("Token is already in cache for scope:" + scope_1);
                        resolve(cacheResult.token);
                        return null;
                    }
                    else if (cacheResult.errorDesc || cacheResult.error) {
                        _this._logger.infoPii(cacheResult.errorDesc + ":" + cacheResult.error);
                        reject(cacheResult.errorDesc + Constants_1.Constants.resourceDelimeter + cacheResult.error);
                        return null;
                    }
                }
                else {
                    _this._logger.verbose("Token is not in cache for scope:" + scope_1);
                }
                if (!authenticationRequest_1.authorityInstance) { //Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the api.
                    authenticationRequest_1.authorityInstance = authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, _this.validateAuthority) : _this.authorityInstance;
                }
                // cache miss
                return authenticationRequest_1.authorityInstance.ResolveEndpointsAsync()
                    .then(function () {
                    // refresh attept with iframe
                    //Already renewing for this scope, callback when we get the token.
                    if (window.activeRenewals[scope_1]) {
                        _this._logger.verbose("Renew token for scope: " + scope_1 + " is in progress. Registering callback");
                        //Active renewals contains the state for each renewal.
                        _this.registerCallback(window.activeRenewals[scope_1], scope_1, resolve, reject);
                    }
                    else {
                        if (scopes && scopes.indexOf(_this.clientId) > -1 && scopes.length === 1) {
                            // App uses idToken to send to api endpoints
                            // Default scope is tracked as clientId to store this token
                            _this._logger.verbose("renewing idToken");
                            _this.renewIdToken(scopes, resolve, reject, userObject_1, authenticationRequest_1, extraQueryParameters);
                        }
                        else {
                            _this._logger.verbose("renewing accesstoken");
                            _this.renewToken(scopes, resolve, reject, userObject_1, authenticationRequest_1, extraQueryParameters);
                        }
                    }
                }).catch(function (err) {
                    _this._logger.warning("could not resolve endpoints");
                    reject(err);
                    return null;
                });
            }
        });
    };
    UserAgentApplication.prototype.extractADALIdToken = function () {
        var adalIdToken = this._cacheStorage.getItem(Constants_1.Constants.adalIdToken);
        if (!Utils_1.Utils.isEmpty(adalIdToken)) {
            return Utils_1.Utils.extractIdToken(adalIdToken);
        }
        return null;
    };
    /**
     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, scope) {
        var _this = this;
        //set iframe session to pending
        var expectedState = window.activeRenewals[scope];
        this._logger.verbose("Set loading state to pending for: " + scope + ":" + expectedState);
        this._cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusInProgress);
        this.loadFrame(urlNavigate, frameName);
        setTimeout(function () {
            if (_this._cacheStorage.getItem(Constants_1.Constants.renewStatus + expectedState) === Constants_1.Constants.tokenRenewStatusInProgress) {
                // fail the iframe session if it"s in pending state
                _this._logger.verbose("Loading frame has timed out after: " + (_this.loadFrameTimeout / 1000) + " seconds for scope " + scope + ":" + expectedState);
                if (expectedState && window.callBackMappedToRenewStates[expectedState]) {
                    window.callBackMappedToRenewStates[expectedState]("Token renewal operation failed due to timeout", null, "Token Renewal Failed", Constants_1.Constants.accessToken);
                }
                _this._cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusCancelled);
            }
        }, this.loadFrameTimeout);
    };
    /**
     * Loads iframe with authorization endpoint URL
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.loadFrame = function (urlNavigate, frameName) {
        var _this = this;
        // This trick overcomes iframe navigation in IE
        // IE does not load the page consistently in iframe
        this._logger.info("LoadFrame: " + frameName);
        var frameCheck = frameName;
        setTimeout(function () {
            var frameHandle = _this.addAdalFrame(frameCheck);
            if (frameHandle.src === "" || frameHandle.src === "about:blank") {
                frameHandle.src = urlNavigate;
                _this._logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
            }
        }, 500);
    };
    /**
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.addAdalFrame = function (iframeId) {
        if (typeof iframeId === "undefined") {
            return null;
        }
        this._logger.info("Add msal frame to document:" + iframeId);
        var adalFrame = document.getElementById(iframeId);
        if (!adalFrame) {
            if (document.createElement &&
                document.documentElement &&
                (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
                var ifr = document.createElement("iframe");
                ifr.setAttribute("id", iframeId);
                ifr.style.visibility = "hidden";
                ifr.style.position = "absolute";
                ifr.style.width = ifr.style.height = "0";
                ifr.style.border = "0";
                adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }
        return adalFrame;
    };
    /**
     * Acquires access token using a hidden iframe.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.renewToken = function (scopes, resolve, reject, user, authenticationRequest, extraQueryParameters) {
        var scope = scopes.join(" ").toLowerCase();
        this._logger.verbose("renewToken is called for scope:" + scope);
        var frameHandle = this.addAdalFrame("msalRenewFrame" + scope);
        if (extraQueryParameters) {
            authenticationRequest.extraQueryParameters = extraQueryParameters;
        }
        this.updateAcquireTokenCache(authenticationRequest, user);
        this._logger.verbose("Renew token Expected state: " + authenticationRequest.state);
        var urlNavigate = Utils_1.Utils.urlRemoveQueryStringParameter(authenticationRequest.createNavigateUrl(scopes), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        urlNavigate = this.addHintParameters(urlNavigate, user);
        window.renewStates.push(authenticationRequest.state);
        window.requestType = Constants_1.Constants.renewToken;
        this.registerCallback(authenticationRequest.state, scope, resolve, reject);
        this._logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, "msalRenewFrame" + scope, scope);
    };
    /**
     * Renews idtoken for app"s own backend when clientId is passed as a single scope in the scopes array.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.renewIdToken = function (scopes, resolve, reject, user, authenticationRequest, extraQueryParameters) {
        var scope = scopes.join(" ").toLowerCase();
        this._logger.info("renewidToken is called");
        var frameHandle = this.addAdalFrame("msalIdTokenFrame");
        if (extraQueryParameters) {
            authenticationRequest.extraQueryParameters = extraQueryParameters;
        }
        this.updateAcquireTokenCache(authenticationRequest, user);
        this._logger.verbose("Renew Idtoken Expected state: " + authenticationRequest.state);
        var urlNavigate = Utils_1.Utils.urlRemoveQueryStringParameter(authenticationRequest.createNavigateUrl(scopes), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        urlNavigate = this.addHintParameters(urlNavigate, user);
        if (this._silentLogin) {
            window.requestType = Constants_1.Constants.login;
            this._silentAuthenticationState = authenticationRequest.state;
        }
        else {
            window.requestType = Constants_1.Constants.renewToken;
            window.renewStates.push(authenticationRequest.state);
        }
        this.registerCallback(authenticationRequest.state, this.clientId, resolve, reject);
        this._logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, "msalIdTokenFrame", this.clientId);
    };
    UserAgentApplication.prototype.updateAcquireTokenCache = function (authenticationRequest, user) {
        var userIdentifier = user && user.userIdentifier || Constants_1.Constants.no_user;
        var acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + userIdentifier + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
        var authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
        this._cacheStorage.setItem(acquireTokenUserKey, JSON.stringify(user));
        this._cacheStorage.setItem(authorityKey, authenticationRequest.authority, this.storeAuthStateInCookie);
        this._cacheStorage.setItem(Constants_1.Constants.nonceIdToken, authenticationRequest.nonce, this.storeAuthStateInCookie);
    };
    /**
      * Returns the signed in user (received from a user object created at the time of login) or null.
      */
    UserAgentApplication.prototype.getUser = function () {
        // idToken is first call
        if (this._user) {
            return this._user;
        }
        // frame is used to get idToken
        var rawIdToken = this._cacheStorage.getItem(Constants_1.Constants.idTokenKey);
        var rawClientInfo = this._cacheStorage.getItem(Constants_1.Constants.msalClientInfo);
        if (!Utils_1.Utils.isEmpty(rawIdToken) && !Utils_1.Utils.isEmpty(rawClientInfo)) {
            var idToken = new IdToken_1.IdToken(rawIdToken);
            var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo);
            this._user = User_1.User.createUser(idToken, clientInfo);
            return this._user;
        }
        return null;
    };
    /**
     * This method must be called for processing the response received from the STS. It extracts the hash, processes the token or error information and saves it in the cache. It then
     * calls the registered callbacks in case of redirect or resolves the promises with the result.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     * @hidden
     */
    UserAgentApplication.prototype.handleAuthenticationResponse = function (hash) {
        if (hash == null) {
            hash = window.location.hash;
        }
        var self = null;
        var isPopup = false;
        var isWindowOpenerMsal = false;
        try {
            isWindowOpenerMsal = window.opener && window.opener.msal && window.opener.msal !== window.msal;
        }
        catch (err) {
            // err = SecurityError: Blocked a frame with origin "[url]" from accessing a cross-origin frame.
            isWindowOpenerMsal = false;
        }
        if (isWindowOpenerMsal) {
            self = window.opener.msal;
            isPopup = true;
        }
        else if (window.parent && window.parent.msal) {
            self = window.parent.msal;
        }
        var requestInfo = self.getRequestInfo(hash); //if(window.parent!==window), by using self, window.parent becomes equal to window in getRequestInfo method specifically
        var token = null, tokenReceivedCallback = null, tokenType, saveToken = true;
        self._logger.info("Returned from redirect url");
        if (window.parent !== window && window.parent.msal) {
            tokenReceivedCallback = window.parent.callBackMappedToRenewStates[requestInfo.stateResponse];
        }
        else if (isWindowOpenerMsal) {
            tokenReceivedCallback = window.opener.callBackMappedToRenewStates[requestInfo.stateResponse];
        }
        else {
            if (self._navigateToLoginRequestUrl) {
                tokenReceivedCallback = null;
                self._cacheStorage.setItem(Constants_1.Constants.urlHash, hash);
                saveToken = false;
                if (window.parent === window && !isPopup) {
                    window.location.href = self._cacheStorage.getItem(Constants_1.Constants.loginRequest, this.storeAuthStateInCookie);
                }
                return;
            }
            else {
                tokenReceivedCallback = self._tokenReceivedCallback;
                window.location.hash = "";
            }
        }
        self.saveTokenFromHash(requestInfo);
        if ((requestInfo.requestType === Constants_1.Constants.renewToken) && window.parent) {
            if (window.parent !== window) {
                self._logger.verbose("Window is in iframe, acquiring token silently");
            }
            else {
                self._logger.verbose("acquiring token interactive in progress");
            }
            token = requestInfo.parameters[Constants_1.Constants.accessToken] || requestInfo.parameters[Constants_1.Constants.idToken];
            tokenType = Constants_1.Constants.accessToken;
        }
        else if (requestInfo.requestType === Constants_1.Constants.login) {
            token = requestInfo.parameters[Constants_1.Constants.idToken];
            tokenType = Constants_1.Constants.idToken;
        }
        var errorDesc = requestInfo.parameters[Constants_1.Constants.errorDescription];
        var error = requestInfo.parameters[Constants_1.Constants.error];
        try {
            if (tokenReceivedCallback) {
                //We should only send the stae back to the developer if it matches with what we received from the server
                if (requestInfo.stateMatch) {
                    tokenReceivedCallback.call(self, errorDesc, token, error, tokenType, this.getUserState(requestInfo.stateResponse));
                }
                else {
                    tokenReceivedCallback.call(self, errorDesc, token, error, tokenType, null);
                }
            }
        }
        catch (err) {
            self._logger.error("Error occurred in token received callback function: " + err);
        }
        if (isWindowOpenerMsal) {
            for (var i = 0; i < window.opener.openedWindows.length; i++) {
                window.opener.openedWindows[i].close();
            }
        }
    };
    /**
     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
     * @param {string} authority authority received in the redirect response from AAD.
     * @param {TokenResponse} requestInfo an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @param {User} user user object for which scopes are consented for. The default user is the logged in user.
     * @param {ClientInfo} clientInfo clientInfo received as part of the response comprising of fields uid and utid.
     * @param {IdToken} idToken idToken received as part of the response.
     * @ignore
     * @private
     * @hidden
     */
    /* tslint:disable:no-string-literal */
    UserAgentApplication.prototype.saveAccessToken = function (authority, tokenResponse, user, clientInfo, idToken) {
        var scope;
        var clientObj = new ClientInfo_1.ClientInfo(clientInfo);
        if (tokenResponse.parameters.hasOwnProperty("scope")) {
            scope = tokenResponse.parameters["scope"];
            var consentedScopes = scope.split(" ");
            var accessTokenCacheItems = this._cacheStorage.getAllAccessTokens(this.clientId, authority);
            for (var i = 0; i < accessTokenCacheItems.length; i++) {
                var accessTokenCacheItem = accessTokenCacheItems[i];
                if (accessTokenCacheItem.key.userIdentifier === user.userIdentifier) {
                    var cachedScopes = accessTokenCacheItem.key.scopes.split(" ");
                    if (Utils_1.Utils.isIntersectingScopes(cachedScopes, consentedScopes)) {
                        this._cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                    }
                }
            }
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(tokenResponse.parameters[Constants_1.Constants.accessToken], idToken.rawIdToken, Utils_1.Utils.expiresIn(tokenResponse.parameters[Constants_1.Constants.expiresIn]).toString(), clientInfo);
            this._cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
        }
        else {
            scope = this.clientId;
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(tokenResponse.parameters[Constants_1.Constants.idToken], tokenResponse.parameters[Constants_1.Constants.idToken], idToken.expiration, clientInfo);
            this._cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
        }
    };
    /**
     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the user object.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.saveTokenFromHash = function (tokenResponse) {
        this._logger.info("State status:" + tokenResponse.stateMatch + "; Request type:" + tokenResponse.requestType);
        this._cacheStorage.setItem(Constants_1.Constants.msalError, "");
        this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
        var authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + tokenResponse.stateResponse;
        var acquireTokenUserKey = "";
        // Record error
        if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.errorDescription) || tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.error)) {
            this._logger.infoPii("Error :" + tokenResponse.parameters[Constants_1.Constants.error] + "; Error description:" + tokenResponse.parameters[Constants_1.Constants.errorDescription]);
            this._cacheStorage.setItem(Constants_1.Constants.msalError, tokenResponse.parameters["error"]);
            this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, tokenResponse.parameters[Constants_1.Constants.errorDescription]);
            if (tokenResponse.requestType === Constants_1.Constants.login) {
                this._loginInProgress = false;
                this._cacheStorage.setItem(Constants_1.Constants.loginError, tokenResponse.parameters[Constants_1.Constants.errorDescription] + ":" + tokenResponse.parameters[Constants_1.Constants.error]);
            }
            if (tokenResponse.requestType === Constants_1.Constants.renewToken) {
                this._acquireTokenInProgress = false;
                var userKey = this.getUser() !== null ? this.getUser().userIdentifier : "";
                acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + userKey + Constants_1.Constants.resourceDelimeter + tokenResponse.stateResponse;
            }
        }
        else {
            // It must verify the state from redirect
            if (tokenResponse.stateMatch) {
                // record tokens to storage if exists
                this._logger.info("State is right");
                if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.sessionState)) {
                    this._cacheStorage.setItem(Constants_1.Constants.msalSessionState, tokenResponse.parameters[Constants_1.Constants.sessionState]);
                }
                var idToken;
                var clientInfo = "";
                if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.accessToken)) {
                    this._logger.info("Fragment has access token");
                    this._acquireTokenInProgress = false;
                    var user = void 0;
                    if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.idToken)) {
                        idToken = new IdToken_1.IdToken(tokenResponse.parameters[Constants_1.Constants.idToken]);
                    }
                    else {
                        idToken = new IdToken_1.IdToken(this._cacheStorage.getItem(Constants_1.Constants.idTokenKey));
                    }
                    var authority = this._cacheStorage.getItem(authorityKey, this.storeAuthStateInCookie);
                    if (!Utils_1.Utils.isEmpty(authority)) {
                        authority = Utils_1.Utils.replaceFirstPath(authority, idToken.tenantId);
                    }
                    if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = tokenResponse.parameters[Constants_1.Constants.clientInfo];
                        user = User_1.User.createUser(idToken, new ClientInfo_1.ClientInfo(clientInfo));
                    }
                    else {
                        this._logger.warning("ClientInfo not received in the response from AAD");
                        user = User_1.User.createUser(idToken, new ClientInfo_1.ClientInfo(clientInfo));
                    }
                    acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + user.userIdentifier + Constants_1.Constants.resourceDelimeter + tokenResponse.stateResponse;
                    var acquireTokenUserKey_nouser = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + Constants_1.Constants.no_user + Constants_1.Constants.resourceDelimeter + tokenResponse.stateResponse;
                    var cachedUser = this._cacheStorage.getItem(acquireTokenUserKey);
                    var acquireTokenUser = void 0;
                    if (!Utils_1.Utils.isEmpty(cachedUser)) {
                        acquireTokenUser = JSON.parse(cachedUser);
                        if (user && acquireTokenUser && Utils_1.Utils.compareObjects(user, acquireTokenUser)) {
                            this.saveAccessToken(authority, tokenResponse, user, clientInfo, idToken);
                            this._logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                        }
                        else {
                            this._logger.warning("The user object created from the response is not the same as the one passed in the acquireToken request");
                        }
                    }
                    else if (!Utils_1.Utils.isEmpty(this._cacheStorage.getItem(acquireTokenUserKey_nouser))) {
                        this.saveAccessToken(authority, tokenResponse, user, clientInfo, idToken);
                    }
                }
                if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.idToken)) {
                    this._logger.info("Fragment has id token");
                    this._loginInProgress = false;
                    idToken = new IdToken_1.IdToken(tokenResponse.parameters[Constants_1.Constants.idToken]);
                    if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = tokenResponse.parameters[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this._logger.warning("ClientInfo not received in the response from AAD");
                    }
                    var authority = this._cacheStorage.getItem(authorityKey, this.storeAuthStateInCookie);
                    if (!Utils_1.Utils.isEmpty(authority)) {
                        authority = Utils_1.Utils.replaceFirstPath(authority, idToken.tenantId);
                    }
                    this._user = User_1.User.createUser(idToken, new ClientInfo_1.ClientInfo(clientInfo));
                    if (idToken && idToken.nonce) {
                        if (idToken.nonce !== this._cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.storeAuthStateInCookie)) {
                            this._user = null;
                            this._cacheStorage.setItem(Constants_1.Constants.loginError, "Nonce Mismatch. Expected Nonce: " + this._cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.storeAuthStateInCookie) + "," + "Actual Nonce: " + idToken.nonce);
                            this._logger.error("Nonce Mismatch.Expected Nonce: " + this._cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.storeAuthStateInCookie) + "," + "Actual Nonce: " + idToken.nonce);
                        }
                        else {
                            this._cacheStorage.setItem(Constants_1.Constants.idTokenKey, tokenResponse.parameters[Constants_1.Constants.idToken]);
                            this._cacheStorage.setItem(Constants_1.Constants.msalClientInfo, clientInfo);
                            // Save idToken as access token for app itself
                            this.saveAccessToken(authority, tokenResponse, this._user, clientInfo, idToken);
                        }
                    }
                    else {
                        this._logger.error("Invalid id_token received in the response");
                        tokenResponse.parameters["error"] = "invalid idToken";
                        tokenResponse.parameters["error_description"] = "Invalid idToken. idToken: " + tokenResponse.parameters[Constants_1.Constants.idToken];
                        this._cacheStorage.setItem(Constants_1.Constants.msalError, "invalid idToken");
                        this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "Invalid idToken. idToken: " + tokenResponse.parameters[Constants_1.Constants.idToken]);
                    }
                }
            }
            else {
                this._logger.error("State Mismatch.Expected State: " + this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie) + "," + "Actual State: " + tokenResponse.stateResponse);
                tokenResponse.parameters["error"] = "Invalid_state";
                tokenResponse.parameters["error_description"] = "Invalid_state. state: " + tokenResponse.stateResponse;
                this._cacheStorage.setItem(Constants_1.Constants.msalError, "Invalid_state");
                this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "Invalid_state. state: " + tokenResponse.stateResponse);
            }
        }
        this._cacheStorage.setItem(Constants_1.Constants.renewStatus + tokenResponse.stateResponse, Constants_1.Constants.tokenRenewStatusCompleted);
        this._cacheStorage.removeAcquireTokenEntries();
    };
    /* tslint:enable:no-string-literal */
    /**
     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
     * @param {string} hash - Hash passed from redirect page.
     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
     * @hidden
     */
    UserAgentApplication.prototype.isCallback = function (hash) {
        hash = this.getHash(hash);
        var parameters = Utils_1.Utils.deserialize(hash);
        return (parameters.hasOwnProperty(Constants_1.Constants.errorDescription) ||
            parameters.hasOwnProperty(Constants_1.Constants.error) ||
            parameters.hasOwnProperty(Constants_1.Constants.accessToken) ||
            parameters.hasOwnProperty(Constants_1.Constants.idToken));
    };
    /**
     * Returns the anchor part(#) of the URL
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.getHash = function (hash) {
        if (hash.indexOf("#/") > -1) {
            hash = hash.substring(hash.indexOf("#/") + 2);
        }
        else if (hash.indexOf("#") > -1) {
            hash = hash.substring(1);
        }
        return hash;
    };
    /**
      * Creates a requestInfo object from the URL fragment and returns it.
      * @param {string} hash  -  Hash passed from redirect page
      * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
      * @ignore
      * @hidden
      */
    UserAgentApplication.prototype.getRequestInfo = function (hash) {
        hash = this.getHash(hash);
        var parameters = Utils_1.Utils.deserialize(hash);
        var tokenResponse = new RequestInfo_1.TokenResponse();
        if (parameters) {
            tokenResponse.parameters = parameters;
            if (parameters.hasOwnProperty(Constants_1.Constants.errorDescription) ||
                parameters.hasOwnProperty(Constants_1.Constants.error) ||
                parameters.hasOwnProperty(Constants_1.Constants.accessToken) ||
                parameters.hasOwnProperty(Constants_1.Constants.idToken)) {
                tokenResponse.valid = true;
                // which call
                var stateResponse = void 0;
                if (parameters.hasOwnProperty("state")) {
                    stateResponse = parameters.state;
                }
                else {
                    return tokenResponse;
                }
                tokenResponse.stateResponse = stateResponse;
                // async calls can fire iframe and login request at the same time if developer does not use the API as expected
                // incoming callback needs to be looked up to find the request type
                if (stateResponse === this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie) || stateResponse === this._silentAuthenticationState) { // loginRedirect
                    tokenResponse.requestType = Constants_1.Constants.login;
                    tokenResponse.stateMatch = true;
                    return tokenResponse;
                }
                else if (stateResponse === this._cacheStorage.getItem(Constants_1.Constants.stateAcquireToken, this.storeAuthStateInCookie)) { //acquireTokenRedirect
                    tokenResponse.requestType = Constants_1.Constants.renewToken;
                    tokenResponse.stateMatch = true;
                    return tokenResponse;
                }
                // external api requests may have many renewtoken requests for different resource
                if (!tokenResponse.stateMatch) {
                    tokenResponse.requestType = window.requestType;
                    var statesInParentContext = window.renewStates;
                    for (var i = 0; i < statesInParentContext.length; i++) {
                        if (statesInParentContext[i] === tokenResponse.stateResponse) {
                            tokenResponse.stateMatch = true;
                            break;
                        }
                    }
                }
            }
        }
        return tokenResponse;
    };
    /**
      * Extracts scope value from the state sent with the authentication request.
      * @returns {string} scope.
      * @ignore
      * @hidden
      */
    UserAgentApplication.prototype.getScopeFromState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /**
    * Extracts state value from the userState sent with the authentication request.
    * @returns {string} scope.
    * @ignore
    * @hidden
    */
    UserAgentApplication.prototype.getUserState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /**
      * Returns whether current window is in ifram for token renewal
      * @ignore
      * @hidden
      */
    UserAgentApplication.prototype.isInIframe = function () {
        return window.parent !== window;
    };
    UserAgentApplication.prototype.loginInProgress = function () {
        var pendingCallback = this._cacheStorage.getItem(Constants_1.Constants.urlHash);
        if (pendingCallback) {
            return true;
        }
        return this._loginInProgress;
    };
    UserAgentApplication.prototype.getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
        extractedUri = extractedUri.split("/")[0];
        return extractedUri;
    };
    UserAgentApplication.prototype.getScopesForEndpoint = function (endpoint) {
        // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
        if (this._unprotectedResources.length > 0) {
            for (var i = 0; i < this._unprotectedResources.length; i++) {
                if (endpoint.indexOf(this._unprotectedResources[i]) > -1) {
                    return null;
                }
            }
        }
        if (this._protectedResourceMap.size > 0) {
            for (var _i = 0, _a = Array.from(this._protectedResourceMap.keys()); _i < _a.length; _i++) {
                var key = _a[_i];
                // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                if (endpoint.indexOf(key) > -1) {
                    return this._protectedResourceMap.get(key);
                }
            }
        }
        // default resource will be clientid if nothing specified
        // App will use idtoken for calls to itself
        // check if it's staring from http or https, needs to match with app host
        if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
            if (this.getHostFromUri(endpoint) === this.getHostFromUri(this.getRedirectUri())) {
                return new Array(this.clientId);
            }
        }
        else {
            // in angular level, the url for $http interceptor call could be relative url,
            // if it's relative call, we'll treat it as app backend call.
            return new Array(this.clientId);
        }
        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };
    //These APIS are exposed for msalAngular wrapper only
    UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
        this._loginInProgress = loginInProgress;
    };
    UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
        return this._acquireTokenInProgress;
    };
    UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
        this._acquireTokenInProgress = acquireTokenInProgress;
    };
    UserAgentApplication.prototype.getLogger = function () {
        return this._logger;
    };
    tslib_1.__decorate([
        resolveTokenOnlyIfOutOfIframe
    ], UserAgentApplication.prototype, "acquireTokenSilent", null);
    return UserAgentApplication;
}());
exports.UserAgentApplication = UserAgentApplication;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var TokenResponse = /** @class */ (function () {
    function TokenResponse() {
        this.valid = false;
        this.parameters = {};
        this.stateMatch = false;
        this.stateResponse = "";
        this.requestType = "unknown";
    }
    return TokenResponse;
}());
exports.TokenResponse = TokenResponse;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var User = /** @class */ (function () {
    /**
     * @hidden
     */
    function User(displayableId, name, identityProvider, userIdentifier, idToken, sid) {
        this.displayableId = displayableId;
        this.name = name;
        this.identityProvider = identityProvider;
        this.userIdentifier = userIdentifier;
        this.idToken = idToken;
        this.sid = sid;
    }
    /**
     * @hidden
     */
    User.createUser = function (idToken, clientInfo) {
        var uid;
        var utid;
        if (!clientInfo) {
            uid = "";
            utid = "";
        }
        else {
            uid = clientInfo.uid;
            utid = clientInfo.utid;
        }
        var userIdentifier = Utils_1.Utils.base64EncodeStringUrlSafe(uid) + "." + Utils_1.Utils.base64EncodeStringUrlSafe(utid);
        return new User(idToken.preferredName, idToken.name, idToken.issuer, userIdentifier, idToken.decodedIdToken, idToken.sid);
    };
    return User;
}());
exports.User = User;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(3);
var Authority_1 = __webpack_require__(2);
var XHRClient_1 = __webpack_require__(10);
/**
 * @hidden
 */
var AadAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(AadAuthority, _super);
    function AadAuthority(authority, validateAuthority) {
        return _super.call(this, authority, validateAuthority) || this;
    }
    Object.defineProperty(AadAuthority.prototype, "AadInstanceDiscoveryEndpointUrl", {
        get: function () {
            return AadAuthority.AadInstanceDiscoveryEndpoint + "?api-version=1.0&authorization_endpoint=" + this.CanonicalAuthority + "oauth2/v2.0/authorize";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AadAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.Aad;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise which resolves to the OIDC endpoint
     * Only responds with the endpoint
     */
    AadAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        var _this = this;
        var resultPromise = new Promise(function (resolve, reject) {
            return resolve(_this.DefaultOpenIdConfigurationEndpoint);
        });
        if (!this.IsValidationEnabled) {
            return resultPromise;
        }
        var host = this.CanonicalAuthorityUrlComponents.HostNameAndPort;
        if (this.IsInTrustedHostList(host)) {
            return resultPromise;
        }
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl, "GET", true)
            .then(function (response) {
            return response.tenant_discovery_endpoint;
        });
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param {string} The host to look up
     */
    AadAuthority.prototype.IsInTrustedHostList = function (host) {
        return AadAuthority.TrustedHostList[host.toLowerCase()];
    };
    AadAuthority.AadInstanceDiscoveryEndpoint = "https://login.microsoftonline.com/common/discovery/instance";
    AadAuthority.TrustedHostList = {
        "login.windows.net": "login.windows.net",
        "login.chinacloudapi.cn": "login.chinacloudapi.cn",
        "login.cloudgovapi.us": "login.cloudgovapi.us",
        "login.microsoftonline.com": "login.microsoftonline.com",
        "login.microsoftonline.de": "login.microsoftonline.de",
        "login.microsoftonline.us": "login.microsoftonline.us"
    };
    return AadAuthority;
}(Authority_1.Authority));
exports.AadAuthority = AadAuthority;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * XHR client for JSON endpoints
 * https://www.npmjs.com/package/async-promise
 * @hidden
 */
var XhrClient = /** @class */ (function () {
    function XhrClient() {
    }
    XhrClient.prototype.sendRequestAsync = function (url, method, enableCaching) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, /*async: */ true);
            if (enableCaching) {
                // TODO: (shivb) ensure that this can be cached
                // xhr.setRequestHeader("Cache-Control", "Public");
            }
            xhr.onload = function (ev) {
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject(_this.handleError(xhr.responseText));
                }
                try {
                    var jsonResponse = JSON.parse(xhr.responseText);
                }
                catch (e) {
                    reject(_this.handleError(xhr.responseText));
                }
                resolve(jsonResponse);
            };
            xhr.onerror = function (ev) {
                reject(xhr.status);
            };
            if (method === "GET") {
                xhr.send();
            }
            else {
                throw "not implemented";
            }
        });
    };
    XhrClient.prototype.handleError = function (responseText) {
        var jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
            if (jsonResponse.error) {
                return jsonResponse.error;
            }
            else {
                throw responseText;
            }
        }
        catch (e) {
            return responseText;
        }
    };
    return XhrClient;
}());
exports.XhrClient = XhrClient;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAgentApplication_1 = __webpack_require__(6);
exports.UserAgentApplication = UserAgentApplication_1.UserAgentApplication;
var Logger_1 = __webpack_require__(4);
exports.Logger = Logger_1.Logger;
var Logger_2 = __webpack_require__(4);
exports.LogLevel = Logger_2.LogLevel;
var User_1 = __webpack_require__(8);
exports.User = User_1.User;
var Constants_1 = __webpack_require__(1);
exports.Constants = Constants_1.Constants;
var RequestInfo_1 = __webpack_require__(7);
exports.TokenResponse = RequestInfo_1.TokenResponse;
var Authority_1 = __webpack_require__(2);
exports.Authority = Authority_1.Authority;
var UserAgentApplication_2 = __webpack_require__(6);
exports.CacheResult = UserAgentApplication_2.CacheResult;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
/**
 * @hidden
 */
var AccessTokenKey = /** @class */ (function () {
    function AccessTokenKey(authority, clientId, scopes, uid, utid) {
        this.authority = authority;
        this.clientId = clientId;
        this.scopes = scopes;
        this.userIdentifier = Utils_1.Utils.base64EncodeStringUrlSafe(uid) + "." + Utils_1.Utils.base64EncodeStringUrlSafe(utid);
    }
    return AccessTokenKey;
}());
exports.AccessTokenKey = AccessTokenKey;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenValue = /** @class */ (function () {
    function AccessTokenValue(accessToken, idToken, expiresIn, clientInfo) {
        this.accessToken = accessToken;
        this.idToken = idToken;
        this.expiresIn = expiresIn;
        this.clientInfo = clientInfo;
    }
    return AccessTokenValue;
}());
exports.AccessTokenValue = AccessTokenValue;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
/**
 * @hidden
 */
var AuthenticationRequestParameters = /** @class */ (function () {
    function AuthenticationRequestParameters(authority, clientId, scope, responseType, redirectUri, state) {
        this.authorityInstance = authority;
        this.clientId = clientId;
        this.scopes = scope;
        this.responseType = responseType;
        this.redirectUri = redirectUri;
        // randomly generated values
        this.correlationId = Utils_1.Utils.createNewGuid();
        this.state = state && !Utils_1.Utils.isEmpty(state) ? Utils_1.Utils.createNewGuid() + "|" + state : Utils_1.Utils.createNewGuid();
        this.nonce = Utils_1.Utils.createNewGuid();
        // telemetry information
        this.xClientSku = "MSAL.JS";
        this.xClientVer = Utils_1.Utils.getLibraryVersion();
    }
    Object.defineProperty(AuthenticationRequestParameters.prototype, "authority", {
        get: function () {
            return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationRequestParameters.prototype.createNavigateUrl = function (scopes) {
        var str = this.createNavigationUrlString(scopes);
        var authEndpoint = this.authorityInstance.AuthorizationEndpoint;
        // if the endpoint already has queryparams, lets add to it, otherwise add the first one
        if (authEndpoint.indexOf("?") < 0) {
            authEndpoint += "?";
        }
        else {
            authEndpoint += "&";
        }
        var requestUrl = "" + authEndpoint + str.join("&");
        return requestUrl;
    };
    AuthenticationRequestParameters.prototype.createNavigationUrlString = function (scopes) {
        if (!scopes) {
            scopes = [this.clientId];
        }
        if (scopes.indexOf(this.clientId) === -1) {
            scopes.push(this.clientId);
        }
        var str = [];
        str.push("response_type=" + this.responseType);
        this.translateclientIdUsedInScope(scopes);
        str.push("scope=" + encodeURIComponent(this.parseScope(scopes)));
        str.push("client_id=" + encodeURIComponent(this.clientId));
        str.push("redirect_uri=" + encodeURIComponent(this.redirectUri));
        str.push("state=" + encodeURIComponent(this.state));
        str.push("nonce=" + encodeURIComponent(this.nonce));
        str.push("client_info=1");
        str.push("x-client-SKU=" + this.xClientSku);
        str.push("x-client-Ver=" + this.xClientVer);
        if (this.extraQueryParameters) {
            str.push(this.extraQueryParameters);
        }
        str.push("client-request-id=" + encodeURIComponent(this.correlationId));
        return str;
    };
    AuthenticationRequestParameters.prototype.translateclientIdUsedInScope = function (scopes) {
        var clientIdIndex = scopes.indexOf(this.clientId);
        if (clientIdIndex >= 0) {
            scopes.splice(clientIdIndex, 1);
            if (scopes.indexOf("openid") === -1) {
                scopes.push("openid");
            }
            if (scopes.indexOf("profile") === -1) {
                scopes.push("profile");
            }
        }
    };
    AuthenticationRequestParameters.prototype.parseScope = function (scopes) {
        var scopeList = "";
        if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
                scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
        }
        return scopeList;
    };
    return AuthenticationRequestParameters;
}());
exports.AuthenticationRequestParameters = AuthenticationRequestParameters;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
/**
 * @hidden
 */
var ClientInfo = /** @class */ (function () {
    function ClientInfo(rawClientInfo) {
        if (!rawClientInfo || Utils_1.Utils.isEmpty(rawClientInfo)) {
            this.uid = "";
            this.utid = "";
            return;
        }
        try {
            var decodedClientInfo = Utils_1.Utils.base64DecodeStringUrlSafe(rawClientInfo);
            var clientInfo = JSON.parse(decodedClientInfo);
            if (clientInfo) {
                if (clientInfo.hasOwnProperty("uid")) {
                    this.uid = clientInfo.uid;
                }
                if (clientInfo.hasOwnProperty("utid")) {
                    this.utid = clientInfo.utid;
                }
            }
        }
        catch (e) {
            throw new Error(e);
        }
    }
    Object.defineProperty(ClientInfo.prototype, "uid", {
        get: function () {
            return this._uid ? this._uid : "";
        },
        set: function (uid) {
            this._uid = uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientInfo.prototype, "utid", {
        get: function () {
            return this._utid ? this._utid : "";
        },
        set: function (utid) {
            this._utid = utid;
        },
        enumerable: true,
        configurable: true
    });
    return ClientInfo;
}());
exports.ClientInfo = ClientInfo;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
/**
 * @hidden
 */
var IdToken = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    function IdToken(rawIdToken) {
        if (Utils_1.Utils.isEmpty(rawIdToken)) {
            throw new Error("null or empty raw idtoken");
        }
        try {
            this.rawIdToken = rawIdToken;
            this.decodedIdToken = Utils_1.Utils.extractIdToken(rawIdToken);
            if (this.decodedIdToken) {
                if (this.decodedIdToken.hasOwnProperty("iss")) {
                    this.issuer = this.decodedIdToken["iss"];
                }
                if (this.decodedIdToken.hasOwnProperty("oid")) {
                    this.objectId = this.decodedIdToken["oid"];
                }
                if (this.decodedIdToken.hasOwnProperty("sub")) {
                    this.subject = this.decodedIdToken["sub"];
                }
                if (this.decodedIdToken.hasOwnProperty("tid")) {
                    this.tenantId = this.decodedIdToken["tid"];
                }
                if (this.decodedIdToken.hasOwnProperty("ver")) {
                    this.version = this.decodedIdToken["ver"];
                }
                if (this.decodedIdToken.hasOwnProperty("preferred_username")) {
                    this.preferredName = this.decodedIdToken["preferred_username"];
                }
                if (this.decodedIdToken.hasOwnProperty("name")) {
                    this.name = this.decodedIdToken["name"];
                }
                if (this.decodedIdToken.hasOwnProperty("nonce")) {
                    this.nonce = this.decodedIdToken["nonce"];
                }
                if (this.decodedIdToken.hasOwnProperty("exp")) {
                    this.expiration = this.decodedIdToken["exp"];
                }
                if (this.decodedIdToken.hasOwnProperty("home_oid")) {
                    this.homeObjectId = this.decodedIdToken["home_oid"];
                }
                if (this.decodedIdToken.hasOwnProperty("sid")) {
                    this.sid = this.decodedIdToken["sid"];
                }
                /* tslint:enable:no-string-literal */
            }
        }
        catch (e) {
            throw new Error("Failed to parse the returned id token");
        }
    }
    return IdToken;
}());
exports.IdToken = IdToken;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(1);
var AccessTokenCacheItem_1 = __webpack_require__(19);
var Constants_2 = __webpack_require__(1);
/**
 * @hidden
 */
var Storage = /** @class */ (function () {
    function Storage(cacheLocation) {
        if (Storage.instance) {
            return Storage.instance;
        }
        this.cacheLocation = cacheLocation;
        this.localStorageSupported = typeof window[this.cacheLocation] !== "undefined" && window[this.cacheLocation] != null;
        this.sessionStorageSupported = typeof window[cacheLocation] !== "undefined" && window[cacheLocation] != null;
        Storage.instance = this;
        if (!this.localStorageSupported && !this.sessionStorageSupported) {
            throw new Error("localStorage and sessionStorage not supported");
        }
        return Storage.instance;
    }
    // add value to storage
    Storage.prototype.setItem = function (key, value, enableCookieStorage) {
        if (window[this.cacheLocation]) {
            window[this.cacheLocation].setItem(key, value);
        }
        if (enableCookieStorage) {
            this.setItemCookie(key, value);
        }
    };
    // get one item by key from storage
    Storage.prototype.getItem = function (key, enableCookieStorage) {
        if (enableCookieStorage && this.getItemCookie(key)) {
            return this.getItemCookie(key);
        }
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].getItem(key);
        }
        return null;
    };
    // remove value from storage
    Storage.prototype.removeItem = function (key) {
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].removeItem(key);
        }
    };
    // clear storage (remove all items from it)
    Storage.prototype.clear = function () {
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].clear();
        }
    };
    Storage.prototype.getAllAccessTokens = function (clientId, userIdentifier) {
        var results = [];
        var accessTokenCacheItem;
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.match(clientId) && key.match(userIdentifier)) {
                        var value = this.getItem(key);
                        if (value) {
                            accessTokenCacheItem = new AccessTokenCacheItem_1.AccessTokenCacheItem(JSON.parse(key), JSON.parse(value));
                            results.push(accessTokenCacheItem);
                        }
                    }
                }
            }
        }
        return results;
    };
    Storage.prototype.removeAcquireTokenEntries = function () {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.indexOf(Constants_1.Constants.authority) !== -1 || key.indexOf(Constants_1.Constants.acquireTokenUser) !== -1) {
                        var value = storage[key];
                        var state = value.split(Constants_1.Constants.resourceDelimeter).slice(-1)[0];
                        var renewStatus = storage[Constants_1.Constants.renewStatus + state];
                        if (!renewStatus || renewStatus !== Constants_1.Constants.tokenRenewStatusInProgress) {
                            this.removeItem(key);
                            this.setItemCookie(key, "", -1);
                        }
                    }
                    if (key.indexOf(Constants_1.Constants.renewStatus) !== -1) {
                        var value = storage[key];
                        if (value !== Constants_1.Constants.tokenRenewStatusInProgress) {
                            this.removeItem(key);
                        }
                    }
                }
            }
        }
        this.clearCookie();
    };
    Storage.prototype.resetCacheItems = function () {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.indexOf(Constants_1.Constants.msal) !== -1) {
                        this.setItem(key, "");
                    }
                    if (key.indexOf(Constants_1.Constants.renewStatus) !== -1) {
                        this.removeItem(key);
                    }
                }
            }
        }
    };
    Storage.prototype.setItemCookie = function (cName, cValue, expires) {
        var cookieStr = cName + "=" + cValue + ";";
        if (expires) {
            var expireTime = this.setExpirationCookie(expires);
            cookieStr += "expires=" + expireTime + ";";
        }
        document.cookie = cookieStr;
    };
    Storage.prototype.getItemCookie = function (cName) {
        var name = cName + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    Storage.prototype.setExpirationCookie = function (cookieLife) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLife * 24 * 60 * 60 * 1000);
        return expr.toUTCString();
    };
    Storage.prototype.clearCookie = function () {
        this.setItemCookie(Constants_1.Constants.nonceIdToken, "", -1);
        this.setItemCookie(Constants_1.Constants.stateLogin, "", -1);
        this.setItemCookie(Constants_1.Constants.loginRequest, "", -1);
        this.setItemCookie(Constants_1.Constants.stateAcquireToken, "", -1);
    };
    /**
     * Create acquireTokenUserKey to cache user object
     */
    Storage.generateAcquireTokenUserKey = function (userId, state) {
        return Constants_2.CacheKeys.ACQUIRE_TOKEN_USER + Constants_1.Constants.resourceDelimeter +
            ("" + userId) + Constants_1.Constants.resourceDelimeter + ("" + state);
    };
    /**
     * Create authorityKey to cache authority
     */
    Storage.generateAuthorityKey = function (state) {
        return Constants_2.CacheKeys.AUTHORITY + Constants_1.Constants.resourceDelimeter + ("" + state);
    };
    return Storage;
}());
exports.Storage = Storage;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenCacheItem = /** @class */ (function () {
    function AccessTokenCacheItem(key, value) {
        this.key = key;
        this.value = value;
    }
    return AccessTokenCacheItem;
}());
exports.AccessTokenCacheItem = AccessTokenCacheItem;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var Utils_1 = __webpack_require__(0);
var AadAuthority_1 = __webpack_require__(9);
var B2cAuthority_1 = __webpack_require__(21);
var Authority_1 = __webpack_require__(2);
var ErrorMessage_1 = __webpack_require__(5);
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
    * Parse the url and determine the type of authority
    */
    AuthorityFactory.DetectAuthorityFromUrl = function (authorityUrl) {
        authorityUrl = Utils_1.Utils.CanonicalizeUri(authorityUrl);
        var components = Utils_1.Utils.GetUrlComponents(authorityUrl);
        var pathSegments = components.PathSegments;
        switch (pathSegments[0]) {
            case "tfp":
                return Authority_1.AuthorityType.B2C;
            case "adfs":
                return Authority_1.AuthorityType.Adfs;
            default:
                return Authority_1.AuthorityType.Aad;
        }
    };
    /**
    * Create an authority object of the correct type based on the url
    * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
    */
    AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority) {
        if (Utils_1.Utils.isEmpty(authorityUrl)) {
            return null;
        }
        var type = AuthorityFactory.DetectAuthorityFromUrl(authorityUrl);
        // Depending on above detection, create the right type.
        switch (type) {
            case Authority_1.AuthorityType.B2C:
                return new B2cAuthority_1.B2cAuthority(authorityUrl, validateAuthority);
            case Authority_1.AuthorityType.Aad:
                return new AadAuthority_1.AadAuthority(authorityUrl, validateAuthority);
            default:
                throw ErrorMessage_1.ErrorMessage.invalidAuthorityType;
        }
    };
    return AuthorityFactory;
}());
exports.AuthorityFactory = AuthorityFactory;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(3);
var AadAuthority_1 = __webpack_require__(9);
var Authority_1 = __webpack_require__(2);
var ErrorMessage_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(0);
/**
 * @hidden
 */
var B2cAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(B2cAuthority, _super);
    function B2cAuthority(authority, validateAuthority) {
        var _this = _super.call(this, authority, validateAuthority) || this;
        var urlComponents = Utils_1.Utils.GetUrlComponents(authority);
        var pathSegments = urlComponents.PathSegments;
        if (pathSegments.length < 3) {
            throw ErrorMessage_1.ErrorMessage.b2cAuthorityUriInvalidPath;
        }
        _this.CanonicalAuthority = "https://" + urlComponents.HostNameAndPort + "/" + pathSegments[0] + "/" + pathSegments[1] + "/" + pathSegments[2] + "/";
        return _this;
    }
    Object.defineProperty(B2cAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.B2C;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise with the TenantDiscoveryEndpoint
     */
    B2cAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        var _this = this;
        var resultPromise = new Promise(function (resolve, reject) {
            return resolve(_this.DefaultOpenIdConfigurationEndpoint);
        });
        if (!this.IsValidationEnabled) {
            return resultPromise;
        }
        if (this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
            return resultPromise;
        }
        return new Promise(function (resolve, reject) {
            return reject(ErrorMessage_1.ErrorMessage.unsupportedAuthorityValidation);
        });
    };
    return B2cAuthority;
}(AadAuthority_1.AadAuthority));
exports.B2cAuthority = B2cAuthority;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01zYWwvLi9zcmMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRob3JpdHkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9FcnJvck1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Vc2VyQWdlbnRBcHBsaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1JlcXVlc3RJbmZvLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvVXNlci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FhZEF1dGhvcml0eS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1hIUkNsaWVudC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjZXNzVG9rZW5LZXkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BY2Nlc3NUb2tlblZhbHVlLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQXV0aGVudGljYXRpb25SZXF1ZXN0UGFyYW1ldGVycy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0NsaWVudEluZm8udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9JZFRva2VuLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FjY2Vzc1Rva2VuQ2FjaGVJdGVtLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQXV0aG9yaXR5RmFjdG9yeS50cyIsIndl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QyxLQUFLLENBQUM7d0JBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFBQyxNQUFNO29CQUM5QixLQUFLLENBQUM7d0JBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztvQkFDeEQsS0FBSyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pELEtBQUssQ0FBQzt3QkFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pEO3dCQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFBQyxTQUFTO3lCQUFFO3dCQUM1RyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxDQUFDLEtB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QyxNQUFHLENBQUM7O0lBQ2pJLENBQUM7SUFFRCxzQkFBVyx1Q0FBYTthQUF4QjtZQUNFLE9BQU8seUJBQWEsQ0FBQyxHQUFHLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRztJQUNJLDBEQUFtQyxHQUExQztRQUFBLGlCQWNDO1FBYkMsSUFBTSxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN4RCxjQUFPLENBQUMsS0FBSSxDQUFDLGtDQUFrQyxDQUFDO1FBQWhELENBQWdELENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2xGLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBUyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3pDLGFBQU0sQ0FBQywyQkFBWSxDQUFDLDhCQUE4QixDQUFDO1FBQW5ELENBQW1ELENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLENBbkNpQywyQkFBWSxHQW1DN0M7QUFuQ1ksb0NBQVkiLCJmaWxlIjoibXNhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiTXNhbFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNc2FsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk1zYWxcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuL0lVcmlcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuXG4gIC8vI3JlZ2lvbiBHZW5lcmFsIFV0aWxcblxuICAvKipcbiAgICogVXRpbHMgZnVuY3Rpb24gdG8gY29tcGFyZSB0d28gVXNlciBvYmplY3RzIC0gdXNlZCB0byBjaGVjayBpZiB0aGUgc2FtZSB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKlxuICAgKiBAcGFyYW0gdTE6IFVzZXIgb2JqZWN0XG4gICAqIEBwYXJhbSB1MjogVXNlciBvYmplY3RcbiAgICovXG4gIC8vIFRPRE86IENoYW5nZSB0aGUgbmFtZSBvZiB0aGlzIHRvIGNvbXBhcmVVc2VycyBvciBjb21wYXJlQWNjb3VudHNcbiAgc3RhdGljIGNvbXBhcmVPYmplY3RzKHUxOiBVc2VyLCB1MjogVXNlcik6IGJvb2xlYW4ge1xuICAgaWYgKCF1MSB8fCAhdTIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgaWYgKHUxLnVzZXJJZGVudGlmaWVyICYmIHUyLnVzZXJJZGVudGlmaWVyKSB7XG4gICAgICBpZiAodTEudXNlcklkZW50aWZpZXIgPT09IHUyLnVzZXJJZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGVjaW1hbCB0byBIZXhcbiAgICpcbiAgICogQHBhcmFtIG51bVxuICAgKi9cbiAgc3RhdGljIGRlY2ltYWxUb0hleChudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgdmFyIGhleDogc3RyaW5nID0gbnVtLnRvU3RyaW5nKDE2KTtcbiAgICB3aGlsZSAoaGV4Lmxlbmd0aCA8IDIpIHtcbiAgICAgIGhleCA9IFwiMFwiICsgaGV4O1xuICAgIH1cbiAgICByZXR1cm4gaGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIE1TQUwgSlMgTGlicmFyeSBWZXJzaW9uXG4gICAqL1xuICBzdGF0aWMgZ2V0TGlicmFyeVZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCIwLjIuNFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgcmFuZG9tIEdVSUQgLSB1c2VkIHRvIHBvcHVsYXRlIHN0YXRlP1xuICAgKiBAcmV0dXJucyBzdHJpbmcgKEdVSUQpXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlTmV3R3VpZCgpOiBzdHJpbmcge1xuICAgIC8vIFJGQzQxMjI6IFRoZSB2ZXJzaW9uIDQgVVVJRCBpcyBtZWFudCBmb3IgZ2VuZXJhdGluZyBVVUlEcyBmcm9tIHRydWx5LXJhbmRvbSBvclxuICAgIC8vIHBzZXVkby1yYW5kb20gbnVtYmVycy5cbiAgICAvLyBUaGUgYWxnb3JpdGhtIGlzIGFzIGZvbGxvd3M6XG4gICAgLy8gICAgIFNldCB0aGUgdHdvIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoYml0cyA2IGFuZCA3KSBvZiB0aGVcbiAgICAvLyAgICAgICAgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZCB0byB6ZXJvIGFuZCBvbmUsIHJlc3BlY3RpdmVseS5cbiAgICAvLyAgICAgU2V0IHRoZSBmb3VyIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoYml0cyAxMiB0aHJvdWdoIDE1KSBvZiB0aGVcbiAgICAvLyAgICAgICAgdGltZV9oaV9hbmRfdmVyc2lvbiBmaWVsZCB0byB0aGUgNC1iaXQgdmVyc2lvbiBudW1iZXIgZnJvbVxuICAgIC8vICAgICAgICBTZWN0aW9uIDQuMS4zLiBWZXJzaW9uNFxuICAgIC8vICAgICBTZXQgYWxsIHRoZSBvdGhlciBiaXRzIHRvIHJhbmRvbWx5IChvciBwc2V1ZG8tcmFuZG9tbHkpIGNob3NlblxuICAgIC8vICAgICB2YWx1ZXMuXG4gICAgLy8gVVVJRCAgICAgICAgICAgICAgICAgICA9IHRpbWUtbG93IFwiLVwiIHRpbWUtbWlkIFwiLVwidGltZS1oaWdoLWFuZC12ZXJzaW9uIFwiLVwiY2xvY2stc2VxLXJlc2VydmVkIGFuZCBsb3coMmhleE9jdGV0KVwiLVwiIG5vZGVcbiAgICAvLyB0aW1lLWxvdyAgICAgICAgICAgICAgID0gNGhleE9jdGV0XG4gICAgLy8gdGltZS1taWQgICAgICAgICAgICAgICA9IDJoZXhPY3RldFxuICAgIC8vIHRpbWUtaGlnaC1hbmQtdmVyc2lvbiAgPSAyaGV4T2N0ZXRcbiAgICAvLyBjbG9jay1zZXEtYW5kLXJlc2VydmVkID0gaGV4T2N0ZXQ6XG4gICAgLy8gY2xvY2stc2VxLWxvdyAgICAgICAgICA9IGhleE9jdGV0XG4gICAgLy8gbm9kZSAgICAgICAgICAgICAgICAgICA9IDZoZXhPY3RldFxuICAgIC8vIEZvcm1hdDogeHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XG4gICAgLy8geSBjb3VsZCBiZSAxMDAwLCAxMDAxLCAxMDEwLCAxMDExIHNpbmNlIG1vc3Qgc2lnbmlmaWNhbnQgdHdvIGJpdHMgbmVlZHMgdG8gYmUgMTBcbiAgICAvLyB5IHZhbHVlcyBhcmUgOCwgOSwgQSwgQlxuXG4gICAgY29uc3QgY3J5cHRvT2JqOiBDcnlwdG8gPSB3aW5kb3cuY3J5cHRvOyAvLyBmb3IgSUUgMTFcbiAgICBpZiAoY3J5cHRvT2JqICYmIGNyeXB0b09iai5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGJ1ZmZlcjogVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICAgIGNyeXB0b09iai5nZXRSYW5kb21WYWx1ZXMoYnVmZmVyKTtcblxuICAgICAgLy9idWZmZXJbNl0gYW5kIGJ1ZmZlcls3XSByZXByZXNlbnRzIHRoZSB0aW1lX2hpX2FuZF92ZXJzaW9uIGZpZWxkLiBXZSB3aWxsIHNldCB0aGUgZm91ciBtb3N0IHNpZ25pZmljYW50IGJpdHMgKDQgdGhyb3VnaCA3KSBvZiBidWZmZXJbNl0gdG8gcmVwcmVzZW50IGRlY2ltYWwgbnVtYmVyIDQgKFVVSUQgdmVyc2lvbiBudW1iZXIpLlxuICAgICAgYnVmZmVyWzZdIHw9IDB4NDA7IC8vYnVmZmVyWzZdIHwgMDEwMDAwMDAgd2lsbCBzZXQgdGhlIDYgYml0IHRvIDEuXG4gICAgICBidWZmZXJbNl0gJj0gMHg0ZjsgLy9idWZmZXJbNl0gJiAwMTAwMTExMSB3aWxsIHNldCB0aGUgNCwgNSwgYW5kIDcgYml0IHRvIDAgc3VjaCB0aGF0IGJpdHMgNC03ID09IDAxMDAgPSBcIjRcIi5cblxuICAgICAgLy9idWZmZXJbOF0gcmVwcmVzZW50cyB0aGUgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZCBmaWVsZC4gV2Ugd2lsbCBzZXQgdGhlIHR3byBtb3N0IHNpZ25pZmljYW50IGJpdHMgKDYgYW5kIDcpIG9mIHRoZSBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIHRvIHplcm8gYW5kIG9uZSwgcmVzcGVjdGl2ZWx5LlxuICAgICAgYnVmZmVyWzhdIHw9IDB4ODA7IC8vYnVmZmVyWzhdIHwgMTAwMDAwMDAgd2lsbCBzZXQgdGhlIDcgYml0IHRvIDEuXG4gICAgICBidWZmZXJbOF0gJj0gMHhiZjsgLy9idWZmZXJbOF0gJiAxMDExMTExMSB3aWxsIHNldCB0aGUgNiBiaXQgdG8gMC5cblxuICAgICAgcmV0dXJuIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMF0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxXSlcbiAgICAgICAgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzJdKSArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbM10pXG4gICAgICAgICsgXCItXCIgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzRdKSArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNV0pXG4gICAgICAgICsgXCItXCIgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzZdKSArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbN10pXG4gICAgICAgICsgXCItXCIgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzhdKSArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbOV0pXG4gICAgICAgICsgXCItXCIgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzEwXSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzExXSlcbiAgICAgICAgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzEyXSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzEzXSlcbiAgICAgICAgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzE0XSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzE1XSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgZ3VpZEhvbGRlcjogc3RyaW5nID0gXCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIjtcbiAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XG4gICAgICBsZXQgcjogbnVtYmVyID0gMDtcbiAgICAgIGxldCBndWlkUmVzcG9uc2U6IHN0cmluZyA9IFwiXCI7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgICAgICBpZiAoZ3VpZEhvbGRlcltpXSAhPT0gXCItXCIgJiYgZ3VpZEhvbGRlcltpXSAhPT0gXCI0XCIpIHtcbiAgICAgICAgICAvLyBlYWNoIHggYW5kIHkgbmVlZHMgdG8gYmUgcmFuZG9tXG4gICAgICAgICAgciA9IE1hdGgucmFuZG9tKCkgICogMTYgfCAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChndWlkSG9sZGVyW2ldID09PSBcInhcIikge1xuICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBoZXhbcl07XG4gICAgICAgIH0gZWxzZSBpZiAoZ3VpZEhvbGRlcltpXSA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAvLyBjbG9jay1zZXEtYW5kLXJlc2VydmVkIGZpcnN0IGhleCBpcyBmaWx0ZXJlZCBhbmQgcmVtYWluaW5nIGhleCB2YWx1ZXMgYXJlIHJhbmRvbVxuICAgICAgICAgIHIgJj0gMHgzOyAvLyBiaXQgYW5kIHdpdGggMDAxMSB0byBzZXQgcG9zIDIgdG8gemVybyA/MD8/XG4gICAgICAgICAgciB8PSAweDg7IC8vIHNldCBwb3MgMyB0byAxIGFzIDE/Pz9cbiAgICAgICAgICBndWlkUmVzcG9uc2UgKz0gaGV4W3JdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBndWlkSG9sZGVyW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZ3VpZFJlc3BvbnNlO1xuICAgIH1cbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBUaW1lXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGltZSBpbiBzZWNvbmRzIGZvciBleHBpcmF0aW9uIGJhc2VkIG9uIHN0cmluZyB2YWx1ZSBwYXNzZWQgaW4uXG4gICAqXG4gICAqIEBwYXJhbSBleHBpcmVzXG4gICAqL1xuICBzdGF0aWMgZXhwaXJlc0luKGV4cGlyZXM6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gaWYgQUFEIGRpZCBub3Qgc2VuZCBcImV4cGlyZXNfaW5cIiBwcm9wZXJ0eSwgdXNlIGRlZmF1bHQgZXhwaXJhdGlvbiBvZiAzNTk5IHNlY29uZHMsIGZvciBzb21lIHJlYXNvbiBBQUQgc2VuZHMgMzU5OSBhcyBcImV4cGlyZXNfaW5cIiB2YWx1ZSBpbnN0ZWFkIG9mIDM2MDBcbiAgICAgaWYgKCFleHBpcmVzKSB7XG4gICAgICAgICBleHBpcmVzID0gXCIzNTk5XCI7XG4gICAgICB9XG4gICAgcmV0dXJuIHRoaXMubm93KCkgKyBwYXJzZUludChleHBpcmVzLCAxMCk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIHRoZSBjdXJyZW50IHRpbWVcbiAgICovXG4gIHN0YXRpYyBub3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAuMCk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gU3RyaW5nIE9wc1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHN0cmluZyBpcyBlbXB0eVxuICAgKlxuICAgKiBAcGFyYW0gc3RyXG4gICAqL1xuICBzdGF0aWMgaXNFbXB0eShzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhc3RyIHx8IDAgPT09IHN0ci5sZW5ndGgpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIFRva2VuIFByb2Nlc3NpbmcgKEV4dHJhY3QgdG8gVG9rZW5Qcm9jZXNzaW5nLnRzKVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgYSBKV1RcbiAgICpcbiAgICogQHBhcmFtIGp3dFRva2VuXG4gICAqL1xuICBzdGF0aWMgZGVjb2RlSnd0KGp3dFRva2VuOiBzdHJpbmcpOiBhbnkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoand0VG9rZW4pKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgaWRUb2tlblBhcnRzUmVnZXggPSAvXihbXlxcLlxcc10qKVxcLihbXlxcLlxcc10rKVxcLihbXlxcLlxcc10qKSQvO1xuICAgIGNvbnN0IG1hdGNoZXMgPSBpZFRva2VuUGFydHNSZWdleC5leGVjKGp3dFRva2VuKTtcbiAgICBpZiAoIW1hdGNoZXMgfHwgbWF0Y2hlcy5sZW5ndGggPCA0KSB7XG4gICAgICAvL3RoaXMuX3JlcXVlc3RDb250ZXh0LmxvZ2dlci53YXJuKFwiVGhlIHJldHVybmVkIGlkX3Rva2VuIGlzIG5vdCBwYXJzZWFibGUuXCIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNyYWNrZWRUb2tlbiA9IHtcbiAgICAgIGhlYWRlcjogbWF0Y2hlc1sxXSxcbiAgICAgIEpXU1BheWxvYWQ6IG1hdGNoZXNbMl0sXG4gICAgICBKV1NTaWc6IG1hdGNoZXNbM11cbiAgICB9O1xuICAgIHJldHVybiBjcmFja2VkVG9rZW47XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdCBJZFRva2VuIGJ5IGRlY29kaW5nIHRoZSBSQVdJZFRva2VuXG4gICAqXG4gICAqIEBwYXJhbSBlbmNvZGVkSWRUb2tlblxuICAgKi9cbiAgc3RhdGljIGV4dHJhY3RJZFRva2VuKGVuY29kZWRJZFRva2VuOiBzdHJpbmcpOiBhbnkge1xuICAgIC8vIGlkIHRva2VuIHdpbGwgYmUgZGVjb2RlZCB0byBnZXQgdGhlIHVzZXJuYW1lXG4gICAgY29uc3QgZGVjb2RlZFRva2VuID0gdGhpcy5kZWNvZGVKd3QoZW5jb2RlZElkVG9rZW4pO1xuICAgIGlmICghZGVjb2RlZFRva2VuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGJhc2U2NElkVG9rZW4gPSBkZWNvZGVkVG9rZW4uSldTUGF5bG9hZDtcbiAgICAgIGNvbnN0IGJhc2U2NERlY29kZWQgPSB0aGlzLmJhc2U2NERlY29kZVN0cmluZ1VybFNhZmUoYmFzZTY0SWRUb2tlbik7XG4gICAgICBpZiAoIWJhc2U2NERlY29kZWQpIHtcbiAgICAgICAgLy90aGlzLl9yZXF1ZXN0Q29udGV4dC5sb2dnZXIuaW5mbyhcIlRoZSByZXR1cm5lZCBpZF90b2tlbiBjb3VsZCBub3QgYmUgYmFzZTY0IHVybCBzYWZlIGRlY29kZWQuXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIEVDTUEgc2NyaXB0IGhhcyBKU09OIGJ1aWx0LWluIHN1cHBvcnRcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGJhc2U2NERlY29kZWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy90aGlzLl9yZXF1ZXN0Q29udGV4dC5sb2dnZXIuZXJyb3IoXCJUaGUgcmV0dXJuZWQgaWRfdG9rZW4gY291bGQgbm90IGJlIGRlY29kZWRcIiArIGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gRW5jb2RlIGFuZCBEZWNvZGVcblxuICAvKipcbiAgICogZW5jb2Rpbmcgc3RyaW5nIHRvIGJhc2U2NCAtIHBsYXRmb3JtIHNwZWNpZmljIGNoZWNrXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dFxuICAgKi9cbiAgc3RhdGljIGJhc2U2NEVuY29kZVN0cmluZ1VybFNhZmUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gaHRtbDUgc2hvdWxkIHN1cHBvcnQgYXRvYiBmdW5jdGlvbiBmb3IgZGVjb2RpbmdcbiAgICBpZiAod2luZG93LmJ0b2EpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuYnRvYShpbnB1dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlKGlucHV0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZGVjb2RpbmcgYmFzZTY0IHRva2VuIC0gcGxhdGZvcm0gc3BlY2lmaWMgY2hlY2tcbiAgICpcbiAgICogQHBhcmFtIGJhc2U2NElkVG9rZW5cbiAgICovXG4gIHN0YXRpYyBiYXNlNjREZWNvZGVTdHJpbmdVcmxTYWZlKGJhc2U2NElkVG9rZW46IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gaHRtbDUgc2hvdWxkIHN1cHBvcnQgYXRvYiBmdW5jdGlvbiBmb3IgZGVjb2RpbmdcbiAgICBiYXNlNjRJZFRva2VuID0gYmFzZTY0SWRUb2tlbi5yZXBsYWNlKC8tL2csIFwiK1wiKS5yZXBsYWNlKC9fL2csIFwiL1wiKTtcbiAgICBpZiAod2luZG93LmF0b2IpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVVUklDb21wb25lbnQod2luZG93LmF0b2IoYmFzZTY0SWRUb2tlbikpKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmRlY29kZShiYXNlNjRJZFRva2VuKSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBiYXNlNjQgZW5jb2RlIGEgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dFxuICAgKi9cbiAgLy8gVE9ETzogUmVuYW1lIHRvIHNwZWNpZnkgdHlwZSBvZiBlbmNvZGluZ1xuICBzdGF0aWMgZW5jb2RlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGtleVN0cjogc3RyaW5nID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO1xuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuICAgIGxldCBjaHIxOiBudW1iZXIsIGNocjI6IG51bWJlciwgY2hyMzogbnVtYmVyLCBlbmMxOiBudW1iZXIsIGVuYzI6IG51bWJlciwgZW5jMzogbnVtYmVyLCBlbmM0OiBudW1iZXI7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgaW5wdXQgPSB0aGlzLnV0ZjhFbmNvZGUoaW5wdXQpO1xuXG4gICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcbiAgICAgIGNocjEgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICBjaHIyID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuICAgICAgY2hyMyA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcblxuICAgICAgZW5jMSA9IGNocjEgPj4gMjtcbiAgICAgIGVuYzIgPSAoKGNocjEgJiAzKSA8PCA0KSB8IChjaHIyID4+IDQpO1xuICAgICAgZW5jMyA9ICgoY2hyMiAmIDE1KSA8PCAyKSB8IChjaHIzID4+IDYpO1xuICAgICAgZW5jNCA9IGNocjMgJiA2MztcblxuICAgICAgaWYgKGlzTmFOKGNocjIpKSB7XG4gICAgICAgIGVuYzMgPSBlbmM0ID0gNjQ7XG4gICAgICB9IGVsc2UgaWYgKGlzTmFOKGNocjMpKSB7XG4gICAgICAgIGVuYzQgPSA2NDtcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gb3V0cHV0ICsga2V5U3RyLmNoYXJBdChlbmMxKSArIGtleVN0ci5jaGFyQXQoZW5jMikgKyBrZXlTdHIuY2hhckF0KGVuYzMpICsga2V5U3RyLmNoYXJBdChlbmM0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0LnJlcGxhY2UoL1xcKy9nLCBcIi1cIikucmVwbGFjZSgvXFwvL2csIFwiX1wiKS5yZXBsYWNlKC89KyQvLCBcIlwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1dGY4IGVuY29kZSBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gaW5wdXRcbiAgICovXG4gIHN0YXRpYyB1dGY4RW5jb2RlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvXFxyXFxuL2csIFwiXFxuXCIpO1xuICAgIHZhciB1dGZ0ZXh0ID0gXCJcIjtcblxuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgaW5wdXQubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBjID0gaW5wdXQuY2hhckNvZGVBdChuKTtcblxuICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHV0ZnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogZGVjb2RlIGEgYmFzZTY0IHRva2VuIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gYmFzZTY0SWRUb2tlblxuICAgKi9cbiAgLy8gVE9ETzogUmVuYW1lIHRvIHNwZWNpZnkgdHlwZSBvZiBlbmNvZGluZ1xuICBzdGF0aWMgZGVjb2RlKGJhc2U2NElkVG9rZW46IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdmFyIGNvZGVzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO1xuICAgIGJhc2U2NElkVG9rZW4gPSBTdHJpbmcoYmFzZTY0SWRUb2tlbikucmVwbGFjZSgvPSskLywgXCJcIik7XG4gICAgdmFyIGxlbmd0aCA9IGJhc2U2NElkVG9rZW4ubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggJSA0ID09PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdG9rZW4gdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO1xuICAgIH1cbiAgICBsZXQgaDE6IG51bWJlciwgaDI6IG51bWJlciwgaDM6IG51bWJlciwgaDQ6IG51bWJlciwgYml0czogbnVtYmVyLCBjMTogbnVtYmVyLCBjMjogbnVtYmVyLCBjMzogbnVtYmVyLCBkZWNvZGVkID0gXCJcIjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAvL0V2ZXJ5IDQgYmFzZTY0IGVuY29kZWQgY2hhcmFjdGVyIHdpbGwgYmUgY29udmVydGVkIHRvIDMgYnl0ZSBzdHJpbmcsIHdoaWNoIGlzIDI0IGJpdHNcbiAgICAgIC8vIHRoZW4gNiBiaXRzIHBlciBiYXNlNjQgZW5jb2RlZCBjaGFyYWN0ZXJcbiAgICAgIGgxID0gY29kZXMuaW5kZXhPZihiYXNlNjRJZFRva2VuLmNoYXJBdChpKSk7XG4gICAgICBoMiA9IGNvZGVzLmluZGV4T2YoYmFzZTY0SWRUb2tlbi5jaGFyQXQoaSArIDEpKTtcbiAgICAgIGgzID0gY29kZXMuaW5kZXhPZihiYXNlNjRJZFRva2VuLmNoYXJBdChpICsgMikpO1xuICAgICAgaDQgPSBjb2Rlcy5pbmRleE9mKGJhc2U2NElkVG9rZW4uY2hhckF0KGkgKyAzKSk7XG4gICAgICAvLyBGb3IgcGFkZGluZywgaWYgbGFzdCB0d28gYXJlIFwiPVwiXG4gICAgICBpZiAoaSArIDIgPT09IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgYml0cyA9IGgxIDw8IDE4IHwgaDIgPDwgMTIgfCBoMyA8PCA2O1xuICAgICAgICBjMSA9IGJpdHMgPj4gMTYgJiAyNTU7XG4gICAgICAgIGMyID0gYml0cyA+PiA4ICYgMjU1O1xuICAgICAgICBkZWNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEsIGMyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBpZiBsYXN0IG9uZSBpcyBcIj1cIlxuICAgICAgZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgYml0cyA9IGgxIDw8IDE4IHwgaDIgPDwgMTI7XG4gICAgICAgIGMxID0gYml0cyA+PiAxNiAmIDI1NTtcbiAgICAgICAgZGVjb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBiaXRzID0gaDEgPDwgMTggfCBoMiA8PCAxMiB8IGgzIDw8IDYgfCBoNDtcbiAgICAgIC8vIHRoZW4gY29udmVydCB0byAzIGJ5dGUgY2hhcnNcbiAgICAgIGMxID0gYml0cyA+PiAxNiAmIDI1NTtcbiAgICAgIGMyID0gYml0cyA+PiA4ICYgMjU1O1xuICAgICAgYzMgPSBiaXRzICYgMjU1O1xuICAgICAgZGVjb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxLCBjMiwgYzMpO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZXNlcmlhbGl6ZSBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZShxdWVyeTogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgbWF0Y2g6IEFycmF5PHN0cmluZz47IC8vIFJlZ2V4IGZvciByZXBsYWNpbmcgYWRkaXRpb24gc3ltYm9sIHdpdGggYSBzcGFjZVxuICAgIGNvbnN0IHBsID0gL1xcKy9nO1xuICAgIGNvbnN0IHNlYXJjaCA9IC8oW14mPV0rKT0oW14mXSopL2c7XG4gICAgY29uc3QgZGVjb2RlID0gKHM6IHN0cmluZykgPT4gZGVjb2RlVVJJQ29tcG9uZW50KHMucmVwbGFjZShwbCwgXCIgXCIpKTtcbiAgICBjb25zdCBvYmo6IHt9ID0ge307XG4gICAgbWF0Y2ggPSBzZWFyY2guZXhlYyhxdWVyeSk7XG4gICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICBvYmpbZGVjb2RlKG1hdGNoWzFdKV0gPSBkZWNvZGUobWF0Y2hbMl0pO1xuICAgICAgbWF0Y2ggPSBzZWFyY2guZXhlYyhxdWVyeSk7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gU2NvcGVzIChleHRyYWN0IHRvIFNjb3Blcy50cylcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlcmUgYXJlIGR1cCBzY29wZXMgaW4gYSBnaXZlbiByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSBjYWNoZWRTY29wZXNcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKi9cbiAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIGludGVyc2VjdGluZyBzY29wZXMgaXNuJ3QgYSBncmVhdCBuYW1lIGZvciBkdXBsaWNhdGUgY2hlY2tlclxuICBzdGF0aWMgaXNJbnRlcnNlY3RpbmdTY29wZXMoY2FjaGVkU2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZXM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcbiAgICBjYWNoZWRTY29wZXMgPSB0aGlzLmNvbnZlcnRUb0xvd2VyQ2FzZShjYWNoZWRTY29wZXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NvcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjYWNoZWRTY29wZXMuaW5kZXhPZihzY29wZXNbaV0udG9Mb3dlckNhc2UoKSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgZ2l2ZW4gc2NvcGUgaXMgcHJlc2VudCBpbiB0aGUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0gY2FjaGVkU2NvcGVzXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIHN0YXRpYyBjb250YWluc1Njb3BlKGNhY2hlZFNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgY2FjaGVkU2NvcGVzID0gdGhpcy5jb252ZXJ0VG9Mb3dlckNhc2UoY2FjaGVkU2NvcGVzKTtcbiAgICByZXR1cm4gc2NvcGVzLmV2ZXJ5KCh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiBjYWNoZWRTY29wZXMuaW5kZXhPZih2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpID49IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvTG93ZXJcbiAgICpcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKi9cbiAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIHRvbyBnZW5lcmljIG5hbWUgZm9yIGEgZnVuY3Rpb24gdGhhdCBvbmx5IGRlYWxzIHdpdGggc2NvcGVzXG4gIHN0YXRpYyBjb252ZXJ0VG9Mb3dlckNhc2Uoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHNjb3Blcy5tYXAoc2NvcGUgPT4gc2NvcGUudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIG9uZSBlbGVtZW50IGZyb20gYSBzY29wZSBhcnJheVxuICAgKlxuICAgKiBAcGFyYW0gc2NvcGVzXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIHRvbyBnZW5lcmljIG5hbWUgZm9yIGEgZnVuY3Rpb24gdGhhdCBvbmx5IGRlYWxzIHdpdGggc2NvcGVzXG4gIHN0YXRpYyByZW1vdmVFbGVtZW50KHNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGU6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBzY29wZXMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBzY29wZSk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gVVJMIFByb2Nlc3NpbmcgKEV4dHJhY3QgdG8gVXJsUHJvY2Vzc2luZy50cz8pXG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgdXJsIGxpa2UgaHR0cHM6Ly9hOmIvY29tbW9uL2Q/ZT1mI2csIGFuZCBhIHRlbmFudElkLCByZXR1cm5zIGh0dHBzOi8vYTpiL3RlbmFudElkL2RcbiAgICogQHBhcmFtIGhyZWYgVGhlIHVybFxuICAgKiBAcGFyYW0gdGVuYW50SWQgVGhlIHRlbmFudCBpZCB0byByZXBsYWNlXG4gICAqL1xuICBzdGF0aWMgcmVwbGFjZUZpcnN0UGF0aCh1cmw6IHN0cmluZywgdGVuYW50SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoIXRlbmFudElkKSB7XG4gICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgIH1cbiAgICAgIHZhciB1cmxPYmplY3QgPSB0aGlzLkdldFVybENvbXBvbmVudHModXJsKTtcbiAgICAgIHZhciBwYXRoQXJyYXkgPSB1cmxPYmplY3QuUGF0aFNlZ21lbnRzO1xuICAgICAgaWYgKHBhdGhBcnJheS5sZW5ndGggIT09IDAgJiYgKHBhdGhBcnJheVswXSA9PT0gQ29uc3RhbnRzLmNvbW1vbiB8fCBwYXRoQXJyYXlbMF0gPT09IENvbnN0YW50cy5vcmdhbml6YXRpb25zKSkge1xuICAgICAgICAgIHBhdGhBcnJheVswXSA9IHRlbmFudElkO1xuICAgICAgICAgIHVybCA9IHVybE9iamVjdC5Qcm90b2NvbCArIFwiLy9cIiArIHVybE9iamVjdC5Ib3N0TmFtZUFuZFBvcnQgKyBcIi9cIiArIHBhdGhBcnJheS5qb2luKFwiL1wiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1cmw7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIG91dCB0aGUgY29tcG9uZW50cyBmcm9tIGEgdXJsIHN0cmluZy5cbiAgICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIHZhcmlvdXMgY29tcG9uZW50cy4gUGxlYXNlIGNhY2hlIHRoaXMgdmFsdWUgaW5zdGVkIG9mIGNhbGxpbmcgdGhpcyBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSB1cmwuXG4gICAqL1xuICBzdGF0aWMgR2V0VXJsQ29tcG9uZW50cyh1cmw6IHN0cmluZyk6IElVcmkge1xuICAgIGlmICghdXJsKSB7XG4gICAgICB0aHJvdyBcIlVybCByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2N1cnRpc3ovMTExMzliMmNmY2FlZjRhMjYxZTBcbiAgICB2YXIgcmVnRXggPSBSZWdFeHAoXCJeKChbXjovPyNdKyk6KT8oLy8oW14vPyNdKikpPyhbXj8jXSopKFxcXFw/KFteI10qKSk/KCMoLiopKT9cIik7XG5cbiAgICB2YXIgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXgpO1xuXG4gICAgaWYgKCFtYXRjaCB8fCBtYXRjaC5sZW5ndGggPCA2KSB7XG4gICAgICB0aHJvdyBcIlZhbGlkIHVybCByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIGxldCB1cmxDb21wb25lbnRzID0gPElVcmk+e1xuICAgICAgUHJvdG9jb2w6IG1hdGNoWzFdLFxuICAgICAgSG9zdE5hbWVBbmRQb3J0OiBtYXRjaFs0XSxcbiAgICAgIEFic29sdXRlUGF0aDogbWF0Y2hbNV1cbiAgICB9O1xuXG4gICAgbGV0IHBhdGhTZWdtZW50cyA9IHVybENvbXBvbmVudHMuQWJzb2x1dGVQYXRoLnNwbGl0KFwiL1wiKTtcbiAgICBwYXRoU2VnbWVudHMgPSBwYXRoU2VnbWVudHMuZmlsdGVyKCh2YWwpID0+IHZhbCAmJiB2YWwubGVuZ3RoID4gMCk7IC8vIHJlbW92ZSBlbXB0eSBlbGVtZW50c1xuICAgIHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzID0gcGF0aFNlZ21lbnRzO1xuICAgIHJldHVybiB1cmxDb21wb25lbnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgdXJsIG9yIHBhdGgsIGFwcGVuZCBhIHRyYWlsaW5nIHNsYXNoIGlmIG9uZSBkb2VzbnQgZXhpc3RcbiAgICpcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgc3RhdGljIENhbm9uaWNhbGl6ZVVyaSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHVybCkge1xuICAgICAgdXJsID0gdXJsLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKHVybCAmJiAhVXRpbHMuZW5kc1dpdGgodXJsLCBcIi9cIikpIHtcbiAgICAgIHVybCArPSBcIi9cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIHVybCBlbmRzIHdpdGggdGhlIHN1ZmZpeFxuICAgKiBSZXF1aXJlZCBiZWNhdXNlIHdlIGFyZSBjb21waWxpbmcgZm9yIGVzNSBpbnN0ZWFkIG9mIGVzNlxuICAgKiBAcGFyYW0gdXJsXG4gICAqIEBwYXJhbSBzdHJcbiAgICovXG4gIC8vIFRPRE86IFJlbmFtZSB0aGlzLCBub3QgY2xlYXIgd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBkb1xuICBzdGF0aWMgZW5kc1dpdGgodXJsOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF1cmwgfHwgIXN1ZmZpeCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB1cmwuaW5kZXhPZihzdWZmaXgsIHVybC5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XG4gIH1cblxuICAvKipcbiAgICogVXRpbHMgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBsb2dpbl9oaW50IGFuZCBkb21haW5faGludCBmcm9tIHRoZSBpL3AgZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHVybFxuICAgKiBAcGFyYW0gbmFtZVxuICAgKi9cbiAgc3RhdGljIHVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmlzRW1wdHkodXJsKSkge1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFxcXFwmXCIgKyBuYW1lICsgXCI9KVteXFwmXStcIik7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xuICAgIC8vIG5hbWU9dmFsdWUmXG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFwiICsgbmFtZSArIFwiPSlbXlxcJl0rJlwiKTtcbiAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgLy8gbmFtZT12YWx1ZVxuICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcIiArIG5hbWUgKyBcIj0pW15cXCZdK1wiKTtcbiAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBFeHRyYVF1ZXJ5UGFyYW1ldGVycyBQcm9jZXNzaW5nIChFeHRyYWN0PylcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAqL1xuICBzdGF0aWMgY2hlY2tTU08oZXh0cmFRdWVyeVBhcmFtZXRlcnM6IHN0cmluZykge1xuICAgIHJldHVybiAgIShleHRyYVF1ZXJ5UGFyYW1ldGVycyAmJiAgKChleHRyYVF1ZXJ5UGFyYW1ldGVycy5pbmRleE9mKENvbnN0YW50cy5sb2dpbl9oaW50KSAhPT0gLTEgfHwgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzLmluZGV4T2YoQ29uc3RhbnRzLnNpZCkgIT09IC0xICkpKTtcbiAgfVxuXG4gICAvKipcbiAgICogQ29uc3RydWN0cyBleHRyYVF1ZXJ5UGFyYW1ldGVycyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXIgZm9yIHRoZSBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcbiAgICogaW4gYW55IGxvZ2luKCkgb3IgYWNxdWlyZVRva2VuKCkgY2FsbHNcbiAgICpcbiAgICogQHBhcmFtIGlkVG9rZW5PYmplY3RcbiAgICogQHBhcmFtIGxvZ2luX2hpbnRcbiAgICogQHBhcmFtIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAqL1xuICAvL1RPRE86IGNoZWNrIGhvdyB0aGlzIGJlaGF2ZXMgd2hlbiBkb21haW5faGludCBvbmx5IGlzIHNlbnQgaW4gZXh0cmFwYXJhbWV0ZXJzIGFuZCBpZFRva2VuIGhhcyBubyB1cG4uXG4gIC8vVE9ETzogVGVzdCBhbGwgcGF0aHMgdGhvcm91Z2hseVxuICBzdGF0aWMgY29uc3RydWN0VW5pZmllZENhY2hlRXh0cmFRdWVyeVBhcmFtZXRlcihpZFRva2VuT2JqZWN0OiBhbnksIGV4dHJhUXVlcnlQYXJhbWV0ZXJzPzogc3RyaW5nKSB7XG4gICAgaWYgKGlkVG9rZW5PYmplY3QpIHtcbiAgICAgIGlmIChpZFRva2VuT2JqZWN0Lmhhc093blByb3BlcnR5KENvbnN0YW50cy51cG4pKSB7XG4gICAgICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzID0gdGhpcy51cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcihleHRyYVF1ZXJ5UGFyYW1ldGVycywgQ29uc3RhbnRzLmxvZ2luX2hpbnQpO1xuICAgICAgICBleHRyYVF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMudXJsUmVtb3ZlUXVlcnlTdHJpbmdQYXJhbWV0ZXIoZXh0cmFRdWVyeVBhcmFtZXRlcnMsIENvbnN0YW50cy5kb21haW5faGludCk7XG4gICAgICAgIGlmIChleHRyYVF1ZXJ5UGFyYW1ldGVycykge1xuICAgICAgICAgIHJldHVybiBleHRyYVF1ZXJ5UGFyYW1ldGVycyArPSBcIiZcIiArIENvbnN0YW50cy5sb2dpbl9oaW50ICsgXCI9XCIgKyBpZFRva2VuT2JqZWN0LnVwbiArIFwiJlwiICsgQ29uc3RhbnRzLmRvbWFpbl9oaW50ICsgXCI9XCIgKyBDb25zdGFudHMub3JnYW5pemF0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZXh0cmFRdWVyeVBhcmFtZXRlcnMgPSBcIiZcIiArIENvbnN0YW50cy5sb2dpbl9oaW50ICsgXCI9XCIgKyBpZFRva2VuT2JqZWN0LnVwbiArIFwiJlwiICsgQ29uc3RhbnRzLmRvbWFpbl9oaW50ICsgXCI9XCIgKyBDb25zdGFudHMub3JnYW5pemF0aW9ucztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzID0gdGhpcy51cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcihleHRyYVF1ZXJ5UGFyYW1ldGVycywgQ29uc3RhbnRzLmRvbWFpbl9oaW50KTtcbiAgICAgICAgaWYgKGV4dHJhUXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIGV4dHJhUXVlcnlQYXJhbWV0ZXJzICs9IFwiJlwiICsgQ29uc3RhbnRzLmRvbWFpbl9oaW50ICsgXCI9XCIgKyBDb25zdGFudHMub3JnYW5pemF0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZXh0cmFRdWVyeVBhcmFtZXRlcnMgPSBcIiZcIiArIENvbnN0YW50cy5kb21haW5faGludCArIFwiPVwiICsgQ29uc3RhbnRzLm9yZ2FuaXphdGlvbnM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV4dHJhUXVlcnlQYXJhbWV0ZXJzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XG4gIHN0YXRpYyBnZXQgZXJyb3JEZXNjcmlwdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gXCJlcnJvcl9kZXNjcmlwdGlvblwiOyB9XG4gIHN0YXRpYyBnZXQgZXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwiZXJyb3JcIjsgfVxuICBzdGF0aWMgZ2V0IHNjb3BlKCk6IHN0cmluZyB7IHJldHVybiBcInNjb3BlXCI7IH1cbiAgc3RhdGljIGdldCBhY3F1aXJlVG9rZW5Vc2VyKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuYWNxdWlyZVRva2VuVXNlclwiOyB9XG4gIHN0YXRpYyBnZXQgY2xpZW50SW5mbygpOiBzdHJpbmcgeyByZXR1cm4gXCJjbGllbnRfaW5mb1wiOyB9XG4gIHN0YXRpYyBnZXQgY2xpZW50SWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiY2xpZW50SWRcIjsgfVxuICBzdGF0aWMgZ2V0IGF1dGhvcml0eSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmF1dGhvcml0eVwiOyB9XG4gIHN0YXRpYyBnZXQgaWRUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJpZF90b2tlblwiOyB9XG4gIHN0YXRpYyBnZXQgYWNjZXNzVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiYWNjZXNzX3Rva2VuXCI7IH1cbiAgc3RhdGljIGdldCBleHBpcmVzSW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiZXhwaXJlc19pblwiOyB9XG4gIHN0YXRpYyBnZXQgc2Vzc2lvblN0YXRlKCk6IHN0cmluZyB7IHJldHVybiBcInNlc3Npb25fc3RhdGVcIjsgfVxuICBzdGF0aWMgZ2V0IG1zYWxDbGllbnRJbmZvKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuY2xpZW50LmluZm9cIjsgfVxuICBzdGF0aWMgZ2V0IG1zYWxFcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmVycm9yXCI7IH1cbiAgc3RhdGljIGdldCBtc2FsRXJyb3JEZXNjcmlwdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmVycm9yLmRlc2NyaXB0aW9uXCI7IH1cbiAgc3RhdGljIGdldCBtc2FsU2Vzc2lvblN0YXRlKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc2Vzc2lvbi5zdGF0ZVwiOyB9XG4gIHN0YXRpYyBnZXQgdG9rZW5LZXlzKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwudG9rZW4ua2V5c1wiOyB9XG4gIHN0YXRpYyBnZXQgYWNjZXNzVG9rZW5LZXkoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5hY2Nlc3MudG9rZW4ua2V5XCI7IH1cbiAgc3RhdGljIGdldCBleHBpcmF0aW9uS2V5KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuZXhwaXJhdGlvbi5rZXlcIjsgfVxuICBzdGF0aWMgZ2V0IHN0YXRlTG9naW4oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5zdGF0ZS5sb2dpblwiOyB9XG4gIHN0YXRpYyBnZXQgc3RhdGVBY3F1aXJlVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5zdGF0ZS5hY3F1aXJlVG9rZW5cIjsgfVxuICBzdGF0aWMgZ2V0IHN0YXRlUmVuZXcoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5zdGF0ZS5yZW5ld1wiOyB9XG4gIHN0YXRpYyBnZXQgbm9uY2VJZFRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwubm9uY2UuaWR0b2tlblwiOyB9XG4gIHN0YXRpYyBnZXQgdXNlck5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC51c2VybmFtZVwiOyB9XG4gIHN0YXRpYyBnZXQgaWRUb2tlbktleSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmlkdG9rZW5cIjsgfVxuICBzdGF0aWMgZ2V0IGxvZ2luUmVxdWVzdCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmxvZ2luLnJlcXVlc3RcIjsgfVxuICBzdGF0aWMgZ2V0IGxvZ2luRXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5sb2dpbi5lcnJvclwiOyB9XG4gIHN0YXRpYyBnZXQgcmVuZXdTdGF0dXMoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC50b2tlbi5yZW5ldy5zdGF0dXNcIjsgfVxuICBzdGF0aWMgZ2V0IG1zYWwoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbFwiOyB9XG4gIHN0YXRpYyBnZXQgbm9fdXNlcigpOiBzdHJpbmcgeyByZXR1cm4gXCJOT19VU0VSXCI7IH1cbiAgc3RhdGljIGdldCBsb2dpbl9oaW50KCk6IHN0cmluZyB7IHJldHVybiBcImxvZ2luX2hpbnRcIjsgfVxuICBzdGF0aWMgZ2V0IGRvbWFpbl9oaW50KCk6IHN0cmluZyB7IHJldHVybiBcImRvbWFpbl9oaW50XCI7IH1cbiAgc3RhdGljIGdldCBvcmdhbml6YXRpb25zKCk6IHN0cmluZyB7IHJldHVybiBcIm9yZ2FuaXphdGlvbnNcIjsgfVxuICBzdGF0aWMgZ2V0IGNvbnN1bWVycygpOiBzdHJpbmcgeyByZXR1cm4gXCJjb25zdW1lcnNcIjsgfVxuICBzdGF0aWMgZ2V0IGNvbnN1bWVyc1V0aWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiOTE4ODA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkXCI7IH1cbiAgc3RhdGljIGdldCBzaWQoKTogc3RyaW5nIHsgcmV0dXJuIFwic2lkXCI7IH1cbiAgc3RhdGljIGdldCB1cG4oKTogc3RyaW5nIHsgcmV0dXJuIFwidXBuXCI7IH1cbiAgc3RhdGljIGdldCBhZGFsSWRUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJhZGFsLmlkdG9rZW5cIjsgfVxuICBzdGF0aWMgZ2V0IHByb21wdF9zZWxlY3RfYWNjb3VudCgpOiBzdHJpbmcgeyByZXR1cm4gXCImcHJvbXB0PXNlbGVjdF9hY2NvdW50XCI7IH1cbiAgc3RhdGljIGdldCBwcm9tcHRfbm9uZSgpOiBzdHJpbmcgeyByZXR1cm4gXCImcHJvbXB0PW5vbmVcIjsgfVxuICBzdGF0aWMgZ2V0IHByb21wdCgpOiBzdHJpbmcgeyByZXR1cm4gXCJwcm9tcHRcIjsgfVxuICBzdGF0aWMgZ2V0IHJlc3BvbnNlX21vZGVfZnJhZ21lbnQoKTogc3RyaW5nIHsgcmV0dXJuIFwiJnJlc3BvbnNlX21vZGU9ZnJhZ21lbnRcIjsgfVxuICBzdGF0aWMgZ2V0IHJlc291cmNlRGVsaW1ldGVyKCk6IHN0cmluZyB7IHJldHVybiBcInxcIjsgfVxuICBzdGF0aWMgZ2V0IHRva2VuUmVuZXdTdGF0dXNDYW5jZWxsZWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQ2FuY2VsZWRcIjsgfVxuICBzdGF0aWMgZ2V0IHRva2VuUmVuZXdTdGF0dXNDb21wbGV0ZWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQ29tcGxldGVkXCI7IH1cbiAgc3RhdGljIGdldCB0b2tlblJlbmV3U3RhdHVzSW5Qcm9ncmVzcygpOiBzdHJpbmcgeyByZXR1cm4gXCJJbiBQcm9ncmVzc1wiOyB9XG4gIHByaXZhdGUgc3RhdGljIF9wb3BVcFdpZHRoOiBudW1iZXIgPSA0ODM7XG4gIHN0YXRpYyBnZXQgcG9wVXBXaWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fcG9wVXBXaWR0aDsgfVxuICBzdGF0aWMgc2V0IHBvcFVwV2lkdGgod2lkdGg6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcFVwV2lkdGggPSB3aWR0aDtcbiAgfVxuICBwcml2YXRlIHN0YXRpYyBfcG9wVXBIZWlnaHQ6IG51bWJlciA9IDYwMDtcbiAgc3RhdGljIGdldCBwb3BVcEhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fcG9wVXBIZWlnaHQ7IH1cbiAgc3RhdGljIHNldCBwb3BVcEhlaWdodChoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcFVwSGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG4gIHN0YXRpYyBnZXQgbG9naW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiTE9HSU5cIjsgfVxuICBzdGF0aWMgZ2V0IHJlbmV3VG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiUkVORVdfVE9LRU5cIjsgfVxuICBzdGF0aWMgZ2V0IHVua25vd24oKTogc3RyaW5nIHsgcmV0dXJuIFwiVU5LTk9XTlwiOyB9XG4gIHN0YXRpYyBnZXQgdXJsSGFzaCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnVybEhhc2hcIjsgfVxuICBzdGF0aWMgZ2V0IGFuZ3VsYXJMb2dpblJlcXVlc3QoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5hbmd1bGFyLmxvZ2luLnJlcXVlc3RcIjsgfVxuICBzdGF0aWMgZ2V0IHVzZXJJZGVudGlmaWVyKCk6IHN0cmluZyB7IHJldHVybiBcInVzZXJJZGVudGlmaWVyXCI7IH1cbiAgc3RhdGljIGdldCBjb21tb24oKTogc3RyaW5nIHsgcmV0dXJuIFwiY29tbW9uXCI7IH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBFcnJvckNvZGVzIHtcbiAgc3RhdGljIGdldCBsb2dpblByb2dyZXNzRXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwibG9naW5fcHJvZ3Jlc3NfZXJyb3JcIjsgfVxuICBzdGF0aWMgZ2V0IGFjcXVpcmVUb2tlblByb2dyZXNzRXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwiYWNxdWlyZXRva2VuX3Byb2dyZXNzX2Vycm9yXCI7IH1cbiAgc3RhdGljIGdldCBpbnB1dFNjb3Blc0Vycm9yKCk6IHN0cmluZyB7IHJldHVybiBcImlucHV0X3Njb3Blc19lcnJvclwiOyB9XG4gIHN0YXRpYyBnZXQgZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwiZW5kcG9pbnRzX3Jlc29sdXRpb25fZXJyb3JcIjsgfVxuICBzdGF0aWMgZ2V0IHBvcFVwV2luZG93RXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwicG9wdXBfd2luZG93X2Vycm9yXCI7IH1cbiAgc3RhdGljIGdldCB1c2VyTG9naW5FcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJ1c2VyX2xvZ2luX2Vycm9yXCI7IH1cbiAgc3RhdGljIGdldCB1c2VyQ2FuY2VsbGVkRXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwidXNlcl9jYW5jZWxsZWRcIjsgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEVycm9yRGVzY3JpcHRpb24ge1xuICBzdGF0aWMgZ2V0IGxvZ2luUHJvZ3Jlc3NFcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJMb2dpbiBpcyBpbiBwcm9ncmVzc1wiOyB9XG4gIHN0YXRpYyBnZXQgYWNxdWlyZVRva2VuUHJvZ3Jlc3NFcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJBY3F1aXJlIHRva2VuIGlzIGluIHByb2dyZXNzXCI7IH1cbiAgc3RhdGljIGdldCBpbnB1dFNjb3Blc0Vycm9yKCk6IHN0cmluZyB7IHJldHVybiBcIkludmFsaWQgdmFsdWUgb2YgaW5wdXQgc2NvcGVzIHByb3ZpZGVkXCI7IH1cbiAgc3RhdGljIGdldCBlbmRwb2ludFJlc29sdXRpb25FcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJFbmRwb2ludHMgY2Fubm90IGJlIHJlc29sdmVkXCI7IH1cbiAgc3RhdGljIGdldCBwb3BVcFdpbmRvd0Vycm9yKCk6IHN0cmluZyB7IHJldHVybiBcIkVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93LiBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IGFyZSB1c2luZyBJRSBvciBpZiBwb3B1cHMgYXJlIGJsb2NrZWQgaW4gdGhlIGJyb3dzZXIuXCI7IH1cbiAgc3RhdGljIGdldCB1c2VyTG9naW5FcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkXCI7IH1cbiAgc3RhdGljIGdldCB1c2VyQ2FuY2VsbGVkRXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwiVXNlciBjbG9zZWQgdGhlIHBvcHVwIHdpbmRvdyBhbmQgY2FuY2VsbGVkIHRoZSBmbG93XCI7IH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBDYWNoZUtleXMgPSB7XG4gICAgQVVUSE9SSVRZOiBcIm1zYWxfYXV0aG9yaXR5XCIsXG4gICAgQUNRVUlSRV9UT0tFTl9VU0VSOiBcIm1zYWwuYWNxdWlyZVRva2VuVXNlclwiXG59O1xuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IElVcmkgfSBmcm9tIFwiLi9JVXJpXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgeyBJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2UgfSBmcm9tIFwiLi9JVGVuYW50RGlzY292ZXJ5UmVzcG9uc2VcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xuaW1wb3J0IHsgWGhyQ2xpZW50IH0gZnJvbSBcIi4vWEhSQ2xpZW50XCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZW51bSBBdXRob3JpdHlUeXBlIHtcbiAgQWFkLFxuICBBZGZzLFxuICBCMkNcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdXRob3JpdHkge1xuICBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLklzVmFsaWRhdGlvbkVuYWJsZWQgPSB2YWxpZGF0ZUF1dGhvcml0eTtcbiAgICB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eSA9IGF1dGhvcml0eTtcblxuICAgIHRoaXMudmFsaWRhdGVBc1VyaSgpO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGU7XG5cbiAgcHVibGljIElzVmFsaWRhdGlvbkVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIGdldCBUZW5hbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLlBhdGhTZWdtZW50c1swXTtcbiAgfVxuXG4gIHByaXZhdGUgdGVuYW50RGlzY292ZXJ5UmVzcG9uc2U6IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZTtcblxuICBwdWJsaWMgZ2V0IEF1dGhvcml6YXRpb25FbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZCgpO1xuICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLkF1dGhvcml6YXRpb25FbmRwb2ludC5yZXBsYWNlKFwie3RlbmFudH1cIiwgdGhpcy5UZW5hbnQpO1xuICB9XG5cbiAgcHVibGljIGdldCBFbmRTZXNzaW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWQoKTtcbiAgICByZXR1cm4gdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5FbmRTZXNzaW9uRW5kcG9pbnQucmVwbGFjZShcInt0ZW5hbnR9XCIsIHRoaXMuVGVuYW50KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgU2VsZlNpZ25lZEp3dEF1ZGllbmNlKCk6IHN0cmluZyB7XG4gICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkKCk7XG4gICAgcmV0dXJuIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuSXNzdWVyLnJlcGxhY2UoXCJ7dGVuYW50fVwiLCB0aGlzLlRlbmFudCk7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlUmVzb2x2ZWQoKSB7XG4gICAgaWYgKCF0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlKSB7XG4gICAgICB0aHJvdyBcIlBsZWFzZSBjYWxsIFJlc29sdmVFbmRwb2ludHNBc3luYyBmaXJzdFwiO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIFVSTCB0aGF0IGlzIHRoZSBhdXRob3JpdHkgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcbiAgICovXG4gIHB1YmxpYyBnZXQgQ2Fub25pY2FsQXV0aG9yaXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5O1xuICB9XG5cbiAgcHVibGljIHNldCBDYW5vbmljYWxBdXRob3JpdHkodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eSA9IFV0aWxzLkNhbm9uaWNhbGl6ZVVyaSh1cmwpO1xuICAgIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cyA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNhbm9uaWNhbEF1dGhvcml0eTogc3RyaW5nO1xuICBwcml2YXRlIGNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM6IElVcmk7XG5cbiAgcHVibGljIGdldCBDYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKCk6IElVcmkge1xuICAgIGlmICghdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKSB7XG4gICAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMgPSBVdGlscy5HZXRVcmxDb21wb25lbnRzKHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIC8vIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWRpc2NvdmVyeS0xXzAuaHRtbCNQcm92aWRlck1ldGFkYXRhXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IERlZmF1bHRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5DYW5vbmljYWxBdXRob3JpdHl9djIuMC8ud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbmA7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBzdHJpbmcsIHZhbGlkYXRlIHRoYXQgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly9kb21haW4vcGF0aFxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZUFzVXJpKCkge1xuICAgIGxldCBjb21wb25lbnRzO1xuICAgIHRyeSB7XG4gICAgICBjb21wb25lbnRzID0gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IEVycm9yTWVzc2FnZS5pbnZhbGlkQXV0aG9yaXR5VHlwZTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbXBvbmVudHMuUHJvdG9jb2wgfHwgY29tcG9uZW50cy5Qcm90b2NvbC50b0xvd2VyQ2FzZSgpICE9PSBcImh0dHBzOlwiKSB7XG4gICAgICB0aHJvdyBFcnJvck1lc3NhZ2UuYXV0aG9yaXR5VXJpSW5zZWN1cmU7XG4gICAgfVxuXG4gICAgaWYgKCFjb21wb25lbnRzLlBhdGhTZWdtZW50cyB8fCBjb21wb25lbnRzLlBhdGhTZWdtZW50cy5sZW5ndGggPCAxKSB7XG4gICAgICB0aHJvdyBFcnJvck1lc3NhZ2UuYXV0aG9yaXR5VXJpSW52YWxpZFBhdGg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBPSURDIGVuZHBvaW50IGFuZCByZXR1cm5zIHRoZSByZXNwb25zZVxuICAgKi9cbiAgcHJpdmF0ZSBEaXNjb3ZlckVuZHBvaW50cyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQ6IHN0cmluZyk6IFByb21pc2U8SVRlbmFudERpc2NvdmVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IFhockNsaWVudCgpO1xuICAgIHJldHVybiBjbGllbnQuc2VuZFJlcXVlc3RBc3luYyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQsIFwiR0VUXCIsIC8qZW5hYmxlQ2FjaGluZzogKi8gdHJ1ZSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8SVRlbmFudERpc2NvdmVyeVJlc3BvbnNlPntcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uRW5kcG9pbnQ6IHJlc3BvbnNlLmF1dGhvcml6YXRpb25fZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgRW5kU2Vzc2lvbkVuZHBvaW50OiByZXNwb25zZS5lbmRfc2Vzc2lvbl9lbmRwb2ludCxcbiAgICAgICAgICAgICAgICBJc3N1ZXI6IHJlc3BvbnNlLmlzc3VlclxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UuXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBpbiB0aGUgY2FjaGVcbiAgICogRGlzY292ZXIgZW5kcG9pbnRzIHZpYSBvcGVuaWQtY29uZmlndXJhdGlvblxuICAgKiBJZiBzdWNjZXNzZnVsLCBjYWNoZXMgdGhlIGVuZHBvaW50IGZvciBsYXRlciB1c2UgaW4gT0lEQ1xuICAgKi9cbiAgcHVibGljIFJlc29sdmVFbmRwb2ludHNBc3luYygpOiBQcm9taXNlPEF1dGhvcml0eT4ge1xuICAgIGxldCBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQgPSBcIlwiO1xuICAgIHJldHVybiB0aGlzLkdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCkudGhlbihvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZSA9PiB7XG4gICAgICBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQgPSBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZTtcbiAgICAgIHJldHVybiB0aGlzLkRpc2NvdmVyRW5kcG9pbnRzKG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCk7XG4gICAgfSkudGhlbigodGVuYW50RGlzY292ZXJ5UmVzcG9uc2U6IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZSA9IHRlbmFudERpc2NvdmVyeVJlc3BvbnNlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgVGVuYW50RGlzY292ZXJ5RW5kcG9pbnRcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBHZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpOiBQcm9taXNlPHN0cmluZz47XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLnRocm93KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgIH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChvW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXJDYWxsYmFjayB7XG4gIChsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XG4gIEVycm9yLFxuICBXYXJuaW5nLFxuICBJbmZvLFxuICBWZXJib3NlXG59XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIgey8vIFNpbmdsZXRvbiBDbGFzc1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICAvLyBUT0RPOiBUaGlzIGRvZXMgbm90IHNlZW0gdG8gYmUgYSBzaW5nbGV0b24hISBDaGFuZ2Ugb3IgRGVsZXRlLlxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTG9nZ2VyO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGNvcnJlbGF0aW9uSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBsZXZlbDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JbmZvO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHBpaUxvZ2dpbmdFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGxvY2FsQ2FsbGJhY2s6IElMb2dnZXJDYWxsYmFjaztcblxuICBjb25zdHJ1Y3Rvcihsb2NhbENhbGxiYWNrOiBJTG9nZ2VyQ2FsbGJhY2ssXG4gICAgICBvcHRpb25zOlxuICAgICAge1xuICAgICAgICAgIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcsXG4gICAgICAgICAgbGV2ZWw/OiBMb2dMZXZlbCxcbiAgICAgICAgICBwaWlMb2dnaW5nRW5hYmxlZD86IGJvb2xlYW4sXG4gICAgICB9ID0ge30pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgICBjb3JyZWxhdGlvbklkID0gXCJcIixcbiAgICAgICAgICBsZXZlbCA9IExvZ0xldmVsLkluZm8sXG4gICAgICAgICAgcGlpTG9nZ2luZ0VuYWJsZWQgPSBmYWxzZVxuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIHRoaXMubG9jYWxDYWxsYmFjayA9IGxvY2FsQ2FsbGJhY2s7XG4gICAgICB0aGlzLmNvcnJlbGF0aW9uSWQgPSBjb3JyZWxhdGlvbklkO1xuICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgdGhpcy5waWlMb2dnaW5nRW5hYmxlZCA9IHBpaUxvZ2dpbmdFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgbG9nTWVzc2FnZShsb2dMZXZlbDogTG9nTGV2ZWwsIGxvZ01lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoKGxvZ0xldmVsID4gdGhpcy5sZXZlbCkgfHwgKCF0aGlzLnBpaUxvZ2dpbmdFbmFibGVkICYmIGNvbnRhaW5zUGlpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCk7XG4gICAgbGV0IGxvZzogc3RyaW5nO1xuICAgIGlmICghVXRpbHMuaXNFbXB0eSh0aGlzLmNvcnJlbGF0aW9uSWQpKSB7XG4gICAgICBsb2cgPSB0aW1lc3RhbXAgKyBcIjpcIiArIHRoaXMuY29ycmVsYXRpb25JZCArIFwiLVwiICsgVXRpbHMuZ2V0TGlicmFyeVZlcnNpb24oKSArIFwiLVwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCIgXCIgKyBsb2dNZXNzYWdlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZyA9IHRpbWVzdGFtcCArIFwiOlwiICsgVXRpbHMuZ2V0TGlicmFyeVZlcnNpb24oKSArIFwiLVwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCIgXCIgKyBsb2dNZXNzYWdlO1xuICAgIH1cbiAgICB0aGlzLmV4ZWN1dGVDYWxsYmFjayhsb2dMZXZlbCwgbG9nLCBjb250YWluc1BpaSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZXhlY3V0ZUNhbGxiYWNrKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nLCBjb250YWluc1BpaTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmxvY2FsQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMubG9jYWxDYWxsYmFjayhsZXZlbCwgbWVzc2FnZSwgY29udGFpbnNQaWkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBlcnJvclBpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLldhcm5pbmcsIG1lc3NhZ2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB3YXJuaW5nUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5XYXJuaW5nLCBtZXNzYWdlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBpbmZvKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5JbmZvLCBtZXNzYWdlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgaW5mb1BpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmVyYm9zZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuVmVyYm9zZSwgbWVzc2FnZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZlcmJvc2VQaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLlZlcmJvc2UsIG1lc3NhZ2UsIHRydWUpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuLy8gVE9ETzogU2hvdWxkbid0IHRoaXMgY2xhc3MgZ28gYXdheSBwb3N0IEVycm9yIEFQSSBjb21wbGV0aW9uP1xuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBFcnJvck1lc3NhZ2Uge1xuICBzdGF0aWMgZ2V0IGF1dGhvcml0eVVyaUludmFsaWRQYXRoKCk6IHN0cmluZyB7IHJldHVybiBcIkF1dGhvcml0eVVyaUludmFsaWRQYXRoXCI7IH1cbiAgc3RhdGljIGdldCBhdXRob3JpdHlVcmlJbnNlY3VyZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJBdXRob3JpdHlVcmlJbnNlY3VyZVwiOyB9XG4gIHN0YXRpYyBnZXQgaW52YWxpZEF1dGhvcml0eVR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiSW52YWxpZEF1dGhvcml0eVR5cGVcIjsgfVxuICBzdGF0aWMgZ2V0IHVuc3VwcG9ydGVkQXV0aG9yaXR5VmFsaWRhdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gXCJVbnN1cHBvcnRlZEF1dGhvcml0eVZhbGlkYXRpb25cIjsgfVxuICBzdGF0aWMgZ2V0IGIyY0F1dGhvcml0eVVyaUludmFsaWRQYXRoKCk6IHN0cmluZyB7IHJldHVybiBcIkIyY0F1dGhvcml0eVVyaUludmFsaWRQYXRoXCI7IH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqICBBbGwgUmlnaHRzIFJlc2VydmVkXG4gKiAgTUlUIExpY2Vuc2VcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXNcbiAqIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmVcbiAqIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSxcbiAqIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbiAqIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG4gKiBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gKiBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SU1xuICogT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVFxuICogT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkNhY2hlSXRlbSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuQ2FjaGVJdGVtXCI7XG5pbXBvcnQgeyBBY2Nlc3NUb2tlbktleSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuS2V5XCI7XG5pbXBvcnQgeyBBY2Nlc3NUb2tlblZhbHVlIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5WYWx1ZVwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZXF1ZXN0UGFyYW1ldGVycyB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnNcIjtcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgQ2xpZW50SW5mbyB9IGZyb20gXCIuL0NsaWVudEluZm9cIjtcbmltcG9ydCB7IENvbnN0YW50cywgRXJyb3JDb2RlcywgRXJyb3JEZXNjcmlwdGlvbiB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL1N0b3JhZ2VcIjtcbmltcG9ydCB7IFRva2VuUmVzcG9uc2UgfSBmcm9tIFwiLi9SZXF1ZXN0SW5mb1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCB7IEF1dGhvcml0eUZhY3RvcnkgfSBmcm9tIFwiLi9BdXRob3JpdHlGYWN0b3J5XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgbXNhbDogT2JqZWN0O1xuICAgICAgICBDdXN0b21FdmVudDogQ3VzdG9tRXZlbnQ7XG4gICAgICAgIEV2ZW50OiBFdmVudDtcbiAgICAgICAgYWN0aXZlUmVuZXdhbHM6IHt9O1xuICAgICAgICByZW5ld1N0YXRlczogQXJyYXk8c3RyaW5nPjtcbiAgICAgICAgY2FsbEJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzIDoge307XG4gICAgICAgIGNhbGxCYWNrc01hcHBlZFRvUmVuZXdTdGF0ZXM6IHt9O1xuICAgICAgICBvcGVuZWRXaW5kb3dzOiBBcnJheTxXaW5kb3c+O1xuICAgICAgICByZXF1ZXN0VHlwZTogc3RyaW5nO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmxldCBSZXNwb25zZVR5cGVzID0ge1xuICBpZF90b2tlbjogXCJpZF90b2tlblwiLFxuICB0b2tlbjogXCJ0b2tlblwiLFxuICBpZF90b2tlbl90b2tlbjogXCJpZF90b2tlbiB0b2tlblwiXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYWNoZVJlc3VsdCB7XG4gIGVycm9yRGVzYzogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xuICBlcnJvcjogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgdHlwZSBhbGlhcyBvZiBmb3IgYSB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0gdG9rZW5SZWNlaXZlZENhbGxiYWNrLmVycm9yRGVzYyBlcnJvciBkZXNjcmlwdGlvbiByZXR1cm5lZCBmcm9tIHRoZSBTVFMgaWYgQVBJIGNhbGwgZmFpbHMuXG4gKiBAcGFyYW0gdG9rZW5SZWNlaXZlZENhbGxiYWNrLnRva2VuIHRva2VuIHJldHVybmVkIGZyb20gU1RTIGlmIHRva2VuIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bC5cbiAqIEBwYXJhbSB0b2tlblJlY2VpdmVkQ2FsbGJhY2suZXJyb3IgZXJyb3IgY29kZSByZXR1cm5lZCBmcm9tIHRoZSBTVFMgaWYgQVBJIGNhbGwgZmFpbHMuXG4gKiBAcGFyYW0gdG9rZW5SZWNlaXZlZENhbGxiYWNrLnRva2VuVHlwZSB0b2tlblR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgU1RTIGlmIEFQSSBjYWxsIGlzIHN1Y2Nlc3NmdWwuIFBvc3NpYmxlIHZhbHVlcyBhcmU6IGlkX3Rva2VuIE9SIGFjY2Vzc190b2tlbi5cbiAqL1xuZXhwb3J0IHR5cGUgdG9rZW5SZWNlaXZlZENhbGxiYWNrID0gKGVycm9yRGVzYzogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBlcnJvcjogc3RyaW5nLCB0b2tlblR5cGU6IHN0cmluZywgdXNlclN0YXRlOiBzdHJpbmcgKSA9PiB2b2lkO1xuY29uc3QgcmVzb2x2ZVRva2VuT25seUlmT3V0T2ZJZnJhbWUgPSAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xuICBjb25zdCB0b2tlbkFjcXVpc2l0aW9uTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNJbklmcmFtZSgpXG4gICAgICAgICAgPyBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IHRva2VuQWNxdWlzaXRpb25NZXRob2QuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG4gIHJldHVybiBkZXNjcmlwdG9yO1xufTtcbmV4cG9ydCBjbGFzcyBVc2VyQWdlbnRBcHBsaWNhdGlvbiB7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgX2NhY2hlTG9jYXRpb25zID0ge1xuICAgIGxvY2FsU3RvcmFnZTogXCJsb2NhbFN0b3JhZ2VcIixcbiAgICBzZXNzaW9uU3RvcmFnZTogXCJzZXNzaW9uU3RvcmFnZVwiXG4gIH07XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgX2NhY2hlTG9jYXRpb246IHN0cmluZztcblxuICAvKipcbiAgICogVXNlZCB0byBnZXQgdGhlIGNhY2hlIGxvY2F0aW9uXG4gICAqL1xuICBnZXQgY2FjaGVMb2NhdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZUxvY2F0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByb3RlY3RlZCBfbG9nZ2VyOiBMb2dnZXI7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgX2xvZ2luSW5Qcm9ncmVzczogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBfYWNxdWlyZVRva2VuSW5Qcm9ncmVzczogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBfY2xvY2tTa2V3ID0gMzAwO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NhY2hlU3RvcmFnZTogU3RvcmFnZTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBfdG9rZW5SZWNlaXZlZENhbGxiYWNrOiB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIF91c2VyOiBVc2VyO1xuXG4gIC8qKlxuICAgKiBDbGllbnQgSUQgYXNzaWduZWQgdG8geW91ciBhcHAgYnkgQXp1cmUgQWN0aXZlIERpcmVjdG9yeS5cbiAgICovXG4gIGNsaWVudElkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByb3RlY3RlZCBhdXRob3JpdHlJbnN0YW5jZTogQXV0aG9yaXR5O1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHNldCB0aGUgYXV0aG9yaXR5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5IC0gQSBVUkwgaW5kaWNhdGluZyBhIGRpcmVjdG9yeSB0aGF0IE1TQUwgY2FuIHVzZSB0byBvYnRhaW4gdG9rZW5zLlxuICAgKiAtIEluIEF6dXJlIEFELCBpdCBpcyBvZiB0aGUgZm9ybSBodHRwczovLyZsdDt0ZW5hbnQmZ3Q7LyZsdDt0ZW5hbnQmZ3Q7LCB3aGVyZSAmbHQ7dGVuYW50Jmd0OyBpcyB0aGUgZGlyZWN0b3J5IGhvc3QgKGUuZy4gaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tKSBhbmQgJmx0O3RlbmFudCZndDsgaXMgYSBpZGVudGlmaWVyIHdpdGhpbiB0aGUgZGlyZWN0b3J5IGl0c2VsZiAoZS5nLiBhIGRvbWFpbiBhc3NvY2lhdGVkIHRvIHRoZSB0ZW5hbnQsIHN1Y2ggYXMgY29udG9zby5vbm1pY3Jvc29mdC5jb20sIG9yIHRoZSBHVUlEIHJlcHJlc2VudGluZyB0aGUgVGVuYW50SUQgcHJvcGVydHkgb2YgdGhlIGRpcmVjdG9yeSlcbiAgICogLSBJbiBBenVyZSBCMkMsIGl0IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8vJmx0O2luc3RhbmNlJmd0Oy90ZnAvJmx0O3RlbmFudCZndDsvPHBvbGljeU5hbWU+L1xuICAgKiAtIERlZmF1bHQgdmFsdWUgaXM6IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiXG4gICAqL1xuICBwdWJsaWMgc2V0IGF1dGhvcml0eSh2YWwpIHtcbiAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlID0gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZSh2YWwsIHRoaXMudmFsaWRhdGVBdXRob3JpdHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZ2V0IHRoZSBhdXRob3JpdHkuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGF1dGhvcml0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmF1dGhvcml0eUluc3RhbmNlLkNhbm9uaWNhbEF1dGhvcml0eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHR1cm4gYXV0aG9yaXR5IHZhbGlkYXRpb24gb24vb2ZmLlxuICAgKiBXaGVuIHNldCB0byB0cnVlIChkZWZhdWx0KSwgTVNBTCB3aWxsIGNvbXBhcmUgdGhlIGFwcGxpY2F0aW9uXCJzIGF1dGhvcml0eSBhZ2FpbnN0IHdlbGwta25vd24gVVJMcyB0ZW1wbGF0ZXMgcmVwcmVzZW50aW5nIHdlbGwtZm9ybWVkIGF1dGhvcml0aWVzLiBJdCBpcyB1c2VmdWwgd2hlbiB0aGUgYXV0aG9yaXR5IGlzIG9idGFpbmVkIGF0IHJ1biB0aW1lIHRvIHByZXZlbnQgTVNBTCBmcm9tIGRpc3BsYXlpbmcgYXV0aGVudGljYXRpb24gcHJvbXB0cyBmcm9tIG1hbGljaW91cyBwYWdlcy5cbiAgICovXG4gIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVkaXJlY3QgVVJJIG9mIHRoZSBhcHBsaWNhdGlvbiwgdGhpcyBzaG91bGQgYmUgc2FtZSBhcyB0aGUgdmFsdWUgaW4gdGhlIGFwcGxpY2F0aW9uIHJlZ2lzdHJhdGlvbiBwb3J0YWwuXG4gICAqIERlZmF1bHRzIHRvIGB3aW5kb3cubG9jYXRpb24uaHJlZmAuXG4gICAqL1xuICBwcml2YXRlIF9yZWRpcmVjdFVyaTogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdG8gc2VuZCB0aGUgc3RhdGUgcGFyYW1ldGVyIHdpdGggYXV0aGVudGljYXRpb24gcmVxdWVzdFxuICAgICAqL1xuICAgIHByaXZhdGUgX3N0YXRlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVc2VkIHRvIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoaXMgbG9jYXRpb24gYWZ0ZXIgbG9nb3V0LlxuICAgKiBEZWZhdWx0cyB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxuICAgKi9cbiAgcHJpdmF0ZSBfcG9zdExvZ291dHJlZGlyZWN0VXJpOiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcblxuICBsb2FkRnJhbWVUaW1lb3V0OiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIF9uYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2lzQW5ndWxhcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3Byb3RlY3RlZFJlc291cmNlTWFwOiBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PjtcblxuICBwcml2YXRlIF91bnByb3RlY3RlZFJlc291cmNlczogQXJyYXk8c3RyaW5nPjtcblxuICBwcml2YXRlIHN0b3JlQXV0aFN0YXRlSW5Db29raWU6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3NpbGVudExvZ2luOiBib29sZWFuO1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIFVzZXJBZ2VudEFwcGxpY2F0aW9uIHdpdGggYSBnaXZlbiBjbGllbnRJZCBhbmQgYXV0aG9yaXR5LlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIC0gVGhlIGNsaWVudElEIG9mIHlvdXIgYXBwbGljYXRpb24sIHlvdSBzaG91bGQgZ2V0IHRoaXMgZnJvbSB0aGUgYXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1dGhvcml0eSAtIEEgVVJMIGluZGljYXRpbmcgYSBkaXJlY3RvcnkgdGhhdCBNU0FMIGNhbiB1c2UgdG8gb2J0YWluIHRva2Vucy5cbiAgICogLSBJbiBBenVyZSBBRCwgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly8mbHQ7aW5zdGFuY2U+LyZsdDt0ZW5hbnQmZ3Q7LFxcIHdoZXJlICZsdDtpbnN0YW5jZSZndDsgaXMgdGhlIGRpcmVjdG9yeSBob3N0IChlLmcuIGh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbSkgYW5kICZsdDt0ZW5hbnQmZ3Q7IGlzIGEgaWRlbnRpZmllciB3aXRoaW4gdGhlIGRpcmVjdG9yeSBpdHNlbGYgKGUuZy4gYSBkb21haW4gYXNzb2NpYXRlZCB0byB0aGUgdGVuYW50LCBzdWNoIGFzIGNvbnRvc28ub25taWNyb3NvZnQuY29tLCBvciB0aGUgR1VJRCByZXByZXNlbnRpbmcgdGhlIFRlbmFudElEIHByb3BlcnR5IG9mIHRoZSBkaXJlY3RvcnkpXG4gICAqIC0gSW4gQXp1cmUgQjJDLCBpdCBpcyBvZiB0aGUgZm9ybSBodHRwczovLyZsdDtpbnN0YW5jZSZndDsvdGZwLyZsdDt0ZW5hbnRJZCZndDsvJmx0O3BvbGljeU5hbWUmZ3Q7L1xuICAgKiAtIERlZmF1bHQgdmFsdWUgaXM6IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiXG4gICAqIEBwYXJhbSBfdG9rZW5SZWNlaXZlZENhbGxiYWNrIC0gIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgZ2V0IHRoZSBjYWxsIGJhY2sgb25jZSB0aGlzIEFQSSBpcyBjb21wbGV0ZWQgKGVpdGhlciBzdWNjZXNzZnVsbHkgb3Igd2l0aCBhIGZhaWx1cmUpLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbGlkYXRlQXV0aG9yaXR5IC0gIGJvb2xlYW4gdG8gdHVybiBhdXRob3JpdHkgdmFsaWRhdGlvbiBvbi9vZmYuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjbGllbnRJZDogc3RyaW5nLFxuICAgIGF1dGhvcml0eTogc3RyaW5nIHwgbnVsbCxcbiAgICB0b2tlblJlY2VpdmVkQ2FsbGJhY2s6IHRva2VuUmVjZWl2ZWRDYWxsYmFjayxcbiAgICBvcHRpb25zOlxuICAgICAge1xuICAgICAgICB2YWxpZGF0ZUF1dGhvcml0eT86IGJvb2xlYW4sXG4gICAgICAgIGNhY2hlTG9jYXRpb24/OiBzdHJpbmcsXG4gICAgICAgIHJlZGlyZWN0VXJpPzogc3RyaW5nIHwgKCgpID0+IHN0cmluZyksXG4gICAgICAgIHBvc3RMb2dvdXRSZWRpcmVjdFVyaT86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpLFxuICAgICAgICBsb2dnZXI/OiBMb2dnZXIsXG4gICAgICAgIGxvYWRGcmFtZVRpbWVvdXQ/OiBudW1iZXIsXG4gICAgICAgIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmw/OiBib29sZWFuLFxuICAgICAgICBzdGF0ZT86IHN0cmluZyxcbiAgICAgICAgaXNBbmd1bGFyPzogYm9vbGVhbixcbiAgICAgICAgdW5wcm90ZWN0ZWRSZXNvdXJjZXM/OiBBcnJheTxzdHJpbmc+XG4gICAgICAgIHByb3RlY3RlZFJlc291cmNlTWFwPzogTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4sXG4gICAgICAgIHN0b3JlQXV0aFN0YXRlSW5Db29raWU/OiBib29sZWFuXG4gICAgICB9ID0ge30pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgICB2YWxpZGF0ZUF1dGhvcml0eSA9IHRydWUsXG4gICAgICAgICAgY2FjaGVMb2NhdGlvbiA9IFwic2Vzc2lvblN0b3JhZ2VcIixcbiAgICAgICAgICByZWRpcmVjdFVyaSA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVswXS5zcGxpdChcIiNcIilbMF0sXG4gICAgICAgICAgcG9zdExvZ291dFJlZGlyZWN0VXJpID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdLnNwbGl0KFwiI1wiKVswXSxcbiAgICAgICAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKG51bGwpLFxuICAgICAgICAgIGxvYWRGcmFtZVRpbWVvdXQgPSA2MDAwLFxuICAgICAgICAgIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmwgPSB0cnVlLFxuICAgICAgICAgIHN0YXRlID0gXCJcIixcbiAgICAgICAgICBpc0FuZ3VsYXIgPSBmYWxzZSxcbiAgICAgICAgICB1bnByb3RlY3RlZFJlc291cmNlcyA9IG5ldyBBcnJheTxzdHJpbmc+KCksXG4gICAgICAgICAgcHJvdGVjdGVkUmVzb3VyY2VNYXAgPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKSxcbiAgICAgICAgICBzdG9yZUF1dGhTdGF0ZUluQ29va2llID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgdGhpcy5sb2FkRnJhbWVUaW1lb3V0ID0gbG9hZEZyYW1lVGltZW91dDtcbiAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgdGhpcy52YWxpZGF0ZUF1dGhvcml0eSA9IHZhbGlkYXRlQXV0aG9yaXR5O1xuICAgIHRoaXMuYXV0aG9yaXR5ID0gYXV0aG9yaXR5IHx8IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiO1xuICAgIHRoaXMuX3Rva2VuUmVjZWl2ZWRDYWxsYmFjayA9IHRva2VuUmVjZWl2ZWRDYWxsYmFjaztcbiAgICB0aGlzLl9yZWRpcmVjdFVyaSA9IHJlZGlyZWN0VXJpO1xuICAgIHRoaXMuX3Bvc3RMb2dvdXRyZWRpcmVjdFVyaSA9IHBvc3RMb2dvdXRSZWRpcmVjdFVyaTtcbiAgICB0aGlzLl9sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB0aGlzLl9hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgdGhpcy5fY2FjaGVMb2NhdGlvbiA9IGNhY2hlTG9jYXRpb247XG4gICAgdGhpcy5fbmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybCA9IG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmw7XG4gICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLl9pc0FuZ3VsYXIgPSBpc0FuZ3VsYXI7XG4gICAgdGhpcy5fdW5wcm90ZWN0ZWRSZXNvdXJjZXMgPSB1bnByb3RlY3RlZFJlc291cmNlcztcbiAgICB0aGlzLl9wcm90ZWN0ZWRSZXNvdXJjZU1hcCA9IHByb3RlY3RlZFJlc291cmNlTWFwO1xuICAgIGlmICghdGhpcy5fY2FjaGVMb2NhdGlvbnNbY2FjaGVMb2NhdGlvbl0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhY2hlIExvY2F0aW9uIGlzIG5vdCB2YWxpZC4gUHJvdmlkZWQgdmFsdWU6XCIgKyB0aGlzLl9jYWNoZUxvY2F0aW9uICsgXCIuUG9zc2libGUgdmFsdWVzIGFyZTogXCIgKyB0aGlzLl9jYWNoZUxvY2F0aW9ucy5sb2NhbFN0b3JhZ2UgKyBcIiwgXCIgKyB0aGlzLl9jYWNoZUxvY2F0aW9ucy5zZXNzaW9uU3RvcmFnZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2FjaGVTdG9yYWdlID0gbmV3IFN0b3JhZ2UodGhpcy5fY2FjaGVMb2NhdGlvbik7IC8vY2FjaGUga2V5cyBtc2FsXG4gICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSA9IHN0b3JlQXV0aFN0YXRlSW5Db29raWU7XG4gICAgd2luZG93Lm9wZW5lZFdpbmRvd3MgPSBbXTtcbiAgICB3aW5kb3cuYWN0aXZlUmVuZXdhbHMgPSB7fTtcbiAgICB3aW5kb3cucmVuZXdTdGF0ZXMgPSBbXTtcbiAgICB3aW5kb3cuY2FsbEJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzID0geyB9O1xuICAgIHdpbmRvdy5jYWxsQmFja3NNYXBwZWRUb1JlbmV3U3RhdGVzID0geyB9O1xuICAgIHdpbmRvdy5tc2FsID0gdGhpcztcbiAgICB2YXIgdXJsSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIHZhciBpc0NhbGxiYWNrID0gdGhpcy5pc0NhbGxiYWNrKHVybEhhc2gpO1xuXG4gICAgaWYgKCF0aGlzLl9pc0FuZ3VsYXIpIHtcbiAgICAgICAgaWYgKGlzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb25SZXNwb25zZS5jYWxsKHRoaXMsIHVybEhhc2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBlbmRpbmdDYWxsYmFjayA9IHRoaXMuX2NhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcbiAgICAgICAgICAgIGlmIChwZW5kaW5nQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NDYWxsQmFjayhwZW5kaW5nQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gY2FsbCB0aGUgY29uc3RydWN0b3IgY2FsbGJhY2sgd2l0aCB0aGUgdG9rZW4vZXJyb3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoPXdpbmRvdy5sb2NhdGlvbi5oYXNoXSAtIEhhc2ggZnJhZ21lbnQgb2YgVXJsLlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHByb2Nlc3NDYWxsQmFjayhoYXNoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiUHJvY2Vzc2luZyB0aGUgY2FsbGJhY2sgZnJvbSByZWRpcmVjdCByZXNwb25zZVwiKTtcbiAgICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gdGhpcy5nZXRSZXF1ZXN0SW5mbyhoYXNoKTtcbiAgICAgIHRoaXMuc2F2ZVRva2VuRnJvbUhhc2gocmVxdWVzdEluZm8pO1xuICAgICAgY29uc3QgdG9rZW4gPSByZXF1ZXN0SW5mby5wYXJhbWV0ZXJzW0NvbnN0YW50cy5hY2Nlc3NUb2tlbl0gfHwgcmVxdWVzdEluZm8ucGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl07XG4gICAgICBjb25zdCBlcnJvckRlc2MgPSByZXF1ZXN0SW5mby5wYXJhbWV0ZXJzW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXTtcbiAgICAgIGNvbnN0IGVycm9yID0gcmVxdWVzdEluZm8ucGFyYW1ldGVyc1tDb25zdGFudHMuZXJyb3JdO1xuICAgICAgdmFyIHRva2VuVHlwZTogc3RyaW5nO1xuXG4gICAgICBpZiAocmVxdWVzdEluZm8ucGFyYW1ldGVyc1tDb25zdGFudHMuYWNjZXNzVG9rZW5dKSB7XG4gICAgICAgICAgdG9rZW5UeXBlID0gQ29uc3RhbnRzLmFjY2Vzc1Rva2VuO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgdG9rZW5UeXBlID0gQ29uc3RhbnRzLmlkVG9rZW47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodGhpcy5fdG9rZW5SZWNlaXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Rva2VuUmVjZWl2ZWRDYWxsYmFjay5jYWxsKHRoaXMsIGVycm9yRGVzYywgdG9rZW4sIGVycm9yLCB0b2tlblR5cGUsICB0aGlzLmdldFVzZXJTdGF0ZSh0aGlzLl9jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgdGhpcy5zdG9yZUF1dGhTdGF0ZUluQ29va2llKSkpO1xuICAgICAgICAgIH1cblxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKFwiRXJyb3Igb2NjdXJyZWQgaW4gdG9rZW4gcmVjZWl2ZWQgY2FsbGJhY2sgZnVuY3Rpb246IFwiICsgZXJyKTtcbiAgICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZ2V0IHRoZSByZWRpcmVjdCB1cmkuIEV2YWx1YXRlcyByZWRpcmVjdFVyaSBpZiBpdHMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIHNpbXBseSByZXR1cm5zIGl0cyB2YWx1ZS5cbiAgICogQGlnbm9yZVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGdldFJlZGlyZWN0VXJpKCk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9yZWRpcmVjdFVyaSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3RVcmkoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0VXJpO1xuICB9XG5cblxuICAvKipcbiAgICogVXNlZCB0byBnZXQgdGhlIHBvc3QgbG9nb3V0IHJlZGlyZWN0IHVyaS4gRXZhbHVhdGVzIHBvc3RMb2dvdXRyZWRpcmVjdFVyaSBpZiBpdHMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIHNpbXBseSByZXR1cm5zIGl0cyB2YWx1ZS5cbiAgICogQGlnbm9yZVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcG9zdExvZ291dHJlZGlyZWN0VXJpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wb3N0TG9nb3V0cmVkaXJlY3RVcmkoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Bvc3RMb2dvdXRyZWRpcmVjdFVyaTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEluaXRpYXRlIHRoZSBsb2dpbiBwcm9jZXNzIGJ5IHJlZGlyZWN0aW5nIHRoZSB1c2VyIHRvIHRoZSBTVFMgYXV0aG9yaXphdGlvbiBlbmRwb2ludC5cbiAgICogQHBhcmFtIHtBcnJheS48c3RyaW5nPn0gc2NvcGVzIC0gUGVybWlzc2lvbnMgeW91IHdhbnQgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbi4gTm90IGFsbCBzY29wZXMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbiByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4dHJhUXVlcnlQYXJhbWV0ZXJzIC0gS2V5LXZhbHVlIHBhaXJzIHRvIHBhc3MgdG8gdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZlciBkdXJpbmcgdGhlIGludGVyYWN0aXZlIGF1dGhlbnRpY2F0aW9uIGZsb3cuXG4gICAqL1xuICBsb2dpblJlZGlyZWN0KHNjb3Blcz86IEFycmF5PHN0cmluZz4sIGV4dHJhUXVlcnlQYXJhbWV0ZXJzPzogc3RyaW5nKTogdm9pZCB7XG4gICAgLypcbiAgICAxLiBDcmVhdGUgbmF2aWdhdGUgdXJsXG4gICAgMi4gc2F2ZXMgdmFsdWUgaW4gY2FjaGVcbiAgICAzLiByZWRpcmVjdCB1c2VyIHRvIEFBRFxuICAgICAqL1xuICAgIGlmICh0aGlzLl9sb2dpbkluUHJvZ3Jlc3MpIHtcbiAgICAgIGlmICh0aGlzLl90b2tlblJlY2VpdmVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuX3Rva2VuUmVjZWl2ZWRDYWxsYmFjayhFcnJvckRlc2NyaXB0aW9uLmxvZ2luUHJvZ3Jlc3NFcnJvciwgbnVsbCwgRXJyb3JDb2Rlcy5sb2dpblByb2dyZXNzRXJyb3IsIENvbnN0YW50cy5pZFRva2VuLCB0aGlzLmdldFVzZXJTdGF0ZSh0aGlzLl9jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgdGhpcy5zdG9yZUF1dGhTdGF0ZUluQ29va2llKSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNjb3Blcykge1xuICAgICAgY29uc3QgaXNWYWxpZFNjb3BlID0gdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzKTtcbiAgICAgIGlmIChpc1ZhbGlkU2NvcGUgJiYgIVV0aWxzLmlzRW1wdHkoaXNWYWxpZFNjb3BlKSkge1xuICAgICAgICAgIGlmICh0aGlzLl90b2tlblJlY2VpdmVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGhpcy5fdG9rZW5SZWNlaXZlZENhbGxiYWNrKEVycm9yRGVzY3JpcHRpb24uaW5wdXRTY29wZXNFcnJvciwgbnVsbCwgRXJyb3JDb2Rlcy5pbnB1dFNjb3Blc0Vycm9yLCBDb25zdGFudHMuaWRUb2tlbiwgdGhpcy5nZXRVc2VyU3RhdGUodGhpcy5fY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnN0YXRlTG9naW4sIHRoaXMuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSkpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlcyA9IHRoaXMuZmlsdGVyU2NvcGVzKHNjb3Blcyk7XG4gICAgfVxuXG4gICAgICB2YXIgaWRUb2tlbk9iamVjdDtcbiAgICAgIGlkVG9rZW5PYmplY3QgPSB0aGlzLmV4dHJhY3RBREFMSWRUb2tlbigpO1xuICAgICAgaWYgKGlkVG9rZW5PYmplY3QgJiYgIXNjb3Blcykge1xuICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiQURBTCdzIGlkVG9rZW4gZXhpc3RzLiBFeHRyYWN0aW5nIGxvZ2luIGluZm9ybWF0aW9uIGZyb20gQURBTCdzIGlkVG9rZW4gXCIpO1xuICAgICAgICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzID0gVXRpbHMuY29uc3RydWN0VW5pZmllZENhY2hlRXh0cmFRdWVyeVBhcmFtZXRlcihpZFRva2VuT2JqZWN0LCBleHRyYVF1ZXJ5UGFyYW1ldGVycyk7XG4gICAgICAgICAgdGhpcy5fc2lsZW50TG9naW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuU2lsZW50KFt0aGlzLmNsaWVudElkXSwgdGhpcy5hdXRob3JpdHksIHRoaXMuZ2V0VXNlcigpLCBleHRyYVF1ZXJ5UGFyYW1ldGVycylcbiAgICAgICAgICAgICAgLnRoZW4oKGlkVG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3NpbGVudExvZ2luID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIlVuaWZpZWQgY2FjaGUgY2FsbCBpcyBzdWNjZXNzZnVsXCIpO1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Rva2VuUmVjZWl2ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Rva2VuUmVjZWl2ZWRDYWxsYmFjay5jYWxsKHRoaXMsIG51bGwsIGlkVG9rZW4sIG51bGwsIENvbnN0YW50cy5pZFRva2VuLCB0aGlzLmdldFVzZXJTdGF0ZSh0aGlzLl9zaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fc2lsZW50TG9naW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihcIkVycm9yIG9jY3VycmVkIGR1cmluZyB1bmlmaWVkIGNhY2hlIEFUU1wiKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5SZWRpcmVjdEhlbHBlcihzY29wZXMsIGV4dHJhUXVlcnlQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxvZ2luUmVkaXJlY3RIZWxwZXIoc2NvcGVzLCBleHRyYVF1ZXJ5UGFyYW1ldGVycyk7XG4gICAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvZ2luUmVkaXJlY3RIZWxwZXIoc2NvcGVzPzogQXJyYXk8c3RyaW5nPiwgZXh0cmFRdWVyeVBhcmFtZXRlcnM/OiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2xvZ2luSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlLlJlc29sdmVFbmRwb2ludHNBc3luYygpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgQXV0aGVudGljYXRpb25SZXF1ZXN0UGFyYW1ldGVycyh0aGlzLmF1dGhvcml0eUluc3RhbmNlLCB0aGlzLmNsaWVudElkLCBzY29wZXMsIFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4sIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSwgdGhpcy5fc3RhdGUpO1xuICAgICAgICAgICAgICBpZiAoZXh0cmFRdWVyeVBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWVzdC5leHRyYVF1ZXJ5UGFyYW1ldGVycyA9IGV4dHJhUXVlcnlQYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIGxvZ2luU3RhcnRQYWdlID0gdGhpcy5fY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmFuZ3VsYXJMb2dpblJlcXVlc3QpO1xuICAgICAgICAgICAgICBpZiAoIWxvZ2luU3RhcnRQYWdlIHx8IGxvZ2luU3RhcnRQYWdlID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICBsb2dpblN0YXJ0UGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmFuZ3VsYXJMb2dpblJlcXVlc3QsIFwiXCIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luUmVxdWVzdCwgbG9naW5TdGFydFBhZ2UsIHRoaXMuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSk7XG4gICAgICAgICAgICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5sb2dpbkVycm9yLCBcIlwiKTtcbiAgICAgICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnN0YXRlTG9naW4sIGF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgdGhpcy5zdG9yZUF1dGhTdGF0ZUluQ29va2llKTtcbiAgICAgICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgYXV0aGVudGljYXRpb25SZXF1ZXN0Lm5vbmNlLCB0aGlzLnN0b3JlQXV0aFN0YXRlSW5Db29raWUpO1xuICAgICAgICAgICAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBcIlwiKTtcbiAgICAgICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBcIlwiKTtcbiAgICAgICAgICAgICAgY29uc3QgYXV0aG9yaXR5S2V5ID0gQ29uc3RhbnRzLmF1dGhvcml0eSArIENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlciArIGF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZTtcbiAgICAgICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oYXV0aG9yaXR5S2V5LCB0aGlzLmF1dGhvcml0eSwgdGhpcy5zdG9yZUF1dGhTdGF0ZUluQ29va2llKTtcbiAgICAgICAgICAgICAgY29uc3QgdXJsTmF2aWdhdGUgPSBhdXRoZW50aWNhdGlvblJlcXVlc3QuY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzKSAgKyBDb25zdGFudHMucmVzcG9uc2VfbW9kZV9mcmFnbWVudDtcbiAgICAgICAgICAgICAgdGhpcy5wcm9tcHRVc2VyKHVybE5hdmlnYXRlKTtcbiAgICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSB0aGUgbG9naW4gcHJvY2VzcyBieSBvcGVuaW5nIGEgcG9wdXAgd2luZG93LlxuICAgKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+fSBzY29wZXMgLSBQZXJtaXNzaW9ucyB5b3Ugd2FudCBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuLiBOb3QgYWxsIHNjb3BlcyBhcmUgIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbiByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4dHJhUXVlcnlQYXJhbWV0ZXJzIC0gS2V5LXZhbHVlIHBhaXJzIHRvIHBhc3MgdG8gdGhlIFNUUyBkdXJpbmcgdGhlIGludGVyYWN0aXZlIGF1dGhlbnRpY2F0aW9uIGZsb3cuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlLjxzdHJpbmc+fSAtIEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoaXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZCwgb3IgcmVqZWN0ZWQgaWYgYW4gZXJyb3Igd2FzIHJhaXNlZC4gUmV0dXJucyB0aGUgdG9rZW4gb3IgZXJyb3IuXG4gICAqL1xuICBsb2dpblBvcHVwKHNjb3BlcyA/OiBBcnJheTxzdHJpbmc+LCBleHRyYVF1ZXJ5UGFyYW1ldGVycz86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgLypcbiAgICAxLiBDcmVhdGUgbmF2aWdhdGUgdXJsXG4gICAgMi4gc2F2ZXMgdmFsdWUgaW4gY2FjaGVcbiAgICAzLiByZWRpcmVjdCB1c2VyIHRvIEFBRFxuICAgICAqL1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9sb2dpbkluUHJvZ3Jlc3MpIHtcbiAgICAgICAgcmVqZWN0KEVycm9yQ29kZXMubG9naW5Qcm9ncmVzc0Vycm9yICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1ldGVyICsgRXJyb3JEZXNjcmlwdGlvbi5sb2dpblByb2dyZXNzRXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzY29wZXMpIHtcbiAgICAgICAgY29uc3QgaXNWYWxpZFNjb3BlID0gdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzKTtcbiAgICAgICAgaWYgKGlzVmFsaWRTY29wZSAmJiAhVXRpbHMuaXNFbXB0eShpc1ZhbGlkU2NvcGUpKSB7XG4gICAgICAgICAgcmVqZWN0KEVycm9yQ29kZXMuaW5wdXRTY29wZXNFcnJvciArIENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlciArIEVycm9yRGVzY3JpcHRpb24uaW5wdXRTY29wZXNFcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGVzID0gdGhpcy5maWx0ZXJTY29wZXMoc2NvcGVzKTtcbiAgICAgIH1cblxuICAgICAgICB2YXIgaWRUb2tlbk9iamVjdDtcbiAgICAgICAgaWRUb2tlbk9iamVjdCA9IHRoaXMuZXh0cmFjdEFEQUxJZFRva2VuKCk7XG4gICAgICAgIGlmIChpZFRva2VuT2JqZWN0ICYmICFzY29wZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiQURBTCdzIGlkVG9rZW4gZXhpc3RzLiBFeHRyYWN0aW5nIGxvZ2luIGluZm9ybWF0aW9uIGZyb20gQURBTCdzIGlkVG9rZW4gXCIpO1xuICAgICAgICAgICAgZXh0cmFRdWVyeVBhcmFtZXRlcnMgPSBVdGlscy5jb25zdHJ1Y3RVbmlmaWVkQ2FjaGVFeHRyYVF1ZXJ5UGFyYW1ldGVyKGlkVG9rZW5PYmplY3QsIGV4dHJhUXVlcnlQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIHRoaXMuX3NpbGVudExvZ2luID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuU2lsZW50KFt0aGlzLmNsaWVudElkXSwgdGhpcy5hdXRob3JpdHksIHRoaXMuZ2V0VXNlcigpLCBleHRyYVF1ZXJ5UGFyYW1ldGVycylcbiAgICAgICAgICAgICAgICAudGhlbigoaWRUb2tlbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaWxlbnRMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIlVuaWZpZWQgY2FjaGUgY2FsbCBpcyBzdWNjZXNzZnVsXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlkVG9rZW4pO1xuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaWxlbnRMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBkdXJpbmcgdW5pZmllZCBjYWNoZSBBVFNcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Qb3B1cEhlbHBlcihyZXNvbHZlLCByZWplY3QsIHNjb3BlcywgZXh0cmFRdWVyeVBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5Qb3B1cEhlbHBlcihyZXNvbHZlLCByZWplY3QsIHNjb3BlcywgZXh0cmFRdWVyeVBhcmFtZXRlcnMgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvZ2luUG9wdXBIZWxwZXIoIHJlc29sdmU6IGFueSAsIHJlamVjdDogYW55LCBzY29wZXM6IEFycmF5PHN0cmluZz4sIGV4dHJhUXVlcnlQYXJhbWV0ZXJzPzogc3RyaW5nKSB7XG4gICAgICAvL1RPRE8gd2h5IHRoaXMgaXMgbmVlZGVkIG9ubHkgZm9yIGxvZ2lucG9wdXBcbiAgICAgIGlmICghc2NvcGVzKSB7XG4gICAgICAgICAgc2NvcGVzID0gW3RoaXMuY2xpZW50SWRdO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2NvcGUgPSBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgIHZhciBwb3BVcFdpbmRvdyA9IHRoaXMub3BlbldpbmRvdyhcImFib3V0OmJsYW5rXCIsIFwiX2JsYW5rXCIsIDEsIHRoaXMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICBpZiAoIXBvcFVwV2luZG93KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9sb2dpbkluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlLlJlc29sdmVFbmRwb2ludHNBc3luYygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBBdXRoZW50aWNhdGlvblJlcXVlc3RQYXJhbWV0ZXJzKHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UsIHRoaXMuY2xpZW50SWQsIHNjb3BlcywgUmVzcG9uc2VUeXBlcy5pZF90b2tlbiwgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgICAgaWYgKGV4dHJhUXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWVzdC5leHRyYVF1ZXJ5UGFyYW1ldGVycyA9IGV4dHJhUXVlcnlQYXJhbWV0ZXJzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0aGlzLnN0b3JlQXV0aFN0YXRlSW5Db29raWUpO1xuICAgICAgICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5sb2dpbkVycm9yLCBcIlwiKTtcbiAgICAgICAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCBhdXRoZW50aWNhdGlvblJlcXVlc3Qubm9uY2UsIHRoaXMuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSk7XG4gICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgXCJcIik7XG4gICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBcIlwiKTtcbiAgICAgICAgICBjb25zdCBhdXRob3JpdHlLZXkgPSBDb25zdGFudHMuYXV0aG9yaXR5ICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1ldGVyICsgYXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlO1xuICAgICAgICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKGF1dGhvcml0eUtleSwgdGhpcy5hdXRob3JpdHksIHRoaXMuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSk7XG4gICAgICAgICAgY29uc3QgdXJsTmF2aWdhdGUgPSBhdXRoZW50aWNhdGlvblJlcXVlc3QuY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzKSAgKyBDb25zdGFudHMucmVzcG9uc2VfbW9kZV9mcmFnbWVudDtcbiAgICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChhdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xuICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5sb2dpbjtcbiAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soYXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICBpZiAocG9wVXBXaW5kb3cpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm9QaWkoXCJOYXZpZ2F0ZWQgUG9wdXAgd2luZG93IHRvOlwiICsgdXJsTmF2aWdhdGUpO1xuICAgICAgICAgICAgICBwb3BVcFdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsTmF2aWdhdGU7XG4gICAgICAgICAgfVxuXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oRXJyb3JDb2Rlcy5lbmRwb2ludFJlc29sdXRpb25FcnJvciArIFwiOlwiICsgRXJyb3JEZXNjcmlwdGlvbi5lbmRwb2ludFJlc29sdXRpb25FcnJvcik7XG4gICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgRXJyb3JDb2Rlcy5lbmRwb2ludFJlc29sdXRpb25FcnJvcik7XG4gICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBFcnJvckRlc2NyaXB0aW9uLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yKTtcbiAgICAgICAgICBpZiAocmVqZWN0KSB7XG4gICAgICAgICAgICAgIHJlamVjdChFcnJvckNvZGVzLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yICsgXCI6XCIgKyBFcnJvckRlc2NyaXB0aW9uLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocG9wVXBXaW5kb3cpIHtcbiAgICAgICAgICAgICAgcG9wVXBXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5fbG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgICogVXNlZCB0byByZWRpcmVjdCB0aGUgYnJvd3NlciB0byB0aGUgU1RTIGF1dGhvcml6YXRpb24gZW5kcG9pbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxOYXZpZ2F0ZSAtIFVSTCBvZiB0aGUgYXV0aG9yaXphdGlvbiBlbmRwb2ludFxuICAgICogQGhpZGRlblxuICAgICovXG4gIHByaXZhdGUgcHJvbXB0VXNlcih1cmxOYXZpZ2F0ZTogc3RyaW5nKSB7XG4gICAgICBpZiAodXJsTmF2aWdhdGUgJiYgIVV0aWxzLmlzRW1wdHkodXJsTmF2aWdhdGUpKSB7XG4gICAgICB0aGlzLl9sb2dnZXIuaW5mb1BpaShcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGUpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsTmF2aWdhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIk5hdmlnYXRlIHVybCBpcyBlbXB0eVwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBzZW5kIHRoZSB1c2VyIHRvIHRoZSByZWRpcmVjdF91cmkgYWZ0ZXIgYXV0aGVudGljYXRpb24gaXMgY29tcGxldGUuIFRoZSB1c2VyXCJzIGJlYXJlciB0b2tlbiBpcyBhdHRhY2hlZCB0byB0aGUgVVJJIGZyYWdtZW50IGFzIGFuIGlkX3Rva2VuL2FjY2Vzc190b2tlbiBmaWVsZC5cbiAgICogVGhpcyBmdW5jdGlvbiBhbHNvIGNsb3NlcyB0aGUgcG9wdXAgd2luZG93IGFmdGVyIHJlZGlyZWN0aW9uLlxuICAgKiBAaGlkZGVuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgb3BlbldpbmRvdyh1cmxOYXZpZ2F0ZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBpbnRlcnZhbDogbnVtYmVyLCBpbnN0YW5jZTogdGhpcywgcmVzb2x2ZT86IEZ1bmN0aW9uLCByZWplY3Q/OiBGdW5jdGlvbik6IFdpbmRvdyB7XG4gICAgdmFyIHBvcHVwV2luZG93ID0gdGhpcy5vcGVuUG9wdXAodXJsTmF2aWdhdGUsIHRpdGxlLCBDb25zdGFudHMucG9wVXBXaWR0aCwgQ29uc3RhbnRzLnBvcFVwSGVpZ2h0KTtcbiAgICBpZiAocG9wdXBXaW5kb3cgPT0gbnVsbCkge1xuICAgICAgaW5zdGFuY2UuX2xvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgaW5zdGFuY2UuX2FjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKEVycm9yQ29kZXMucG9wVXBXaW5kb3dFcnJvciArIFwiOlwiICsgRXJyb3JEZXNjcmlwdGlvbi5wb3BVcFdpbmRvd0Vycm9yKTtcbiAgICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIEVycm9yQ29kZXMucG9wVXBXaW5kb3dFcnJvcik7XG4gICAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIEVycm9yRGVzY3JpcHRpb24ucG9wVXBXaW5kb3dFcnJvcik7XG4gICAgICBpZiAocmVqZWN0KSB7XG4gICAgICAgIHJlamVjdChFcnJvckNvZGVzLnBvcFVwV2luZG93RXJyb3IgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWV0ZXIgKyBFcnJvckRlc2NyaXB0aW9uLnBvcFVwV2luZG93RXJyb3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgd2luZG93Lm9wZW5lZFdpbmRvd3MucHVzaChwb3B1cFdpbmRvdyk7XG4gICAgdmFyIHBvbGxUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAocG9wdXBXaW5kb3cgJiYgcG9wdXBXaW5kb3cuY2xvc2VkICYmIGluc3RhbmNlLl9sb2dpbkluUHJvZ3Jlc3MpIHtcbiAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgIHJlamVjdChFcnJvckNvZGVzLnVzZXJDYW5jZWxsZWRFcnJvciArIENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlciArIEVycm9yRGVzY3JpcHRpb24udXNlckNhbmNlbGxlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChwb2xsVGltZXIpO1xuICAgICAgICBpZiAodGhpcy5faXNBbmd1bGFyKSB7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChcIm1zYWw6cG9wVXBDbG9zZWRcIiwgRXJyb3JDb2Rlcy51c2VyQ2FuY2VsbGVkRXJyb3IgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWV0ZXIgKyBFcnJvckRlc2NyaXB0aW9uLnVzZXJDYW5jZWxsZWRFcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2UuX2xvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICBpbnN0YW5jZS5fYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcG9wVXBXaW5kb3dMb2NhdGlvbiA9IHBvcHVwV2luZG93LmxvY2F0aW9uO1xuICAgICAgICBpZiAocG9wVXBXaW5kb3dMb2NhdGlvbi5ocmVmLmluZGV4T2YodGhpcy5nZXRSZWRpcmVjdFVyaSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChwb2xsVGltZXIpO1xuICAgICAgICAgIGluc3RhbmNlLl9sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBpbnN0YW5jZS5fYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiQ2xvc2luZyBwb3B1cCB3aW5kb3dcIik7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzQW5ndWxhcikge1xuICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChcIm1zYWw6cG9wVXBIYXNoQ2hhbmdlZFwiLCBwb3BVcFdpbmRvd0xvY2F0aW9uLmhhc2gpO1xuICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdpbmRvdy5vcGVuZWRXaW5kb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbmVkV2luZG93c1tpXS5jbG9zZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vQ3Jvc3MgRG9tYWluIHVybCBjaGVjayBlcnJvci4gV2lsbCBiZSB0aHJvd24gdW50aWwgQUFEIHJlZGlyZWN0cyB0aGUgdXNlciBiYWNrIHRvIHRoZSBhcHBcInMgcm9vdCBwYWdlIHdpdGggdGhlIHRva2VuLiBObyBuZWVkIHRvIGxvZyBvciB0aHJvdyB0aGlzIGVycm9yIGFzIGl0IHdpbGwgY3JlYXRlIHVubmVjZXNzYXJ5IHRyYWZmaWMuXG4gICAgICB9XG4gICAgfSxcbiAgICAgIGludGVydmFsKTtcblxuICAgIHJldHVybiBwb3B1cFdpbmRvdztcbiAgfVxuXG4gIHByaXZhdGUgYnJvYWRjYXN0KGV2ZW50TmFtZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpIHtcbiAgICAgIHZhciBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGRldGFpbDogZGF0YSB9KTtcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBsb2cgb3V0IHRoZSBjdXJyZW50IHVzZXIsIGFuZCByZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgcG9zdExvZ291dFJlZGlyZWN0VXJpLlxuICAgKiBEZWZhdWx0cyBiZWhhdmlvdXIgaXMgdG8gcmVkaXJlY3QgdGhlIHVzZXIgdG8gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYC5cbiAgICovXG4gIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICB0aGlzLl91c2VyID0gbnVsbDtcbiAgICBsZXQgbG9nb3V0ID0gXCJcIjtcbiAgICBpZiAodGhpcy5nZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKSkge1xuICAgICAgbG9nb3V0ID0gXCJwb3N0X2xvZ291dF9yZWRpcmVjdF91cmk9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5nZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsTmF2aWdhdGUgPSB0aGlzLmF1dGhvcml0eSArIFwiL29hdXRoMi92Mi4wL2xvZ291dD9cIiArIGxvZ291dDtcbiAgICB0aGlzLnByb21wdFVzZXIodXJsTmF2aWdhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gY29uZmlndXJlIHRoZSBwb3B1cCB3aW5kb3cgZm9yIGxvZ2luLlxuICAgKiBAaWdub3JlXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByb3RlY3RlZCBjbGVhckNhY2hlKCk6IHZvaWQge1xuICAgICAgd2luZG93LnJlbmV3U3RhdGVzID0gW107XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbkl0ZW1zID0gdGhpcy5fY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy51c2VySWRlbnRpZmllcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbkl0ZW1zW2ldLmtleSkpO1xuICAgIH1cbiAgICB0aGlzLl9jYWNoZVN0b3JhZ2UucmVzZXRDYWNoZUl0ZW1zKCk7XG4gICAgdGhpcy5fY2FjaGVTdG9yYWdlLmNsZWFyQ29va2llKCk7XG4gIH1cblxuICAgcHJvdGVjdGVkIGNsZWFyQ2FjaGVGb3JTY29wZShhY2Nlc3NUb2tlbjogc3RyaW5nKSB7XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbkl0ZW1zID0gdGhpcy5fY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy51c2VySWRlbnRpZmllcik7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgdG9rZW4gPSBhY2Nlc3NUb2tlbkl0ZW1zW2ldO1xuICAgICAgICAgIGlmICh0b2tlbi52YWx1ZS5hY2Nlc3NUb2tlbiA9PT0gYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkodG9rZW4ua2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHBvcHVwIHdpbmRvdyBmb3IgbG9naW4uXG4gICAqIEBpZ25vcmVcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBvcGVuUG9wdXAodXJsTmF2aWdhdGU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgcG9wVXBXaWR0aDogbnVtYmVyLCBwb3BVcEhlaWdodDogbnVtYmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICogYWRkaW5nIHdpbkxlZnQgYW5kIHdpblRvcCB0byBhY2NvdW50IGZvciBkdWFsIG1vbml0b3JcbiAgICAgICAqIHVzaW5nIHNjcmVlbkxlZnQgYW5kIHNjcmVlblRvcCBmb3IgSUU4IGFuZCBlYXJsaWVyXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdpbkxlZnQgPSB3aW5kb3cuc2NyZWVuTGVmdCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogd2luZG93LnNjcmVlblg7XG4gICAgICBjb25zdCB3aW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wID8gd2luZG93LnNjcmVlblRvcCA6IHdpbmRvdy5zY3JlZW5ZO1xuICAgICAgLyoqXG4gICAgICAgKiB3aW5kb3cuaW5uZXJXaWR0aCBkaXNwbGF5cyBicm93c2VyIHdpbmRvd1wicyBoZWlnaHQgYW5kIHdpZHRoIGV4Y2x1ZGluZyB0b29sYmFyc1xuICAgICAgICogdXNpbmcgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIGZvciBJRTggYW5kIGVhcmxpZXJcbiAgICAgICAqL1xuICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3QgbGVmdCA9ICgod2lkdGggLyAyKSAtIChwb3BVcFdpZHRoIC8gMikpICsgd2luTGVmdDtcbiAgICAgIGNvbnN0IHRvcCA9ICgoaGVpZ2h0IC8gMikgLSAocG9wVXBIZWlnaHQgLyAyKSkgKyB3aW5Ub3A7XG5cbiAgICAgIGNvbnN0IHBvcHVwV2luZG93ID0gd2luZG93Lm9wZW4odXJsTmF2aWdhdGUsIHRpdGxlLCBcIndpZHRoPVwiICsgcG9wVXBXaWR0aCArIFwiLCBoZWlnaHQ9XCIgKyBwb3BVcEhlaWdodCArIFwiLCB0b3A9XCIgKyB0b3AgKyBcIiwgbGVmdD1cIiArIGxlZnQpO1xuICAgICAgaWYgKHBvcHVwV2luZG93LmZvY3VzKSB7XG4gICAgICAgIHBvcHVwV2luZG93LmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwb3B1cFdpbmRvdztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoXCJlcnJvciBvcGVuaW5nIHBvcHVwIFwiICsgZS5tZXNzYWdlKTtcbiAgICAgIHRoaXMuX2xvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gdmFsaWRhdGUgdGhlIHNjb3BlcyBpbnB1dCBwYXJhbWV0ZXIgcmVxdWVzdGVkICBieSB0aGUgZGV2ZWxvcGVyLlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHNjb3BlcyAtIERldmVsb3BlciByZXF1ZXN0ZWQgcGVybWlzc2lvbnMuIE5vdCBhbGwgc2NvcGVzIGFyZSBndWFyYW50ZWVkIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQuXG4gICAqIEBpZ25vcmVcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHtcbiAgICBpZiAoIXNjb3BlcyB8fCBzY29wZXMubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuIFwiU2NvcGVzIGNhbm5vdCBiZSBwYXNzZWQgYXMgYW4gZW1wdHkgYXJyYXlcIjtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NvcGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQVBJIGRvZXMgbm90IGFjY2VwdCBub24tYXJyYXkgc2NvcGVzXCIpO1xuICAgIH1cblxuICAgIGlmIChzY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA+IC0xKSB7XG4gICAgICBpZiAoc2NvcGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIFwiQ2xpZW50SWQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgYXMgYSBzaW5nbGUgc2NvcGVcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICAvKipcbiAgICAqIFVzZWQgdG8gcmVtb3ZlIG9wZW5pZCBhbmQgcHJvZmlsZSBmcm9tIHRoZSBsaXN0IG9mIHNjb3BlcyBwYXNzZWQgYnkgdGhlIGRldmVsb3Blci5UaGVzZSBzY29wZXMgYXJlIGFkZGVkIGJ5IGRlZmF1bHRcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICBwcml2YXRlIGZpbHRlclNjb3BlcyhzY29wZXM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcbiAgICBzY29wZXMgPSBzY29wZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudCAhPT0gXCJvcGVuaWRcIjtcbiAgICB9KTtcblxuICAgIHNjb3BlcyA9IHNjb3Blcy5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50ICE9PSBcInByb2ZpbGVcIjtcbiAgICB9KTtcblxuICAgIHJldHVybiBzY29wZXM7XG4gIH1cbiAgLyoqXG4gICAqIFVzZWQgdG8gYWRkIHRoZSBkZXZlbG9wZXIgcmVxdWVzdGVkIGNhbGxiYWNrIHRvIHRoZSBhcnJheSBvZiBjYWxsYmFja3MgZm9yIHRoZSBzcGVjaWZpZWQgc2NvcGVzLiBUaGUgdXBkYXRlZCBhcnJheSBpcyBzdG9yZWQgb24gdGhlIHdpbmRvdyBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjb3BlIC0gRGV2ZWxvcGVyIHJlcXVlc3RlZCBwZXJtaXNzaW9ucy4gTm90IGFsbCBzY29wZXMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbiByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cGVjdGVkU3RhdGUgLSBVbmlxdWUgc3RhdGUgaWRlbnRpZmllciAoZ3VpZCkuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgLSBUaGUgcmVzb2x2ZSBmdW5jdGlvbiBvZiB0aGUgcHJvbWlzZSBvYmplY3QuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCAtIFRoZSByZWplY3QgZnVuY3Rpb24gb2YgdGhlIHByb21pc2Ugb2JqZWN0LlxuICAgKiBAaWdub3JlXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgcmVnaXN0ZXJDYWxsYmFjayhleHBlY3RlZFN0YXRlOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcsIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgd2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSA9IGV4cGVjdGVkU3RhdGU7XG4gICAgaWYgKCF3aW5kb3cuY2FsbEJhY2tzTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSkge1xuICAgICAgICB3aW5kb3cuY2FsbEJhY2tzTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9IFtdO1xuICAgIH1cbiAgICB3aW5kb3cuY2FsbEJhY2tzTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXS5wdXNoKHsgcmVzb2x2ZTogcmVzb2x2ZSwgcmVqZWN0OiByZWplY3QgfSk7XG4gICAgaWYgKCF3aW5kb3cuY2FsbEJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XG4gICAgICAgIHdpbmRvdy5jYWxsQmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPVxuICAgICAgICAoZXJyb3JEZXNjOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcsIGVycm9yOiBzdHJpbmcsIHRva2VuVHlwZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgd2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSA9IG51bGw7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cuY2FsbEJhY2tzTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yRGVzYyB8fCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgd2luZG93LmNhbGxCYWNrc01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV1baV0ucmVqZWN0KGVycm9yRGVzYyArIENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlciArIGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgICAgd2luZG93LmNhbGxCYWNrc01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV1baV0ucmVzb2x2ZSh0b2tlbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLndhcm5pbmcoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHdpbmRvdy5jYWxsQmFja3NNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID0gbnVsbDtcbiAgICAgICAgICB3aW5kb3cuY2FsbEJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9XG4gIH1cblxuXG5wcm90ZWN0ZWQgZ2V0Q2FjaGVkVG9rZW5JbnRlcm5hbChzY29wZXMgOiBBcnJheTxzdHJpbmc+ICwgdXNlcjogVXNlcik6IENhY2hlUmVzdWx0IHtcbiAgICBjb25zdCB1c2VyT2JqZWN0ID0gdXNlciA/IHVzZXIgOiB0aGlzLmdldFVzZXIoKTtcbiAgICBpZiAoIXVzZXJPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBhdXRoZW50aWNhdGlvblJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnM7XG4gICAgbGV0IG5ld0F1dGhvcml0eSA9IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPyB0aGlzLmF1dGhvcml0eUluc3RhbmNlIDogQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZSh0aGlzLmF1dGhvcml0eSwgdGhpcy52YWxpZGF0ZUF1dGhvcml0eSk7XG5cbiAgICBpZiAoVXRpbHMuY29tcGFyZU9iamVjdHModXNlck9iamVjdCwgdGhpcy5nZXRVc2VyKCkpKSB7XG4gICAgICAgIGlmIChzY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA+IC0xKSB7XG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgQXV0aGVudGljYXRpb25SZXF1ZXN0UGFyYW1ldGVycyhuZXdBdXRob3JpdHksIHRoaXMuY2xpZW50SWQsIHNjb3BlcywgUmVzcG9uc2VUeXBlcy5pZF90b2tlbiwgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgQXV0aGVudGljYXRpb25SZXF1ZXN0UGFyYW1ldGVycyhuZXdBdXRob3JpdHksIHRoaXMuY2xpZW50SWQsIHNjb3BlcywgUmVzcG9uc2VUeXBlcy50b2tlbiwgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgQXV0aGVudGljYXRpb25SZXF1ZXN0UGFyYW1ldGVycyhuZXdBdXRob3JpdHksIHRoaXMuY2xpZW50SWQsIHNjb3BlcywgUmVzcG9uc2VUeXBlcy5pZF90b2tlbl90b2tlbiwgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLCB0aGlzLl9zdGF0ZSk7XG4gICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldENhY2hlZFRva2VuKGF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgdXNlcik7XG59XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZ2V0IHRva2VuIGZvciB0aGUgc3BlY2lmaWVkIHNldCBvZiBzY29wZXMgZnJvbSB0aGUgY2FjaGVcbiAgICogQHBhcmFtIHtBdXRoZW50aWNhdGlvblJlcXVlc3RQYXJhbWV0ZXJzfSBhdXRoZW50aWNhdGlvblJlcXVlc3QgLSBSZXF1ZXN0IHNlbnQgdG8gdGhlIFNUUyB0byBvYnRhaW4gYW4gaWRfdG9rZW4vYWNjZXNzX3Rva2VuXG4gICAqIEBwYXJhbSB7VXNlcn0gdXNlciAtIFVzZXIgZm9yIHdoaWNoIHRoZSBzY29wZXMgd2VyZSByZXF1ZXN0ZWRcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDYWNoZWRUb2tlbihhdXRoZW50aWNhdGlvblJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnMsIHVzZXI6IFVzZXIpOiBDYWNoZVJlc3VsdCB7XG4gICAgbGV0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtOiBBY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IG51bGw7XG4gICAgY29uc3Qgc2NvcGVzID0gYXV0aGVudGljYXRpb25SZXF1ZXN0LnNjb3BlcztcbiAgICBjb25zdCB0b2tlbkNhY2hlSXRlbXMgPSB0aGlzLl9jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKHRoaXMuY2xpZW50SWQsIHVzZXIgPyB1c2VyLnVzZXJJZGVudGlmaWVyIDogbnVsbCk7IC8vZmlsdGVyIGJ5IGNsaWVudElkIGFuZCB1c2VyXG4gICAgaWYgKHRva2VuQ2FjaGVJdGVtcy5sZW5ndGggPT09IDApIHsgLy8gTm8gbWF0Y2ggZm91bmQgYWZ0ZXIgaW5pdGlhbCBmaWx0ZXJpbmdcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXM6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiA9IFtdO1xuICAgIC8vaWYgbm8gYXV0aG9yaXR5IHBhc3NlZFxuICAgIGlmICghYXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eSkge1xuICAgICAgLy9maWx0ZXIgYnkgc2NvcGVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlSXRlbSA9IHRva2VuQ2FjaGVJdGVtc1tpXTtcbiAgICAgICAgY29uc3QgY2FjaGVkU2NvcGVzID0gY2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpO1xuICAgICAgICBpZiAoVXRpbHMuY29udGFpbnNTY29wZShjYWNoZWRTY29wZXMsIHNjb3BlcykpIHtcbiAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goY2FjaGVJdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2lmIG9ubHkgb25lIGNhY2hlZCB0b2tlbiBmb3VuZFxuICAgICAgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gZmlsdGVyZWRJdGVtc1swXTtcblxuICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5hdXRob3JpdHksIHRoaXMudmFsaWRhdGVBdXRob3JpdHkpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXJyb3JEZXNjOiBcIlRoZSBjYWNoZSBjb250YWlucyBtdWx0aXBsZSB0b2tlbnMgc2F0aXNmeWluZyB0aGUgcmVxdWlyZW1lbnRzLiBDYWxsIEFjcXVpcmVUb2tlbiBhZ2FpbiBwcm92aWRpbmcgbW9yZSByZXF1aXJlbWVudHMgbGlrZSBhdXRob3JpdHlcIixcbiAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICBlcnJvcjogXCJtdWx0aXBsZV9tYXRjaGluZ190b2tlbnNfZGV0ZWN0ZWRcIlxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vbm8gbWF0Y2ggZm91bmQuIGNoZWNrIGlmIHRoZXJlIHdhcyBhIHNpbmdsZSBhdXRob3JpdHkgdXNlZFxuICAgICAgICBjb25zdCBhdXRob3JpdHlMaXN0ID0gdGhpcy5nZXRVbmlxdWVBdXRob3JpdHkodG9rZW5DYWNoZUl0ZW1zLCBcImF1dGhvcml0eVwiKTtcbiAgICAgICAgaWYgKGF1dGhvcml0eUxpc3QubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlcnJvckRlc2M6IFwiTXVsdGlwbGUgYXV0aG9yaXRpZXMgZm91bmQgaW4gdGhlIGNhY2hlLiBQYXNzIGF1dGhvcml0eSBpbiB0aGUgQVBJIG92ZXJsb2FkLlwiLFxuICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICBlcnJvcjogXCJtdWx0aXBsZV9tYXRjaGluZ190b2tlbnNfZGV0ZWN0ZWRcIlxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGF1dGhvcml0eUxpc3RbMF0sIHRoaXMudmFsaWRhdGVBdXRob3JpdHkpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vYXV0aG9yaXR5IHdhcyBwYXNzZWQgaW4gdGhlIEFQSSwgZmlsdGVyIGJ5IGF1dGhvcml0eSBhbmQgc2NvcGVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlSXRlbSA9IHRva2VuQ2FjaGVJdGVtc1tpXTtcbiAgICAgICAgY29uc3QgY2FjaGVkU2NvcGVzID0gY2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpO1xuICAgICAgICBpZiAoVXRpbHMuY29udGFpbnNTY29wZShjYWNoZWRTY29wZXMsIHNjb3BlcykgJiYgY2FjaGVJdGVtLmtleS5hdXRob3JpdHkgPT09IGF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHkpIHtcbiAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goY2FjaGVJdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL25vIG1hdGNoXG4gICAgICBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvL29ubHkgb25lIGNhY2hlZFRva2VuIEZvdW5kXG4gICAgICBlbHNlIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IGZpbHRlcmVkSXRlbXNbMF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9tb3JlIHRoYW4gb25lIG1hdGNoIGZvdW5kLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yRGVzYzogXCJUaGUgY2FjaGUgY29udGFpbnMgbXVsdGlwbGUgdG9rZW5zIHNhdGlzZnlpbmcgdGhlIHJlcXVpcmVtZW50cy5DYWxsIEFjcXVpcmVUb2tlbiBhZ2FpbiBwcm92aWRpbmcgbW9yZSByZXF1aXJlbWVudHMgbGlrZSBhdXRob3JpdHlcIixcbiAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICBlcnJvcjogXCJtdWx0aXBsZV9tYXRjaGluZ190b2tlbnNfZGV0ZWN0ZWRcIlxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY2Nlc3NUb2tlbkNhY2hlSXRlbSAhPSBudWxsKSB7XG4gICAgICBjb25zdCBleHBpcmVkID0gTnVtYmVyKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmV4cGlyZXNJbik7XG4gICAgICAvLyBJZiBleHBpcmF0aW9uIGlzIHdpdGhpbiBvZmZzZXQsIGl0IHdpbGwgZm9yY2UgcmVuZXdcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX2Nsb2NrU2tldyB8fCAzMDA7XG4gICAgICBpZiAoZXhwaXJlZCAmJiAoZXhwaXJlZCA+IFV0aWxzLm5vdygpICsgb2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yRGVzYzogbnVsbCxcbiAgICAgICAgICB0b2tlbjogYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkSXRlbXNbMF0ua2V5KSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBmaWx0ZXIgYWxsIGNhY2hlZCBpdGVtcyBhbmQgcmV0dXJuIGEgbGlzdCBvZiB1bmlxdWUgdXNlcnMgYmFzZWQgb24gdXNlcklkZW50aWZpZXIuXG4gICAqIEBwYXJhbSB7QXJyYXk8VXNlcj59IFVzZXJzIC0gdXNlcnMgc2F2ZWQgaW4gdGhlIGNhY2hlLlxuICAgKi9cbiAgZ2V0QWxsVXNlcnMoKTogQXJyYXk8VXNlcj4ge1xuICAgICAgY29uc3QgdXNlcnM6IEFycmF5PFVzZXI+ID0gW107XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgPSB0aGlzLl9jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKENvbnN0YW50cy5jbGllbnRJZCwgQ29uc3RhbnRzLnVzZXJJZGVudGlmaWVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaWRUb2tlbiA9IG5ldyBJZFRva2VuKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtc1tpXS52YWx1ZS5pZFRva2VuKTtcbiAgICAgIGNvbnN0IGNsaWVudEluZm8gPSBuZXcgQ2xpZW50SW5mbyhhY2Nlc3NUb2tlbkNhY2hlSXRlbXNbaV0udmFsdWUuY2xpZW50SW5mbyk7XG4gICAgICBjb25zdCB1c2VyID0gVXNlci5jcmVhdGVVc2VyKGlkVG9rZW4sIGNsaWVudEluZm8pO1xuICAgICAgdXNlcnMucHVzaCh1c2VyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRVbmlxdWVVc2Vycyh1c2Vycyk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBmaWx0ZXIgdXNlcnMgYmFzZWQgb24gdXNlcklkZW50aWZpZXJcbiAgICogQHBhcmFtIHtBcnJheTxVc2VyPn0gIFVzZXJzIC0gdXNlcnMgc2F2ZWQgaW4gdGhlIGNhY2hlXG4gICAqIEBpZ25vcmVcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBnZXRVbmlxdWVVc2Vycyh1c2VyczogQXJyYXk8VXNlcj4pOiBBcnJheTxVc2VyPiB7XG4gICAgaWYgKCF1c2VycyB8fCB1c2Vycy5sZW5ndGggPD0gMSkge1xuICAgICAgcmV0dXJuIHVzZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IGZsYWdzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgY29uc3QgdW5pcXVlVXNlcnM6IEFycmF5PFVzZXI+ID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHVzZXJzLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgaWYgKHVzZXJzW2luZGV4XS51c2VySWRlbnRpZmllciAmJiBmbGFncy5pbmRleE9mKHVzZXJzW2luZGV4XS51c2VySWRlbnRpZmllcikgPT09IC0xKSB7XG4gICAgICAgIGZsYWdzLnB1c2godXNlcnNbaW5kZXhdLnVzZXJJZGVudGlmaWVyKTtcbiAgICAgICAgdW5pcXVlVXNlcnMucHVzaCh1c2Vyc1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlxdWVVc2VycztcbiAgfVxuXG4gIC8qKlxuICAqIFVzZWQgdG8gZ2V0IGEgdW5pcXVlIGxpc3Qgb2YgYXV0aG9yaXR1ZXMgZnJvbSB0aGUgY2FjaGVcbiAgKiBAcGFyYW0ge0FycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPn0gIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyAtIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyBzYXZlZCBpbiB0aGUgY2FjaGVcbiAgKiBAaWdub3JlXG4gICogQGhpZGRlblxuICAqL1xuICBwcml2YXRlIGdldFVuaXF1ZUF1dGhvcml0eShhY2Nlc3NUb2tlbkNhY2hlSXRlbXM6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiwgcHJvcGVydHk6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICAgIGNvbnN0IGF1dGhvcml0eUxpc3Q6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBjb25zdCBmbGFnczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQua2V5Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiAoZmxhZ3MuaW5kZXhPZihlbGVtZW50LmtleVtwcm9wZXJ0eV0pID09PSAtMSkpIHtcbiAgICAgICAgZmxhZ3MucHVzaChlbGVtZW50LmtleVtwcm9wZXJ0eV0pO1xuICAgICAgICBhdXRob3JpdHlMaXN0LnB1c2goZWxlbWVudC5rZXlbcHJvcGVydHldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYXV0aG9yaXR5TGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGxvZ2luX2hpbnQgdG8gYXV0aG9yaXphdGlvbiBVUkwgd2hpY2ggaXMgdXNlZCB0byBwcmUtZmlsbCB0aGUgdXNlcm5hbWUgZmllbGQgb2Ygc2lnbiBpbiBwYWdlIGZvciB0aGUgdXNlciBpZiBrbm93biBhaGVhZCBvZiB0aW1lXG4gICAqIGRvbWFpbl9oaW50IGNhbiBiZSBvbmUgb2YgdXNlcnMvb3JnYW5pc2F0aW9ucyB3aGljaCB3aGVuIGFkZGVkIHNraXBzIHRoZSBlbWFpbCBiYXNlZCBkaXNjb3ZlcnkgcHJvY2VzcyBvZiB0aGUgdXNlclxuICAgKiBkb21haW5fcmVxIHV0aWQgcmVjZWl2ZWQgYXMgcGFydCBvZiB0aGUgY2xpZW50SW5mb1xuICAgKiBsb2dpbl9yZXEgdWlkIHJlY2VpdmVkIGFzIHBhcnQgb2YgY2xpZW50SW5mb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsTmF2aWdhdGUgLSBBdXRoZW50aWNhdGlvbiByZXF1ZXN0IHVybFxuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgLSBVc2VyIGZvciB3aGljaCB0aGUgdG9rZW4gaXMgcmVxdWVzdGVkXG4gICAqIEBpZ25vcmVcbiAgICogQGhpZGRlblxuICAgKi9cbiAgICBwcml2YXRlIGFkZEhpbnRQYXJhbWV0ZXJzKHVybE5hdmlnYXRlOiBzdHJpbmcsIHVzZXI6IFVzZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB1c2VyT2JqZWN0ID0gdXNlciA/IHVzZXIgOiB0aGlzLmdldFVzZXIoKTtcbiAgICAgICAgaWYgKHVzZXJPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWRDbGllbnRJbmZvID0gdXNlck9iamVjdC51c2VySWRlbnRpZmllci5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICBjb25zdCB1aWQgPSBVdGlscy5iYXNlNjREZWNvZGVTdHJpbmdVcmxTYWZlKGRlY29kZWRDbGllbnRJbmZvWzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHV0aWQgPSBVdGlscy5iYXNlNjREZWNvZGVTdHJpbmdVcmxTYWZlKGRlY29kZWRDbGllbnRJbmZvWzFdKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJPYmplY3Quc2lkICAmJiB1cmxOYXZpZ2F0ZS5pbmRleE9mKENvbnN0YW50cy5wcm9tcHRfbm9uZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVybENvbnRhaW5zUXVlcnlTdHJpbmdQYXJhbWV0ZXIoQ29uc3RhbnRzLnNpZCwgdXJsTmF2aWdhdGUpICYmICF0aGlzLnVybENvbnRhaW5zUXVlcnlTdHJpbmdQYXJhbWV0ZXIoQ29uc3RhbnRzLmxvZ2luX2hpbnQsIHVybE5hdmlnYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxOYXZpZ2F0ZSArPSBcIiZcIiArIENvbnN0YW50cy5zaWQgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh1c2VyT2JqZWN0LnNpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVybENvbnRhaW5zUXVlcnlTdHJpbmdQYXJhbWV0ZXIoQ29uc3RhbnRzLmxvZ2luX2hpbnQsIHVybE5hdmlnYXRlKSAmJiB1c2VyT2JqZWN0LmRpc3BsYXlhYmxlSWQgJiYgIVV0aWxzLmlzRW1wdHkodXNlck9iamVjdC5kaXNwbGF5YWJsZUlkKSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxOYXZpZ2F0ZSArPSBcIiZcIiArIENvbnN0YW50cy5sb2dpbl9oaW50ICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodXNlck9iamVjdC5kaXNwbGF5YWJsZUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghVXRpbHMuaXNFbXB0eSh1aWQpICYmICFVdGlscy5pc0VtcHR5KHV0aWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVybENvbnRhaW5zUXVlcnlTdHJpbmdQYXJhbWV0ZXIoXCJkb21haW5fcmVxXCIsIHVybE5hdmlnYXRlKSAmJiAhVXRpbHMuaXNFbXB0eSh1dGlkKSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxOYXZpZ2F0ZSArPSBcIiZkb21haW5fcmVxPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHV0aWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy51cmxDb250YWluc1F1ZXJ5U3RyaW5nUGFyYW1ldGVyKFwibG9naW5fcmVxXCIsIHVybE5hdmlnYXRlKSAmJiAhVXRpbHMuaXNFbXB0eSh1aWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybE5hdmlnYXRlICs9IFwiJmxvZ2luX3JlcT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh1aWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy51cmxDb250YWluc1F1ZXJ5U3RyaW5nUGFyYW1ldGVyKENvbnN0YW50cy5kb21haW5faGludCwgdXJsTmF2aWdhdGUpICYmICFVdGlscy5pc0VtcHR5KHV0aWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWQgPT09IENvbnN0YW50cy5jb25zdW1lcnNVdGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybE5hdmlnYXRlICs9IFwiJlwiICsgIENvbnN0YW50cy5kb21haW5faGludCArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KENvbnN0YW50cy5jb25zdW1lcnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybE5hdmlnYXRlICs9IFwiJlwiICsgQ29uc3RhbnRzLmRvbWFpbl9oaW50ICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoQ29uc3RhbnRzLm9yZ2FuaXphdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybE5hdmlnYXRlO1xuICAgIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50IFVSTCBjb250YWlucyBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xuICAgKiBAaWdub3JlXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgdXJsQ29udGFpbnNRdWVyeVN0cmluZ1BhcmFtZXRlcihuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLy8gcmVnZXggdG8gZGV0ZWN0IHBhdHRlcm4gb2YgYSA/IG9yICYgZm9sbG93ZWQgYnkgdGhlIG5hbWUgcGFyYW1ldGVyIGFuZCBhbiBlcXVhbHMgY2hhcmFjdGVyXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFwiW1xcXFw/Jl1cIiArIG5hbWUgKyBcIj1cIik7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQuXG4gICAqIFRvIHJlbmV3IGlkVG9rZW4sIGNsaWVudElkIHNob3VsZCBiZSBwYXNzZWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIHNjb3BlcyBhcnJheS5cbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzY29wZXMgLSBQZXJtaXNzaW9ucyB5b3Ugd2FudCBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuLiBOb3QgYWxsIHNjb3BlcyBhcmUgIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbi4gU2NvcGVzIGxpa2UgXCJvcGVuaWRcIiBhbmQgXCJwcm9maWxlXCIgYXJlIHNlbnQgd2l0aCBldmVyeSByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5IC0gQSBVUkwgaW5kaWNhdGluZyBhIGRpcmVjdG9yeSB0aGF0IE1TQUwgY2FuIHVzZSB0byBvYnRhaW4gdG9rZW5zLlxuICAgKiAtIEluIEF6dXJlIEFELCBpdCBpcyBvZiB0aGUgZm9ybSBodHRwczovL3tpbnN0YW5jZX0vJmx0O3RlbmFudCZndDssIHdoZXJlICZsdDt0ZW5hbnQmZ3Q7IGlzIHRoZSBkaXJlY3RvcnkgaG9zdCAoZS5nLiBodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20pIGFuZCAmbHQ7dGVuYW50Jmd0OyBpcyBhIGlkZW50aWZpZXIgd2l0aGluIHRoZSBkaXJlY3RvcnkgaXRzZWxmIChlLmcuIGEgZG9tYWluIGFzc29jaWF0ZWQgdG8gdGhlIHRlbmFudCwgc3VjaCBhcyBjb250b3NvLm9ubWljcm9zb2Z0LmNvbSwgb3IgdGhlIEdVSUQgcmVwcmVzZW50aW5nIHRoZSBUZW5hbnRJRCBwcm9wZXJ0eSBvZiB0aGUgZGlyZWN0b3J5KVxuICAgKiAtIEluIEF6dXJlIEIyQywgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly97aW5zdGFuY2V9L3RmcC8mbHQ7dGVuYW50Jmd0Oy88cG9saWN5TmFtZT5cbiAgICogLSBEZWZhdWx0IHZhbHVlIGlzOiBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgLSBUaGUgdXNlciBmb3Igd2hpY2ggdGhlIHNjb3BlcyBhcmUgcmVxdWVzdGVkLlRoZSBkZWZhdWx0IHVzZXIgaXMgdGhlIGxvZ2dlZCBpbiB1c2VyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXh0cmFRdWVyeVBhcmFtZXRlcnMgLSBLZXktdmFsdWUgcGFpcnMgdG8gcGFzcyB0byB0aGUgU1RTIGR1cmluZyB0aGUgIGF1dGhlbnRpY2F0aW9uIGZsb3cuXG4gICAqL1xuICBhY3F1aXJlVG9rZW5SZWRpcmVjdChzY29wZXM6IEFycmF5PHN0cmluZz4pOiB2b2lkO1xuICBhY3F1aXJlVG9rZW5SZWRpcmVjdChzY29wZXM6IEFycmF5PHN0cmluZz4sIGF1dGhvcml0eTogc3RyaW5nKTogdm9pZDtcbiAgYWNxdWlyZVRva2VuUmVkaXJlY3Qoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBhdXRob3JpdHk6IHN0cmluZywgdXNlcjogVXNlcik6IHZvaWQ7XG4gIGFjcXVpcmVUb2tlblJlZGlyZWN0KHNjb3BlczogQXJyYXk8c3RyaW5nPiwgYXV0aG9yaXR5OiBzdHJpbmcsIHVzZXI6IFVzZXIsIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiBzdHJpbmcpOiB2b2lkO1xuICBhY3F1aXJlVG9rZW5SZWRpcmVjdChzY29wZXM6IEFycmF5PHN0cmluZz4sIGF1dGhvcml0eT86IHN0cmluZywgdXNlcj86IFVzZXIsIGV4dHJhUXVlcnlQYXJhbWV0ZXJzPzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaXNWYWxpZFNjb3BlID0gdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzKTtcbiAgICBpZiAoaXNWYWxpZFNjb3BlICYmICFVdGlscy5pc0VtcHR5KGlzVmFsaWRTY29wZSkpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Rva2VuUmVjZWl2ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5fdG9rZW5SZWNlaXZlZENhbGxiYWNrKEVycm9yRGVzY3JpcHRpb24uaW5wdXRTY29wZXNFcnJvciwgbnVsbCwgRXJyb3JDb2Rlcy5pbnB1dFNjb3Blc0Vycm9yLCBDb25zdGFudHMuYWNjZXNzVG9rZW4sIHRoaXMuZ2V0VXNlclN0YXRlKHRoaXMuX2NhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luLCB0aGlzLnN0b3JlQXV0aFN0YXRlSW5Db29raWUpKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2NvcGVzKSB7XG4gICAgICBzY29wZXMgPSB0aGlzLmZpbHRlclNjb3BlcyhzY29wZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJPYmplY3QgPSB1c2VyID8gdXNlciA6IHRoaXMuZ2V0VXNlcigpO1xuICAgIGlmICh0aGlzLl9hY3F1aXJlVG9rZW5JblByb2dyZXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2NvcGUgPSBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICghdXNlck9iamVjdCAmJiAhKGV4dHJhUXVlcnlQYXJhbWV0ZXJzICYmIChleHRyYVF1ZXJ5UGFyYW1ldGVycy5pbmRleE9mKENvbnN0YW50cy5sb2dpbl9oaW50KSAhPT0gLTEgKSkpIHtcbiAgICAgICAgICBpZiAodGhpcy5fdG9rZW5SZWNlaXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiVXNlciBsb2dpbiBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgICAgICAgdGhpcy5fdG9rZW5SZWNlaXZlZENhbGxiYWNrKEVycm9yRGVzY3JpcHRpb24udXNlckxvZ2luRXJyb3IsIG51bGwsIEVycm9yQ29kZXMudXNlckxvZ2luRXJyb3IsIENvbnN0YW50cy5hY2Nlc3NUb2tlbiwgdGhpcy5nZXRVc2VyU3RhdGUodGhpcy5fY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnN0YXRlTG9naW4sIHRoaXMuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSkpKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgIHRoaXMuX2FjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIGxldCBhdXRoZW50aWNhdGlvblJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnM7XG4gICAgbGV0IGFjcXVpcmVUb2tlbkF1dGhvcml0eSA9IGF1dGhvcml0eSA/IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UoYXV0aG9yaXR5LCB0aGlzLnZhbGlkYXRlQXV0aG9yaXR5KSA6IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2U7XG5cbiAgICBhY3F1aXJlVG9rZW5BdXRob3JpdHkuUmVzb2x2ZUVuZHBvaW50c0FzeW5jKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoVXRpbHMuY29tcGFyZU9iamVjdHModXNlck9iamVjdCwgdGhpcy5nZXRVc2VyKCkpKSB7XG4gICAgICAgICAgaWYgKHNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID4gLTEpIHtcbiAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IEF1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnMoYWNxdWlyZVRva2VuQXV0aG9yaXR5LCB0aGlzLmNsaWVudElkLCBzY29wZXMsIFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4sIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSwgdGhpcy5fc3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IEF1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnMoYWNxdWlyZVRva2VuQXV0aG9yaXR5LCB0aGlzLmNsaWVudElkLCBzY29wZXMsIFJlc3BvbnNlVHlwZXMudG9rZW4sIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSwgdGhpcy5fc3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBBdXRoZW50aWNhdGlvblJlcXVlc3RQYXJhbWV0ZXJzKGFjcXVpcmVUb2tlbkF1dGhvcml0eSwgdGhpcy5jbGllbnRJZCwgc2NvcGVzLCBSZXNwb25zZVR5cGVzLmlkX3Rva2VuX3Rva2VuLCB0aGlzLmdldFJlZGlyZWN0VXJpKCksIHRoaXMuX3N0YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV4dHJhUXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWVzdC5leHRyYVF1ZXJ5UGFyYW1ldGVycyA9IGV4dHJhUXVlcnlQYXJhbWV0ZXJzO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZUFjcXVpcmVUb2tlbkNhY2hlKGF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgdXNlcik7XG5cbiAgICAgIGxldCB1cmxOYXZpZ2F0ZSA9IGF1dGhlbnRpY2F0aW9uUmVxdWVzdC5jcmVhdGVOYXZpZ2F0ZVVybChzY29wZXMpICAgKyBDb25zdGFudHMucmVzcG9uc2VfbW9kZV9mcmFnbWVudDtcbiAgICAgIHVybE5hdmlnYXRlID0gdGhpcy5hZGRIaW50UGFyYW1ldGVycyh1cmxOYXZpZ2F0ZSwgdXNlck9iamVjdCk7XG4gICAgICBpZiAodXJsTmF2aWdhdGUpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuLCBhdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybE5hdmlnYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGFjcXVpcmUgYW4gYWNjZXNzIHRva2VuIGZvciBhIG5ldyB1c2VyIHVzaW5nIGludGVyYWN0aXZlIGF1dGhlbnRpY2F0aW9uIHZpYSBhIHBvcHVwIFdpbmRvdy5cbiAgICogVG8gcmVxdWVzdCBhbiBpZF90b2tlbiwgcGFzcyB0aGUgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIHNjb3BlcyBhcnJheS5cbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzY29wZXMgLSBQZXJtaXNzaW9ucyB5b3Ugd2FudCBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuLiBOb3QgYWxsIHNjb3BlcyBhcmUgIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbi4gU2NvcGVzIGxpa2UgXCJvcGVuaWRcIiBhbmQgXCJwcm9maWxlXCIgYXJlIHNlbnQgd2l0aCBldmVyeSByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5IC0gQSBVUkwgaW5kaWNhdGluZyBhIGRpcmVjdG9yeSB0aGF0IE1TQUwgY2FuIHVzZSB0byBvYnRhaW4gdG9rZW5zLlxuICAgKiAtIEluIEF6dXJlIEFELCBpdCBpcyBvZiB0aGUgZm9ybSBodHRwczovLyZsdDt0ZW5hbnQmZ3Q7LyZsdDt0ZW5hbnQmZ3Q7LCB3aGVyZSAmbHQ7dGVuYW50Jmd0OyBpcyB0aGUgZGlyZWN0b3J5IGhvc3QgKGUuZy4gaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tKSBhbmQgJmx0O3RlbmFudCZndDsgaXMgYSBpZGVudGlmaWVyIHdpdGhpbiB0aGUgZGlyZWN0b3J5IGl0c2VsZiAoZS5nLiBhIGRvbWFpbiBhc3NvY2lhdGVkIHRvIHRoZSB0ZW5hbnQsIHN1Y2ggYXMgY29udG9zby5vbm1pY3Jvc29mdC5jb20sIG9yIHRoZSBHVUlEIHJlcHJlc2VudGluZyB0aGUgVGVuYW50SUQgcHJvcGVydHkgb2YgdGhlIGRpcmVjdG9yeSlcbiAgICogLSBJbiBBenVyZSBCMkMsIGl0IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8vJmx0O2luc3RhbmNlJmd0Oy90ZnAvJmx0O3RlbmFudCZndDsvPHBvbGljeU5hbWU+L1xuICAgKiAtIERlZmF1bHQgdmFsdWUgaXM6IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiLlxuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgLSBUaGUgdXNlciBmb3Igd2hpY2ggdGhlIHNjb3BlcyBhcmUgcmVxdWVzdGVkLlRoZSBkZWZhdWx0IHVzZXIgaXMgdGhlIGxvZ2dlZCBpbiB1c2VyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXh0cmFRdWVyeVBhcmFtZXRlcnMgLSBLZXktdmFsdWUgcGFpcnMgdG8gcGFzcyB0byB0aGUgU1RTIGR1cmluZyB0aGUgIGF1dGhlbnRpY2F0aW9uIGZsb3cuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlLjxzdHJpbmc+fSAtIEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoaXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZCwgb3IgcmVqZWN0ZWQgaWYgYW4gZXJyb3Igd2FzIHJhaXNlZC4gUmV0dXJucyB0aGUgdG9rZW4gb3IgZXJyb3IuXG4gICAqL1xuICBhY3F1aXJlVG9rZW5Qb3B1cChzY29wZXM6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPHN0cmluZz47XG4gIGFjcXVpcmVUb2tlblBvcHVwKHNjb3BlczogQXJyYXk8c3RyaW5nPiwgYXV0aG9yaXR5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG4gIGFjcXVpcmVUb2tlblBvcHVwKHNjb3BlczogQXJyYXk8c3RyaW5nPiwgYXV0aG9yaXR5OiBzdHJpbmcsIHVzZXI6IFVzZXIpOiBQcm9taXNlPHN0cmluZz47XG4gIGFjcXVpcmVUb2tlblBvcHVwKHNjb3BlczogQXJyYXk8c3RyaW5nPiwgYXV0aG9yaXR5OiBzdHJpbmcsIHVzZXI6IFVzZXIsIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG4gIGFjcXVpcmVUb2tlblBvcHVwKHNjb3BlczogQXJyYXk8c3RyaW5nPiwgYXV0aG9yaXR5Pzogc3RyaW5nLCB1c2VyPzogVXNlciwgZXh0cmFRdWVyeVBhcmFtZXRlcnM/OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGlzVmFsaWRTY29wZSA9IHRoaXMudmFsaWRhdGVJbnB1dFNjb3BlKHNjb3Blcyk7XG4gICAgICBpZiAoaXNWYWxpZFNjb3BlICYmICFVdGlscy5pc0VtcHR5KGlzVmFsaWRTY29wZSkpIHtcbiAgICAgICAgcmVqZWN0KEVycm9yQ29kZXMuaW5wdXRTY29wZXNFcnJvciArIENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlciArIGlzVmFsaWRTY29wZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzY29wZXMpIHtcbiAgICAgICAgc2NvcGVzID0gdGhpcy5maWx0ZXJTY29wZXMoc2NvcGVzKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXNlck9iamVjdCA9IHVzZXIgPyB1c2VyIDogdGhpcy5nZXRVc2VyKCk7XG4gICAgICBpZiAodGhpcy5fYWNxdWlyZVRva2VuSW5Qcm9ncmVzcykge1xuICAgICAgICByZWplY3QoRXJyb3JDb2Rlcy5hY3F1aXJlVG9rZW5Qcm9ncmVzc0Vycm9yICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1ldGVyICsgRXJyb3JEZXNjcmlwdGlvbi5hY3F1aXJlVG9rZW5Qcm9ncmVzc0Vycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY29wZSA9IHNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAvL2lmIHVzZXIgaXMgbm90IGN1cnJlbnRseSBsb2dnZWQgaW4gYW5kIG5vIGxvZ2luX2hpbnQgaXMgcGFzc2VkXG4gICAgICAgIGlmICghdXNlck9iamVjdCAmJiAhKGV4dHJhUXVlcnlQYXJhbWV0ZXJzICYmIChleHRyYVF1ZXJ5UGFyYW1ldGVycy5pbmRleE9mKENvbnN0YW50cy5sb2dpbl9oaW50KSAhPT0gLTEpKSkge1xuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICAgICAgcmVqZWN0KEVycm9yQ29kZXMudXNlckxvZ2luRXJyb3IgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWV0ZXIgKyBFcnJvckRlc2NyaXB0aW9uLnVzZXJMb2dpbkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICB0aGlzLl9hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgIGxldCBhdXRoZW50aWNhdGlvblJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnM7XG4gICAgICBsZXQgYWNxdWlyZVRva2VuQXV0aG9yaXR5ID0gYXV0aG9yaXR5ID8gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShhdXRob3JpdHksIHRoaXMudmFsaWRhdGVBdXRob3JpdHkpIDogdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcbiAgICAgIHZhciBwb3BVcFdpbmRvdyA9IHRoaXMub3BlbldpbmRvdyhcImFib3V0OmJsYW5rXCIsIFwiX2JsYW5rXCIsIDEsIHRoaXMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICBpZiAoIXBvcFVwV2luZG93KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYWNxdWlyZVRva2VuQXV0aG9yaXR5LlJlc29sdmVFbmRwb2ludHNBc3luYygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmIChVdGlscy5jb21wYXJlT2JqZWN0cyh1c2VyT2JqZWN0LCB0aGlzLmdldFVzZXIoKSkpIHtcbiAgICAgICAgICBpZiAoc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPiAtMSkge1xuICAgICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IEF1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnMoYWNxdWlyZVRva2VuQXV0aG9yaXR5LCB0aGlzLmNsaWVudElkLCBzY29wZXMsIFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4sIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSwgdGhpcy5fc3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBBdXRoZW50aWNhdGlvblJlcXVlc3RQYXJhbWV0ZXJzKGFjcXVpcmVUb2tlbkF1dGhvcml0eSwgdGhpcy5jbGllbnRJZCwgc2NvcGVzLCBSZXNwb25zZVR5cGVzLnRva2VuLCB0aGlzLmdldFJlZGlyZWN0VXJpKCksIHRoaXMuX3N0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IEF1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnMoYWNxdWlyZVRva2VuQXV0aG9yaXR5LCB0aGlzLmNsaWVudElkLCBzY29wZXMsIFJlc3BvbnNlVHlwZXMuaWRfdG9rZW5fdG9rZW4sIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSwgdGhpcy5fc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4dHJhUXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzID0gZXh0cmFRdWVyeVBhcmFtZXRlcnM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUFjcXVpcmVUb2tlbkNhY2hlKGF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgdXNlck9iamVjdCk7XG5cbiAgICAgICAgbGV0IHVybE5hdmlnYXRlID0gYXV0aGVudGljYXRpb25SZXF1ZXN0LmNyZWF0ZU5hdmlnYXRlVXJsKHNjb3BlcykgKyBDb25zdGFudHMucmVzcG9uc2VfbW9kZV9mcmFnbWVudDtcbiAgICAgICAgdXJsTmF2aWdhdGUgPSB0aGlzLmFkZEhpbnRQYXJhbWV0ZXJzKHVybE5hdmlnYXRlLCB1c2VyT2JqZWN0KTtcbiAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goYXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLnJlbmV3VG9rZW47XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayhhdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHNjb3BlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICBpZiAocG9wVXBXaW5kb3cpIHtcbiAgICAgICAgICBwb3BVcFdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsTmF2aWdhdGU7XG4gICAgICAgIH1cblxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhFcnJvckNvZGVzLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yICsgXCI6XCIgKyBFcnJvckRlc2NyaXB0aW9uLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yKTtcbiAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgRXJyb3JDb2Rlcy5lbmRwb2ludFJlc29sdXRpb25FcnJvcik7XG4gICAgICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgRXJyb3JEZXNjcmlwdGlvbi5lbmRwb2ludFJlc29sdXRpb25FcnJvcik7XG4gICAgICAgIGlmIChyZWplY3QpIHtcbiAgICAgICAgICByZWplY3QoRXJyb3JDb2Rlcy5lbmRwb2ludFJlc29sdXRpb25FcnJvciArIENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlciArIEVycm9yRGVzY3JpcHRpb24uZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3BVcFdpbmRvdykge1xuICAgICAgICAgICAgcG9wVXBXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci53YXJuaW5nKFwiY291bGQgbm90IHJlc29sdmUgZW5kcG9pbnRzXCIpO1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBnZXQgdGhlIHRva2VuIGZyb20gY2FjaGUuXG4gICAqIE1TQUwgd2lsbCByZXR1cm4gdGhlIGNhY2hlZCB0b2tlbiBpZiBpdCBpcyBub3QgZXhwaXJlZC5cbiAgICogT3IgaXQgd2lsbCBzZW5kIGEgcmVxdWVzdCB0byB0aGUgU1RTIHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gdXNpbmcgYSBoaWRkZW4gaWZyYW1lLiBUbyByZW5ldyBpZFRva2VuLCBjbGllbnRJZCBzaG91bGQgYmUgcGFzc2VkIGFzIHRoZSBvbmx5IHNjb3BlIGluIHRoZSBzY29wZXMgYXJyYXkuXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gc2NvcGVzIC0gUGVybWlzc2lvbnMgeW91IHdhbnQgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbi4gTm90IGFsbCBzY29wZXMgYXJlICBndWFyYW50ZWVkIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBhY2Nlc3MgdG9rZW4uIFNjb3BlcyBsaWtlIFwib3BlbmlkXCIgYW5kIFwicHJvZmlsZVwiIGFyZSBzZW50IHdpdGggZXZlcnkgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1dGhvcml0eSAtIEEgVVJMIGluZGljYXRpbmcgYSBkaXJlY3RvcnkgdGhhdCBNU0FMIGNhbiB1c2UgdG8gb2J0YWluIHRva2Vucy5cbiAgICogLSBJbiBBenVyZSBBRCwgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly8mbHQ7dGVuYW50Jmd0Oy8mbHQ7dGVuYW50Jmd0Oywgd2hlcmUgJmx0O3RlbmFudCZndDsgaXMgdGhlIGRpcmVjdG9yeSBob3N0IChlLmcuIGh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbSkgYW5kICZsdDt0ZW5hbnQmZ3Q7IGlzIGEgaWRlbnRpZmllciB3aXRoaW4gdGhlIGRpcmVjdG9yeSBpdHNlbGYgKGUuZy4gYSBkb21haW4gYXNzb2NpYXRlZCB0byB0aGUgdGVuYW50LCBzdWNoIGFzIGNvbnRvc28ub25taWNyb3NvZnQuY29tLCBvciB0aGUgR1VJRCByZXByZXNlbnRpbmcgdGhlIFRlbmFudElEIHByb3BlcnR5IG9mIHRoZSBkaXJlY3RvcnkpXG4gICAqIC0gSW4gQXp1cmUgQjJDLCBpdCBpcyBvZiB0aGUgZm9ybSBodHRwczovLyZsdDtpbnN0YW5jZSZndDsvdGZwLyZsdDt0ZW5hbnQmZ3Q7Lzxwb2xpY3lOYW1lPi9cbiAgICogLSBEZWZhdWx0IHZhbHVlIGlzOiBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgLSBUaGUgdXNlciBmb3Igd2hpY2ggdGhlIHNjb3BlcyBhcmUgcmVxdWVzdGVkLlRoZSBkZWZhdWx0IHVzZXIgaXMgdGhlIGxvZ2dlZCBpbiB1c2VyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXh0cmFRdWVyeVBhcmFtZXRlcnMgLSBLZXktdmFsdWUgcGFpcnMgdG8gcGFzcyB0byB0aGUgU1RTIGR1cmluZyB0aGUgIGF1dGhlbnRpY2F0aW9uIGZsb3cuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlLjxzdHJpbmc+fSAtIEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoaXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZCwgb3IgcmVqZWN0ZWQgaWYgYW4gZXJyb3Igd2FzIHJhaXNlZC4gUmVzb2x2ZWQgd2l0aCB0b2tlbiBvciByZWplY3RlZCB3aXRoIGVycm9yLlxuICAgKi9cbiAgQHJlc29sdmVUb2tlbk9ubHlJZk91dE9mSWZyYW1lXG4gIGFjcXVpcmVUb2tlblNpbGVudChzY29wZXM6IEFycmF5PHN0cmluZz4sIGF1dGhvcml0eT86IHN0cmluZywgdXNlcj86IFVzZXIsIGV4dHJhUXVlcnlQYXJhbWV0ZXJzPzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBpc1ZhbGlkU2NvcGUgPSB0aGlzLnZhbGlkYXRlSW5wdXRTY29wZShzY29wZXMpO1xuICAgICAgaWYgKGlzVmFsaWRTY29wZSAmJiAhVXRpbHMuaXNFbXB0eShpc1ZhbGlkU2NvcGUpKSB7XG4gICAgICAgIHJlamVjdChFcnJvckNvZGVzLmlucHV0U2NvcGVzRXJyb3IgKyBcInxcIiArIGlzVmFsaWRTY29wZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNjb3Blcykge1xuICAgICAgICAgIHNjb3BlcyA9IHRoaXMuZmlsdGVyU2NvcGVzKHNjb3Blcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY29wZSA9IHNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCB1c2VyT2JqZWN0ID0gdXNlciA/IHVzZXIgOiB0aGlzLmdldFVzZXIoKTtcbiAgICAgICAgY29uc3QgYWRhbElkVG9rZW4gPSB0aGlzLl9jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuYWRhbElkVG9rZW4pO1xuICAgICAgICAvL2lmIHVzZXIgaXMgbm90IGN1cnJlbnRseSBsb2dnZWQgaW4gYW5kIG5vIGxvZ2luX2hpbnQvc2lkIGlzIHBhc3NlZCBhcyBhbiBleHRyYVF1ZXJ5UGFyYW1hdGVyXG4gICAgICAgICAgaWYgKCF1c2VyT2JqZWN0ICYmIFV0aWxzLmNoZWNrU1NPKGV4dHJhUXVlcnlQYXJhbWV0ZXJzKSAmJiBVdGlscy5pc0VtcHR5KGFkYWxJZFRva2VuKSApIHtcbiAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICAgICAgICByZWplY3QoRXJyb3JDb2Rlcy51c2VyTG9naW5FcnJvciArIENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlciArIEVycm9yRGVzY3JpcHRpb24udXNlckxvZ2luRXJyb3IpO1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9pZiB1c2VyIGRpZG4ndCBwYXNzZXMgdGhlIGxvZ2luX2hpbnQgYW5kIGFkYWwncyBpZHRva2VuIGlzIHByZXNlbnQgYW5kIG5vIHVzZXJvYmplY3QsIHVzZSB0aGUgbG9naW5faGludCBmcm9tIGFkYWwncyBpZFRva2VuXG4gICAgICAgICAgZWxzZSBpZiAoIXVzZXJPYmplY3QgJiYgIVV0aWxzLmlzRW1wdHkoYWRhbElkVG9rZW4pKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGlkVG9rZW5PYmplY3QgPSBVdGlscy5leHRyYWN0SWRUb2tlbihhZGFsSWRUb2tlbik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQURBTCdzIGlkVG9rZW4gZXhpc3RzLiBFeHRyYWN0aW5nIGxvZ2luIGluZm9ybWF0aW9uIGZyb20gQURBTCdzIGlkVG9rZW4gXCIpO1xuICAgICAgICAgICAgICBleHRyYVF1ZXJ5UGFyYW1ldGVycyA9IFV0aWxzLmNvbnN0cnVjdFVuaWZpZWRDYWNoZUV4dHJhUXVlcnlQYXJhbWV0ZXIoaWRUb2tlbk9iamVjdCwgZXh0cmFRdWVyeVBhcmFtZXRlcnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBhdXRoZW50aWNhdGlvblJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnM7XG4gICAgICAgIGlmIChVdGlscy5jb21wYXJlT2JqZWN0cyh1c2VyT2JqZWN0LCB0aGlzLmdldFVzZXIoKSkpIHtcbiAgICAgICAgICBpZiAoc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPiAtMSkge1xuICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgQXV0aGVudGljYXRpb25SZXF1ZXN0UGFyYW1ldGVycyhBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGF1dGhvcml0eSwgdGhpcy52YWxpZGF0ZUF1dGhvcml0eSksIHRoaXMuY2xpZW50SWQsIHNjb3BlcywgUmVzcG9uc2VUeXBlcy5pZF90b2tlbiwgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgQXV0aGVudGljYXRpb25SZXF1ZXN0UGFyYW1ldGVycyhBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGF1dGhvcml0eSwgdGhpcy52YWxpZGF0ZUF1dGhvcml0eSksIHRoaXMuY2xpZW50SWQsIHNjb3BlcywgUmVzcG9uc2VUeXBlcy50b2tlbiwgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgQXV0aGVudGljYXRpb25SZXF1ZXN0UGFyYW1ldGVycyhBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGF1dGhvcml0eSwgdGhpcy52YWxpZGF0ZUF1dGhvcml0eSksIHRoaXMuY2xpZW50SWQsIHNjb3BlcywgUmVzcG9uc2VUeXBlcy5pZF90b2tlbiwgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgQXV0aGVudGljYXRpb25SZXF1ZXN0UGFyYW1ldGVycyhBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGF1dGhvcml0eSwgdGhpcy52YWxpZGF0ZUF1dGhvcml0eSksIHRoaXMuY2xpZW50SWQsIHNjb3BlcywgUmVzcG9uc2VUeXBlcy5pZF90b2tlbl90b2tlbiwgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYWNoZVJlc3VsdCA9IHRoaXMuZ2V0Q2FjaGVkVG9rZW4oYXV0aGVudGljYXRpb25SZXF1ZXN0LCB1c2VyT2JqZWN0KTtcbiAgICAgICAgaWYgKGNhY2hlUmVzdWx0KSB7XG4gICAgICAgICAgaWYgKGNhY2hlUmVzdWx0LnRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIlRva2VuIGlzIGFscmVhZHkgaW4gY2FjaGUgZm9yIHNjb3BlOlwiICsgc2NvcGUpO1xuICAgICAgICAgICAgcmVzb2x2ZShjYWNoZVJlc3VsdC50b2tlbik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoY2FjaGVSZXN1bHQuZXJyb3JEZXNjIHx8IGNhY2hlUmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mb1BpaShjYWNoZVJlc3VsdC5lcnJvckRlc2MgKyBcIjpcIiArIGNhY2hlUmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHJlamVjdChjYWNoZVJlc3VsdC5lcnJvckRlc2MgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWV0ZXIgKyBjYWNoZVJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIudmVyYm9zZShcIlRva2VuIGlzIG5vdCBpbiBjYWNoZSBmb3Igc2NvcGU6XCIgKyBzY29wZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGlmICghYXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlKSB7Ly9DYWNoZSByZXN1bHQgY2FuIHJldHVybiBudWxsIGlmIGNhY2hlIGlzIGVtcHR5LiBJbiB0aGF0IGNhc2UsIHNldCBhdXRob3JpdHkgdG8gZGVmYXVsdCB2YWx1ZSBpZiBubyBhdXRob3JpdHkgaXMgcGFzc2VkIHRvIHRoZSBhcGkuXG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSBhdXRob3JpdHkgPyBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGF1dGhvcml0eSwgdGhpcy52YWxpZGF0ZUF1dGhvcml0eSkgOiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgICAgLy8gY2FjaGUgbWlzc1xuICAgICAgICAgIHJldHVybiBhdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UuUmVzb2x2ZUVuZHBvaW50c0FzeW5jKClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyByZWZyZXNoIGF0dGVwdCB3aXRoIGlmcmFtZVxuICAgICAgICAgICAgLy9BbHJlYWR5IHJlbmV3aW5nIGZvciB0aGlzIHNjb3BlLCBjYWxsYmFjayB3aGVuIHdlIGdldCB0aGUgdG9rZW4uXG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci52ZXJib3NlKFwiUmVuZXcgdG9rZW4gZm9yIHNjb3BlOiBcIiArIHNjb3BlICsgXCIgaXMgaW4gcHJvZ3Jlc3MuIFJlZ2lzdGVyaW5nIGNhbGxiYWNrXCIpO1xuICAgICAgICAgICAgICAvL0FjdGl2ZSByZW5ld2FscyBjb250YWlucyB0aGUgc3RhdGUgZm9yIGVhY2ggcmVuZXdhbC5cbiAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV0sIHNjb3BlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChzY29wZXMgJiYgc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPiAtMSAmJiBzY29wZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gQXBwIHVzZXMgaWRUb2tlbiB0byBzZW5kIHRvIGFwaSBlbmRwb2ludHNcbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IHNjb3BlIGlzIHRyYWNrZWQgYXMgY2xpZW50SWQgdG8gc3RvcmUgdGhpcyB0b2tlblxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci52ZXJib3NlKFwicmVuZXdpbmcgaWRUb2tlblwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmV3SWRUb2tlbihzY29wZXMsIHJlc29sdmUsIHJlamVjdCwgdXNlck9iamVjdCwgYXV0aGVudGljYXRpb25SZXF1ZXN0LCBleHRyYVF1ZXJ5UGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLnZlcmJvc2UoXCJyZW5ld2luZyBhY2Nlc3N0b2tlblwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmV3VG9rZW4oc2NvcGVzLCByZXNvbHZlLCByZWplY3QsIHVzZXJPYmplY3QsIGF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgZXh0cmFRdWVyeVBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgICBwcml2YXRlIGV4dHJhY3RBREFMSWRUb2tlbigpOiBhbnkge1xuICAgICAgICBjb25zdCBhZGFsSWRUb2tlbiA9IHRoaXMuX2NhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hZGFsSWRUb2tlbik7XG4gICAgICAgIGlmICghVXRpbHMuaXNFbXB0eShhZGFsSWRUb2tlbikpIHtcbiAgICAgICAgICAgIHJldHVybiBVdGlscy5leHRyYWN0SWRUb2tlbihhZGFsSWRUb2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBDYWxsaW5nIF9sb2FkRnJhbWUgYnV0IHdpdGggYSB0aW1lb3V0IHRvIHNpZ25hbCBmYWlsdXJlIGluIGxvYWRmcmFtZVN0YXR1cy4gQ2FsbGJhY2tzIGFyZSBsZWZ0LlxuICAgKiByZWdpc3RlcmVkIHdoZW4gbmV0d29yayBlcnJvcnMgb2NjdXIgYW5kIHN1YnNlcXVlbnQgdG9rZW4gcmVxdWVzdHMgZm9yIHNhbWUgcmVzb3VyY2UgYXJlIHJlZ2lzdGVyZWQgdG8gdGhlIHBlbmRpbmcgcmVxdWVzdC5cbiAgICogQGlnbm9yZVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGxvYWRJZnJhbWVUaW1lb3V0KHVybE5hdmlnYXRlOiBzdHJpbmcsIGZyYW1lTmFtZTogc3RyaW5nLCBzY29wZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy9zZXQgaWZyYW1lIHNlc3Npb24gdG8gcGVuZGluZ1xuICAgICAgY29uc3QgZXhwZWN0ZWRTdGF0ZSA9IHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV07XG4gICAgICB0aGlzLl9sb2dnZXIudmVyYm9zZShcIlNldCBsb2FkaW5nIHN0YXRlIHRvIHBlbmRpbmcgZm9yOiBcIiArIHNjb3BlICsgXCI6XCIgKyBleHBlY3RlZFN0YXRlKTtcbiAgICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIGV4cGVjdGVkU3RhdGUsIENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzSW5Qcm9ncmVzcyk7XG4gICAgdGhpcy5sb2FkRnJhbWUodXJsTmF2aWdhdGUsIGZyYW1lTmFtZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgZXhwZWN0ZWRTdGF0ZSkgPT09IENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzSW5Qcm9ncmVzcykge1xuICAgICAgICAgIC8vIGZhaWwgdGhlIGlmcmFtZSBzZXNzaW9uIGlmIGl0XCJzIGluIHBlbmRpbmcgc3RhdGVcbiAgICAgICAgICB0aGlzLl9sb2dnZXIudmVyYm9zZShcIkxvYWRpbmcgZnJhbWUgaGFzIHRpbWVkIG91dCBhZnRlcjogXCIgKyAodGhpcy5sb2FkRnJhbWVUaW1lb3V0IC8gMTAwMCkgKyBcIiBzZWNvbmRzIGZvciBzY29wZSBcIiArIHNjb3BlICsgXCI6XCIgKyBleHBlY3RlZFN0YXRlKTtcbiAgICAgICAgICBpZiAoZXhwZWN0ZWRTdGF0ZSAmJiB3aW5kb3cuY2FsbEJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5jYWxsQmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0oXCJUb2tlbiByZW5ld2FsIG9wZXJhdGlvbiBmYWlsZWQgZHVlIHRvIHRpbWVvdXRcIiwgbnVsbCwgXCJUb2tlbiBSZW5ld2FsIEZhaWxlZFwiLCBDb25zdGFudHMuYWNjZXNzVG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMucmVuZXdTdGF0dXMgKyBleHBlY3RlZFN0YXRlLCBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0NhbmNlbGxlZCk7XG4gICAgICB9XG4gICAgfSwgdGhpcy5sb2FkRnJhbWVUaW1lb3V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBpZnJhbWUgd2l0aCBhdXRob3JpemF0aW9uIGVuZHBvaW50IFVSTFxuICAgKiBAaWdub3JlXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgbG9hZEZyYW1lKHVybE5hdmlnYXRlOiBzdHJpbmcsIGZyYW1lTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gVGhpcyB0cmljayBvdmVyY29tZXMgaWZyYW1lIG5hdmlnYXRpb24gaW4gSUVcbiAgICAvLyBJRSBkb2VzIG5vdCBsb2FkIHRoZSBwYWdlIGNvbnNpc3RlbnRseSBpbiBpZnJhbWVcbiAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIkxvYWRGcmFtZTogXCIgKyBmcmFtZU5hbWUpO1xuICAgIHZhciBmcmFtZUNoZWNrID0gZnJhbWVOYW1lO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdmFyIGZyYW1lSGFuZGxlID0gdGhpcy5hZGRBZGFsRnJhbWUoZnJhbWVDaGVjayk7XG4gICAgICBpZiAoZnJhbWVIYW5kbGUuc3JjID09PSBcIlwiIHx8IGZyYW1lSGFuZGxlLnNyYyA9PT0gXCJhYm91dDpibGFua1wiKSB7XG4gICAgICAgICAgZnJhbWVIYW5kbGUuc3JjID0gdXJsTmF2aWdhdGU7XG4gICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm9QaWkoXCJGcmFtZSBOYW1lIDogXCIgKyBmcmFtZU5hbWUgKyBcIiBOYXZpZ2F0ZWQgdG86IFwiICsgdXJsTmF2aWdhdGUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgICA1MDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGhpZGRlbiBpZnJhbWUgZm9yIHNpbGVudCB0b2tlbiByZW5ld2FsLlxuICAgKiBAaWdub3JlXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgYWRkQWRhbEZyYW1lKGlmcmFtZUlkOiBzdHJpbmcpOiBIVE1MSUZyYW1lRWxlbWVudCB7XG4gICAgaWYgKHR5cGVvZiBpZnJhbWVJZCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9nZ2VyLmluZm8oXCJBZGQgbXNhbCBmcmFtZSB0byBkb2N1bWVudDpcIiArIGlmcmFtZUlkKTtcbiAgICBsZXQgYWRhbEZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWZyYW1lSWQpIGFzIEhUTUxJRnJhbWVFbGVtZW50O1xuICAgIGlmICghYWRhbEZyYW1lKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAmJlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFIDUuMFwiKSA9PT0gLTEpKSB7XG4gICAgICAgIGNvbnN0IGlmciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZnJhbWVJZCk7XG4gICAgICAgIGlmci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgaWZyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICBpZnIuc3R5bGUud2lkdGggPSBpZnIuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgIGlmci5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcbiAgICAgICAgYWRhbEZyYW1lID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChpZnIpIGFzIEhUTUxJRnJhbWVFbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFwiPGlmcmFtZSBuYW1lPSdcIiArIGlmcmFtZUlkICsgXCInIGlkPSdcIiArIGlmcmFtZUlkICsgXCInIHN0eWxlPSdkaXNwbGF5Om5vbmUnPjwvaWZyYW1lPlwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbmRvdy5mcmFtZXMgJiYgd2luZG93LmZyYW1lc1tpZnJhbWVJZF0pIHtcbiAgICAgICAgYWRhbEZyYW1lID0gd2luZG93LmZyYW1lc1tpZnJhbWVJZF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkYWxGcmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3F1aXJlcyBhY2Nlc3MgdG9rZW4gdXNpbmcgYSBoaWRkZW4gaWZyYW1lLlxuICAgKiBAaWdub3JlXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgcmVuZXdUb2tlbihzY29wZXM6IEFycmF5PHN0cmluZz4sIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCB1c2VyOiBVc2VyLCBhdXRoZW50aWNhdGlvblJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnMsIGV4dHJhUXVlcnlQYXJhbWV0ZXJzPzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgc2NvcGUgPSBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLl9sb2dnZXIudmVyYm9zZShcInJlbmV3VG9rZW4gaXMgY2FsbGVkIGZvciBzY29wZTpcIiArIHNjb3BlKTtcbiAgICBjb25zdCBmcmFtZUhhbmRsZSA9IHRoaXMuYWRkQWRhbEZyYW1lKFwibXNhbFJlbmV3RnJhbWVcIiArIHNjb3BlKTtcblxuICAgIGlmIChleHRyYVF1ZXJ5UGFyYW1ldGVycykge1xuICAgICAgYXV0aGVudGljYXRpb25SZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzID0gZXh0cmFRdWVyeVBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVBY3F1aXJlVG9rZW5DYWNoZShhdXRoZW50aWNhdGlvblJlcXVlc3QsIHVzZXIpO1xuXG4gICAgdGhpcy5fbG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyB0b2tlbiBFeHBlY3RlZCBzdGF0ZTogXCIgKyBhdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xuICAgIGxldCB1cmxOYXZpZ2F0ZSA9IFV0aWxzLnVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKGF1dGhlbnRpY2F0aW9uUmVxdWVzdC5jcmVhdGVOYXZpZ2F0ZVVybChzY29wZXMpLCBDb25zdGFudHMucHJvbXB0KSArIENvbnN0YW50cy5wcm9tcHRfbm9uZTtcbiAgICB1cmxOYXZpZ2F0ZSA9IHRoaXMuYWRkSGludFBhcmFtZXRlcnModXJsTmF2aWdhdGUsIHVzZXIpO1xuICAgIHdpbmRvdy5yZW5ld1N0YXRlcy5wdXNoKGF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XG4gICAgd2luZG93LnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLnJlbmV3VG9rZW47XG4gICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKGF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgc2NvcGUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgdGhpcy5fbG9nZ2VyLmluZm9QaWkoXCJOYXZpZ2F0ZSB0bzpcIiArIHVybE5hdmlnYXRlKTtcbiAgICBmcmFtZUhhbmRsZS5zcmMgPSBcImFib3V0OmJsYW5rXCI7XG4gICAgdGhpcy5sb2FkSWZyYW1lVGltZW91dCh1cmxOYXZpZ2F0ZSwgXCJtc2FsUmVuZXdGcmFtZVwiICsgc2NvcGUsIHNjb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5ld3MgaWR0b2tlbiBmb3IgYXBwXCJzIG93biBiYWNrZW5kIHdoZW4gY2xpZW50SWQgaXMgcGFzc2VkIGFzIGEgc2luZ2xlIHNjb3BlIGluIHRoZSBzY29wZXMgYXJyYXkuXG4gICAqIEBpZ25vcmVcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSByZW5ld0lkVG9rZW4oc2NvcGVzOiBBcnJheTxzdHJpbmc+LCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbiwgdXNlcjogVXNlciwgYXV0aGVudGljYXRpb25SZXF1ZXN0OiBBdXRoZW50aWNhdGlvblJlcXVlc3RQYXJhbWV0ZXJzLCBleHRyYVF1ZXJ5UGFyYW1ldGVycz86IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHNjb3BlID0gc2NvcGVzLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5fbG9nZ2VyLmluZm8oXCJyZW5ld2lkVG9rZW4gaXMgY2FsbGVkXCIpO1xuICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gdGhpcy5hZGRBZGFsRnJhbWUoXCJtc2FsSWRUb2tlbkZyYW1lXCIpO1xuXG4gICAgaWYgKGV4dHJhUXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnMgPSBleHRyYVF1ZXJ5UGFyYW1ldGVycztcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFjcXVpcmVUb2tlbkNhY2hlKGF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgdXNlcik7XG5cbiAgICB0aGlzLl9sb2dnZXIudmVyYm9zZShcIlJlbmV3IElkdG9rZW4gRXhwZWN0ZWQgc3RhdGU6IFwiICsgYXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICBsZXQgdXJsTmF2aWdhdGUgPSBVdGlscy51cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcihhdXRoZW50aWNhdGlvblJlcXVlc3QuY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzKSwgQ29uc3RhbnRzLnByb21wdCkgKyBDb25zdGFudHMucHJvbXB0X25vbmU7XG4gICAgdXJsTmF2aWdhdGUgPSB0aGlzLmFkZEhpbnRQYXJhbWV0ZXJzKHVybE5hdmlnYXRlLCB1c2VyKTtcbiAgICBpZiAodGhpcy5fc2lsZW50TG9naW4pIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLmxvZ2luO1xuICAgICAgICB0aGlzLl9zaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlID0gYXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xuICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChhdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xuICAgIH1cblxuICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayhhdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuY2xpZW50SWQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgdGhpcy5fbG9nZ2VyLmluZm9QaWkoXCJOYXZpZ2F0ZSB0bzpcIiArIHVybE5hdmlnYXRlKTtcbiAgICBmcmFtZUhhbmRsZS5zcmMgPSBcImFib3V0OmJsYW5rXCI7XG4gICAgdGhpcy5sb2FkSWZyYW1lVGltZW91dCh1cmxOYXZpZ2F0ZSwgXCJtc2FsSWRUb2tlbkZyYW1lXCIsIHRoaXMuY2xpZW50SWQpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBY3F1aXJlVG9rZW5DYWNoZShhdXRoZW50aWNhdGlvblJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnMsIHVzZXI6IFVzZXIpIHtcbiAgICBjb25zdCB1c2VySWRlbnRpZmllciA9IHVzZXIgJiYgdXNlci51c2VySWRlbnRpZmllciB8fCBDb25zdGFudHMubm9fdXNlcjtcbiAgICBjb25zdCBhY3F1aXJlVG9rZW5Vc2VyS2V5ID0gQ29uc3RhbnRzLmFjcXVpcmVUb2tlblVzZXIgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWV0ZXIgKyB1c2VySWRlbnRpZmllciArIENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlciArIGF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZTtcbiAgICBjb25zdCBhdXRob3JpdHlLZXkgPSBDb25zdGFudHMuYXV0aG9yaXR5ICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1ldGVyICsgYXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlO1xuXG4gICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oYWNxdWlyZVRva2VuVXNlcktleSwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKGF1dGhvcml0eUtleSwgYXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eSwgdGhpcy5zdG9yZUF1dGhTdGF0ZUluQ29va2llKTtcbiAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCBhdXRoZW50aWNhdGlvblJlcXVlc3Qubm9uY2UsIHRoaXMuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSk7XG4gIH1cblxuICAvKipcbiAgICAqIFJldHVybnMgdGhlIHNpZ25lZCBpbiB1c2VyIChyZWNlaXZlZCBmcm9tIGEgdXNlciBvYmplY3QgY3JlYXRlZCBhdCB0aGUgdGltZSBvZiBsb2dpbikgb3IgbnVsbC5cbiAgICAqL1xuICBnZXRVc2VyKCk6IFVzZXIge1xuICAgIC8vIGlkVG9rZW4gaXMgZmlyc3QgY2FsbFxuICAgIGlmICh0aGlzLl91c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdXNlcjtcbiAgICB9XG5cbiAgICAvLyBmcmFtZSBpcyB1c2VkIHRvIGdldCBpZFRva2VuXG4gICAgY29uc3QgcmF3SWRUb2tlbiA9IHRoaXMuX2NhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5pZFRva2VuS2V5KTtcbiAgICBjb25zdCByYXdDbGllbnRJbmZvID0gdGhpcy5fY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm1zYWxDbGllbnRJbmZvKTtcbiAgICBpZiAoIVV0aWxzLmlzRW1wdHkocmF3SWRUb2tlbikgJiYgIVV0aWxzLmlzRW1wdHkocmF3Q2xpZW50SW5mbykpIHtcbiAgICAgIGNvbnN0IGlkVG9rZW4gPSBuZXcgSWRUb2tlbihyYXdJZFRva2VuKTtcbiAgICAgIGNvbnN0IGNsaWVudEluZm8gPSBuZXcgQ2xpZW50SW5mbyhyYXdDbGllbnRJbmZvKTtcbiAgICAgIHRoaXMuX3VzZXIgPSBVc2VyLmNyZWF0ZVVzZXIoaWRUb2tlbiwgY2xpZW50SW5mbyk7XG4gICAgICByZXR1cm4gdGhpcy5fdXNlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBmb3IgcHJvY2Vzc2luZyB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSB0aGUgU1RTLiBJdCBleHRyYWN0cyB0aGUgaGFzaCwgcHJvY2Vzc2VzIHRoZSB0b2tlbiBvciBlcnJvciBpbmZvcm1hdGlvbiBhbmQgc2F2ZXMgaXQgaW4gdGhlIGNhY2hlLiBJdCB0aGVuXG4gICAqIGNhbGxzIHRoZSByZWdpc3RlcmVkIGNhbGxiYWNrcyBpbiBjYXNlIG9mIHJlZGlyZWN0IG9yIHJlc29sdmVzIHRoZSBwcm9taXNlcyB3aXRoIHRoZSByZXN1bHQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaD13aW5kb3cubG9jYXRpb24uaGFzaF0gLSBIYXNoIGZyYWdtZW50IG9mIFVybC5cbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVBdXRoZW50aWNhdGlvblJlc3BvbnNlKGhhc2g6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChoYXNoID09IG51bGwpIHtcbiAgICAgIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IG51bGw7XG4gICAgdmFyIGlzUG9wdXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB2YXIgaXNXaW5kb3dPcGVuZXJNc2FsID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgICBpc1dpbmRvd09wZW5lck1zYWwgPSB3aW5kb3cub3BlbmVyICYmIHdpbmRvdy5vcGVuZXIubXNhbCAmJiB3aW5kb3cub3BlbmVyLm1zYWwgIT09IHdpbmRvdy5tc2FsO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBlcnIgPSBTZWN1cml0eUVycm9yOiBCbG9ja2VkIGEgZnJhbWUgd2l0aCBvcmlnaW4gXCJbdXJsXVwiIGZyb20gYWNjZXNzaW5nIGEgY3Jvc3Mtb3JpZ2luIGZyYW1lLlxuICAgICAgICBpc1dpbmRvd09wZW5lck1zYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNXaW5kb3dPcGVuZXJNc2FsKSB7XG4gICAgICAgIHNlbGYgPSB3aW5kb3cub3BlbmVyLm1zYWw7XG4gICAgICAgIGlzUG9wdXAgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh3aW5kb3cucGFyZW50ICYmIHdpbmRvdy5wYXJlbnQubXNhbCkge1xuICAgICAgc2VsZiA9IHdpbmRvdy5wYXJlbnQubXNhbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0SW5mbyA9IHNlbGYuZ2V0UmVxdWVzdEluZm8oaGFzaCk7IC8vaWYod2luZG93LnBhcmVudCE9PXdpbmRvdyksIGJ5IHVzaW5nIHNlbGYsIHdpbmRvdy5wYXJlbnQgYmVjb21lcyBlcXVhbCB0byB3aW5kb3cgaW4gZ2V0UmVxdWVzdEluZm8gbWV0aG9kIHNwZWNpZmljYWxseVxuICAgIGxldCB0b2tlbjogc3RyaW5nID0gbnVsbCwgdG9rZW5SZWNlaXZlZENhbGxiYWNrOiAoZXJyb3JEZXNjOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcsIGVycm9yOiBzdHJpbmcsIHRva2VuVHlwZTogc3RyaW5nKSA9PiB2b2lkID0gbnVsbCwgdG9rZW5UeXBlOiBzdHJpbmcsIHNhdmVUb2tlbjogYm9vbGVhbiA9IHRydWU7XG4gICAgc2VsZi5fbG9nZ2VyLmluZm8oXCJSZXR1cm5lZCBmcm9tIHJlZGlyZWN0IHVybFwiKTtcbiAgICBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93ICYmIHdpbmRvdy5wYXJlbnQubXNhbCkge1xuICAgICAgICB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgPSB3aW5kb3cucGFyZW50LmNhbGxCYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tyZXF1ZXN0SW5mby5zdGF0ZVJlc3BvbnNlXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNXaW5kb3dPcGVuZXJNc2FsKSB7XG4gICAgICAgIHRva2VuUmVjZWl2ZWRDYWxsYmFjayA9IHdpbmRvdy5vcGVuZXIuY2FsbEJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW3JlcXVlc3RJbmZvLnN0YXRlUmVzcG9uc2VdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHNlbGYuX25hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmwpIHtcbiAgICAgICAgICAgIHRva2VuUmVjZWl2ZWRDYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMudXJsSGFzaCwgaGFzaCk7XG4gICAgICAgICAgICBzYXZlVG9rZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFyZW50ID09PSB3aW5kb3cgJiYgIWlzUG9wdXApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHNlbGYuX2NhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIHRoaXMuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgPSBzZWxmLl90b2tlblJlY2VpdmVkQ2FsbGJhY2s7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNlbGYuc2F2ZVRva2VuRnJvbUhhc2gocmVxdWVzdEluZm8pO1xuXG4gICAgaWYgKChyZXF1ZXN0SW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLnJlbmV3VG9rZW4pICYmIHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdykge1xuICAgICAgICAgICAgc2VsZi5fbG9nZ2VyLnZlcmJvc2UoXCJXaW5kb3cgaXMgaW4gaWZyYW1lLCBhY3F1aXJpbmcgdG9rZW4gc2lsZW50bHlcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLl9sb2dnZXIudmVyYm9zZShcImFjcXVpcmluZyB0b2tlbiBpbnRlcmFjdGl2ZSBpbiBwcm9ncmVzc1wiKTtcbiAgICAgICAgfVxuXG4gICAgdG9rZW4gPSByZXF1ZXN0SW5mby5wYXJhbWV0ZXJzW0NvbnN0YW50cy5hY2Nlc3NUb2tlbl0gfHwgcmVxdWVzdEluZm8ucGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl07XG4gICAgdG9rZW5UeXBlID0gQ29uc3RhbnRzLmFjY2Vzc1Rva2VuO1xuICAgIH0gZWxzZSBpZiAocmVxdWVzdEluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5sb2dpbikge1xuICAgIHRva2VuID0gcmVxdWVzdEluZm8ucGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl07XG4gICAgdG9rZW5UeXBlID0gQ29uc3RhbnRzLmlkVG9rZW47XG4gICAgfVxuXG4gICAgdmFyIGVycm9yRGVzYyA9IHJlcXVlc3RJbmZvLnBhcmFtZXRlcnNbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dO1xuICAgIHZhciBlcnJvciA9IHJlcXVlc3RJbmZvLnBhcmFtZXRlcnNbQ29uc3RhbnRzLmVycm9yXTtcbiAgICB0cnkge1xuICAgICAgICBpZiAodG9rZW5SZWNlaXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAvL1dlIHNob3VsZCBvbmx5IHNlbmQgdGhlIHN0YWUgYmFjayB0byB0aGUgZGV2ZWxvcGVyIGlmIGl0IG1hdGNoZXMgd2l0aCB3aGF0IHdlIHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlclxuICAgICAgICAgICAgaWYgKHJlcXVlc3RJbmZvLnN0YXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB0b2tlblJlY2VpdmVkQ2FsbGJhY2suY2FsbChzZWxmLCBlcnJvckRlc2MsIHRva2VuLCBlcnJvciwgdG9rZW5UeXBlLCB0aGlzLmdldFVzZXJTdGF0ZShyZXF1ZXN0SW5mby5zdGF0ZVJlc3BvbnNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2tlblJlY2VpdmVkQ2FsbGJhY2suY2FsbChzZWxmLCBlcnJvckRlc2MsIHRva2VuLCBlcnJvciwgdG9rZW5UeXBlLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNlbGYuX2xvZ2dlci5lcnJvcihcIkVycm9yIG9jY3VycmVkIGluIHRva2VuIHJlY2VpdmVkIGNhbGxiYWNrIGZ1bmN0aW9uOiBcIiArIGVycik7XG4gICAgfVxuICAgIGlmIChpc1dpbmRvd09wZW5lck1zYWwpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3aW5kb3cub3BlbmVyLm9wZW5lZFdpbmRvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuZXIub3BlbmVkV2luZG93c1tpXS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgY2FsbGVkIGZvciBwcm9jZXNzaW5nIHRoZSByZXNwb25zZSByZWNlaXZlZCBmcm9tIEFBRC4gSXQgZXh0cmFjdHMgdGhlIGhhc2gsIHByb2Nlc3NlcyB0aGUgdG9rZW4gb3IgZXJyb3IsIHNhdmVzIGl0IGluIHRoZSBjYWNoZSBhbmQgY2FsbHMgdGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIHdpdGggdGhlIHJlc3VsdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1dGhvcml0eSBhdXRob3JpdHkgcmVjZWl2ZWQgaW4gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFELlxuICAgKiBAcGFyYW0ge1Rva2VuUmVzcG9uc2V9IHJlcXVlc3RJbmZvIGFuIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFEIGNvbXByaXNpbmcgb2YgdGhlIGtleXMgLSBwYXJhbWV0ZXJzLCByZXF1ZXN0VHlwZSwgc3RhdGVNYXRjaCwgc3RhdGVSZXNwb25zZSBhbmQgdmFsaWQuXG4gICAqIEBwYXJhbSB7VXNlcn0gdXNlciB1c2VyIG9iamVjdCBmb3Igd2hpY2ggc2NvcGVzIGFyZSBjb25zZW50ZWQgZm9yLiBUaGUgZGVmYXVsdCB1c2VyIGlzIHRoZSBsb2dnZWQgaW4gdXNlci5cbiAgICogQHBhcmFtIHtDbGllbnRJbmZvfSBjbGllbnRJbmZvIGNsaWVudEluZm8gcmVjZWl2ZWQgYXMgcGFydCBvZiB0aGUgcmVzcG9uc2UgY29tcHJpc2luZyBvZiBmaWVsZHMgdWlkIGFuZCB1dGlkLlxuICAgKiBAcGFyYW0ge0lkVG9rZW59IGlkVG9rZW4gaWRUb2tlbiByZWNlaXZlZCBhcyBwYXJ0IG9mIHRoZSByZXNwb25zZS5cbiAgICogQGlnbm9yZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICAgLyogdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgcHJpdmF0ZSBzYXZlQWNjZXNzVG9rZW4oYXV0aG9yaXR5OiBzdHJpbmcsIHRva2VuUmVzcG9uc2U6IFRva2VuUmVzcG9uc2UsIHVzZXI6IFVzZXIsIGNsaWVudEluZm86IHN0cmluZywgaWRUb2tlbjogSWRUb2tlbik6IHZvaWQge1xuICAgIGxldCBzY29wZTogc3RyaW5nO1xuICAgIGxldCBjbGllbnRPYmo6IENsaWVudEluZm8gPSBuZXcgQ2xpZW50SW5mbyhjbGllbnRJbmZvKTtcbiAgICBpZiAodG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KFwic2NvcGVcIikpIHtcbiAgICAgIHNjb3BlID0gdG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzW1wic2NvcGVcIl07XG4gICAgICBjb25zdCBjb25zZW50ZWRTY29wZXMgPSBzY29wZS5zcGxpdChcIiBcIik7XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgPVxuICAgICAgICB0aGlzLl9jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKHRoaXMuY2xpZW50SWQsIGF1dGhvcml0eSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtc1tpXTtcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS51c2VySWRlbnRpZmllciA9PT0gdXNlci51c2VySWRlbnRpZmllcikge1xuICAgICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgIGlmIChVdGlscy5pc0ludGVyc2VjdGluZ1Njb3BlcyhjYWNoZWRTY29wZXMsIGNvbnNlbnRlZFNjb3BlcykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbktleSA9IG5ldyBBY2Nlc3NUb2tlbktleShhdXRob3JpdHksIHRoaXMuY2xpZW50SWQsIHNjb3BlLCBjbGllbnRPYmoudWlkLCBjbGllbnRPYmoudXRpZCk7XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlblZhbHVlID0gbmV3IEFjY2Vzc1Rva2VuVmFsdWUodG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzW0NvbnN0YW50cy5hY2Nlc3NUb2tlbl0sIGlkVG9rZW4ucmF3SWRUb2tlbiwgVXRpbHMuZXhwaXJlc0luKHRva2VuUmVzcG9uc2UucGFyYW1ldGVyc1tDb25zdGFudHMuZXhwaXJlc0luXSkudG9TdHJpbmcoKSwgY2xpZW50SW5mbyk7XG4gICAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbktleSksIEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuVmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NvcGUgPSB0aGlzLmNsaWVudElkO1xuICAgICAgY29uc3QgYWNjZXNzVG9rZW5LZXkgPSBuZXcgQWNjZXNzVG9rZW5LZXkoYXV0aG9yaXR5LCB0aGlzLmNsaWVudElkLCBzY29wZSwgY2xpZW50T2JqLnVpZCwgY2xpZW50T2JqLnV0aWQpO1xuICAgICAgY29uc3QgYWNjZXNzVG9rZW5WYWx1ZSA9IG5ldyBBY2Nlc3NUb2tlblZhbHVlKHRva2VuUmVzcG9uc2UucGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl0sIHRva2VuUmVzcG9uc2UucGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl0sIGlkVG9rZW4uZXhwaXJhdGlvbiwgY2xpZW50SW5mbyk7XG4gICAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbktleSksIEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuVmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdG9rZW4gb3IgZXJyb3IgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gQUFEIGluIHRoZSBjYWNoZS4gSW4gY2FzZSBvZiBpZF90b2tlbiwgaXQgYWxzbyBjcmVhdGVzIHRoZSB1c2VyIG9iamVjdC5cbiAgICogQGlnbm9yZVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcm90ZWN0ZWQgc2F2ZVRva2VuRnJvbUhhc2godG9rZW5SZXNwb25zZTogVG9rZW5SZXNwb25zZSk6IHZvaWQge1xuICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiU3RhdGUgc3RhdHVzOlwiICsgdG9rZW5SZXNwb25zZS5zdGF0ZU1hdGNoICsgXCI7IFJlcXVlc3QgdHlwZTpcIiArIHRva2VuUmVzcG9uc2UucmVxdWVzdFR5cGUpO1xuICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIFwiXCIpO1xuICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgXCJcIik7XG4gICAgY29uc3QgYXV0aG9yaXR5S2V5ID0gQ29uc3RhbnRzLmF1dGhvcml0eSArIENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlciArIHRva2VuUmVzcG9uc2Uuc3RhdGVSZXNwb25zZTtcbiAgICB2YXIgYWNxdWlyZVRva2VuVXNlcktleTogc3RyaW5nID0gXCJcIjtcblxuICAgIC8vIFJlY29yZCBlcnJvclxuICAgIGlmICh0b2tlblJlc3BvbnNlLnBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb24pIHx8IHRva2VuUmVzcG9uc2UucGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3IpKSB7XG4gICAgICB0aGlzLl9sb2dnZXIuaW5mb1BpaShcIkVycm9yIDpcIiArIHRva2VuUmVzcG9uc2UucGFyYW1ldGVyc1tDb25zdGFudHMuZXJyb3JdICsgXCI7IEVycm9yIGRlc2NyaXB0aW9uOlwiICsgdG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSk7XG4gICAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCB0b2tlblJlc3BvbnNlLnBhcmFtZXRlcnNbXCJlcnJvclwiXSk7XG4gICAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIHRva2VuUmVzcG9uc2UucGFyYW1ldGVyc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xuICAgICAgaWYgKHRva2VuUmVzcG9uc2UucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5sb2dpbikge1xuICAgICAgICB0aGlzLl9sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIHRva2VuUmVzcG9uc2UucGFyYW1ldGVyc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0gKyBcIjpcIiArIHRva2VuUmVzcG9uc2UucGFyYW1ldGVyc1tDb25zdGFudHMuZXJyb3JdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuUmVzcG9uc2UucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5yZW5ld1Rva2VuKSB7XG4gICAgICAgICAgdGhpcy5fYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgIHZhciB1c2VyS2V5ID0gdGhpcy5nZXRVc2VyKCkgIT09IG51bGwgPyB0aGlzLmdldFVzZXIoKS51c2VySWRlbnRpZmllciA6IFwiXCI7XG4gICAgICAgICAgYWNxdWlyZVRva2VuVXNlcktleSA9IENvbnN0YW50cy5hY3F1aXJlVG9rZW5Vc2VyICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1ldGVyICsgdXNlcktleSArIENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlciArIHRva2VuUmVzcG9uc2Uuc3RhdGVSZXNwb25zZTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJdCBtdXN0IHZlcmlmeSB0aGUgc3RhdGUgZnJvbSByZWRpcmVjdFxuICAgICAgaWYgKHRva2VuUmVzcG9uc2Uuc3RhdGVNYXRjaCkge1xuICAgICAgICAvLyByZWNvcmQgdG9rZW5zIHRvIHN0b3JhZ2UgaWYgZXhpc3RzXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiU3RhdGUgaXMgcmlnaHRcIik7XG4gICAgICAgIGlmICh0b2tlblJlc3BvbnNlLnBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLnNlc3Npb25TdGF0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsU2Vzc2lvblN0YXRlLCB0b2tlblJlc3BvbnNlLnBhcmFtZXRlcnNbQ29uc3RhbnRzLnNlc3Npb25TdGF0ZV0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZFRva2VuOiBJZFRva2VuO1xuICAgICAgICB2YXIgY2xpZW50SW5mbzogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgaWYgKHRva2VuUmVzcG9uc2UucGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuYWNjZXNzVG9rZW4pKSB7XG4gICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCJGcmFnbWVudCBoYXMgYWNjZXNzIHRva2VuXCIpO1xuICAgICAgICAgIHRoaXMuX2FjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgdXNlcjogVXNlcjtcbiAgICAgICAgICBpZiAodG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5pZFRva2VuKSkge1xuICAgICAgICAgICAgaWRUb2tlbiA9IG5ldyBJZFRva2VuKHRva2VuUmVzcG9uc2UucGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZFRva2VuID0gbmV3IElkVG9rZW4odGhpcy5fY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmlkVG9rZW5LZXkpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBhdXRob3JpdHk6IHN0cmluZyA9IHRoaXMuX2NhY2hlU3RvcmFnZS5nZXRJdGVtKGF1dGhvcml0eUtleSwgdGhpcy5zdG9yZUF1dGhTdGF0ZUluQ29va2llKTtcbiAgICAgICAgICAgIGlmICghVXRpbHMuaXNFbXB0eShhdXRob3JpdHkpKSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5ID0gVXRpbHMucmVwbGFjZUZpcnN0UGF0aChhdXRob3JpdHksIGlkVG9rZW4udGVuYW50SWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0b2tlblJlc3BvbnNlLnBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmNsaWVudEluZm8pKSB7XG4gICAgICAgICAgICBjbGllbnRJbmZvID0gdG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzW0NvbnN0YW50cy5jbGllbnRJbmZvXTtcbiAgICAgICAgICAgIHVzZXIgPSBVc2VyLmNyZWF0ZVVzZXIoaWRUb2tlbiwgbmV3IENsaWVudEluZm8oY2xpZW50SW5mbykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIud2FybmluZyhcIkNsaWVudEluZm8gbm90IHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIEFBRFwiKTtcbiAgICAgICAgICAgIHVzZXIgPSBVc2VyLmNyZWF0ZVVzZXIoaWRUb2tlbiwgbmV3IENsaWVudEluZm8oY2xpZW50SW5mbykpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFjcXVpcmVUb2tlblVzZXJLZXkgPSBDb25zdGFudHMuYWNxdWlyZVRva2VuVXNlciArIENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlciArIHVzZXIudXNlcklkZW50aWZpZXIgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWV0ZXIgKyB0b2tlblJlc3BvbnNlLnN0YXRlUmVzcG9uc2U7XG4gICAgICAgICAgICB2YXIgYWNxdWlyZVRva2VuVXNlcktleV9ub3VzZXIgPSBDb25zdGFudHMuYWNxdWlyZVRva2VuVXNlciArIENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlciArIENvbnN0YW50cy5ub191c2VyICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1ldGVyICsgdG9rZW5SZXNwb25zZS5zdGF0ZVJlc3BvbnNlO1xuICAgICAgICAgICAgbGV0IGNhY2hlZFVzZXI6IHN0cmluZyA9IHRoaXMuX2NhY2hlU3RvcmFnZS5nZXRJdGVtKGFjcXVpcmVUb2tlblVzZXJLZXkpO1xuICAgICAgICAgICAgbGV0IGFjcXVpcmVUb2tlblVzZXI6IFVzZXI7XG4gICAgICAgICAgICBpZiAoIVV0aWxzLmlzRW1wdHkoY2FjaGVkVXNlcikpIHtcbiAgICAgICAgICAgICAgICBhY3F1aXJlVG9rZW5Vc2VyID0gSlNPTi5wYXJzZShjYWNoZWRVc2VyKTtcbiAgICAgICAgICAgIGlmICh1c2VyICYmIGFjcXVpcmVUb2tlblVzZXIgJiYgVXRpbHMuY29tcGFyZU9iamVjdHModXNlciwgYWNxdWlyZVRva2VuVXNlcikpIHtcbiAgICAgICAgICAgICAgdGhpcy5zYXZlQWNjZXNzVG9rZW4oYXV0aG9yaXR5LCB0b2tlblJlc3BvbnNlLCB1c2VyLCBjbGllbnRJbmZvLCBpZFRva2VuKTtcbiAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXG4gICAgICAgICAgICAgICAgXCJUaGUgdXNlciBvYmplY3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgcGFzc2VkIGluIHRoZSBhY3F1aXJlVG9rZW4gcmVxdWVzdFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICAgICAgIFwiVGhlIHVzZXIgb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVzcG9uc2UgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBvbmUgcGFzc2VkIGluIHRoZSBhY3F1aXJlVG9rZW4gcmVxdWVzdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFVdGlscy5pc0VtcHR5KHRoaXMuX2NhY2hlU3RvcmFnZS5nZXRJdGVtKGFjcXVpcmVUb2tlblVzZXJLZXlfbm91c2VyKSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUFjY2Vzc1Rva2VuKGF1dGhvcml0eSwgdG9rZW5SZXNwb25zZSwgdXNlciwgY2xpZW50SW5mbywgaWRUb2tlbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRva2VuUmVzcG9uc2UucGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuaWRUb2tlbikpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiRnJhZ21lbnQgaGFzIGlkIHRva2VuXCIpO1xuICAgICAgICAgICAgdGhpcy5fbG9naW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICBpZFRva2VuID0gbmV3IElkVG9rZW4odG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzW0NvbnN0YW50cy5pZFRva2VuXSk7XG4gICAgICAgICAgICBpZiAodG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5jbGllbnRJbmZvKSkge1xuICAgICAgICAgICAgICBjbGllbnRJbmZvID0gdG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzW0NvbnN0YW50cy5jbGllbnRJbmZvXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci53YXJuaW5nKFwiQ2xpZW50SW5mbyBub3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gQUFEXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgYXV0aG9yaXR5OiBzdHJpbmcgPSB0aGlzLl9jYWNoZVN0b3JhZ2UuZ2V0SXRlbShhdXRob3JpdHlLZXksIHRoaXMuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSk7XG4gICAgICAgICAgICBpZiAoIVV0aWxzLmlzRW1wdHkoYXV0aG9yaXR5KSkge1xuICAgICAgICAgICAgICBhdXRob3JpdHkgPSBVdGlscy5yZXBsYWNlRmlyc3RQYXRoKGF1dGhvcml0eSwgaWRUb2tlbi50ZW5hbnRJZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3VzZXIgPSBVc2VyLmNyZWF0ZVVzZXIoaWRUb2tlbiwgbmV3IENsaWVudEluZm8oY2xpZW50SW5mbykpO1xuICAgICAgICAgICAgaWYgKGlkVG9rZW4gJiYgaWRUb2tlbi5ub25jZSkge1xuICAgICAgICAgICAgICBpZiAoaWRUb2tlbi5ub25jZSAhPT0gdGhpcy5fY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5zdG9yZUF1dGhTdGF0ZUluQ29va2llKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5FcnJvciwgXCJOb25jZSBNaXNtYXRjaC4gRXhwZWN0ZWQgTm9uY2U6IFwiICsgdGhpcy5fY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5zdG9yZUF1dGhTdGF0ZUluQ29va2llKSArIFwiLFwiICsgXCJBY3R1YWwgTm9uY2U6IFwiICsgaWRUb2tlbi5ub25jZSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoXCJOb25jZSBNaXNtYXRjaC5FeHBlY3RlZCBOb25jZTogXCIgKyB0aGlzLl9jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCB0aGlzLnN0b3JlQXV0aFN0YXRlSW5Db29raWUpICsgXCIsXCIgKyBcIkFjdHVhbCBOb25jZTogXCIgKyBpZFRva2VuLm5vbmNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuaWRUb2tlbktleSwgdG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzW0NvbnN0YW50cy5pZFRva2VuXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxDbGllbnRJbmZvLCBjbGllbnRJbmZvKTtcblxuICAgICAgICAgICAgICAgIC8vIFNhdmUgaWRUb2tlbiBhcyBhY2Nlc3MgdG9rZW4gZm9yIGFwcCBpdHNlbGZcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVBY2Nlc3NUb2tlbihhdXRob3JpdHksIHRva2VuUmVzcG9uc2UsIHRoaXMuX3VzZXIsIGNsaWVudEluZm8sIGlkVG9rZW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoXCJJbnZhbGlkIGlkX3Rva2VuIHJlY2VpdmVkIGluIHRoZSByZXNwb25zZVwiKTtcbiAgICAgICAgICAgICAgdG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzW1wiZXJyb3JcIl0gPSBcImludmFsaWQgaWRUb2tlblwiO1xuICAgICAgICAgICAgICB0b2tlblJlc3BvbnNlLnBhcmFtZXRlcnNbXCJlcnJvcl9kZXNjcmlwdGlvblwiXSA9IFwiSW52YWxpZCBpZFRva2VuLiBpZFRva2VuOiBcIiArIHRva2VuUmVzcG9uc2UucGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl07XG4gICAgICAgICAgICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIFwiaW52YWxpZCBpZFRva2VuXCIpO1xuICAgICAgICAgICAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIFwiSW52YWxpZCBpZFRva2VuLiBpZFRva2VuOiBcIiArIHRva2VuUmVzcG9uc2UucGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoXCJTdGF0ZSBNaXNtYXRjaC5FeHBlY3RlZCBTdGF0ZTogXCIgKyB0aGlzLl9jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgdGhpcy5zdG9yZUF1dGhTdGF0ZUluQ29va2llKSArIFwiLFwiICsgXCJBY3R1YWwgU3RhdGU6IFwiICsgdG9rZW5SZXNwb25zZS5zdGF0ZVJlc3BvbnNlKTtcbiAgICAgICAgdG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzW1wiZXJyb3JcIl0gPSBcIkludmFsaWRfc3RhdGVcIjtcbiAgICAgICAgdG9rZW5SZXNwb25zZS5wYXJhbWV0ZXJzW1wiZXJyb3JfZGVzY3JpcHRpb25cIl0gPSBcIkludmFsaWRfc3RhdGUuIHN0YXRlOiBcIiArIHRva2VuUmVzcG9uc2Uuc3RhdGVSZXNwb25zZTtcbiAgICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgXCJJbnZhbGlkX3N0YXRlXCIpO1xuICAgICAgICB0aGlzLl9jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIFwiSW52YWxpZF9zdGF0ZS4gc3RhdGU6IFwiICsgdG9rZW5SZXNwb25zZS5zdGF0ZVJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2NhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIHRva2VuUmVzcG9uc2Uuc3RhdGVSZXNwb25zZSwgQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNDb21wbGV0ZWQpO1xuICAgICAgdGhpcy5fY2FjaGVTdG9yYWdlLnJlbW92ZUFjcXVpcmVUb2tlbkVudHJpZXMoKTtcbiAgfVxuICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLXN0cmluZy1saXRlcmFsICovXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgU1RTLiBJbiBjYXNlIG9mIHJlZGlyZWN0LCB0aGUgdXJsIGZyYWdtZW50IGhhcyBlaXRoZXIgaWRfdG9rZW4sIGFjY2Vzc190b2tlbiBvciBlcnJvci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2ggLSBIYXNoIHBhc3NlZCBmcm9tIHJlZGlyZWN0IHBhZ2UuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSAtIHRydWUgaWYgcmVzcG9uc2UgY29udGFpbnMgaWRfdG9rZW4sIGFjY2Vzc190b2tlbiBvciBlcnJvciwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBpc0NhbGxiYWNrKGhhc2g6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGhhc2ggPSB0aGlzLmdldEhhc2goaGFzaCk7XG4gICAgY29uc3QgcGFyYW1ldGVycyA9IFV0aWxzLmRlc2VyaWFsaXplKGhhc2gpO1xuICAgIHJldHVybiAoXG4gICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uKSB8fFxuICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3IpIHx8XG4gICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5hY2Nlc3NUb2tlbikgfHxcbiAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmlkVG9rZW4pXG5cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFuY2hvciBwYXJ0KCMpIG9mIHRoZSBVUkxcbiAgICogQGlnbm9yZVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGdldEhhc2goaGFzaDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoaGFzaC5pbmRleE9mKFwiIy9cIikgPiAtMSkge1xuICAgICAgaGFzaCA9IGhhc2guc3Vic3RyaW5nKGhhc2guaW5kZXhPZihcIiMvXCIpICsgMik7XG4gICAgfSBlbHNlIGlmIChoYXNoLmluZGV4T2YoXCIjXCIpID4gLTEpIHtcbiAgICAgIGhhc2ggPSBoYXNoLnN1YnN0cmluZygxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIC8qKlxuICAgICogQ3JlYXRlcyBhIHJlcXVlc3RJbmZvIG9iamVjdCBmcm9tIHRoZSBVUkwgZnJhZ21lbnQgYW5kIHJldHVybnMgaXQuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaCAgLSAgSGFzaCBwYXNzZWQgZnJvbSByZWRpcmVjdCBwYWdlXG4gICAgKiBAcmV0dXJucyB7VG9rZW5SZXNwb25zZX0gYW4gb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgZnJvbSBBQUQgY29tcHJpc2luZyBvZiB0aGUga2V5cyAtIHBhcmFtZXRlcnMsIHJlcXVlc3RUeXBlLCBzdGF0ZU1hdGNoLCBzdGF0ZVJlc3BvbnNlIGFuZCB2YWxpZC5cbiAgICAqIEBpZ25vcmVcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICBwcm90ZWN0ZWQgZ2V0UmVxdWVzdEluZm8oaGFzaDogc3RyaW5nKTogVG9rZW5SZXNwb25zZSB7XG4gICAgaGFzaCA9IHRoaXMuZ2V0SGFzaChoYXNoKTtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gVXRpbHMuZGVzZXJpYWxpemUoaGFzaCk7XG4gICAgY29uc3QgdG9rZW5SZXNwb25zZSA9IG5ldyBUb2tlblJlc3BvbnNlKCk7XG4gICAgaWYgKHBhcmFtZXRlcnMpIHtcbiAgICAgIHRva2VuUmVzcG9uc2UucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgICBpZiAocGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbikgfHxcbiAgICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3IpIHx8XG4gICAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmFjY2Vzc1Rva2VuKSB8fFxuICAgICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5pZFRva2VuKSkge1xuICAgICAgICB0b2tlblJlc3BvbnNlLnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgLy8gd2hpY2ggY2FsbFxuICAgICAgICBsZXQgc3RhdGVSZXNwb25zZTogc3RyaW5nO1xuICAgICAgICBpZiAocGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpKSB7XG4gICAgICAgICAgICBzdGF0ZVJlc3BvbnNlID0gcGFyYW1ldGVycy5zdGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlblJlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9rZW5SZXNwb25zZS5zdGF0ZVJlc3BvbnNlID0gc3RhdGVSZXNwb25zZTtcbiAgICAgICAgLy8gYXN5bmMgY2FsbHMgY2FuIGZpcmUgaWZyYW1lIGFuZCBsb2dpbiByZXF1ZXN0IGF0IHRoZSBzYW1lIHRpbWUgaWYgZGV2ZWxvcGVyIGRvZXMgbm90IHVzZSB0aGUgQVBJIGFzIGV4cGVjdGVkXG4gICAgICAgIC8vIGluY29taW5nIGNhbGxiYWNrIG5lZWRzIHRvIGJlIGxvb2tlZCB1cCB0byBmaW5kIHRoZSByZXF1ZXN0IHR5cGVcbiAgICAgICAgaWYgKHN0YXRlUmVzcG9uc2UgPT09IHRoaXMuX2NhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luLCB0aGlzLnN0b3JlQXV0aFN0YXRlSW5Db29raWUpIHx8IHN0YXRlUmVzcG9uc2UgPT09IHRoaXMuX3NpbGVudEF1dGhlbnRpY2F0aW9uU3RhdGUpIHsgLy8gbG9naW5SZWRpcmVjdFxuICAgICAgICAgICAgdG9rZW5SZXNwb25zZS5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5sb2dpbjtcbiAgICAgICAgICAgIHRva2VuUmVzcG9uc2Uuc3RhdGVNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW5SZXNwb25zZTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZVJlc3BvbnNlID09PSB0aGlzLl9jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVBY3F1aXJlVG9rZW4sIHRoaXMuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSkpIHsgLy9hY3F1aXJlVG9rZW5SZWRpcmVjdFxuICAgICAgICAgICAgdG9rZW5SZXNwb25zZS5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xuICAgICAgICAgICAgdG9rZW5SZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0b2tlblJlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXh0ZXJuYWwgYXBpIHJlcXVlc3RzIG1heSBoYXZlIG1hbnkgcmVuZXd0b2tlbiByZXF1ZXN0cyBmb3IgZGlmZmVyZW50IHJlc291cmNlXG4gICAgICAgIGlmICghdG9rZW5SZXNwb25zZS5zdGF0ZU1hdGNoKSB7XG4gICAgICAgICAgdG9rZW5SZXNwb25zZS5yZXF1ZXN0VHlwZSA9IHdpbmRvdy5yZXF1ZXN0VHlwZTtcbiAgICAgICAgICBjb25zdCBzdGF0ZXNJblBhcmVudENvbnRleHQgPSB3aW5kb3cucmVuZXdTdGF0ZXM7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXNJblBhcmVudENvbnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZXNJblBhcmVudENvbnRleHRbaV0gPT09IHRva2VuUmVzcG9uc2Uuc3RhdGVSZXNwb25zZSkge1xuICAgICAgICAgICAgICB0b2tlblJlc3BvbnNlLnN0YXRlTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRva2VuUmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICAqIEV4dHJhY3RzIHNjb3BlIHZhbHVlIGZyb20gdGhlIHN0YXRlIHNlbnQgd2l0aCB0aGUgYXV0aGVudGljYXRpb24gcmVxdWVzdC5cbiAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHNjb3BlLlxuICAgICogQGlnbm9yZVxuICAgICogQGhpZGRlblxuICAgICovXG4gIHByaXZhdGUgZ2V0U2NvcGVGcm9tU3RhdGUoc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBjb25zdCBzcGxpdEluZGV4ID0gc3RhdGUuaW5kZXhPZihcInxcIik7XG4gICAgICBpZiAoc3BsaXRJbmRleCA+IC0xICYmIHNwbGl0SW5kZXggKyAxIDwgc3RhdGUubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5zdWJzdHJpbmcoc3BsaXRJbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gICAgLyoqXG4gICAgKiBFeHRyYWN0cyBzdGF0ZSB2YWx1ZSBmcm9tIHRoZSB1c2VyU3RhdGUgc2VudCB3aXRoIHRoZSBhdXRoZW50aWNhdGlvbiByZXF1ZXN0LlxuICAgICogQHJldHVybnMge3N0cmluZ30gc2NvcGUuXG4gICAgKiBAaWdub3JlXG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBnZXRVc2VyU3RhdGUgKHN0YXRlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdEluZGV4ID0gc3RhdGUuaW5kZXhPZihcInxcIik7XG4gICAgICAgICAgICBpZiAoc3BsaXRJbmRleCA+IC0xICYmIHNwbGl0SW5kZXggKyAxIDwgc3RhdGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG5cbiAgLyoqXG4gICAgKiBSZXR1cm5zIHdoZXRoZXIgY3VycmVudCB3aW5kb3cgaXMgaW4gaWZyYW0gZm9yIHRva2VuIHJlbmV3YWxcbiAgICAqIEBpZ25vcmVcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICBwcml2YXRlIGlzSW5JZnJhbWUoKSB7XG4gICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93O1xuICB9XG5cbiAgbG9naW5JblByb2dyZXNzKCk6IGJvb2xlYW4ge1xuICAgICAgdmFyIHBlbmRpbmdDYWxsYmFjayA9IHRoaXMuX2NhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcbiAgICAgIGlmIChwZW5kaW5nQ2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9sb2dpbkluUHJvZ3Jlc3M7XG4gIH1cblxuIHByaXZhdGUgZ2V0SG9zdEZyb21VcmkodXJpOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgLy8gcmVtb3ZlIGh0dHA6Ly8gb3IgaHR0cHM6Ly8gZnJvbSB1cmlcbiAgICAgIHZhciBleHRyYWN0ZWRVcmkgPSBTdHJpbmcodXJpKS5yZXBsYWNlKC9eKGh0dHBzPzopXFwvXFwvLywgXCJcIik7XG4gICAgICBleHRyYWN0ZWRVcmkgPSBleHRyYWN0ZWRVcmkuc3BsaXQoXCIvXCIpWzBdO1xuICAgICAgcmV0dXJuIGV4dHJhY3RlZFVyaTtcbiB9XG5cbiAgcHJvdGVjdGVkIGdldFNjb3Blc0ZvckVuZHBvaW50KGVuZHBvaW50OiBzdHJpbmcpIDogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAvLyBpZiB1c2VyIHNwZWNpZmllZCBsaXN0IG9mIHVucHJvdGVjdGVkUmVzb3VyY2VzLCBubyBuZWVkIHRvIHNlbmQgdG9rZW4gdG8gdGhlc2UgZW5kcG9pbnRzLCByZXR1cm4gbnVsbC5cbiAgICAgIGlmICh0aGlzLl91bnByb3RlY3RlZFJlc291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl91bnByb3RlY3RlZFJlc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoZW5kcG9pbnQuaW5kZXhPZih0aGlzLl91bnByb3RlY3RlZFJlc291cmNlc1tpXSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wcm90ZWN0ZWRSZXNvdXJjZU1hcC5zaXplID4gMCkge1xuICAgICAgICAgIGZvciAobGV0IGtleSBvZiBBcnJheS5mcm9tKHRoaXMuX3Byb3RlY3RlZFJlc291cmNlTWFwLmtleXMoKSkpIHtcbiAgICAgICAgICAgICAgLy8gY29uZmlnRW5kcG9pbnQgaXMgbGlrZSAvYXBpL1RvZG8gcmVxdWVzdGVkIGVuZHBvaW50IGNhbiBiZSAvYXBpL1RvZG8vMVxuICAgICAgICAgICAgICBpZiAoZW5kcG9pbnQuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm90ZWN0ZWRSZXNvdXJjZU1hcC5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZGVmYXVsdCByZXNvdXJjZSB3aWxsIGJlIGNsaWVudGlkIGlmIG5vdGhpbmcgc3BlY2lmaWVkXG4gICAgICAvLyBBcHAgd2lsbCB1c2UgaWR0b2tlbiBmb3IgY2FsbHMgdG8gaXRzZWxmXG4gICAgICAvLyBjaGVjayBpZiBpdCdzIHN0YXJpbmcgZnJvbSBodHRwIG9yIGh0dHBzLCBuZWVkcyB0byBtYXRjaCB3aXRoIGFwcCBob3N0XG4gICAgICBpZiAoZW5kcG9pbnQuaW5kZXhPZihcImh0dHA6Ly9cIikgPiAtMSB8fCBlbmRwb2ludC5pbmRleE9mKFwiaHR0cHM6Ly9cIikgPiAtMSkge1xuICAgICAgICAgIGlmICh0aGlzLmdldEhvc3RGcm9tVXJpKGVuZHBvaW50KSA9PT0gdGhpcy5nZXRIb3N0RnJvbVVyaSh0aGlzLmdldFJlZGlyZWN0VXJpKCkpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXk8c3RyaW5nPih0aGlzLmNsaWVudElkKTtcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW4gYW5ndWxhciBsZXZlbCwgdGhlIHVybCBmb3IgJGh0dHAgaW50ZXJjZXB0b3IgY2FsbCBjb3VsZCBiZSByZWxhdGl2ZSB1cmwsXG4gICAgICAvLyBpZiBpdCdzIHJlbGF0aXZlIGNhbGwsIHdlJ2xsIHRyZWF0IGl0IGFzIGFwcCBiYWNrZW5kIGNhbGwuXG4gICAgICAgICAgcmV0dXJuIG5ldyBBcnJheTxzdHJpbmc+KHRoaXMuY2xpZW50SWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBub3QgdGhlIGFwcCdzIG93biBiYWNrZW5kIG9yIG5vdCBhIGRvbWFpbiBsaXN0ZWQgaW4gdGhlIGVuZHBvaW50cyBzdHJ1Y3R1cmVcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy9UaGVzZSBBUElTIGFyZSBleHBvc2VkIGZvciBtc2FsQW5ndWxhciB3cmFwcGVyIG9ubHlcbiAgICBwcm90ZWN0ZWQgc2V0bG9naW5JblByb2dyZXNzKGxvZ2luSW5Qcm9ncmVzcyA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fbG9naW5JblByb2dyZXNzID0gbG9naW5JblByb2dyZXNzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRBY3F1aXJlVG9rZW5JblByb2dyZXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWNxdWlyZVRva2VuSW5Qcm9ncmVzcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0QWNxdWlyZVRva2VuSW5Qcm9ncmVzcyhhY3F1aXJlVG9rZW5JblByb2dyZXNzIDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gYWNxdWlyZVRva2VuSW5Qcm9ncmVzcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TG9nZ2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9nZ2VyO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFRva2VuUmVzcG9uc2Uge1xuICB2YWxpZDogYm9vbGVhbjtcbiAgcGFyYW1ldGVyczogT2JqZWN0O1xuICBzdGF0ZU1hdGNoOiBib29sZWFuO1xuICBzdGF0ZVJlc3BvbnNlOiBzdHJpbmc7XG4gIHJlcXVlc3RUeXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52YWxpZCA9IGZhbHNlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHt9O1xuICAgIHRoaXMuc3RhdGVNYXRjaCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGVSZXNwb25zZSA9IFwiXCI7XG4gICAgdGhpcy5yZXF1ZXN0VHlwZSA9IFwidW5rbm93blwiO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgQ2xpZW50SW5mbyB9IGZyb20gXCIuL0NsaWVudEluZm9cIjtcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi9JZFRva2VuXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyIHtcblxuICAgIGRpc3BsYXlhYmxlSWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaWRlbnRpdHlQcm92aWRlcjogc3RyaW5nO1xuICAgIHVzZXJJZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgaWRUb2tlbjogT2JqZWN0O1xuICAgIHNpZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRpc3BsYXlhYmxlSWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBpZGVudGl0eVByb3ZpZGVyOiBzdHJpbmcsIHVzZXJJZGVudGlmaWVyOiBzdHJpbmcsIGlkVG9rZW46IE9iamVjdCwgc2lkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5YWJsZUlkID0gZGlzcGxheWFibGVJZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pZGVudGl0eVByb3ZpZGVyID0gaWRlbnRpdHlQcm92aWRlcjtcbiAgICAgICAgdGhpcy51c2VySWRlbnRpZmllciA9IHVzZXJJZGVudGlmaWVyO1xuICAgICAgICB0aGlzLmlkVG9rZW4gPSBpZFRva2VuO1xuICAgICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVVzZXIoaWRUb2tlbjogSWRUb2tlbiwgY2xpZW50SW5mbzogQ2xpZW50SW5mbyk6IFVzZXIge1xuICAgICAgICBsZXQgdWlkOiBzdHJpbmc7XG4gICAgICAgIGxldCB1dGlkOiBzdHJpbmc7XG4gICAgICAgIGlmICghY2xpZW50SW5mbykge1xuICAgICAgICAgICAgdWlkID0gXCJcIjtcbiAgICAgICAgICAgIHV0aWQgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdWlkID0gY2xpZW50SW5mby51aWQ7XG4gICAgICAgICAgICB1dGlkID0gY2xpZW50SW5mby51dGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlcklkZW50aWZpZXIgPSBVdGlscy5iYXNlNjRFbmNvZGVTdHJpbmdVcmxTYWZlKHVpZCkgKyBcIi5cIiArIFV0aWxzLmJhc2U2NEVuY29kZVN0cmluZ1VybFNhZmUodXRpZCk7XG4gICAgICAgIHJldHVybiBuZXcgVXNlcihpZFRva2VuLnByZWZlcnJlZE5hbWUsIGlkVG9rZW4ubmFtZSwgaWRUb2tlbi5pc3N1ZXIsIHVzZXJJZGVudGlmaWVyLCBpZFRva2VuLmRlY29kZWRJZFRva2VuLCBpZFRva2VuLnNpZCk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IEF1dGhvcml0eSwgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgWGhyQ2xpZW50IH0gZnJvbSBcIi4vWEhSQ2xpZW50XCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWFkQXV0aG9yaXR5IGV4dGVuZHMgQXV0aG9yaXR5IHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludDogc3RyaW5nID0gXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uL2Rpc2NvdmVyeS9pbnN0YW5jZVwiO1xuXG4gIHByaXZhdGUgZ2V0IEFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnRVcmwoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgJHtBYWRBdXRob3JpdHkuQWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludH0/YXBpLXZlcnNpb249MS4wJmF1dGhvcml6YXRpb25fZW5kcG9pbnQ9JHt0aGlzLkNhbm9uaWNhbEF1dGhvcml0eX1vYXV0aDIvdjIuMC9hdXRob3JpemVgO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbikge1xuICAgIHN1cGVyKGF1dGhvcml0eSwgdmFsaWRhdGVBdXRob3JpdHkpO1xuICB9XG5cbiAgcHVibGljIGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGUge1xuICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkFhZDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRydXN0ZWRIb3N0TGlzdDogYW55ID0ge1xuICAgIFwibG9naW4ud2luZG93cy5uZXRcIjogXCJsb2dpbi53aW5kb3dzLm5ldFwiLFxuICAgIFwibG9naW4uY2hpbmFjbG91ZGFwaS5jblwiOiBcImxvZ2luLmNoaW5hY2xvdWRhcGkuY25cIixcbiAgICBcImxvZ2luLmNsb3VkZ292YXBpLnVzXCI6IFwibG9naW4uY2xvdWRnb3ZhcGkudXNcIixcbiAgICBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS5jb21cIjogXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tXCIsXG4gICAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuZGVcIjogXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuZGVcIixcbiAgICBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS51c1wiOiBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS51c1wiXG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBPSURDIGVuZHBvaW50XG4gICAqIE9ubHkgcmVzcG9uZHMgd2l0aCB0aGUgZW5kcG9pbnRcbiAgICovXG4gIHB1YmxpYyBHZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgY29uc3QgcmVzdWx0UHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+ID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgICAgcmVzb2x2ZSh0aGlzLkRlZmF1bHRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQpKTtcblxuICAgIGlmICghdGhpcy5Jc1ZhbGlkYXRpb25FbmFibGVkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICB9XG5cbiAgICBsZXQgaG9zdDogc3RyaW5nID0gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydDtcbiAgICBpZiAodGhpcy5Jc0luVHJ1c3RlZEhvc3RMaXN0KGhvc3QpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICB9XG5cbiAgICBsZXQgY2xpZW50OiBYaHJDbGllbnQgPSBuZXcgWGhyQ2xpZW50KCk7XG5cbiAgICByZXR1cm4gY2xpZW50LnNlbmRSZXF1ZXN0QXN5bmModGhpcy5BYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50VXJsLCBcIkdFVFwiLCB0cnVlKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS50ZW5hbnRfZGlzY292ZXJ5X2VuZHBvaW50O1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgaG9zdCBpcyBpbiBhIGxpc3Qgb2YgdHJ1c3RlZCBob3N0c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gVGhlIGhvc3QgdG8gbG9vayB1cFxuICAgKi9cbiAgcHVibGljIElzSW5UcnVzdGVkSG9zdExpc3QoaG9zdDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEFhZEF1dGhvcml0eS5UcnVzdGVkSG9zdExpc3RbaG9zdC50b0xvd2VyQ2FzZSgpXTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbi8qKlxuICogWEhSIGNsaWVudCBmb3IgSlNPTiBlbmRwb2ludHNcbiAqIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2FzeW5jLXByb21pc2VcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFhockNsaWVudCB7XG4gIHB1YmxpYyBzZW5kUmVxdWVzdEFzeW5jKHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgZW5hYmxlQ2FjaGluZz86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCAvKmFzeW5jOiAqLyB0cnVlKTtcbiAgICAgIGlmIChlbmFibGVDYWNoaW5nKSB7XG4gICAgICAgIC8vIFRPRE86IChzaGl2YikgZW5zdXJlIHRoYXQgdGhpcyBjYW4gYmUgY2FjaGVkXG4gICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcIlB1YmxpY1wiKTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9IChldikgPT4ge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzIDwgMjAwIHx8IHhoci5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgICAgIHJlamVjdCh0aGlzLmhhbmRsZUVycm9yKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHJlamVjdCh0aGlzLmhhbmRsZUVycm9yKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHZlKGpzb25SZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IChldikgPT4ge1xuICAgICAgICByZWplY3QoeGhyLnN0YXR1cyk7XG4gICAgICB9O1xuXG4gICAgICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgXCJub3QgaW1wbGVtZW50ZWRcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVFcnJvcihyZXNwb25zZVRleHQ6IHN0cmluZyk6IGFueSB7XG4gICAgdmFyIGpzb25SZXNwb25zZTtcbiAgICB0cnkge1xuICAgICAganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuICAgICAgaWYgKGpzb25SZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgIHJldHVybiBqc29uUmVzcG9uc2UuZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IHJlc3BvbnNlVGV4dDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2VUZXh0O1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IHsgVXNlckFnZW50QXBwbGljYXRpb24gfSBmcm9tIFwiLi9Vc2VyQWdlbnRBcHBsaWNhdGlvblwiO1xuZXhwb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XG5leHBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0xvZ2dlclwiO1xuZXhwb3J0IHsgVXNlciB9IGZyb20gXCIuL1VzZXJcIjtcbmV4cG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuZXhwb3J0IHsgVG9rZW5SZXNwb25zZX0gZnJvbSBcIi4vUmVxdWVzdEluZm9cIjtcbmV4cG9ydCB7QXV0aG9yaXR5fSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcbmV4cG9ydCB7Q2FjaGVSZXN1bHR9IGZyb20gXCIuL1VzZXJBZ2VudEFwcGxpY2F0aW9uXCI7XG5cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5LZXkge1xuXG4gIGF1dGhvcml0eTogc3RyaW5nO1xuICBjbGllbnRJZDogc3RyaW5nO1xuICB1c2VySWRlbnRpZmllcjogc3RyaW5nO1xuICBzY29wZXM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgY2xpZW50SWQ6IHN0cmluZywgc2NvcGVzOiBzdHJpbmcsIHVpZDogc3RyaW5nLCB1dGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmF1dGhvcml0eSA9IGF1dGhvcml0eTtcbiAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgdGhpcy5zY29wZXMgPSBzY29wZXM7XG4gICAgdGhpcy51c2VySWRlbnRpZmllciA9IFV0aWxzLmJhc2U2NEVuY29kZVN0cmluZ1VybFNhZmUodWlkKSArIFwiLlwiICsgVXRpbHMuYmFzZTY0RW5jb2RlU3RyaW5nVXJsU2FmZSh1dGlkKTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5WYWx1ZSB7XG5cbiAgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgaWRUb2tlbjogc3RyaW5nO1xuICBleHBpcmVzSW46IHN0cmluZztcbiAgY2xpZW50SW5mbzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIGlkVG9rZW46IHN0cmluZywgZXhwaXJlc0luOiBzdHJpbmcsIGNsaWVudEluZm86IHN0cmluZykge1xuICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICB0aGlzLmlkVG9rZW4gPSBpZFRva2VuO1xuICAgIHRoaXMuZXhwaXJlc0luID0gZXhwaXJlc0luO1xuICAgIHRoaXMuY2xpZW50SW5mbyA9IGNsaWVudEluZm87XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uUmVxdWVzdFBhcmFtZXRlcnMge1xuICBhdXRob3JpdHlJbnN0YW5jZTogQXV0aG9yaXR5O1xuICBjbGllbnRJZDogc3RyaW5nO1xuICBub25jZTogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICBjb3JyZWxhdGlvbklkOiBzdHJpbmc7XG4gIHhDbGllbnRWZXI6IHN0cmluZztcbiAgeENsaWVudFNrdTogc3RyaW5nO1xuICBzY29wZXM6IEFycmF5PHN0cmluZz47XG4gIHJlc3BvbnNlVHlwZTogc3RyaW5nO1xuICBwcm9tcHRWYWx1ZTogc3RyaW5nO1xuICBleHRyYVF1ZXJ5UGFyYW1ldGVyczogc3RyaW5nO1xuICBsb2dpbkhpbnQ6IHN0cmluZztcbiAgZG9tYWluSGludDogc3RyaW5nO1xuICByZWRpcmVjdFVyaTogc3RyaW5nO1xuICAgIHB1YmxpYyBnZXQgYXV0aG9yaXR5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhvcml0eUluc3RhbmNlID8gdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5DYW5vbmljYWxBdXRob3JpdHkgOiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBBdXRob3JpdHksIGNsaWVudElkOiBzdHJpbmcsIHNjb3BlOiBBcnJheTxzdHJpbmc+LCByZXNwb25zZVR5cGU6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc3RhdGU6IHN0cmluZyApIHtcbiAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlID0gYXV0aG9yaXR5O1xuICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICB0aGlzLnNjb3BlcyA9IHNjb3BlO1xuICAgIHRoaXMucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xuICAgIHRoaXMucmVkaXJlY3RVcmkgPSByZWRpcmVjdFVyaTtcbiAgICAvLyByYW5kb21seSBnZW5lcmF0ZWQgdmFsdWVzXG4gICAgdGhpcy5jb3JyZWxhdGlvbklkID0gVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZSAmJiAhVXRpbHMuaXNFbXB0eShzdGF0ZSkgPyAgVXRpbHMuY3JlYXRlTmV3R3VpZCgpICsgXCJ8XCIgKyBzdGF0ZSAgIDogVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xuICAgIHRoaXMubm9uY2UgPSBVdGlscy5jcmVhdGVOZXdHdWlkKCk7XG4gICAgLy8gdGVsZW1ldHJ5IGluZm9ybWF0aW9uXG4gICAgdGhpcy54Q2xpZW50U2t1ID0gXCJNU0FMLkpTXCI7XG4gICAgdGhpcy54Q2xpZW50VmVyID0gVXRpbHMuZ2V0TGlicmFyeVZlcnNpb24oKTtcbiAgfVxuXG4gICAgY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5jcmVhdGVOYXZpZ2F0aW9uVXJsU3RyaW5nKHNjb3Blcyk7XG4gICAgICAgIGxldCBhdXRoRW5kcG9pbnQ6IHN0cmluZyA9IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UuQXV0aG9yaXphdGlvbkVuZHBvaW50O1xuICAgICAgICAvLyBpZiB0aGUgZW5kcG9pbnQgYWxyZWFkeSBoYXMgcXVlcnlwYXJhbXMsIGxldHMgYWRkIHRvIGl0LCBvdGhlcndpc2UgYWRkIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgaWYgKGF1dGhFbmRwb2ludC5pbmRleE9mKFwiP1wiKSA8IDApIHtcbiAgICAgICAgICAgIGF1dGhFbmRwb2ludCArPSBcIj9cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF1dGhFbmRwb2ludCArPSBcIiZcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXF1ZXN0VXJsOiBzdHJpbmcgPSBgJHthdXRoRW5kcG9pbnR9JHtzdHIuam9pbihcIiZcIil9YDtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RVcmw7XG4gICAgfVxuXG4gICAgY3JlYXRlTmF2aWdhdGlvblVybFN0cmluZyhzY29wZXM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKCFzY29wZXMpIHtcbiAgICAgICAgICAgIHNjb3BlcyA9IFt0aGlzLmNsaWVudElkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNjb3Blcy5wdXNoKHRoaXMuY2xpZW50SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RyOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICAgIHN0ci5wdXNoKFwicmVzcG9uc2VfdHlwZT1cIiArIHRoaXMucmVzcG9uc2VUeXBlKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVjbGllbnRJZFVzZWRJblNjb3BlKHNjb3Blcyk7XG4gICAgICAgIHN0ci5wdXNoKFwic2NvcGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5wYXJzZVNjb3BlKHNjb3BlcykpKTtcbiAgICAgICAgc3RyLnB1c2goXCJjbGllbnRfaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jbGllbnRJZCkpO1xuICAgICAgICBzdHIucHVzaChcInJlZGlyZWN0X3VyaT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnJlZGlyZWN0VXJpKSk7XG4gICAgICAgIHN0ci5wdXNoKFwic3RhdGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zdGF0ZSkpO1xuICAgICAgICBzdHIucHVzaChcIm5vbmNlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMubm9uY2UpKTtcbiAgICAgICAgc3RyLnB1c2goXCJjbGllbnRfaW5mbz0xXCIpO1xuICAgICAgICBzdHIucHVzaChgeC1jbGllbnQtU0tVPSR7dGhpcy54Q2xpZW50U2t1fWApO1xuICAgICAgICBzdHIucHVzaChgeC1jbGllbnQtVmVyPSR7dGhpcy54Q2xpZW50VmVyfWApO1xuXG4gICAgICAgIGlmICh0aGlzLmV4dHJhUXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBzdHIucHVzaCh0aGlzLmV4dHJhUXVlcnlQYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0ci5wdXNoKFwiY2xpZW50LXJlcXVlc3QtaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb3JyZWxhdGlvbklkKSk7XG5cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgdHJhbnNsYXRlY2xpZW50SWRVc2VkSW5TY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcbiAgICBjb25zdCBjbGllbnRJZEluZGV4OiBudW1iZXIgPSBzY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKTtcbiAgICBpZiAoY2xpZW50SWRJbmRleCA+PSAwKSB7XG4gICAgICBzY29wZXMuc3BsaWNlKGNsaWVudElkSW5kZXgsIDEpO1xuICAgICAgaWYgKHNjb3Blcy5pbmRleE9mKFwib3BlbmlkXCIpID09PSAtMSkge1xuICAgICAgICBzY29wZXMucHVzaChcIm9wZW5pZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChzY29wZXMuaW5kZXhPZihcInByb2ZpbGVcIikgPT09IC0xKSB7XG4gICAgICAgIHNjb3Blcy5wdXNoKFwicHJvZmlsZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJzZVNjb3BlKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB7XG4gICAgbGV0IHNjb3BlTGlzdDogc3RyaW5nID0gXCJcIjtcbiAgICBpZiAoc2NvcGVzKSB7XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzY29wZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc2NvcGVMaXN0ICs9IChpICE9PSBzY29wZXMubGVuZ3RoIC0gMSkgPyBzY29wZXNbaV0gKyBcIiBcIiA6IHNjb3Blc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NvcGVMaXN0O1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENsaWVudEluZm8ge1xuXG4gIHByaXZhdGUgX3VpZDogc3RyaW5nO1xuICBnZXQgdWlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VpZCA/IHRoaXMuX3VpZCA6IFwiXCI7XG4gIH1cblxuICBzZXQgdWlkKHVpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdWlkID0gdWlkO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXRpZDogc3RyaW5nO1xuICBnZXQgdXRpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91dGlkID8gdGhpcy5fdXRpZCA6IFwiXCI7XG4gIH1cblxuICBzZXQgdXRpZCh1dGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91dGlkID0gdXRpZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJhd0NsaWVudEluZm86IHN0cmluZykge1xuICAgIGlmICghcmF3Q2xpZW50SW5mbyB8fCBVdGlscy5pc0VtcHR5KHJhd0NsaWVudEluZm8pKSB7XG4gICAgICB0aGlzLnVpZCA9IFwiXCI7XG4gICAgICB0aGlzLnV0aWQgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkZWNvZGVkQ2xpZW50SW5mbzogc3RyaW5nID0gVXRpbHMuYmFzZTY0RGVjb2RlU3RyaW5nVXJsU2FmZShyYXdDbGllbnRJbmZvKTtcbiAgICAgIGNvbnN0IGNsaWVudEluZm86IENsaWVudEluZm8gPSA8Q2xpZW50SW5mbz5KU09OLnBhcnNlKGRlY29kZWRDbGllbnRJbmZvKTtcbiAgICAgIGlmIChjbGllbnRJbmZvKSB7XG4gICAgICAgIGlmIChjbGllbnRJbmZvLmhhc093blByb3BlcnR5KFwidWlkXCIpKSB7XG4gICAgICAgICAgdGhpcy51aWQgPSBjbGllbnRJbmZvLnVpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGllbnRJbmZvLmhhc093blByb3BlcnR5KFwidXRpZFwiKSkge1xuICAgICAgICAgIHRoaXMudXRpZCA9IGNsaWVudEluZm8udXRpZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgSWRUb2tlbiB7XG5cbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG9iamVjdElkOiBzdHJpbmc7XG4gIHN1YmplY3Q6IHN0cmluZztcbiAgdGVuYW50SWQ6IHN0cmluZztcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBwcmVmZXJyZWROYW1lOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaG9tZU9iamVjdElkOiBzdHJpbmc7XG4gIG5vbmNlOiBzdHJpbmc7XG4gIGV4cGlyYXRpb246IHN0cmluZztcbiAgcmF3SWRUb2tlbjogc3RyaW5nO1xuICBkZWNvZGVkSWRUb2tlbjogT2JqZWN0O1xuICBzaWQ6IHN0cmluZztcbiAgLyogdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgY29uc3RydWN0b3IocmF3SWRUb2tlbjogc3RyaW5nKSB7XG4gICAgaWYgKFV0aWxzLmlzRW1wdHkocmF3SWRUb2tlbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm51bGwgb3IgZW1wdHkgcmF3IGlkdG9rZW5cIik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0aGlzLnJhd0lkVG9rZW4gPSByYXdJZFRva2VuO1xuICAgICAgdGhpcy5kZWNvZGVkSWRUb2tlbiA9IFV0aWxzLmV4dHJhY3RJZFRva2VuKHJhd0lkVG9rZW4pO1xuICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4pIHtcbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJpc3NcIikpIHtcbiAgICAgICAgICB0aGlzLmlzc3VlciA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJpc3NcIl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcIm9pZFwiKSkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3RJZCA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJvaWRcIl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcInN1YlwiKSkge1xuICAgICAgICAgIHRoaXMuc3ViamVjdCA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJzdWJcIl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcInRpZFwiKSkge1xuICAgICAgICAgIHRoaXMudGVuYW50SWQgPSB0aGlzLmRlY29kZWRJZFRva2VuW1widGlkXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJ2ZXJcIikpIHtcbiAgICAgICAgICB0aGlzLnZlcnNpb24gPSB0aGlzLmRlY29kZWRJZFRva2VuW1widmVyXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJwcmVmZXJyZWRfdXNlcm5hbWVcIikpIHtcbiAgICAgICAgICB0aGlzLnByZWZlcnJlZE5hbWUgPSB0aGlzLmRlY29kZWRJZFRva2VuW1wicHJlZmVycmVkX3VzZXJuYW1lXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKSB7XG4gICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcIm5hbWVcIl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcIm5vbmNlXCIpKSB7XG4gICAgICAgICAgdGhpcy5ub25jZSA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJub25jZVwiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwiZXhwXCIpKSB7XG4gICAgICAgICAgdGhpcy5leHBpcmF0aW9uID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcImV4cFwiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwiaG9tZV9vaWRcIikpIHtcbiAgICAgICAgICAgIHRoaXMuaG9tZU9iamVjdElkID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcImhvbWVfb2lkXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcInNpZFwiKSkge1xuICAgICAgICAgICAgICB0aGlzLnNpZCA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJzaWRcIl07XG4gICAgICAgICAgfVxuICAgICAgLyogdHNsaW50OmVuYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSB0aGUgcmV0dXJuZWQgaWQgdG9rZW5cIik7XG4gICAgfVxuICB9XG5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5DYWNoZUl0ZW1cIjtcbmltcG9ydCB7IENhY2hlS2V5cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0b3JhZ2Ugey8vIFNpbmdsZXRvblxuXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTdG9yYWdlO1xuICBwcml2YXRlIGxvY2FsU3RvcmFnZVN1cHBvcnRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZVN1cHBvcnRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBjYWNoZUxvY2F0aW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY2FjaGVMb2NhdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKFN0b3JhZ2UuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBTdG9yYWdlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHRoaXMuY2FjaGVMb2NhdGlvbiA9IGNhY2hlTG9jYXRpb247XG4gICAgdGhpcy5sb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgPSB0eXBlb2Ygd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0gIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0gIT0gbnVsbDtcbiAgICB0aGlzLnNlc3Npb25TdG9yYWdlU3VwcG9ydGVkID0gdHlwZW9mIHdpbmRvd1tjYWNoZUxvY2F0aW9uXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dbY2FjaGVMb2NhdGlvbl0gIT0gbnVsbDtcbiAgICBTdG9yYWdlLmluc3RhbmNlID0gdGhpcztcbiAgICBpZiAoIXRoaXMubG9jYWxTdG9yYWdlU3VwcG9ydGVkICYmICF0aGlzLnNlc3Npb25TdG9yYWdlU3VwcG9ydGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJsb2NhbFN0b3JhZ2UgYW5kIHNlc3Npb25TdG9yYWdlIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN0b3JhZ2UuaW5zdGFuY2U7XG4gIH1cblxuICAgIC8vIGFkZCB2YWx1ZSB0byBzdG9yYWdlXG4gICAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZW5hYmxlQ29va2llU3RvcmFnZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dKSB7XG4gICAgICAgICAgICB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbmFibGVDb29raWVTdG9yYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgb25lIGl0ZW0gYnkga2V5IGZyb20gc3RvcmFnZVxuICAgIGdldEl0ZW0oa2V5OiBzdHJpbmcsIGVuYWJsZUNvb2tpZVN0b3JhZ2U/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGVuYWJsZUNvb2tpZVN0b3JhZ2UgJiYgdGhpcy5nZXRJdGVtQ29va2llKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1Db29raWUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5nZXRJdGVtKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIHZhbHVlIGZyb20gc3RvcmFnZVxuICAgIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0ucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgc3RvcmFnZSAocmVtb3ZlIGFsbCBpdGVtcyBmcm9tIGl0KVxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBpZiAod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWxsQWNjZXNzVG9rZW5zKGNsaWVudElkOiBzdHJpbmcsIHVzZXJJZGVudGlmaWVyOiBzdHJpbmcpOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4gPSBbXTtcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtOiBBY2Nlc3NUb2tlbkNhY2hlSXRlbTtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dO1xuICAgICAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nO1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gc3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5tYXRjaChjbGllbnRJZCkgJiYga2V5Lm1hdGNoKHVzZXJJZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gbmV3IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtKEpTT04ucGFyc2Uoa2V5KSwgSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChhY2Nlc3NUb2tlbkNhY2hlSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICByZW1vdmVBY3F1aXJlVG9rZW5FbnRyaWVzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XG4gICAgICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmc7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBzdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoQ29uc3RhbnRzLmF1dGhvcml0eSkgIT09IC0xIHx8IGtleS5pbmRleE9mKENvbnN0YW50cy5hY3F1aXJlVG9rZW5Vc2VyKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBzdG9yYWdlW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHZhbHVlLnNwbGl0KENvbnN0YW50cy5yZXNvdXJjZURlbGltZXRlcikuc2xpY2UoLTEpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVuZXdTdGF0dXMgPSBzdG9yYWdlW0NvbnN0YW50cy5yZW5ld1N0YXR1cyArIHN0YXRlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVuZXdTdGF0dXMgfHwgcmVuZXdTdGF0dXMgIT09IENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShrZXksIFwiXCIsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoQ29uc3RhbnRzLnJlbmV3U3RhdHVzKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3RvcmFnZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYXJDb29raWUoKTtcbiAgICB9XG5cbiAgICByZXNldENhY2hlSXRlbXMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGxldCBrZXk6IHN0cmluZztcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihDb25zdGFudHMubXNhbCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW0oa2V5LCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoQ29uc3RhbnRzLnJlbmV3U3RhdHVzKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SXRlbUNvb2tpZShjTmFtZTogc3RyaW5nLCBjVmFsdWU6IHN0cmluZywgZXhwaXJlcz86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgY29va2llU3RyID0gY05hbWUgKyBcIj1cIiArIGNWYWx1ZSArIFwiO1wiO1xuICAgICAgICBpZiAoZXhwaXJlcykge1xuICAgICAgICAgICAgY29uc3QgZXhwaXJlVGltZSA9IHRoaXMuc2V0RXhwaXJhdGlvbkNvb2tpZShleHBpcmVzKTtcbiAgICAgICAgICAgIGNvb2tpZVN0ciArPSBcImV4cGlyZXM9XCIgKyBleHBpcmVUaW1lICsgXCI7XCI7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHI7XG4gICAgfVxuXG4gICAgZ2V0SXRlbUNvb2tpZShjTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNOYW1lICsgXCI9XCI7XG4gICAgICAgIGNvbnN0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGMgPSBjYVtpXTtcbiAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgc2V0RXhwaXJhdGlvbkNvb2tpZShjb29raWVMaWZlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGV4cHIgPSBuZXcgRGF0ZSh0b2RheS5nZXRUaW1lKCkgKyBjb29raWVMaWZlICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIHJldHVybiBleHByLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY2xlYXJDb29raWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMubm9uY2VJZFRva2VuLCBcIlwiLCAtMSk7XG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMuc3RhdGVMb2dpbiwgXCJcIiwgLTEpO1xuICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoQ29uc3RhbnRzLmxvZ2luUmVxdWVzdCwgXCJcIiwgLTEpO1xuICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuLCBcIlwiLCAtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFjcXVpcmVUb2tlblVzZXJLZXkgdG8gY2FjaGUgdXNlciBvYmplY3RcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2VuZXJhdGVBY3F1aXJlVG9rZW5Vc2VyS2V5KHVzZXJJZDogYW55LCBzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIENhY2hlS2V5cy5BQ1FVSVJFX1RPS0VOX1VTRVIgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWV0ZXIgK1xuICAgICAgICAgICAgYCR7dXNlcklkfWAgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWV0ZXIgICsgYCR7c3RhdGV9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXV0aG9yaXR5S2V5IHRvIGNhY2hlIGF1dGhvcml0eVxuICAgICAqL1xuICAgIHN0YXRpYyBnZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIENhY2hlS2V5cy5BVVRIT1JJVFkgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWV0ZXIgKyBgJHtzdGF0ZX1gO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbktleSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuS2V5XCI7XG5pbXBvcnQgeyBBY2Nlc3NUb2tlblZhbHVlIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5WYWx1ZVwiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIHtcblxuICBrZXk6IEFjY2Vzc1Rva2VuS2V5O1xuICB2YWx1ZTogQWNjZXNzVG9rZW5WYWx1ZTtcblxuICBjb25zdHJ1Y3RvcihrZXk6IEFjY2Vzc1Rva2VuS2V5LCB2YWx1ZTogQWNjZXNzVG9rZW5WYWx1ZSkge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgeyBBYWRBdXRob3JpdHkgfSBmcm9tIFwiLi9BYWRBdXRob3JpdHlcIjtcbmltcG9ydCB7IEIyY0F1dGhvcml0eSB9IGZyb20gXCIuL0IyY0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgQXV0aG9yaXR5LCBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eUZhY3Rvcnkge1xuICAgIC8qKlxuICAgICogUGFyc2UgdGhlIHVybCBhbmQgZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGF1dGhvcml0eVxuICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgRGV0ZWN0QXV0aG9yaXR5RnJvbVVybChhdXRob3JpdHlVcmw6IHN0cmluZyk6IEF1dGhvcml0eVR5cGUge1xuICAgICAgICBhdXRob3JpdHlVcmwgPSBVdGlscy5DYW5vbmljYWxpemVVcmkoYXV0aG9yaXR5VXJsKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFV0aWxzLkdldFVybENvbXBvbmVudHMoYXV0aG9yaXR5VXJsKTtcbiAgICAgICAgY29uc3QgcGF0aFNlZ21lbnRzID0gY29tcG9uZW50cy5QYXRoU2VnbWVudHM7XG4gICAgICAgIHN3aXRjaCAocGF0aFNlZ21lbnRzWzBdKSB7XG4gICAgICAgICAgICBjYXNlIFwidGZwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQjJDO1xuICAgICAgICAgICAgY2FzZSBcImFkZnNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5BZGZzO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5BYWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZSBhbiBhdXRob3JpdHkgb2JqZWN0IG9mIHRoZSBjb3JyZWN0IHR5cGUgYmFzZWQgb24gdGhlIHVybFxuICAgICogUGVyZm9ybXMgYmFzaWMgYXV0aG9yaXR5IHZhbGlkYXRpb24gLSBjaGVja3MgdG8gc2VlIGlmIHRoZSBhdXRob3JpdHkgaXMgb2YgYSB2YWxpZCB0eXBlIChlZyBhYWQsIGIyYylcbiAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlSW5zdGFuY2UoYXV0aG9yaXR5VXJsOiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKTogQXV0aG9yaXR5IHtcbiAgICAgICAgaWYgKFV0aWxzLmlzRW1wdHkoYXV0aG9yaXR5VXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHlwZSA9IEF1dGhvcml0eUZhY3RvcnkuRGV0ZWN0QXV0aG9yaXR5RnJvbVVybChhdXRob3JpdHlVcmwpO1xuICAgICAgICAvLyBEZXBlbmRpbmcgb24gYWJvdmUgZGV0ZWN0aW9uLCBjcmVhdGUgdGhlIHJpZ2h0IHR5cGUuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBdXRob3JpdHlUeXBlLkIyQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEIyY0F1dGhvcml0eShhdXRob3JpdHlVcmwsIHZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICAgICAgICAgIGNhc2UgQXV0aG9yaXR5VHlwZS5BYWQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBYWRBdXRob3JpdHkoYXV0aG9yaXR5VXJsLCB2YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yTWVzc2FnZS5pbnZhbGlkQXV0aG9yaXR5VHlwZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IEFhZEF1dGhvcml0eSB9IGZyb20gXCIuL0FhZEF1dGhvcml0eVwiO1xuaW1wb3J0IHsgQXV0aG9yaXR5LCBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBCMmNBdXRob3JpdHkgZXh0ZW5kcyBBYWRBdXRob3JpdHkge1xuICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XG4gICAgc3VwZXIoYXV0aG9yaXR5LCB2YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgY29uc3QgdXJsQ29tcG9uZW50cyA9IFV0aWxzLkdldFVybENvbXBvbmVudHMoYXV0aG9yaXR5KTtcblxuICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzO1xuICAgIGlmIChwYXRoU2VnbWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICB0aHJvdyBFcnJvck1lc3NhZ2UuYjJjQXV0aG9yaXR5VXJpSW52YWxpZFBhdGg7XG4gICAgfVxuXG4gICAgdGhpcy5DYW5vbmljYWxBdXRob3JpdHkgPSBgaHR0cHM6Ly8ke3VybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0fS8ke3BhdGhTZWdtZW50c1swXX0vJHtwYXRoU2VnbWVudHNbMV19LyR7cGF0aFNlZ21lbnRzWzJdfS9gO1xuICB9XG5cbiAgcHVibGljIGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGUge1xuICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkIyQztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBUZW5hbnREaXNjb3ZlcnlFbmRwb2ludFxuICAgKi9cbiAgcHVibGljIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgcmVzdWx0UHJvbWlzZSA9IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgIHJlc29sdmUodGhpcy5EZWZhdWx0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50KSk7XG5cbiAgICBpZiAoIXRoaXMuSXNWYWxpZGF0aW9uRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuSXNJblRydXN0ZWRIb3N0TGlzdCh0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgIHJlamVjdChFcnJvck1lc3NhZ2UudW5zdXBwb3J0ZWRBdXRob3JpdHlWYWxpZGF0aW9uKSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=