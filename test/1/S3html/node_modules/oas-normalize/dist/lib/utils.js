"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getType = exports.stringToJSON = exports.isBuffer = exports.version = void 0;
var js_yaml_1 = __importDefault(require("js-yaml"));
/**
 * Retrieve the Swagger or OpenAPI version that a given Swagger or OpenAPI definition are targeting.
 *
 */
function version(schema) {
    return schema.swagger || schema.openapi;
}
exports.version = version;
/**
 * Determine if a given variable is a `Buffer`.
 *
 */
function isBuffer(obj) {
    return (obj != null &&
        obj.constructor != null &&
        typeof obj.constructor.isBuffer === 'function' &&
        obj.constructor.isBuffer(obj));
}
exports.isBuffer = isBuffer;
/**
 * Convert a YAML blob or stringified JSON object into a JSON object.
 *
 */
function stringToJSON(string) {
    if (typeof string === 'object') {
        return string;
    }
    else if (string.match(/^\s*{/)) {
        return JSON.parse(string);
    }
    return js_yaml_1["default"].load(string);
}
exports.stringToJSON = stringToJSON;
/**
 * Determine the type of a given variable. Returns `false` if unrecognized.
 *
 */
function getType(obj) {
    if (isBuffer(obj)) {
        return 'buffer';
    }
    else if (typeof obj === 'object') {
        return 'json';
    }
    else if (typeof obj === 'string') {
        if (obj.match(/\s*{/)) {
            return 'string-json';
        }
        else if (obj.match(/\n/)) {
            // Not sure about this...
            return 'string-yaml';
        }
        else if (obj.substring(0, 4) === 'http') {
            return 'url';
        }
        return 'path';
    }
    return false;
}
exports.getType = getType;
